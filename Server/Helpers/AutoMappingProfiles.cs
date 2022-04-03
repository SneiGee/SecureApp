using AutoMapper;
using Server.Dto;
using Server.Entities;
using Server.Entities.Identity;
using Server.Extensions;

namespace Server.Helpers
{
    public class AutoMappingProfiles : Profile
    {
        public AutoMappingProfiles()
        {
            CreateMap<AppUser, MemberDto>()
                .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src => 
                    src.Photos.FirstOrDefault(x => x.IsMain)!.Url))
                .ForMember(a => a.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));
            CreateMap<Photo, PhotoDto>();
            CreateMap<MemberUpdateDto, AppUser>();
            CreateMap<RegisterDto, AppUser>();
            CreateMap<Prisoner, PrisonerToReturnDto>()
                .ForMember(dest => dest.PictureUrl, opt => opt.MapFrom(src => 
                    src.PrisonPhotos.FirstOrDefault(x => x.IsMain)!.Url))
                .ForMember(dest => dest.Block, opt => opt.MapFrom(s => s.Block.Name))
                .ForMember(a => a.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));
            CreateMap<PrisonPhoto, PhotoDto>();
            CreateMap<BlockCreateDto, Block>();
            CreateMap<PrisonerCreateDto, Prisoner>();
        }
    }
}