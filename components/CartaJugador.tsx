import React from 'react';

export type Jugador = {
  id: string;
  nombre: string;
  posicion: string;
  media: number;
  foto: string;
  escudo: string;
  rareza: 'oro' | 'plata' | 'leyenda' | 'pibe';
};

interface Props {
  jugador: Jugador;
}

export default function CartaJugador({ jugador }: Props) {
  const estilosRareza = {
    oro: "bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-700 border-yellow-200 shadow-[0_0_15px_rgba(234,179,8,0.6)] text-yellow-950",
    plata: "bg-gradient-to-b from-slate-300 via-slate-400 to-slate-600 border-slate-100 shadow-[0_0_15px_rgba(148,163,184,0.6)] text-slate-900",
    leyenda: "bg-gradient-to-br from-purple-600 via-blue-500 to-pink-600 border-pink-300 shadow-[0_0_25px_rgba(236,72,153,0.8)] text-white",
    pibe: "bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 border-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.6)] text-white",
  };

  const estiloActual = estilosRareza[jugador.rareza] || estilosRareza.oro;

  return (
    <div className="relative w-44 h-64 flex flex-col items-center justify-end cursor-pointer group mt-8">
      {/* Imagen del jugador sobresaliendo */}
      <div className="absolute -top-10 z-20 w-36 h-36 flex justify-center items-end drop-shadow-2xl transition-transform duration-300 group-hover:scale-110">
        <div className="h-full w-full bg-gray-400/50 rounded-full flex items-center justify-center text-xs text-center border-2 border-dashed border-gray-300">
           {/* Placeholder temporal hasta que le pasemos una imagen real */}
           Foto<br/>{jugador.nombre}
        </div>
      </div>

      {/* Marco de la carta */}
      <div className={`relative w-full h-56 rounded-t-3xl rounded-b-xl border-4 ${estiloActual} flex flex-col p-2 overflow-visible transition-all duration-300 group-hover:brightness-110`}>
        <div className="absolute top-2 left-2 flex flex-col items-center drop-shadow-md z-30">
          <span className="text-4xl font-black tracking-tighter leading-none">{jugador.media}</span>
          <span className="text-md font-bold uppercase mt-1 opacity-90">{jugador.posicion}</span>
          <div className="w-7 h-7 mt-2 bg-white/50 rounded-full"></div> {/* Placeholder escudo */}
        </div>

        <div className="z-30 mt-auto w-full text-center bg-black/40 backdrop-blur-sm py-1.5 rounded-lg border-b-2 border-white/20">
          <h3 className="font-extrabold uppercase text-white tracking-widest text-sm truncate px-1">
            {jugador.nombre}
          </h3>
        </div>
        
        {/* Brillo interno */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/40 rounded-t-2xl pointer-events-none"></div>
      </div>
    </div>
  );
}