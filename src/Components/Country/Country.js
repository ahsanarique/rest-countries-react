import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Country.css";

const Country = (props) => {
  const { name, area, population, region, flag } = props.country;

  return (
    <Card bg="dark" className="m-2 rounded" style={{ width: "16rem" }}>
      <div className="m-2">
        <Card.Img variant="top" src={flag} />
      </div>

      <Card.Body style={{ color: "whitesmoke" }}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>Region: {region}</p>
          <p>Area: {area} km²</p>
          <p>Population: {population}</p>
        </Card.Text>
        <Link to="/countries/details">
          <Button variant="info">View More Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Country;
