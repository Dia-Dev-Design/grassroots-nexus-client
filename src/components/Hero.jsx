import React from 'react';
import FotoCloseUp from "../assets/Fotos_para_pagina_de_Myrna/FotoCloseUpFrente.jpeg";
import FotoDeRelieve from "../assets/Fotos_para_pagina_de_Myrna/logo_relieve.jpg"
import LogoDeVictoriaCiudadana from "../assets/Fotos_para_pagina_de_Myrna/el-logo-de-victoria-ciudadana_Autogiro-Arte-Actual.jpg"
import LogoRedondoVictoriaCiudadana from "../assets/Fotos_para_pagina_de_Myrna/logo_redondo.jpg"

const Hero = () => {
  return (
    <div className='bg-cover bg-center bg-opacity-95 w-auto' style={ {backgroundImage: `url(${LogoDeVictoriaCiudadana})`} }>
      <div className='max-w-[800px] mt-auto w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <img src={FotoCloseUp} className='m-auto rounded-full h-auto w-1/5 md:w-1/4 lg:w-1/3 xl:w-1/2'/>
      </div>
    </div>
  )
}

export default Hero