using System.Linq;
using API.DTO;
using API.ExtensionsExtensions;
using API.Users;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<AppUser, MemberDto>()
                .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src =>
                    src.Photos.FirstOrDefault(x => x.IsMain).Url))
                .ForMember(dest => dest.Age, opt => opt.MapFrom(src =>
                    src.DateOfBirth.AgeCalculation()));
            CreateMap<Picture, PictureDto>();
            CreateMap<MemberUpdateDto, AppUser>();
        }
    }
}