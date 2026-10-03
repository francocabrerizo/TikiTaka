"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import CartaJugador, { Jugador } from '../../components/CartaJugador';

const JUGADORES_MOCK: Jugador[] = [
  { id: "1", nombre: "Borja", posicion: "DC", media: 87, foto: "", escudo: "", rareza: "oro" },
  { id: "2", nombre: "Cavani", posicion: "DC", media: 88, foto: "", escudo: "", rareza: "franquicia" },
  { id: "3", nombre: "Zenón", posicion: "MI", media: 82, foto: "", escudo: "", rareza: "plata" },
  { id: "4", nombre: "Pibe", posicion: "MCO", media: 64, foto: "", escudo: "", rareza: "bronce" },
  { id: "5", nombre: "Armani", posicion: "POR", media: 84, foto: "", escudo: "", rareza: "oro" },
];

export default function DraftPage() {
  const [equipo, setEquipo] = useState<Record<string, Jugador>>({});
  const [modalAbierto, setModalAbierto] = useState(false);
  const [slotActivo, setSlotActivo] = useState<{ id: string, posicion: string } | null>(null);

  const abrirModal = (idSlot: string, posicionVisual: string) => {
    setSlotActivo({ id: idSlot, posicion: posicionVisual });
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setSlotActivo(null);
  };

  const seleccionarJugador = (jugador: Jugador) => {
    if (slotActivo) {
      setEquipo(prev => ({ ...prev, [slotActivo.id]: jugador }));
      cerrarModal();
    }
  };

  const mediaEquipo = useMemo(() => {
    const jugadoresSeleccionados = Object.values(equipo);
    if (jugadoresSeleccionados.length === 0) return 0;
    const sumaMedia = jugadoresSeleccionados.reduce((acc, jug) => acc + jug.media, 0);
    return Math.floor(sumaMedia / jugadoresSeleccionados.length);
  }, [equipo]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-950 py-6 px-2 font-sans flex flex-col items-center overflow-x-hidden relative pb-24">
      
      {/* HEADER / MARCADOR */}
      <header className="w-full max-w-4xl flex justify-between items-center bg-black/60 p-4 md:p-6 rounded-2xl border-2 border-lime-500/30 mb-8 z-20">
        <Link href="/" className="text-lime-400 font-black hover:text-white transition-colors uppercase tracking-wider text-sm flex items-center gap-2">
          <span>◀</span> Salir
        </Link>
        <div className="text-center">
          <h2 className="text-lime-200 text-xs md:text-sm uppercase tracking-widest font-bold opacity-90">Media del Equipo</h2>
          <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-yellow-400 to-amber-600 drop-shadow-md leading-none mt-1 transition-all duration-500">
            {mediaEquipo}
          </p>
        </div>
        <div className="w-16"></div>
      </header>

      {/* LA CANCHA */}
      <div className="relative w-full max-w-3xl aspect-[3/4] md:aspect-[4/5] bg-green-600 rounded-xl border-4 border-white/80 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-evenly py-8 z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[15%] border-b-4 border-l-4 border-r-4 border-white/30 rounded-b-md pointer-events-none"></div>
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[25%] h-[8%] border-b-4 border-l-4 border-r-4 border-white/30 rounded-b-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-full border-t-4 border-white/30 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 border-4 border-white/30 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-[15%] border-t-4 border-l-4 border-r-4 border-white/30 rounded-t-md pointer-events-none"></div>

        <div className="relative z-10 flex justify-center gap-4 md:gap-10 px-2">
          <Slot id="ei" posicion="EI" jugador={equipo["ei"]} onClick={() => abrirModal("ei", "EI")} />
          <Slot id="dc" posicion="DC" jugador={equipo["dc"]} onClick={() => abrirModal("dc", "DC")} />
          <Slot id="ed" posicion="ED" jugador={equipo["ed"]} onClick={() => abrirModal("ed", "ED")} />
        </div>
        <div className="relative z-10 flex justify-center gap-4 md:gap-10 px-2">
          <Slot id="mc1" posicion="MC" jugador={equipo["mc1"]} onClick={() => abrirModal("mc1", "MC")} />
          <Slot id="mc2" posicion="MC" jugador={equipo["mc2"]} onClick={() => abrirModal("mc2", "MC")} />
          <Slot id="mc3" posicion="MC" jugador={equipo["mc3"]} onClick={() => abrirModal("mc3", "MC")} />
        </div>
        <div className="relative z-10 flex justify-center gap-2 md:gap-6 px-1">
          <Slot id="li" posicion="LI" jugador={equipo["li"]} onClick={() => abrirModal("li", "LI")} />
          <Slot id="dfc1" posicion="DFC" jugador={equipo["dfc1"]} onClick={() => abrirModal("dfc1", "DFC")} />
          <Slot id="dfc2" posicion="DFC" jugador={equipo["dfc2"]} onClick={() => abrirModal("dfc2", "DFC")} />
          <Slot id="ld" posicion="LD" jugador={equipo["ld"]} onClick={() => abrirModal("ld", "LD")} />
        </div>
        <div className="relative z-10 flex justify-center px-2">
          <Slot id="por" posicion="POR" jugador={equipo["por"]} onClick={() => abrirModal("por", "POR")} />
        </div>
      </div>

      {/* BANCA DE SUPLENTES */}
      <div className="w-full max-w-3xl mt-10 bg-black/60 border-t-2 border-white/10 rounded-t-3xl p-6 shadow-2xl z-10">
        <h3 className="text-white text-center font-black tracking-widest uppercase mb-6 opacity-70 text-sm">Banca de Suplentes</h3>
        <div className="flex justify-center gap-3 md:gap-6 flex-wrap">
          <Slot id="sub1" posicion="POR" jugador={equipo["sub1"]} onClick={() => abrirModal("sub1", "POR")} />
          <Slot id="sub2" posicion="SUB" jugador={equipo["sub2"]} onClick={() => abrirModal("sub2", "SUB")} />
          <Slot id="sub3" posicion="SUB" jugador={equipo["sub3"]} onClick={() => abrirModal("sub3", "SUB")} />
          <Slot id="sub4" posicion="SUB" jugador={equipo["sub4"]} onClick={() => abrirModal("sub4", "SUB")} />
          <Slot id="sub5" posicion="SUB" jugador={equipo["sub5"]} onClick={() => abrirModal("sub5", "SUB")} />
          <Slot id="sub6" posicion="SUB" jugador={equipo["sub6"]} onClick={() => abrirModal("sub6", "SUB")} />
        </div>
      </div>

      {/* EL MODAL DE SELECCIÓN (ALTO RENDIMIENTO - SIN BLUR) */}
      {modalAbierto && slotActivo && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#050f0a] animate-in fade-in duration-150">
          
          {/* Header Superior Sólido */}
          <div className="w-full h-20 md:h-24 flex justify-center items-center relative z-20 bg-black/90 border-b border-white/10 shadow-xl shrink-0">
            <h3 className="text-white text-3xl md:text-4xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500 drop-shadow-md">
              Elegí: {slotActivo.posicion}
            </h3>
            <button 
              onClick={cerrarModal} 
              className="absolute right-6 md:right-10 text-white/40 hover:text-red-500 text-5xl md:text-6xl font-light transition-colors focus:outline-none"
            >
              ×
            </button>
          </div>
          
          {/* Contenedor de Paneles */}
          <div className="flex-1 w-full flex justify-center items-stretch overflow-x-auto z-10">
            {JUGADORES_MOCK.map((jugador) => (
              <div 
                key={jugador.id} 
                className="relative flex-1 min-w-[140px] max-w-[280px] h-full flex flex-col items-center justify-center cursor-pointer group border-x border-white/5 first:border-l-0 last:border-r-0 transition-colors duration-300 hover:bg-white/5"
                onClick={() => seleccionarJugador(jugador)}
              >
                {/* Iluminación trasera dorada pura (Solo Opacidad) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.15)_0%,transparent_60%)] transition-opacity duration-300 pointer-events-none will-change-[opacity]"></div>

                {/* La Carta (Transformaciones aceleradas por GPU) */}
                <div className="relative z-10 transition-transform duration-200 ease-out group-hover:-translate-y-6 group-hover:scale-105 will-change-transform">
                  <CartaJugador jugador={jugador} />
                </div>

                {/* Botón de acción */}
                <div className="absolute bottom-12 md:bottom-24 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-6 group-hover:translate-y-0 pointer-events-none will-change-transform">
                  <span className="bg-gradient-to-r from-lime-400 to-lime-500 text-green-950 font-black uppercase tracking-widest px-6 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm shadow-[0_0_20px_rgba(163,230,53,0.3)]">
                    Seleccionar
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// EL NUEVO SLOT
function Slot({ id, posicion, jugador, onClick }: { id: string, posicion: string, jugador?: Jugador, onClick: () => void }) {
  return (
    <div onClick={onClick} className="relative w-[4.5rem] h-[6.5rem] md:w-[7rem] md:h-[10rem] mt-6 shrink-0 cursor-pointer group">
      {jugador ? (
        <div className="absolute inset-0 z-20 animate-in zoom-in-95 fade-in duration-200 ease-out drop-shadow-xl will-change-transform">
          <CartaJugador jugador={jugador} variante="mini" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-black/60 border-2 border-dashed border-white/40 rounded-xl flex flex-col items-center justify-center hover:bg-lime-500/20 transition-colors shadow-inner z-10 group-hover:border-lime-400">
          <span className="text-lime-400 font-black text-2xl md:text-4xl drop-shadow-md transition-transform group-hover:scale-110 will-change-transform">+</span>
          <span className="text-white text-[10px] md:text-xs font-bold mt-1 tracking-widest bg-black/80 px-2 md:px-3 py-0.5 rounded-full">{posicion}</span>
        </div>
      )}
    </div>
  );
}