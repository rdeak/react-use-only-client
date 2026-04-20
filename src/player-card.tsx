import { Suspense, useState } from "react";
import { PlayerDetailsCard } from "./player-details-card.tsx";
import { Loader } from "./loader.tsx";
import { findPlayer, type Player } from "./player-service.ts";
import { PlayerDetailsButton } from "./player-details-button.tsx";

export function PlayerCard({ shirtNumber }: { shirtNumber: number }) {
  const [promise, setPromise] = useState<Promise<Player> | null>(null);

  const handleOpen = () => {
    setPromise(findPlayer(shirtNumber));
  };

  return (
    <div className="">
      {promise ? (
        <Suspense fallback={<Loader />}>
          <PlayerDetailsCard playerPromise={promise} />
        </Suspense>
      ) : (
        <PlayerDetailsButton shirtNumber={shirtNumber} onClick={handleOpen} />
      )}
    </div>
  );
}
