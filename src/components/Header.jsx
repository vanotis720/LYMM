/* eslint-disable react/no-unescaped-entities */
import bannerBg from "/src/assets/images/banner-bg.jpg";

const Header = () => {
  return (
    <div>
      <div className="w-full flex flex-row h-[70vh] bg-[#C69C59]">
        <div className="w-1/2">
          <div className="grid grid-rows-3 items-center w-full sm:pl-28 absolute bottom-60 sm:bottom-96">
            <p className="text-white text-2xl sm:text-6xl">
              Bien en location : on s'occupe <br /> de tout au meilleur coût.
            </p>
            <p className="text-white sm:text-3xl flex justify-center sm:justify-start">
              Mise en location - Gestion de la location et du locataire -
              Garantie loyers impayés
            </p>
            <button className="rounded-[30px] sm:py-4 sm:px-4 flex self-center px-4 w-1/2 sm:w-48 py-2 bg-white text-black ">
              Nous contacter
            </button>
          </div>
        </div>
        <div className="w-1/2 ">
          <img
            src={bannerBg}
            alt="banner bg images"
            className=" rounded-bl-[500px] h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
