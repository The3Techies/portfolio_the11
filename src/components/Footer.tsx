import camp from "../assets/FooterImgs/camp.webp";
import fire from "../assets/FooterImgs/fire.webp";

function Footer() {
  return (
    <div className="w-screen bg-[#1a1a18]  font-sans pb-2 ">
  
      <div className="flex flex-col items-center ">
        <img className="md:-mt-48 z-0 " src={camp} alt="" />
        <img
          className="block md:mt-[-10.5rem] -mt-32 inset-0 mix-blend-color-dodge w-auto md:h-40 h-36 "
          src={fire}
          alt=""
        />
      </div>
    </div>
  );
}

export default Footer;
