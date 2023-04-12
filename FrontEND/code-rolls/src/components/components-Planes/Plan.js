import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Popover, Button } from "antd";
import { BoldOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { getColorsCard } from "./utils"

const Plan = (props) => {
  const navigate = useNavigate();
  const content = (
    <div>
      <Button
        type="text"
        onClick={() => {
          navigate(`/planes/${props.diet_id}`);
        }}
      >
        Ver detalles
      </Button>
      <Button type="text">Lista de compras</Button>
    </div>
  );
  return (
    <>
      <Popover content={content} title="Title" trigger="click">
        <div className="planes--plan col-lg-3 col-md-4 col-sm-6 mx-auto">
          <br></br>
          <Card
            title={props.diet_name}
            style={{ backgroundColor: getColorsCard(props.number), color: "white" }}
          >
            <p>{props.diet_label}</p>
            <p>Dada por:{props.author}</p>
          </Card>
        </div>
      </Popover>
    </>
  );
};

export default Plan;
