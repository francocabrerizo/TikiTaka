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

  // Degradados premium
  const estilosRareza = {
    bronce: "bg-gradient-to-br from-orange-300 via-orange-600 to-amber-900 border-orange-400 shadow-lg text-orange-100",
    plata: "bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 border-gray-300 shadow-lg text-gray-900",
    oro: "bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-700 border-yellow-300 shadow-lg text-yellow-950",
    franquicia: "bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-800 border-fuchsia-300 shadow-lg text-white",
  };

  const estiloActual = estilosRareza[jugador.rareza] || estilosRareza.oro;

  return (
    // La carta ahora tiene proporciones verticales perfectas y un margen superior para la cabeza
    <div className={`relative flex flex-col group select-none mt-6 ${isMini ? 'w-full h-full' : 'w-44 h-64 md:w-52 md:h-[19rem]'}`}>
      
      {/* MARCO DE LA CARTA */}
      <div className={`absolute inset-0 rounded-t-2xl rounded-b-xl border-2 md:border-[3px] ${estiloActual} overflow-hidden transition-all duration-300`}>
         {/* Brillo interno */}
         <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-60 pointer-events-none"></div>
      </div>

      {/* CONTENIDO INTERNO */}
      <div className="relative z-10 w-full h-full flex flex-col pointer-events-none">
        
        {/* TOP: Stats a la Izquierda, Foto a la Derecha */}
        <div className="flex justify-between items-start w-full px-2 pt-2 md:px-3 md:pt-3">
           
           {/* Estadísticas (Ahora nunca se tapan) */}
           <div className="flex flex-col items-center drop-shadow-md z-30">
             <span className={`font-black tracking-tighter leading-none ${isMini ? 'text-xl' : 'text-4xl md:text-5xl'}`}>
               {jugador.media}
             </span>
             <span className={`font-bold uppercase mt-0.5 opacity-90 ${isMini ? 'text-[9px]' : 'text-sm md:text-md'}`}>
               {jugador.posicion}
             </span>
           </div>

           {/* FOTO / SILUETA (Movida a la derecha y con fondo transparente) */}
           <div className={`absolute right-1 md:right-2 flex justify-center items-end drop-shadow-2xl transition-transform duration-300 group-hover:scale-110 z-20 ${isMini ? '-top-4 w-14 h-14' : '-top-10 w-32 h-32 md:-top-12 md:w-40 md:h-40'}`}>
              {/* En lugar del círculo gris que tapaba todo, usamos una silueta transparente con degradado sutil */}
              <div className="h-full w-full bg-gradient-to-t from-black/40 to-transparent rounded-full flex items-end justify-center overflow-hidden">
                 <svg className={`text-white/70 ${isMini ? 'w-12 h-12 -mb-1' : 'w-28 h-28 md:w-36 md:h-36 -mb-2'}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                 </svg>
              </div>
           </div>
        </div>

        {/* BOTTOM: Nombre */}
        <div className={`mt-auto w-full text-center bg-black/60 backdrop-blur-sm ${isMini ? 'py-1' : 'py-2 md:py-3'} border-t border-white/20 rounded-b-lg shadow-sm z-30`}>
          <h3 className={`font-extrabold uppercase text-white tracking-widest truncate px-1 ${isMini ? 'text-[8px]' : 'text-sm md:text-base'}`}>
            {jugador.nombre}
          </h3>
        </div>
      </div>
    </div>
  );
}