import { Bell, Settings, WifiZero } from 'lucide-react';
import React from 'react';


export default function Home() {
    const fiscal = require('../assets/FiscalMind.png').default;
    const teste = require('../assets/teste.jpg').default;
    const graph = require('../assets/Graph.png').default;
    return (
        <div className="w-screen h-screen flex bg-linear-to-b from-[#D9D9D9] to-[#90C3BF]">
            {/* Dashboard */}
            <div className="absolute flex top-7 left-12 h-13 w-455">
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
            {/* Main Content */}
            <div className="absolute w-455 h-60 left-12 top-30">
                <h1 className="text-2xl font-semibold text-[#1E1E1E]">Olá, Nome do Usuário</h1>
                <h2 className="text-xl font-normal text-[#1E1E1E]">Gerencie relatórios, usuários e operações financeiras do sistema.</h2>
            </div>
            {/* Graphs */}
            <div className="absolute w-455 h-200 left-12 top-55">
                <div className="bg-[#E8EEEE] h-80 w-300 rounded-4xl ">
                    <h1 className="text-[#1E1E1E] text-3xl absolute top-10 left-10"><b>Consulte</b> e <b>exporte</b></h1>
                    <h1 className="text-[#1E1E1E] text-3xl absolute top-20 left-10">relatórios com filtros</h1>
                    <h1 className="text-[#1E1E1E] text-3xl absolute top-30 left-10">avançados</h1>
                    <button className="absolute left-10 top-60 bg-[#03A596] h-10 w-40 rounded-4xl">Acessar</button>
                    <img src={graph.src} className="absolute left-198.5 top-7.5 rounded-4xl" />
                </div>
                <div className="h-70 mt-7 w-300 bg-[#E8EEEE] rounded-4xl">

                </div>
                <div className="absolute left-310 -top-7 w-145 mt-7 h-157 bg-[#E8EEEE] rounded-4xl">

                </div>
            </div>
        </div>
    )
}

