using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Server.Dto;
using Server.Entities;
using Server.Interfaces;

namespace Server.Controllers
{
    public class AdminControler : BaseController
    {
        private readonly IPrisonUnitOfWork _prisonUnitOfWork;
        private readonly IMapper _mapper;
        public AdminControler(IPrisonUnitOfWork prisonUnitOfWork, IMapper mapper)
        {
            _mapper = mapper;
            _prisonUnitOfWork = prisonUnitOfWork;
        }

        [HttpPost("create-cell")]
        public async Task<ActionResult<BlockDto>> CreateCellAsync(BlockCreateDto blockCreateDto)
        {
            var cell = _mapper.Map<BlockCreateDto, Block>(blockCreateDto);

            _prisonUnitOfWork.Repository<Block>().Add(cell);

            var result = await _prisonUnitOfWork.complete();

            if (result <= 0) return BadRequest("Problem adding new prison cell");

            return Ok(cell);
        }

        [HttpPut("update-cell/{id}")]
        public async Task<ActionResult<BlockDto>> UpdateCellAsync(int id, BlockCreateDto blockUpdateDto)
        {
            var updateCell = await _prisonUnitOfWork.Repository<Block>().GetByIdAsync(id);

            _mapper.Map(blockUpdateDto, updateCell);

            _prisonUnitOfWork.Repository<Block>().Update(updateCell);

            var result = await _prisonUnitOfWork.complete();

            if (result <= 0) return BadRequest("Problem updating cell!!");

            return Ok(updateCell);
        }

        [HttpDelete("delete-cell/{id}")]
        public async Task<ActionResult> DeleteCellAsync(int id)
        {
            var deleteCell = await _prisonUnitOfWork.Repository<Block>().GetByIdAsync(id);

            _prisonUnitOfWork.Repository<Block>().Delete(deleteCell);

            var result = await _prisonUnitOfWork.complete();

            if (result <= 0) return BadRequest("Problem deleting cell");

            return Ok();
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
            PrisonerCreateDto prisonerUpdateDto)
        {
            var updatePrisoner = await _prisonUnitOfWork.Repository<Prisoner>().GetByIdAsync(id);
            _mapper.Map(prisonerUpdateDto, updatePrisoner);

            _prisonUnitOfWork.Repository<Prisoner>().Update(updatePrisoner);

            var result = await _prisonUnitOfWork.complete();

            if (result <= 0) return BadRequest("Problem updating prisoner");

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
    }
}