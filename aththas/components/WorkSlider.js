// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/my-portofolio/project 1.png',
          link: 'https://github.com/Aththas/mob-iam.git'
        },
        {
          title: 'title',
          path: '/my-portofolio/project 2.png',
          link: 'https://github.com/Aththas/dataManagementSystemFrontend.git'
        },
        {
          title: 'title',
          path: '/my-portofolio/project 7.png',
          link: 'https://github.com/Aththas/tour.git'
        },
        {
          title: 'title',
          path: '/my-portofolio/project 6.png',
          link: 'https://github.com/Aththas/MEI-WebApp-admin.git'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/my-portofolio/project 5.png',
          link: 'https://github.com/Aththas/accommodation-management-backend.git'
        },
        {
          title: 'title',
          path: '/my-portofolio/project 4.png',
          link: 'https://github.com/Aththas/D30-online-clothing-store.git'
        },
        {
          title: 'title',
          path: '/my-portofolio/project 8.png',
          link: 'https://github.com/Aththas/Alimenta-coffee-shop.git'
        },
        {
          title: 'title',
          path: '/my-portofolio/project 3.png',
          link: 'https://github.com/Aththas/icst.git'
        },
      ],
    },
  ],
};

//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import required modules
import {Pagination} from 'swiper';

//next image
import Image from 'next/image';

import { BsArrowRight} from 'react-icons/bs';

const WorkSlider = () => {
  return (
    <Swiper 
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => {
        return(
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* image */}
                      
                      <Image 
                        src={image.path}
                        width={500}
                        height={300}
                        alt=''
                      />
                      {/* overlay gradient */}
                      <div 
                      className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#DC143C] opacity-0
                      group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div 
                        className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                        transition-all duration-300'
                      ><a href={image.link} target="_blank">
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part 1 */}
                          <div className='delay-100'>SOURCE</div>
                          {/* title part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            CODE
                          </div>
                          {/* icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight/>
                          </div>
                        </div>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;

