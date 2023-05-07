import Pdf from "../assets/documents/resume.pdf";

import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobexd,
  SiAdobelightroom,
  SiAdobepremierepro,
  SiAdobeaftereffects,
} from "react-icons/si";

import { RiFileExcel2Fill, RiFileWord2Fill } from "react-icons/ri";
import { FaFilePowerpoint } from "react-icons/fa";
import { SiPowerbi } from "react-icons/si";

function MySkills() {
  const Academic = [
    {
      title: "Bachelor of Civil Engineering - Department of Surveying.",
      location:
        "King Saud University, Riyadh, Kingdom of Saudi Arabia. 2015/2021.",
    },
    {
      title:
        "Degree of Bachelor in the specialization of information technology ( IT ).",
      location: "University of Science & Technology, Yemen/Sanaa 2010/2014.",
    },
    {
      title: "Computer leadership diploma.",
      location:
        "New Site Institute for Training and Rehabilitation, Yemen/Sanaa 2013.",
    },
    {
      title: "Elates in English.",
      location: "Riyadh, Kingdom of Saudi Arabia.2016.",
    },
  ];

  const AcademicHtml: Array<JSX.Element> = Academic.map(
    ({ title, location }, i) => {
      return (
        <div key={i} className="mt-4">
          <h1 className="text-[#FFFFFF]">{title}</h1>
          <p className="text-[#a34f29] text-sm">{location}</p>
        </div>
      );
    }
  );

  const Courses = [
    {
      title: "UI/UX for Web and application design course.",
      location: "Paid course ( udemy ) , 2022.",
    },
    {
      title:
        "Creative Design and dealing with colors using Adobe Programs.",
      location: "King Saud University, Riyadh, Kingdom of Saudi Arabia. 2017 .",
    },
    {
      title: "Engineering & Structural Design Course ( AutoCAD ).",
      location: "King Saud University, Riyadh, Kingdom of Saudi Arabia. 2017.",
    },
  ];

  const CoursesHtml: Array<JSX.Element> = Courses.map(
    ({ title, location }, i) => {
      return (
        <div key={i} className="mt-4">
          <h1 className="text-[#FFFFFF]">{title}</h1>
          <p className="text-[#a34f29] text-sm">{location}</p>
        </div>
      );
    }
  );

  const Programs2DDeisgns = [
    {
      logo: (
        <SiAdobephotoshop className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] text-[#ffffff] " />
      ),
      name: "Photoshop",
      progressValue: 95,
      w: "w-[95%]"
    },
    {
      logo: (
        <SiAdobeillustrator className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] text-[#ffffff] " />
      ),
      name: "Illustrator",
      progressValue: 95, 
      w: "w-[95%]"
    },
    {
      logo: (
        <SiAdobeindesign className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] text-[#ffffff] " />
      ),
      name: "InDesig",
      progressValue: 98,
      w: "w-[98%]"
    },
    {
      logo: (
        <SiAdobexd className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] text-[#ffffff] " />
      ),
      name: "Xd",
      progressValue: 99,
      w: "w-[99%]"
    },
    {
      logo: (
        <SiAdobepremierepro className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] text-[#ffffff] " />
      ),
      name: "Premiere",
      progressValue: 60,
      w: "w-[60%]"
    },
    {
      logo: (
        <SiAdobelightroom className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] text-[#ffffff] " />
      ),
      name: "Lightroom",
      progressValue: 90,
      w: "w-[90%]"
    },
    {
      logo: (
        <SiAdobeaftereffects className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] text-[#ffffff] " />
      ),
      name: "After Effect",
      progressValue: 40,
      w: "w-[40%]"
    },
  ];

  const Programs2DDeisgnssHtml: Array<JSX.Element> = Programs2DDeisgns.map(
    ({ logo, name, progressValue ,w }, i) => {
      return (
        <div key={i} className="mt-4 flex flex-row-reverse text-right mb-6">
          <div>{logo}</div>
          <div className="mr-2">
            <p className="text-[#ffffff] md:text-lg text-xs mt-[-6px]">
              Adobe {name}
            </p>
            <div className="md:flex  ">
              <div className="md:w-36 w-24 bg-gray-200 rounded-full h-1.5  dark:bg-gray-700 mt-1.5">
                <div
                  className={
                    "h-1.5 rounded-full bg-blue-600 " + w
                  }
                ></div>
              </div>
              <p className="text-[#ffffff] text-xs ml-2 ">{progressValue}%</p>
            </div>
          </div>
        </div>
      );
    }
  );

  const ProgramsOfficeSoftware = [
    {
      logo: (
        <RiFileExcel2Fill className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] text-[#ffffff] " />
      ),
      name: "Excel",
      progressValue: 95,
      w: "w-[95%]"
    },
    {
      logo: (
        <RiFileWord2Fill className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] text-[#ffffff] " />
      ),
      name: "Word",
      progressValue: 95,
      w: "w-[95%]"
    },
    {
      logo: (
        <FaFilePowerpoint className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] text-[#ffffff] " />
      ),
      name: "PowerPoint",
      progressValue: 98,
    },
    {
      logo: (
        <SiPowerbi className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] text-[#ffffff] " />
      ),
      name: "Power BI",
      progressValue: 99,
      w: "w-[99%]"
    },
  ];

  const ProgramsOfficeSoftwareHtml: Array<JSX.Element> =
    ProgramsOfficeSoftware.map(({ logo, name, progressValue,w }, i) => {
      return (
        <div key={i} className="mt-4 flex text-left mb-6">
          <div>{logo}</div>
          <div className="ml-2">
            <p className="text-[#ffffff] md:text-lg text-xs mt-[-6px]">
              Ms {name}
            </p>
            <div className="md:flex">
              <div className="md:w-36 w-24 bg-gray-200 rounded-full h-1.5  dark:bg-gray-700 mt-1.5">
                <div
                  className={
                    "h-1.5 rounded-full bg-blue-600 " + w
                  }
                ></div>
              </div>
              <p className="text-[#ffffff] text-xs ml-2 ">{progressValue}</p>
            </div>
          </div>
        </div>
      );
    });

  const Programs3DDeisgns = [
    {
      logo: (
        <SiPowerbi className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] text-[#ffffff] " />
      ),
      name: "Belnder",
      progressValue: 60,
      w: "w-[60%]"
    },
    {
      logo: (
        <SiPowerbi className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] text-[#ffffff] " />
      ),
      name: "Cinema 4d",
      progressValue: 40,
      w: "w-[40%]"
    },
  ];

  const Programs3DDeisgnsHtml: Array<JSX.Element> = Programs3DDeisgns.map(
    ({ logo, name, progressValue, w }, i) => {
      return (
        <div key={i} className="mt-4 flex text-left mb-6">
          <div>{logo}</div>
          <div className="ml-2">
            <p className="text-[#ffffff] md:text-lg text-xs mt-[-6px]">
              {name}
            </p>
            <div className="md:flex">
              <div className="md:w-36 w-24 bg-gray-200 rounded-full h-1.5  dark:bg-gray-700 mt-1.5">
                <div
                  className={
                    "h-1.5 rounded-full bg-blue-600 " + w
                  }
                ></div>
              </div>
              <p className="text-[#ffffff] text-xs ml-2 ">{progressValue}%</p>
            </div>
          </div>
        </div>
      );
    }
  );

  const PersonalSkills = [
    {
      skill: "Creative",
    },
    {
      skill: "Effective Communication",
    },
    {
      skill: "Work as one team",
    },
    {
      skill: "Work as one team",
    },
  ];

  const PersonalSkillsHtml: Array<JSX.Element> = PersonalSkills.map(
    ({ skill }, i) => {
      return (
        <div key={i} className=" text-[#ffffff]">
          <h1>{skill}</h1>
          <div className="flex">
            <div className="w-36 bg-gray-200 rounded-full h-1.5  dark:bg-gray-700 mt-1.5">
              <div className={"h-1.5 rounded-full bg-blue-600 w-[90%] "}></div>
            </div>
            <p className="text-xs ml-2 ">90%</p>
          </div>
        </div>
      );
    }
  );

  return (
    <div className="w-screen bg-[#1a1918] flex flex-col items-center font-sans pb-10">
      <h4 className="text-[#a34f29] text-3xl text-center ">My Skills</h4>
      <p className="text-center text-[gray] mb-4">
        During the path of my learning and experience I have managed to acquire
        the following skills that I master at different levels.
      </p>

      <div className="grid grid-cols-[45vw_5vw_45vw]">
        <h3 className="text-3xl py-1 px-3 text-[#ffffff] col-start-1 justify-self-end">
          Academic
        </h3>

        <div className="w-[34px] h-[34px] bg-[#a34f29] col-start-2 m-auto rounded-full "></div>

        <h3 className="text-3xl py-1 px-3 text-[#ffffff] col-start-3 justify-self-start ml-2 md:ml-0">
          Courses
        </h3>

        <div className="col-start-1 justify-self-end text-right ">
          {AcademicHtml}
        </div>
        <div className="w-[2px] min-h-[30vh] bg-[#393735] my-5 col-start-2  justify-self-center"></div>
        <div className="col-start-3 justify-self-start text-left ">
          {CoursesHtml}
        </div>

        <div className="bg-[#a34f29] w-fit h-fit py-1 px-3 text-[#FFFFFF] col-start-1 col-span-3 justify-self-center mt-4 md:mt-0">
          <h3 className="text-3xl">Programs</h3>
        </div>

        <div className="col-start-1 justify-self-end text-right mt-6 ">
          <h4 className="text-[#a34f29] md:text-3xl text-xl">2D Deisgns </h4>
          {Programs2DDeisgnssHtml}
        </div>

        <div className="w-[2px] min-h-[30vh] bg-[#393735] my-5 col-start-2 justify-self-center"></div>

        <div className="col-start-3 justify-self-start text-left  mt-6 ">
          <h4 className="text-[#a34f29] md:text-3xl text-xl">
            Office Software
          </h4>
          {ProgramsOfficeSoftwareHtml}
          <h4 className="text-[#a34f29] md:text-3xl text-xl">3D Deisgns</h4>
          {Programs3DDeisgnsHtml}
        </div>
      </div>

      <div className="bg-[#a34f29] w-fit h-fit py-1 px-3 text-[#FFFFFF] col-start-1 col-span-3 justify-self-center">
        <h3 className="text-3xl">Personal Skills</h3>
      </div>

      <div className="flex flex-wrap mt-4 md:gap-10  gap-4 justify-center ">
        {PersonalSkillsHtml}
      </div>
      <h4 className="text-[#FFFFFF] text-3xl text-center mt-10">
        My portfolio PDF
      </h4>
      <div className="bg-[#a34f29] w-fit h-fit py-1 px-3 text-[#FFFFFF] rounded-md mt-4 cursor-pointer">
        <a href={Pdf} target="_blank" className="text-2xl">
          RESUME
        </a>
      </div>
    </div>
  );
}

export default MySkills;
