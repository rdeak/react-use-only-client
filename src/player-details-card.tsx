import { use } from "react";
import type { Player } from "./player-service.ts";

export function PlayerDetailsCard({
  playerPromise,
}: {
  playerPromise: Promise<Player>;
}) {
  const player = use(playerPromise);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-2 text-center">
      <p>{player.shirtNumber}</p>
      <p className="text-lg font-bold text-gray-800 leading-tight">
        {player.name}
      </p>
      <p className="text-sm text-gray-500">{player.position}</p>
    </div>
  );
}
