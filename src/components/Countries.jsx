import { useEffect } from "react";
import { useState } from "react";

import Countrie from "./countrie";

export default function Countries() {
  const [country, setCountry] = useState([]);

  const [visitedcountries, setVisitedcountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  const handleVisited = (country) => {
    console.log("sdfgsdf");

    const newvisit = [...visitedcountries, country];
    setVisitedcountry(newvisit);
  };

  return (
    <div>
      <h5>visited countrey : {visitedcountries.length}</h5>
      <p>
        {visitedcountries.map((con, index) => (
          <p key={index}>
            {con.name.common}
            <li>{con.population}</li>
          </p>
        ))}
      </p>

      {/* <h2> Country : {country.length}</h2> */}
      <div className="style">
        {country.map((item, index) => (
          <h2 key={index}>
            <Countrie countrie={item} handleVisited={handleVisited} />{" "}
          </h2>
        ))}
      </div>
    </div>
  );
}
