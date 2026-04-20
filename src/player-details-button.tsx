type Props = {
  shirtNumber: number;
  onClick: () => void;
};

export function PlayerDetailsButton({ shirtNumber, onClick }: Props) {
  return (
    <button onClick={onClick}>
      <span style={{ position: "relative", display: "inline-block" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 80"
          width="60"
          height="48"
        >
          <polygon
            points="25,0 75,0 90,20 75,25 75,80 25,80 25,25 10,20"
            fill="#cc0000"
            stroke="#990000"
            strokeWidth="2"
          />
        </svg>
        <span
          style={{
            position: "absolute",
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: 1,
            pointerEvents: "none",
          }}
        >
          {shirtNumber}
        </span>
      </span>
    </button>
  );
}
