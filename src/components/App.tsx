import React from "react";
import Splash from "./Splash";
import { LockKeyhole } from "lucide-react";

export default function App() {
  const logo = require('../assets/renova-icon.png').default;
  const login = require('../assets/img-login.png').default;  
  const fiscal = require('../assets/FiscalMind.png').default;
  return(
      <div className="w-screen h-screen bg-linear-to-br from-[#D9D9D9] to-[#03A596] flex">
        <div className="p-5">
            <img src={logo.src} className="w-10 h-8" alt="Renova icon"/>
          <div className="left-5 space-y-4 mt-10">
            <Splash>Gestão financeira <br /><b className="text-[#03A596]">segura</b> e dados <br />com <b className="text-[#03A596]">inteligência</b></Splash>
          </div>
          <div>
            <img src={login.src} className="w-125 left-50 -bottom-20 z-50 absolute" alt="Login illustration"/>
          </div>
        </div>

        <div className="h-full w-4/6 absolute right-0 bg-white rounded-xl">
          <img src={fiscal.src} className="w-32 h-14 mt-32 ml-25" alt="FiscalMind logo"/>

          <h2 className="text-black font-elms mt-9 ml-25">Acesse sua conta para continuar</h2>

          <p className="text-black mt-7 ml-25"> LOGIN</p>

          <input type="text" placeholder="nome.sobrenome" className="mt-3 ml-25 w-70 border-b border-gray-400 placeholder-gray-300" />
          
          <p className="text-black mt-3 ml-25"> SENHA</p>

          <input type="password" placeholder="************" className="mt-3 ml-25 w-70 border-b border-gray-400 placeholder-gray-300" />
          <p />

          <input type="checkbox" className="mt-4 ml-25 w-3 h-3" /> <span className="text-black ml-1 text-xs">Lembrar-me</span>
          
          <LockKeyhole className="inline-block ml-18 mb-1 text-blue-400" size={12} /> 

          <input type="button" value="Esqueceu a senha?" className="text-xs text-blue-400 ml-1" />

          <p className="mt-12 ml-25" />

          <p className="text-black ml-25 text-xs inline">Não tem conta? </p>
          <input type="button" value="Cadastre-se!" className="text-xs text-blue-400 inline" />

          <button className="absolute ml-7 rounded-xl bg-blue-950 h-7 w-25" />
        </div>
      </div>
  );
}