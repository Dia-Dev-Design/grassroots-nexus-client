import { useState } from "react";
import LogoConNombre from "../assets/Fotos_para_pagina_de_Myrna/logo_nombre_de_Mryna.jpg";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className="flex fixed w-full justify-between items-center px-3 py-10 bg-testingGreen">

      <div className={nav ? "hidden":"flex"}>
        <img
          src={LogoConNombre}
          alt="image1"
          className="flex rounded-full w-26 h-14"
        />
      </div>

      <div>
        <ul className="hidden md:flex">
          <li className="p-4">Biografía</li>
          <li className="p-4">Campaña 2024</li>
          <li className="p-4">Noticias</li>
          <li className="p-4">Eventos</li>
          <li className="p-4">Podcast</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>

      <div className={nav ? "hidden":""}>
            <a href="#" className="flex p-4 w-26 rounded-full bg-campaignYellow">Donativo
            </a>
      </div>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
      </div>

      <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r bg-testingGreen ease-in-out duration-500" : "fixed left-[-100%]"}>

        <ul className="uppercase p-4">
          <div className="p-2">
            <img
                src={LogoConNombre}
                alt="image1"
                className="rounded-full w-26 h-14"
              />
          </div>
          <li className="p-4 border-b border-t">Biografía</li>
          <li className="p-4 border-b">Campaña 2024</li>
          <li className="p-4 border-b">Noticias</li>
          <li className="p-4 border-b">Eventos</li>
          <li className="p-4 border-b">Podcast</li>
          <li className="p-4">Contact</li>
        </ul>

        <div className="p-3">
            <a href="#" className="right-6 p-6 w-20 rounded-full bg-campaignYellow">
              Donativo
            </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar