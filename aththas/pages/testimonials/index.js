//components
import TestimonialSlider from "../../components/TestimonialSlider";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <motion.h2 
          className="h2 text-xl md:text-2xl lg:text-4xl mb-6 xl:mb-0 lg:mt-10"
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          Supervisor Feedbacks<span className="text-accent">.</span>
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          <TestimonialSlider/>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
