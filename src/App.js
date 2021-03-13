import React, { useState, useEffect } from "react";
import Country from "./Components/Country/Country";
import Nav from "./Components/Navbar/Nav";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

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

  const countryList = () => {
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {countries.map((country) => (
          <Country key={country.alpha2Code} country={country}>
            {country.name}
          </Country>
        ))}
      </div>
    );
  };

  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <nav className="sticky-top">
            <Nav />
          </nav>
        </Route>

        <Route path="/countries">{countryList()}</Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
