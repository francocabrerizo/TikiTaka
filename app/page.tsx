import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-green-700 flex flex-col items-center justify-center relative overflow-hidden font-sans select-none">
      
      {/* FONDO 1: Franjas de corte de césped de cancha */}
      <div className="absolute inset-0 flex w-full">
        <div className="w-1/5 h-full bg-green-900/20"></div>
        <div className="w-1/5 h-full bg-transparent"></div>
        <div className="w-1/5 h-full bg-green-900/20"></div>
        <div className="w-1/5 h-full bg-transparent"></div>
        <div className="w-1/5 h-full bg-green-900/20"></div>
      </div>

      {/* FONDO 2: Viñeta oscura en los bordes para dar efecto Arcade/Foco */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.85)_100%)] pointer-events-none"></div>

      <div className="z-10 flex flex-col items-center gap-14 w-full px-4">
        
        {/* TÍTULO: Estilo Arcade con inclinación y elementos flotantes */}
        <div className="relative text-center cursor-default group">
          
          {/* Adornos animados */}
          <div className="absolute -top-10 -left-6 text-5xl animate-bounce -rotate-12 drop-shadow-lg"></div>
          <div className="absolute -bottom-6 -right-8 text-5xl animate-pulse rotate-12 drop-shadow-lg"></div>
          
          <h1 className="relative text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-yellow-400 to-amber-600 uppercase tracking-tighter drop-shadow-[0_12px_0_rgba(20,83,45,1)] transform -skew-x-6 group-hover:scale-105 transition-transform duration-300 z-10">
            TIKI TAKA
          </h1>
          
          {/* Subtítulo encapsulado estilo "Chapita" */}
          <div className="mt-6">
            <span className="text-lime-300 text-lg md:text-xl font-black tracking-widest uppercase bg-black/40 px-6 py-2 rounded-full border border-lime-500/50 backdrop-blur-sm shadow-[0_0_15px_rgba(132,204,22,0.3)]">
              El Draft del Fútbol Argentino
            </span>
          </div>
        </div>

        {/* CONTENEDOR DE BOTONES */}
        <div className="flex flex-col gap-6 w-full max-w-sm mt-4">
          
          {/* BOTÓN 1: JUGAR */}
          <Link href="/draft" className="relative w-full inline-block group focus:outline-none">
            <span className="absolute inset-0 bg-green-950 rounded-2xl translate-y-3 group-active:translate-y-1 transition-transform duration-100 ease-in-out"></span>
            <span className="relative flex items-center justify-center gap-3 w-full px-8 py-5 bg-gradient-to-b from-lime-400 to-lime-600 text-green-950 text-3xl font-black uppercase tracking-widest border-4 border-lime-200 rounded-2xl transform group-active:translate-y-2 transition-transform duration-100 ease-in-out text-center shadow-[0_0_30px_rgba(163,230,53,0.4)] hover:brightness-110">
              {/* Icono de Play SVG */}
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7z"/>
              </svg>
              JUGAR
            </span>
          </Link>

          {/* BOTÓN 2: APOYAR EL PROYECTO */}
          <Link href="/draft" className="relative w-full inline-block group focus:outline-none">
            <span className="absolute inset-0 bg-emerald-950 rounded-xl translate-y-2 group-active:translate-y-1 transition-transform duration-100 ease-in-out"></span>
            <span className="relative flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-b from-emerald-600 to-teal-800 text-white text-lg font-bold uppercase tracking-widest border-2 border-emerald-400 rounded-xl transform group-active:translate-y-1 transition-transform duration-100 ease-in-out text-center shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:brightness-110">
              <span></span> Apoyar el proyecto
            </span>
          </Link>

        </div>
      </div>

      {/* Sello de agua sutil */}
      <div className="absolute bottom-4 text-green-400/40 font-bold text-xs tracking-widest uppercase">
        Versión Beta 🇦🇷
      </div>
    </main>
  );
}