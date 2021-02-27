import React, { useState, useEffect } from "react";
import Country from "./Components/Country/Country";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  const handleAddCountry = (country) => {
    console.log("added", country);
  };

  useEffect(() => {
    const url = "https://restcountries.eu/rest/v2/all";

    const countryData = async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const data = await response.json();
        setCountries(data);
      }
    };

    countryData().catch((e) => {
      console.log(
        "There has been a problem with your fetch operation: " + e.message
      );
    });
  }, []);

  return (
    <div className="App">
      <h1>Countries Loaded: {countries.length}</h1>
      <h4>Country Added: </h4>
      {countries.map((country) => (
        <Country
          key={country.alpha2Code}
          country={country}
          handleAddCountry={handleAddCountry}
        >
          {country.name}
        </Country>
      ))}
    </div>
  );
}

export default App;
