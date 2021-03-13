import React from "react";
import { Switch, Route, Link } from "react-router-dom";

const CountryDetail = () => {
  return (
    <Switch>
      <Route path="/countries/details">
        <div>
          <h1>Country Details</h1>
        </div>
      </Route>
    </Switch>
  );
};

export default CountryDetail;
