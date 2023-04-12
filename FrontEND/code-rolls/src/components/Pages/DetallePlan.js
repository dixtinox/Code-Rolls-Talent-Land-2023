import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useParams } from "react-router-dom";
import data from "../components-Planes/data";
import { MealList } from "../components-DetallePlan/MealList";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const DetallePlan = () => {
  const { id } = useParams();
  const diet = data.find((plan) => plan._id.toString() === id);
  const navigate = useNavigate();

  return (
    <>
      <br></br>
      <div className="container-fluid">
        <div
          className="container-fluid"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Button
            shape="circle"
            title="Regresar"
            onClick={() => {
              navigate(`/planes`);
            }}
          >
            <ArrowLeftOutlined />
          </Button>
          <h3 style={{ marginLeft: "10px" }}>{diet.diet_name}</h3>
        </div>
        <br></br>
        <Button type="primary" size="large">Agregar platillo</Button>
        <br></br>
        <br></br>
        <MealList meals={diet.meals}></MealList>
      </div>
    </>
  );
};

export default DetallePlan;
