using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Server.Dto;
using Server.Entities;
using Server.Interfaces;
using Server.Specifications;

namespace Server.Controllers
{
    public class PrisonerController : BaseController
    {
        private readonly IMapper _mapper;
        private readonly IPrisonUnitOfWork _prisonUnitOfWork;
        private readonly IPhotoService _photoService;
        public PrisonerController(IPrisonUnitOfWork prisonUnitOfWork, IMapper mapper, IPhotoService photoService)
        {
            _photoService = photoService;
            _prisonUnitOfWork = prisonUnitOfWork;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<PrisonerToReturnDto>>> GetPrisonersAsync()
        {
            var spec = new PrisonersWithBlocks();

            var prisoners = await _prisonUnitOfWork.Repository<Prisoner>().ListAsync(spec);

            return Ok(_mapper.Map<IReadOnlyList<PrisonerToReturnDto>>(prisoners));
        }

        [HttpGet("{inmateid}", Name = "GetPrisonerAsync")]
        public async Task<ActionResult<PrisonerToReturnDto>> GetPrisonerAsync(string inmateid)
        {
            var spec = new PrisonersWithBlocks(inmateid);

            var prisoner = await _prisonUnitOfWork.Repository<Prisoner>().GetEntityWithSpec(spec);

            return _mapper.Map<PrisonerToReturnDto>(prisoner);
        }

        [HttpGet("cell")]
        public async Task<ActionResult<IReadOnlyList<BlockDto>>> GetCellAsync()
        {
            return Ok(await _prisonUnitOfWork.Repository<Block>().ListAllAsync());
        }

        [HttpPost("add-prisoner")]
        public async Task<ActionResult<PrisonerToReturnDto>> CreatePrisonerAsync(
            PrisonerCreateDto prisonerCreateDto)
        {
            var prisoner = _mapper.Map<PrisonerCreateDto, Prisoner>(prisonerCreateDto);

            _prisonUnitOfWork.Repository<Prisoner>().Add(prisoner);

            var result = await _prisonUnitOfWork.complete();

            if (result <= 0) return BadRequest("Problem adding new prisoner");

            return Ok(prisoner);
        }

        [HttpPut("update-prisoner/{id}")]
        public async Task<ActionResult<PrisonerToReturnDto>> UpdatePrisonerAsync(int id,
            PrisonerUpdateDto prisonerUpdateDto)
        {
            var updatePrisoner = await _prisonUnitOfWork.Repository<Prisoner>().GetByIdAsync(id);
            _mapper.Map(prisonerUpdateDto, updatePrisoner);

            _prisonUnitOfWork.Repository<Prisoner>().Update(updatePrisoner);

            var result = await _prisonUnitOfWork.complete();

            if (result <= 0) return BadRequest("Failed to update prisoner data");

            return Ok(updatePrisoner);
        }

        [HttpDelete("delete-prisoner/{id}")]
        public async Task<ActionResult> DeletePrisonerAsync(int id)
        {
            var deletePrisoner = await _prisonUnitOfWork.Repository<Prisoner>().GetByIdAsync(id);

            _prisonUnitOfWork.Repository<Prisoner>().Delete(deletePrisoner);

            var result = await _prisonUnitOfWork.complete();

            if (result <= 0) return BadRequest("Problem deleting prisoner");

            return Ok();
        }

        [HttpPost("add-photo/{inmateId}")]
        public async Task<ActionResult<PhotoDto>> UploadPrisonerPhoto(string inmateId, IFormFile file)
        {
            var spec = new PrisonersWithBlocks(inmateId);
            var prisoner = await _prisonUnitOfWork.Repository<Prisoner>().GetEntityWithSpec(spec);

            var result = await _photoService.AddPhotoAsync(file);

            if (result.Error != null) return BadRequest(result.Error.Message);

            var photo = new PrisonPhoto
            {
                Url = result.SecureUrl.AbsoluteUri,
                PublicId = result.PublicId
            };

            if (prisoner.PrisonPhotos.Count > 0)
            {
                photo.IsMain = false;
            }

            prisoner.PrisonPhotos.Add(photo);
            // _prisonUnitOfWork.Repository<Prisoner>().Add(prisoner);

            var complete = await _prisonUnitOfWork.complete();

            if (complete <= 0) return BadRequest("Problem Adding photo");

            return CreatedAtRoute("GetPrisonerAsync",
                new { inmateId = prisoner.InmateId }, _mapper.Map<PhotoDto>(photo));
        }

        [HttpPut("{id}/set-main-photo/{photoId}")]
        public async Task<ActionResult> SetMainPhoto(int id, int photoId)
        {
            var spec = new PrisonersWithBlocks(id);
            var prisoner = await _prisonUnitOfWork.Repository<Prisoner>().GetEntityWithSpec(spec);

            if (prisoner.PrisonPhotos.All(x => x.Id != photoId)) return NotFound();

            var photo = prisoner.PrisonPhotos.FirstOrDefault(x => x.Id == photoId)!;

            if (photo.IsMain) return BadRequest("This is already your main photo");

            var currentMain = prisoner.PrisonPhotos.FirstOrDefault(x => x.IsMain);
            if (currentMain != null) currentMain.IsMain = false;
            photo.IsMain = true;
            
            _prisonUnitOfWork.Repository<Prisoner>().Update(prisoner);

            var result = await _prisonUnitOfWork.complete();

            if (result <= 0) return BadRequest("Failed to set main photo");

            return Ok();
        }

        [HttpDelete("{id}/delete-photo/{photoId}")]
        public async Task<ActionResult> DeletePhoto(int id, int photoId)
        {
            var spec = new PrisonersWithBlocks(id);
            var prisoner = await _prisonUnitOfWork.Repository<Prisoner>().GetEntityWithSpec(spec);

            var photo = prisoner.PrisonPhotos.FirstOrDefault(x => x.Id == photoId);

            if (photo == null) return BadRequest("Photo does not exist");

            if (photo.IsMain) return BadRequest("You can not delete your main photo");

            if (photo.PublicId != null)
            {
                var resultPub = await _photoService.DeletePhotoAsync(photo.PublicId);
                if (resultPub.Error != null) return BadRequest(resultPub.Error.Message);
            }

            prisoner.PrisonPhotos.Remove(photo);

            _prisonUnitOfWork.Repository<Prisoner>().Update(prisoner);
            
            var result = await _prisonUnitOfWork.complete();
            
            if (result <= 0) return BadRequest("Problem adding prisoner photo");

            return Ok();
        }
    }
}
