import React from 'react';
import ReactDOM from "react-dom";
import Card from "./card";
import "./substances.css";



export default function MapPage() {
  return <div>MapPage</div>;
}

<div class="row">

<div className="column">
  <div className="card">..</div>
</div>
      <Card
        image="https://images.unsplash.com/photo-1613323115830-9a4edbd2d56d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="NO2"
        description="Nitrogen Dioxide (NO2) is one of a group of highly reactive gases known as oxides of nitrogen or nitrogen oxides (NOx). Other nitrogen oxides include nitrous acid and nitric acid. NO2 is used as the indicator for the larger group of nitrogen oxides.NO2 primarily gets in the air from the burning of fuel. NO2 forms from emissions from cars, trucks and buses, power plants, and off-road equipment."
      />

<div className="column">
  <div className="card">

      <Card
        image="https://images.unsplash.com/photo-1615053835734-7752878e939e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
        title="PM10"
        description="PM10 particles are small enough to get into your throat and lungs. High levels of PM10 can make you cough, your nose run and eyes sting.People with heart or lung conditions might have more symptoms when PM10 levels are high. Symptoms can include wheezing, chest tightness or difficulty breathing.
        "
      />
</div>
</div>

<div className="column">
  <div className="card">
      <Card
        image="https://images.unsplash.com/photo-1577799927235-7c50fec8da1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        title="	O3"
        description="Ozone (O3) is a gas that can form and react under the action of light and that is present in two layers of the atmosphere. High up in the atmosphere, ozone forms a layer that shields the Earth from ultraviolet rays. However, at ground level, ozone is considered a major air pollutant."
      />
</div>
</div>

<div className="column">
  <div className="card">
      <Card
        image="https://images.unsplash.com/photo-1607225124466-bc9c7edeb59d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="PM25"
        description="Particulate matter contains microscopic solids or liquid droplets that are so small that they can be inhaled and cause serious health problems. Some particles less than 10 micrometers in diameter can get deep into your lungs and some may even get into your bloodstream. Of these, particles less than 2.5 micrometers in diameter, also known as fine particles or PM2.5, pose the greatest risk to health."
      />
</div>
</div>

</div>


const rootElement = document.getElementById("root");
ReactDOM.render(<MapPage />, rootElement);