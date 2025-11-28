import React from 'react';

export default function Relatorios() {
    const fiscal = require('../assets/FiscalMind.png').default;
    const teste = require('../assets/teste.jpg').default;
    return(
        <div>
            {/* Dashboard */}
            <div className="absolute flex top-7 left-12 h-13 w-315">
                <img src={fiscal.src} className="left-5 top-5 w-30 h-13" />
                <div className="rounded-4xl float-right h-13 ml-auto w-135 mr-3 bg-[#EEEEEE]">
                    <button className= "h-13 w-30 rounded-4xl bg-[#012E41]">Dashboard</button>
                    <button className="h-13 w-35 text-black">Relatórios</button>
                    <button className="h-13 w-35 text-black">Gerenciamento</button>
                    <button className="h-13 w-35 text-black">Suporte</button>
                </div>

                <div className="justify-end float-right  relative flex h-13 w-75 ">
                    <button className="mr-3 rounded-4xl h-13 w-45 justify-center flex items-center text-[#1E1E1E] bg-[#EEEEEE]"><Settings className="text-[#03A596] mr-1" /> Configurações</button>
                    <button className="rounded-4xl h-13 w-13 flex justify-center items-center text-[#000000] mr-3 bg-[#EEEEEE]"> <Bell /> <WifiZero className="absolute text-[#F28705] h-30 w-30 -top-21 right-4" /></button>
                    
                    <img src={teste.src} className="rounded-4xl mr-0 " />
                </div>
            </div>
        </div>
    );
}
