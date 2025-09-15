export const dashboardMock = [

{
    id: "1",
    type: "ACCIDENT",
    location: { latitude: -21.2056403, longitude: -47.8109444 },
    description: "Acidente leve na Av. Presidente Vargas",
    time: Date.now(),
  },
  {
    id: "2",
    type: "ROADWORK",
    location: { latitude: -21.1865, longitude: -47.8071 },
    description: "Obras na Rua XV de Novembro",
    time: Date.now() - 1000 * 60 * 30,
  },
  {
    id: "3",
    type: "HEAVY_TRAFFIC",
    location: { latitude: -21.2201, longitude: -47.8185 },
    description: "Trânsito intenso na Av. João Fiúsa",
    time: Date.now() - 1000 * 60 * 10,
  },
  {
    id: "4",
    type: "WEATHER",
    location: { latitude: -21.2102, longitude: -47.7979 },
    description: "Chuvas fortes causando lentidão",
    time: Date.now() - 1000 * 60 * 60,
  },
  {
    id: "5",
    type: "ACCIDENT",
    location: { latitude: -21.1963759, longitude: -47.7726031 },
    description: "Acidente envolvendo dois carros na Av. Castelo Branco",
    time: Date.now() - 1000 * 60 * 15,
  },
  {
    id: "6",
    type: "ROADWORK",
    location: { latitude: -21.1957, longitude: -47.7973 },
    description: "Manutenção na Av. Brasil",
    time: Date.now() - 1000 * 60 * 45,
  },
  {
    id: "7",
    type: "HEAVY_TRAFFIC",
    location: { latitude: -21.1783, longitude: -47.8012 },
    description: "Congestionamento na Av. do Café",
    time: Date.now() - 1000 * 60 * 5,
  },
  {
    id: "9",
    type: "ACCIDENT",
    location: { latitude: -21.2208, longitude: -47.7999 },
    description: "Colisão na Av. Dom Pedro I",
    time: Date.now() - 1000 * 60 * 12,
  },
  {
    id: "10",
    type: "HEAVY_TRAFFIC",
    location: { latitude: -21.2054, longitude: -47.7853 },
    description: "Trânsito intenso na Av. Caramuru",
    time: Date.now() - 1000 * 60 * 25,
  },
    {
    id: "11",
    type: "HEAVY_TRAFFIC",
    location: { latitude: -22.2054, longitude: -47.7853 },
    description: "Trânsito intenso na Av. Teste",
    time: Date.now() - 1000 * 60 * 25,
  }

];