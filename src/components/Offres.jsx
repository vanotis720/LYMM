import banner from "../assets/image/002-conseils-eclairage-piece-par-piece.jpg";

const Offres = () => {
  console.log(banner);

  return (
    <div>
      <div
        className={`bg-[url(${banner})] w-full h-[40vh] sm:h-[90vh] bg-cover bg-center`}
      >
        <div className="bg-black w-[90%] sm:h-[70vh] h-[30vh] m-auto opacity-75 relative sm:bottom-20 bottom-8 rounded-t-3xl ">
          <h2 className="text-white flex justify-self-center">Nos offres</h2>
        </div>
      </div>
    </div>
  );
};

export default Offres;
