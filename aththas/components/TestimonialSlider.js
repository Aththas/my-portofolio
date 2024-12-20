// testimonial data
const testimonialData = [
  {
    image: '/my-portofolio/t-avt-3.png',
    name: 'Shaheed Musthalie',
    position: 'Head - IT Infrastructure Planning & BCP at Mobitel',
    message:
      'Your performance as a Software Engineer has been exceptional, showcasing strong technical skills and a proactive approach to problem-solving',
  },
  {
    image: '/my-portofolio/t-avt-2.png',
    name: 'Deelaka Gamage',
    position: 'Information Security Engineer at Mobitel',
    message:
      'Your performance as a Software Engineer has been exceptional, showcasing strong technical skills and a proactive approach to problem-solving',
  },
  {
    image: '/my-portofolio/t-avt-3.png',
    name: 'Udara Manathungha',
    position: 'Senior Software Engineer at Mobitel',
    message:
      'Your performance as a Software Engineer has been exceptional, showcasing strong technical skills and a proactive approach to problem-solving',
  },
];

//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//import required modules
import {Navigation, Pagination} from 'swiper';

//next image
import Image from 'next/image';

import {FaQuoteLeft} from 'react-icons/fa';

const TestimonialSlider = () => {
  return (
    <Swiper 
      navigation={true}
      pagination={{
        clickable: true
      }}
      modules={[Navigation, Pagination]}
      className='h-[500px]'
    >
      {testimonialData.map((person, index) => {
        return(
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* img, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* img */}
                  <div className='mb-2 mx-auto'>
                    <Image 
                      src={person.image}
                      width={100}
                      height={100}
                      alt=''
                    />
                  </div>
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
                </div>
              </div>
              {/* msg and quote icon */}
              <div 
                className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute
                xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'
              >
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
                </div>
                {/* msg */}
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;