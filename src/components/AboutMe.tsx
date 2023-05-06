import portafolioImg from "../assets/HeroImg/portafolio_entrada.svg";
import { BsTelephonePlus } from "react-icons/bs";
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

function AboutMe() {
  const aboutMe = [
    "Design is not just about making something look good. It's a powerful tool of communication and is a major in Huence to the success of any projecl it helps to deliver high-quality products and services which lead to better user experience and in turn, happier customers.",
    "I have more than 10 years of extensive experience in print , social media , packaging designs and multimedia. I am highly skilled in Adobe software as well as other tools and design technologies.",
    "I benefited from my field in the engineering departments (Civil and Information Technology) in the administrative and organizational aspects. This is more than just ajob for me ; it's my craft it's my passion. I take greatjoy in what I do.",
    "I love to solve problems, make improvement and create designs that are intuitive, simple to use and deliver unforgettable customer experiences. I've always believed that this is key to every successful business.",
    "I work on each project until the client is 100% satisfied and aim to try craft something which goes beyond the client's expections.",
  ];

  const aboutMeHtml: Array<JSX.Element> = aboutMe.map((par, i) => {
    return (
      <p key={i} className="mb-4">
        {par}
      </p>
    );
  });

  return (
    <div className="w-screen bg-[#1a1918] flex flex-col items-center pt-10 font-sans">
      <div className="grid grid-cols-[50vw_50vw]">
        <img
          className="select-none col-start-1 col-span-3 justify-self-center"
          alt="portafolioImg"
          width="100"
          height="180"
          src={portafolioImg}
        ></img>

        <div className="w-[2px] h-[20vh] bg-[#a34f29] my-5 col-start-2 "></div>

        <h2 className="text-[#393735] text-xl col-start-2 ">
          Senior Graphic Designe:
        </h2>
        <h2 className="text-[#A34F29] text-xl col-start-1 text-right ">
          My name:
        </h2>
        <h2 className="text-[#FFFFFF] text-3xl font-bold col-start-2 row-start-5 ">
          DheYazan Al-Shaibani
        </h2>
      </div>

      <div className="grid grid-cols-[45vw_5vw_45vw]">
        <img
          className="w-[20vh] h-[20vh] select-none col-span-3 justify-self-center mt-16 border-4 first-letter:border-[#FFFFFF] rounded-full"
          alt="portafolioImg"
          src={portafolioImg}
        ></img>

        <div className="w-[2px] h-[10vh] bg-[#a34f29] my-5 col-start-2 justify-self-center"></div>
        <div className="w-[34px] h-[34px] bg-[#a34f29] col-start-2 m-auto rounded-full "></div>
        <div className="bg-[#a34f29] w-fit h-fit py-1 px-3 text-[#FFFFFF]">
          <h3 className="text-3xl">About me</h3>
        </div>

        <div className="col-start-1 justify-self-end my-5 text-right">
          <div>
            <h1 className="text-xl font-bold text-[#393735] mr-2">
              Contact Me
            </h1>

            <div
              className="flex flex-row-reverse mt-4 text-[#ffffff] hover:text-[#99d98c] hover:mr-4 cursor-pointer"
              onClick={() => {
                window.open(
                  "https://wa.me/009660535340810",
                  "_blank"
                );
              }}
            >
              <BsTelephonePlus className="w-[30px] h-[30px] ml-2" />
              <AiOutlineWhatsApp className="w-[30px] h-[30px] ml-2 " />
              <p>00 966 053 53 40 810</p>
            </div>

            <div className="flex flex-row-reverse mt-4 text-[#ffffff] hover:text-[#99d98c] hover:mr-4 ">
              <AiOutlineMail className="w-[60px] h-[60px] ml-4" />
              <div className="text-right">
                <p>Dheyazena@gmail.com</p>
                <p>Dheyazen@hotmail.com</p>
              </div>
            </div>

            <h1 className="text-xl font-bold text-[#393735] mr-2 mt-4">
              Social Media
            </h1>

            <div
              className="flex flex-row-reverse mt-4 text-[#ffffff] hover:text-[#99d98c] hover:mr-4 cursor-pointer "
              onClick={() => {
                window.open(
                  "https://www.facebook.com/Dheyazen?mibextid=ZbWKwL",
                  "_blank"
                );
              }}
            >
              <AiOutlineFacebook className="w-[30px] h-[30px] ml-2" />
              <div className="text-right">
                <p>Facebook</p>
              </div>
            </div>

            <div
              className="flex flex-row-reverse mt-4 text-[#ffffff] hover:text-[#99d98c] hover:mr-4 cursor-pointer "
              onClick={() => {
                window.open(
                  "https://www.facebook.com/Dheyazen?mibextid=ZbWKwL",
                  "_blank"
                );
              }}
            >
              <AiOutlineInstagram className="w-[30px] h-[30px] ml-2" />
              <div className="text-right">
                <p>Instagram</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[2px] min-h-[50vh] bg-[#393735] my-5 col-start-2  justify-self-center"></div>
        <div className="col-start-3 self-center text-[#FFFFFF]">
          {aboutMeHtml}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
