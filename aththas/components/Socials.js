//links
import Link from "next/link";

//icons
import {RiInstagramLine, RiFacebookCircleFill, RiGithubFill, RiLinkedinFill} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg mt-[-30px] lg:mt-0">
      <Link href={'https://www.instagram.com/assasin_1.0/'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine/>
      </Link>
      <Link href={'https://www.facebook.com/Aththas.Rizwan'} className="hover:text-accent transition-all duration-300">
        <RiFacebookCircleFill/>
      </Link>
      <Link href={'https://github.com/Aththas'} className="hover:text-accent transition-all duration-300">
        <RiGithubFill/>
      </Link>
      <Link href={'https://www.linkedin.com/in/aththas-rizwan-86593a25b/'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinFill/>
      </Link>
      <Link href={'https://drive.google.com/file/d/17VYalgDC8sVfYlpYJnS9evE0MD2SD9_u/view?usp=sharing'} className="hover:text-accent transition-all duration-300">
        cv
      </Link>
      
    </div>
  );
};

export default Socials;
