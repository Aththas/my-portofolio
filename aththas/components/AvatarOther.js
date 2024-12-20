//next Image
import Image from "next/image";

const AvatarOther = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image src={'/my-portofolio/avatar.png'} width={737} height={678} alt=""
        className="translate-z-0 ml-0 -mb-30"
      />
    </div>
  );
};

export default AvatarOther;
