import React from "react";
import Plan from "../components-Planes/Plan";
import "bootstrap/dist/css/bootstrap.css";
import data from "../components-Planes/data";
import { Button } from "antd";

/*<Plan nombre={cosa.title} tipo={cosa.tipo} autor={cosa.autor} tinte={cosa.tinte}/>*/

const Planes = () => {
  let count = 0;
  const render = data.map((diet) => {
    count = count >= 5 ? 1 : count + 1;
    return (
      <Plan
        number={count}
        diet_id={diet._id}
        diet_name={diet.diet_name}
        diet_label={diet.diet_label}
        author={diet.author}
        tinte={diet.tinte}
      />
    );
  });
  return (
    <>
      <br></br>
      <div className="container-fluid">
        <h3>Planes alimenticios</h3>
        <br></br>
        <Button type="primary" size={"large"}>
          Agregar nuevo
        </Button>
        <div className="row gap-1">{render}</div>
      </div>
    </>
  );
};

export default Planes;
