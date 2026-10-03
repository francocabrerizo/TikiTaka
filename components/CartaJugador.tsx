import React from 'react';

export type Jugador = {
  id: string;
  nombre: string;
  posicion: string;
  media: number;
  foto: string;
  escudo: string;
  rareza: 'bronce' | 'plata' | 'oro' | 'franquicia';
};

interface Props {
  jugador: Jugador;
  variante?: 'normal' | 'mini';
}

export default function CartaJugador({ jugador, variante = 'normal' }: Props) {
  const isMini = variante === 'mini';

  const estilosRareza = {
    bronce: "bg-gradient-to-br from-orange-300 via-orange-600 to-amber-900 border-orange-400 shadow-md text-orange-100",
    plata: "bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 border-gray-300 shadow-md text-gray-900",
    oro: "bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-700 border-yellow-300 shadow-md text-yellow-950",
    franquicia: "bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-800 border-fuchsia-300 shadow-md text-white",
  };

  const estiloActual = estilosRareza[jugador.rareza] || estilosRareza.oro;

  return (
    <div className={`relative flex flex-col group select-none ${isMini ? 'w-full h-full' : 'w-44 h-64 md:w-52 md:h-[19rem]'}`}>
      
      {/* MARCO DE LA CARTA */}
      <div className={`absolute inset-0 rounded-t-2xl rounded-b-xl border-2 md:border-[3px] ${estiloActual} overflow-hidden transition-all duration-300`}>
         <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-60 pointer-events-none"></div>
      </div>

      {/* CONTENIDO INTERNO */}
      <div className="relative z-10 w-full h-full flex flex-col pointer-events-none">
        
        {/* TOP: Contenedor que ocupa todo el espacio hasta el nombre */}
        <div className="relative flex-1 w-full px-2 pt-2 md:px-3 md:pt-3">
           
           {/* COLUMNA IZQUIERDA: Stats y Escudo */}
           <div className="flex flex-col items-center drop-shadow-md z-30 w-min">
             <span className={`font-black tracking-tighter leading-none ${isMini ? 'text-2xl' : 'text-4xl md:text-5xl'}`}>
               {jugador.media}
             </span>
             <span className={`font-bold uppercase mt-0.5 opacity-90 ${isMini ? 'text-[10px]' : 'text-sm md:text-md'}`}>
               {jugador.posicion}
             </span>
             {/* Escudo */}
             <div className={`mt-1 md:mt-1.5 flex items-center justify-center ${isMini ? 'w-4 h-4' : 'w-6 h-6 md:w-8 md:h-8'}`}>
               {jugador.escudo ? (
                  <img src={jugador.escudo} alt="Escudo" className="w-full h-full object-contain drop-shadow-sm" />
               ) : (
                  <div className="w-full h-full bg-white/20 rounded-full border border-white/40 shadow-inner"></div>
               )}
             </div>
           </div>

           {/* COLUMNA DERECHA: FOTO DEL JUGADOR (Anclada abajo a la derecha) */}
           <div className={`absolute bottom-0 right-0 md:right-1 flex justify-end items-end transition-transform duration-300 group-hover:scale-105 z-20 ${isMini ? 'w-16 h-16' : 'w-28 h-28 md:w-36 md:h-36'}`}>
              {jugador.foto ? (
                <img src={jugador.foto} alt={jugador.nombre} className="w-full h-full object-contain drop-shadow-lg" />
              ) : (
                /* preserveAspectRatio="xMidYBottom meet" obliga a la silueta a apoyarse abajo */
                <svg className={`text-white/80 drop-shadow-md w-full h-full`} fill="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYBottom meet">
                   <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              )}
           </div>
        </div>

        {/* BOTTOM: Nombre */}
        <div className={`w-full text-center bg-black/60 backdrop-blur-sm ${isMini ? 'py-1' : 'py-2 md:py-3'} border-t border-white/20 rounded-b-lg shadow-sm z-30`}>
          <h3 className={`font-extrabold uppercase text-white tracking-widest truncate px-1 ${isMini ? 'text-[9px]' : 'text-sm md:text-base'}`}>
            {jugador.nombre}
          </h3>
        </div>
      </div>
    </div>
  );
}