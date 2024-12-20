//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxGlobe,
  RxMobile,
  RxDesktop,
  RxDrawingPin,
  RxLockClosed,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxGlobe />,
    title: 'Web Development',
    description: 'Building responsive, dynamic websites with modern web technologies.',
  },
  {
    icon: <RxMobile />,
    title: 'Mobile Development',
    description: 'Creating seamless mobile applications for iOS and Android platforms.',
  },
  {
    icon: <RxDesktop />,
    title: 'Desktop App',
    description: 'Developing robust desktop applications for various operating systems.',
  },
  {
    icon: <RxDrawingPin />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and visually appealing user interfaces and experiences.',
  },
  {
    icon: <RxLockClosed />,
    title: 'Cyber Security Tools',
    description: 'Implementing security measures to protect against digital threats and attacks.',
  },

];

//import required modules
import {FreeMode, Pagination} from 'swiper';

const ServiceSlider = () => {
  return (
    <Swiper 
      breakpoints={{
        320:{
          slidesPerView: 1,
          spaceBetween: 15
        },
        640:{
          slidesPerView: 3,
          spaceBetween: 15
        }
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return(
          <SwiperSlide key={index}>
            <div className='flex bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer
            hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icons */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
