using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Server.Dto;
using Server.Entities;
using Server.Interfaces;
using Server.Specifications;

namespace Server.Controllers
{
    public class PrisonerController : BaseController
    {
        private readonly IGenericRepository<Prisoner> _prisonerRepo;
        private readonly IGenericRepository<Block> _prisonerBlockRepo;
        private readonly IMapper _mapper;
        public PrisonerController(IGenericRepository<Prisoner> prisonerRepo, IGenericRepository<Block> prisonerBlockRepo, IMapper mapper)
        {
            _mapper = mapper;
            _prisonerBlockRepo = prisonerBlockRepo;
            _prisonerRepo = prisonerRepo;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<PrisonerToReturnDto>>> GetPrisonersAsync()
        {
            var spec = new PrisonersWithBlocks();

            var prisoners = await _prisonerRepo.ListAsync(spec);

            return Ok(_mapper.Map<IReadOnlyList<PrisonerToReturnDto>>(prisoners));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PrisonerToReturnDto>> GetPrisonerAsync(int id)
        {
            var spec = new PrisonersWithBlocks(id);

            var prisoner = await _prisonerRepo.GetEntityWithSpec(spec);

            return _mapper.Map<PrisonerToReturnDto>(prisoner);
        }

        [HttpGet("cell")]
        public async Task<ActionResult<IReadOnlyList<Block>>> GetCellAsync()
        {
            return Ok(await _prisonerBlockRepo.ListAllAsync());
        }
    }
}