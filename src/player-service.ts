const PLAYERS = [
  { shirtNumber: 1, name: "Dominik Livaković", position: "Goalkeeper" },
  { shirtNumber: 2, name: "Josip Stanišić", position: "Defender" },
  { shirtNumber: 3, name: "Borna Barišić", position: "Defender" },
  { shirtNumber: 4, name: "Ivan Perišić", position: "Midfielder" },
  { shirtNumber: 5, name: "Martin Erlić", position: "Defender" },
  { shirtNumber: 6, name: "Dejan Lovren", position: "Defender" },
  { shirtNumber: 7, name: "Lovro Majer", position: "Midfielder" },
  { shirtNumber: 8, name: "Mateo Kovačić", position: "Midfielder" },
  { shirtNumber: 9, name: "Andrej Kramarić", position: "Forward" },
  { shirtNumber: 10, name: "Luka Modrić", position: "Midfielder" },
  { shirtNumber: 11, name: "Marcelo Brozović", position: "Midfielder" },
  { shirtNumber: 12, name: "Ivo Grbić", position: "Goalkeeper" },
  { shirtNumber: 13, name: "Nikola Vlašić", position: "Midfielder" },
  { shirtNumber: 14, name: "Mario Pašalić", position: "Midfielder" },
  { shirtNumber: 15, name: "Luka Ivanušec", position: "Midfielder" },
  { shirtNumber: 16, name: "Ante Budimir", position: "Forward" },
  { shirtNumber: 17, name: "Mislav Oršić", position: "Midfielder" },
  { shirtNumber: 18, name: "Marko Livaja", position: "Forward" },
  { shirtNumber: 19, name: "Borna Sosa", position: "Defender" },
  { shirtNumber: 20, name: "Joško Gvardiol", position: "Defender" },
  { shirtNumber: 21, name: "Domagoj Vida", position: "Defender" },
  { shirtNumber: 22, name: "Josip Juranović", position: "Defender" },
  { shirtNumber: 23, name: "Ivica Ivušić", position: "Goalkeeper" },
  { shirtNumber: 24, name: "Josip Šutalo", position: "Defender" },
  { shirtNumber: 25, name: "Bruno Petković", position: "Forward" },
  { shirtNumber: 26, name: "Duje Ćaleta-Car", position: "Defender" },
] as const satisfies Player[];

export type Player = { name: string; shirtNumber: number; position: string };

/**
 * Fetches player details based on the provided shirt number.
 *
 * This function mimics an API call.
 */
export const findPlayer = (shirtNumber: number) => {
  const player = PLAYERS.find((p) => p.shirtNumber === shirtNumber) ?? {
    name: "Unknown",
    shirtNumber,
    position: "Unknown",
  };

  return new Promise<Player>((resolve) => {
    setTimeout(() => resolve(player), 1000);
  });
};

/**
 * Returns an array of all player shirt numbers.
 *
 * It intentionally does not mimic API call
 */
export const getPlayersShirtNumbers = () => PLAYERS.map((p) => p.shirtNumber);
