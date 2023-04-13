import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Nutri from "../components-Nutri/Nutri";
import { Card, Popover, Button } from "antd";
import {  Button as bootstrapButton } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { getColorsCard } from "./utils";
import { useState } from 'react'
import {BsInfoCircle} from 'react-icons/bs'

const Plan = (props) => {
  const navigate = useNavigate();
  const [activeNutri, setActiveNutri] = useState(false);

  const toggle = () => {
    setActiveNutri(!activeNutri)
  }
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
    </div>
  );
  return (
    <>
      <Popover content={content} title="Acciones" trigger="click">
        <div className="planes--plan col-lg-3 col-md-4 col-sm-6 mx-auto">
          <br></br>
          <Card
            title={props.diet_name}
            style={{
              backgroundColor: getColorsCard(props.number),
              color: "white",
            }}
            extra={
              <><bootstrapButton variant="flat" onClick={toggle}>
                <BsInfoCircle />
              </bootstrapButton><Nutri
                active={activeNutri}
                toggle={toggle}
                imagen={0}
                class="nutri--containerCircular"
                descripcion={`Hola, Este es el plan alimenticio "${props.diet_name}" puedes revisar los detalles de este plan dando click en el recuadro y posteriormente en "Ver detalles"`}
              ></Nutri></>
            }
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
