import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PlayerCard } from "./player-card.tsx";
import { getPlayersShirtNumbers } from "./player-service.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className={"container"}>
      <h1 className="text-4xl font-bold text-center mb-16 tracking-wide">
        Explore Croatian National Football Team from 2018 World Cup
      </h1>
      <div className="grid grid-cols-6 gap-6 items-center justify-items-center auto-rows-[100px]">
        {getPlayersShirtNumbers().map((shirtNumber) => (
          <PlayerCard key={shirtNumber} shirtNumber={shirtNumber} />
        ))}
      </div>
    </div>
  </StrictMode>,
);
