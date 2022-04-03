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
        private readonly IMapper _mapper;
        private readonly IPrisonUnitOfWork _prisonUnitOfWork;
        public PrisonerController(IPrisonUnitOfWork prisonUnitOfWork, IMapper mapper)
        {
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

        [HttpGet("{inmateid}")]
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
    }
}