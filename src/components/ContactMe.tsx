import myPic from "../assets/ContactMeImg/myPic.jpg";
import { useState } from "react";

function ContactMe() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState("");
  const [message, SetMessage] = useState("");

  const send = () => {};

  return (
    <div className="w-screen bg-[#A34F29] flex flex-col items-center font-sans pb-16 ">
      <div className="bg-footer-contactme bg-no-repeat bg-cover w-[100%] h-[150px]"></div>

      <div className="my-10 flex w-full  select-none">
        <img
          className="rounded-r-3xl w-1/2 hidden md:block "
          src={myPic}
          alt="my picture"
        />

        <div className=" w-full md:w-1/2 ml-6 mt-2 ">
          <input
            className="w-[90%] h-14 p-2 rounded-lg text-xl bg-[#a34f29] border border-gray-400 shadow-[6px_6px_10px_0px_rgba(255,255,255,0.3)] mb-6 text-[#ffffff] focus:bg-[#cd6130]"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => SetName(e.target.value)}
          />
          <input
            className="w-[90%] h-14 p-2 rounded-lg text-xl bg-[#a34f29] border border-gray-400 shadow-[6px_6px_10px_0px_rgba(255,255,255,0.3)] mb-6 text-[#ffffff] focus:bg-[#cd6130]"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
          />
          <input
            className="w-[90%] h-14 p-2 rounded-lg text-xl bg-[#a34f29] border border-gray-400 shadow-[6px_6px_10px_0px_rgba(255,255,255,0.3)] mb-6 text-[#ffffff] focus:bg-[#cd6130]"
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => SetPhone(e.target.value)}
          />
          <textarea
            className="w-[90%] h-40 max-h-40 p-2 rounded-lg text-xl bg-[#a34f29] border border-gray-400 shadow-[6px_6px_10px_0px_rgba(255,255,255,0.3)] mb-6 text-[#ffffff] focus:bg-[#cd6130]"
            placeholder="Your Message"
            value={message}
            onChange={(e) => SetMessage(e.target.value)}
          ></textarea>

          <button
            className="w-[90%] bg-[black] hover:bg-[#cd6130] text-[#ffffff] rounded-lg h-12 text-xl font-bold z-50 relative "
            onClick={send}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
