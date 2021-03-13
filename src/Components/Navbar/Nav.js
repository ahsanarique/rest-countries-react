import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Nav = () => {
  const textColor = {
    textDecoration: "none",
    color: "whitesmoke",
  };

  const inputDivStyle = {
    marginLeft: "auto",
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <Link to="/" style={textColor}>
          Rest-Countries
        </Link>
      </Navbar.Brand>

      <Form style={inputDivStyle} inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Link to="/countries">
          <Button variant="outline-info">Search</Button>
        </Link>
      </Form>
    </Navbar>
  );
};

export default Nav;
