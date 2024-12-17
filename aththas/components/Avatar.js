//next Image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image src={'/avatar.png'} width={737} height={678} alt=""
        className="translate-z-0 h-full ml-80 mt-20"
      />
    </div>
  );
};

export default Avatar;
