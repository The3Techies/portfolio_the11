import portafolioImg from "../assets/HeroImg/portafolio_entrada.svg";
function Hero() {
  return (
    <div className="w-[100wh  ] bg-[#1a1918] flex flex-col items-center mt-10 py-10 font-sans">
      <div className="grid grid-cols-[50vw_50vw]">
        <img
          className="select-none col-start-2"
          alt="portafolioImg"
          width="100"
          height="180"
          src={portafolioImg}
        ></img>

        <div className="w-[2px] h-[20vh] bg-[#a34f29] my-5 col-start-2 "></div>

        <h2 className="text-[#393735] text-xl col-start-2 ">About me:</h2>
        <h2 className="text-[#A34F29] text-xl col-start-1 text-right ">
          Name:
        </h2>
        <h2 className="text-[#FFFFFF] text-3xl font-bold col-start-2 row-start-5 ">
          Aboghanem awsan osama
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

        <div className="col-start-1"></div>
        <div className="w-[2px] h-[50vh] bg-[#393735] my-5 col-start-2  justify-self-center"></div>
        <div className="col-start-3 self-center text-[#FFFFFF]">
          <p className="mb-4">
            Soy Juan Palma, este es mi porfolio, tengo 40 años y más de 25 años
            laborando en el medio gráfico, vivo en CDMX, México, me considero
            una persona compartida, empática, trabajadora, muy curiosa,
            autodidacta, alegre y de carácter fuerte.
          </p>
          <p>
            Laboro en áreas como: medios impresos, diseño gráfico y de
            interiores, modelado y render 3D, soy fotógrafo, en medios digitales
            realizo SEO, SEM, Analytics, Ads y programador en diversos lenguajes
            tanto Front-End, Back-End y Bases de datos.
          </p>
        </div>

        <div className="bg-[#a34f29] w-fit h-fit py-1 px-3 text-[#FFFFFF] justify-self-end">
          <h3 className="text-3xl">My skills</h3>
        </div>
        <div className="w-[34px] h-[34px] bg-[#a34f29] col-start-2 m-auto rounded-full "></div>
        
      </div>
    </div>
  );
}

export default Hero;
