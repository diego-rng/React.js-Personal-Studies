import { Bell, Settings, WifiZero, ChevronDown } from 'lucide-react';
import React from 'react';


export default function Home() {
    const fiscal = require('../assets/FiscalMind.png').default;
    const teste = require('../assets/teste.jpg').default;
    const graph = require('../assets/Graph.png').default;
    return (
        <div className="w-screen h-screen flex bg-linear-to-b from-[#D9D9D9] to-[#90C3BF]">
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
            {/* Main Content */}
            <div className="absolute w-315 h-60 left-12 top-30">
                <h1 className="text-2xl font-semibold text-[#1E1E1E]">Olá, Nome do Usuário</h1>
                <h2 className="text-xl font-normal text-[#1E1E1E]">Gerencie relatórios, usuários e operações financeiras do sistema.</h2>
            </div>
            {/* Graphs */}
            <div className="absolute w-315 h-117 left-12 top-55">
                <div className="bg-[#E8EEEE] h-55 w-180 rounded-4xl ">
                    <h1 className="text-[#1E1E1E] text-2xl absolute top-5 left-5"><b>Consulte</b> e <b>exporte</b></h1>
                    <h1 className="text-[#1E1E1E] text-2xl absolute top-13 left-5">relatórios com filtros</h1>
                    <h1 className="text-[#1E1E1E] text-2xl absolute top-21 left-5">avançados</h1>
                    <button className="absolute left-5 top-40 bg-[#03A596] h-10 w-40 rounded-4xl">Acessar</button>
                    <img src={graph.src} className="absolute h-50 top-5 left-110 rounded-4xl" />
                </div>
                <div className="h-55 mt-7 w-180 bg-[#E8EEEE] rounded-4xl">
                    <h1 className="absolute top-68 left-5 text-[#1E1E1E] text-xl">Indicadores</h1>
                    <div className="rounded-4xl bg-[#012E41] h-35 w-45 absolute top-80 left-5">
                        <h1 className="text-6xl text-white text-semibold absolute top-5 left-5">42</h1>
                        <div className="h-1 w-35 absolute top-24.5 left-5 bg-white"></div>
                        <h2 className="absolute top-27 left-8">Relatórios/mês</h2>
                    </div>

                    <div className="rounded-4xl bg-[#012E41] h-35 w-65 absolute top-80 left-55">
                        <h1 className="text-2xl text-white text-semibold absolute top-4 left-5">CFC<br></br> DIGITAL</h1>
                        <div className="h-1 w-55 absolute top-24.5 left-5 bg-white"></div>
                        <h2 className="absolute top-27 left-14">Ordem mais usada</h2>
                    </div>
                    
                    <div className="rounded-4xl bg-[#012E41] h-35 w-45 absolute top-80 left-125">
                        <h1 className="text-2xl text-white text-semibold absolute top-4 left-5">Últimos <br></br> 15 dias</h1>
                        <div className="h-1 w-35 absolute top-24.5 left-5 bg-white"></div>
                        <h2 className="absolute top-27 left-6">Filtro mais usado</h2>
                    
                    </div>
                </div>
                <div className="absolute left-185 -top-7 w-130 mt-7 h-117 bg-[#E8EEEE] rounded-4xl">
                    <h1 className="absolute top-8 left-7 text-[#1E1E1E] text-2xl">Últimas Atividades <ChevronDown className="inline" /> </h1>
                    <h2 className="text-[#878787] absolute left-7 top-21">15:43</h2>
                    <h2 className="text-[#1E1E1E] absolute left-19 top-21">Relatório exportado por Admin</h2>
                    <h2 className="text-[#878787] absolute left-7 top-32">14:10</h2>
                    <h2 className="text-[#1E1E1E] absolute left-19 top-32">Relatório CBPM gerado por João Silva</h2>
                    <h2 className="text-[#878787] absolute left-7 top-43">11:00</h2>
                    <h2 className="text-[#1E1E1E] absolute left-19 top-43">Usuário Maria alterou permissões</h2>
                    <h2 className="text-[#878787] absolute left-7 top-54">08:59</h2>
                    <h2 className="text-[#1E1E1E] absolute left-20 top-54">Relatório Pré-pago gerado por Roberto</h2>
                    <h2 className="text-[#878787] absolute left-7 top-65">Ontem</h2>
                    <h2 className="text-[#1E1E1E] absolute left-22 top-65">Usuário Marina alterou permissões</h2>
                    <h2 className="text-[#878787] absolute left-7 top-76">Ontem</h2>
                    <h2 className="text-[#1E1E1E] absolute left-22 top-76">Relatório Pré-pago gerado por Roberto</h2>
                    <h2 className="text-[#878787] absolute left-7 top-87">00/00/00</h2>
                    <h2 className="text-[#1E1E1E] absolute left-27 top-87">Usuário Marina alterou permissões</h2>
                </div>
            </div>
        </div>
    )
}

