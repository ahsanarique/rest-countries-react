import React from "react";
import "./Country.css";

const Country = (props) => {
  console.log(props);
  const { name, area, population, region, flag } = props.country;
  const handleAddCountry = props.handleAddCountry;

  const flagStyle = { height: "50px", width: "100px" };
  const countryStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "15px 5px 30px 5px lightgrey",
    borderRadius: "15px",
    padding: "5px",
    margin: "15px",
  };

  return (
    <div style={countryStyle}>
      <h2>{name}</h2>
      <img style={flagStyle} src={flag} alt="" />
      <p>Region: {region}</p>
      <p>Area: {area} km²</p>
      <p>Population: {population}</p>
      <button onClick={() => handleAddCountry(props.country)}>
        Add Country
      </button>
    </div>
  );
};

export default Country;
