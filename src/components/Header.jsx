const Header = () => {
    return (
        <div>
            <div className='w-full flex flex-row h-[70vh]'>
      <div className='w-1/2 bg-[#C69C59]'>
        <div className='grid grid-rows-3 items-center w-full absolute bottom-48'>
        <p className='text-white text-2xl'>Bien en location : on s'occupe <br /> de tout au meilleur coût. </p>
          <p className='text-white flex justify-center'>Mise en location - Gestion de la location et du locataire - Garantie loyers impayés</p>
          <button className='rounded-[30px] md:py-4 md:px-5 flex self-center px-4 w-1/2 py-2 bg-white text-black '>Nous contacter</button>
        </div>
      </div>
      <div className='w-1/2 bg-[#C69C59]'>
        <img src="src/assets/image/1000_F_322946786_pqjAL5xz3tc7JnOhZFyMWXV3NETtHVKx.jpg" alt="" className=' rounded-bl-[500px] h-full w-full object-cover' />
      </div>
     </div>
        </div>
    );
};

export default Header;