//links
import Link from "next/link";

//icons
import {RiInstagramLine, RiFacebookCircleFill, RiGithubFill, RiLinkedinFill} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg mt-[-30px] sm:mt-0">
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine/>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiFacebookCircleFill/>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiGithubFill/>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiLinkedinFill/>
      </Link>
    </div>
  );
};

export default Socials;
