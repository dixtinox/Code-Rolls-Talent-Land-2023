import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useParams } from "react-router-dom";
import data from "../components-Planes/data";
import { MealList } from "../components-DetallePlan/MealList";
import { Button, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { BackButton } from "../common/backButton"
import { NuevaComidaDrawer } from "../components-Planes/EditarPlan/NuevaComidaDrawer";
import { NuevaOpcionDrawer } from "../components-Planes/EditarPlan/NuevaOpcionDrawer";

const DetallePlan = () => {
  const { id } = useParams();
  const diet = data.find((plan) => plan._id.toString() === id);
  const navigate = useNavigate();

    
  const [openNewMeal, setOpenNewMeal] = useState(false);
  const [openNewOption, setOpenNewOption] = useState(false);

  const showDrawerNewMeal = () => {
    setOpenNewMeal(true);
  };

  const onCloseNewMeal = () => {
    setOpenNewMeal(false);
  };

  const showDrawerNewOption = () => {
    setOpenNewOption(true);
  };

  const onCloseNewOption = () => {
    setOpenNewOption(false);
  };

  const render = diet.meals.map((meal) => {
    return (
      <>
       <Divider plain>{meal.label} - {meal.meal_time} hrs</Divider>
       <h5>Opciones de platillos</h5>
       <MealList meals={meal.options}></MealList> 
       <Button onClick={showDrawerNewOption}>
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
        <Button type="primary" size="large" onClick={showDrawerNewMeal}>Agregar Comida</Button>
        <br></br>
        <br></br>
        {render}
      </div>
      <NuevaComidaDrawer onClose={onCloseNewMeal} open={openNewMeal}></NuevaComidaDrawer>
      <NuevaOpcionDrawer onClose={onCloseNewOption} open={openNewOption}></NuevaOpcionDrawer>
    </>
  );
};

export default DetallePlan;
