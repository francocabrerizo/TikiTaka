import { Jugador } from '../components/CartaJugador'; // Ajustá la ruta según dónde tengas el componente

export const BASE_DE_DATOS: Jugador[] = [
  // ARQUEROS (POR)
  { id: "p1", nombre: "Armani", posicion: "POR", media: 84, foto: "", escudo: "", rareza: "oro" },
  { id: "p2", nombre: "Romero", posicion: "POR", media: 85, foto: "", escudo: "", rareza: "oro" },
  { id: "p3", nombre: "Arias", posicion: "POR", media: 83, foto: "", escudo: "", rareza: "oro" },
  { id: "p4", nombre: "Losada", posicion: "POR", media: 80, foto: "", escudo: "", rareza: "plata" },
  { id: "p5", nombre: "Macagno", posicion: "POR", media: 74, foto: "", escudo: "", rareza: "bronce" },

  // LATERALES DERECHOS (LD)
  { id: "ld1", nombre: "Advíncula", posicion: "LD", media: 85, foto: "", escudo: "", rareza: "oro" },
  { id: "ld2", nombre: "Sant'Anna", posicion: "LD", media: 79, foto: "", escudo: "", rareza: "plata" },
  { id: "ld3", nombre: "Méndez", posicion: "LD", media: 77, foto: "", escudo: "", rareza: "plata" },
  { id: "ld4", nombre: "Guidara", posicion: "LD", media: 72, foto: "", escudo: "", rareza: "bronce" },

  // DEFENSORES CENTRALES (DFC)
  { id: "dfc1", nombre: "P. Díaz", posicion: "DFC", media: 86, foto: "", escudo: "", rareza: "oro" },
  { id: "dfc2", nombre: "Rojo", posicion: "DFC", media: 83, foto: "", escudo: "", rareza: "oro" },
  { id: "dfc3", nombre: "Romaña", posicion: "DFC", media: 81, foto: "", escudo: "", rareza: "plata" },
  { id: "dfc4", nombre: "Velázquez", posicion: "DFC", media: 78, foto: "", escudo: "", rareza: "plata" },
  { id: "dfc5", nombre: "Anselmino", posicion: "DFC", media: 74, foto: "", escudo: "", rareza: "bronce" },
  { id: "dfc6", nombre: "Campi", posicion: "DFC", media: 73, foto: "", escudo: "", rareza: "bronce" },

  // LATERALES IZQUIERDOS (LI)
  { id: "li1", nombre: "Blanco", posicion: "LI", media: 82, foto: "", escudo: "", rareza: "plata" },
  { id: "li2", nombre: "E. Díaz", posicion: "LI", media: 81, foto: "", escudo: "", rareza: "plata" },
  { id: "li3", nombre: "Martino", posicion: "LI", media: 76, foto: "", escudo: "", rareza: "plata" },
  { id: "li4", nombre: "Sporle", posicion: "LI", media: 71, foto: "", escudo: "", rareza: "bronce" },

  // MEDIOCAMPISTAS (MC) - Sirve para MCO, MCD, etc. en este draft
  { id: "mc1", nombre: "Banega", posicion: "MC", media: 85, foto: "", escudo: "", rareza: "oro" },
  { id: "mc2", nombre: "Medina", posicion: "MC", media: 83, foto: "", escudo: "", rareza: "oro" },
  { id: "mc3", nombre: "Echeverri", posicion: "MC", media: 84, foto: "", escudo: "", rareza: "oro" },
  { id: "mc4", nombre: "Aliendro", posicion: "MC", media: 82, foto: "", escudo: "", rareza: "plata" },
  { id: "mc5", nombre: "Zenón", posicion: "MC", media: 82, foto: "", escudo: "", rareza: "plata" },
  { id: "mc6", nombre: "Botta", posicion: "MC", media: 83, foto: "", escudo: "", rareza: "oro" },
  { id: "mc7", nombre: "Mastantuono", posicion: "MC", media: 74, foto: "", escudo: "", rareza: "bronce" },
  { id: "mc8", nombre: "Saralegui", posicion: "MC", media: 73, foto: "", escudo: "", rareza: "bronce" },

  // EXTREMOS DERECHOS (ED)
  { id: "ed1", nombre: "Solari", posicion: "ED", media: 81, foto: "", escudo: "", rareza: "plata" },
  { id: "ed2", nombre: "Zeballos", posicion: "ED", media: 80, foto: "", escudo: "", rareza: "plata" },
  { id: "ed3", nombre: "Pizzini", posicion: "ED", media: 78, foto: "", escudo: "", rareza: "plata" },
  { id: "ed4", nombre: "Santi López", posicion: "ED", media: 74, foto: "", escudo: "", rareza: "bronce" },

  // EXTREMOS IZQUIERDOS (EI)
  { id: "ei1", nombre: "Sosa", posicion: "EI", media: 85, foto: "", escudo: "", rareza: "oro" },
  { id: "ei2", nombre: "Campaz", posicion: "EI", media: 84, foto: "", escudo: "", rareza: "oro" },
  { id: "ei3", nombre: "Colidio", posicion: "EI", media: 81, foto: "", escudo: "", rareza: "plata" },
  { id: "ei4", nombre: "Tarzia", posicion: "EI", media: 68, foto: "", escudo: "", rareza: "bronce" },

  // DELANTEROS CENTRO (DC)
  { id: "dc1", nombre: "Cavani", posicion: "DC", media: 88, foto: "", escudo: "", rareza: "franquicia" }, // El único Franquicia por ahora
  { id: "dc2", nombre: "Borja", posicion: "DC", media: 87, foto: "", escudo: "", rareza: "oro" },
  { id: "dc3", nombre: "Merentiel", posicion: "DC", media: 85, foto: "", escudo: "", rareza: "oro" },
  { id: "dc4", nombre: "M. Martínez", posicion: "DC", media: 85, foto: "", escudo: "", rareza: "oro" },
  { id: "dc5", nombre: "Tarragona", posicion: "DC", media: 78, foto: "", escudo: "", rareza: "plata" },
  { id: "dc6", nombre: "Ruberto", posicion: "DC", media: 71, foto: "", escudo: "", rareza: "bronce" },
];