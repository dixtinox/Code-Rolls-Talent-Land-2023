import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useParams } from "react-router-dom";
import data from "../components-Planes/data";
import { MealList } from "../components-DetallePlan/MealList";
import { Button, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../common/backButton"

const DetallePlan = () => {
  const { id } = useParams();
  const diet = data.find((plan) => plan._id.toString() === id);
  const navigate = useNavigate();

  const render = diet.meals.map((meal) => {
    return (
      <>
       <Divider plain>{meal.label} - {meal.meal_time} hrs</Divider>
       <MealList meals={meal.options}></MealList> 
       <Button>
        Agregar opción de comida
       </Button>
       <br></br>
      </>
    );
  });
  return (
    <>
      <br></br>
      <div className="container-fluid">
        <div
          className="container-fluid"
          style={{ display: "flex", alignItems: "center" }}
        >
          <BackButton
                onClick={() => {
                  navigate('/planes');
                }}
              ></BackButton>
          <h3 style={{ marginLeft: "10px" }}>{diet.diet_name}</h3>
        </div>
        <br></br>
        <Button type="primary" size="large">Agregar Comida</Button>
        <br></br>
        <br></br>
        {render}
      </div>
    </>
  );
};

export default DetallePlan;
