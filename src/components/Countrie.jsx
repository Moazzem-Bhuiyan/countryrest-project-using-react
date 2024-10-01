import { useState } from "react";

export default function Countrie({ countrie, handleVisited }) {
  const { name, flags, population, area } = countrie;

  const [visited, setVisited] = useState(false);

  const handle = () => {
    setVisited(!visited);
  };

  return (
    <div className="dd">
      <h4>{name.common}</h4>

      <img src={flags.png} alt="" />
      <h5>{population}</h5>
      <h5>{area}</h5>

      <button onClick={() => handleVisited(countrie)}>Marked visited</button>

      <button onClick={handle}>{visited ? "done" : "going"}</button>

      {visited ? "visited" : "on going"}
    </div>
  );
}
