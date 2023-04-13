 import React from "react";
import Plan from "../components-Planes/Plan";
import { NuevoPlanDrawer } from "../components-Planes/NuevoPlan/NuevoPlanDrawer";
import "bootstrap/dist/css/bootstrap.css";
import data from "../components-Planes/data";
import { Button } from "antd";
import { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';


const Planes = () => {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
        <h3>Mis planes alimenticios</h3>
        <br></br>
        <Button type="primary" size={"large"} onClick={showDrawer} icon={<PlusOutlined />}>
          Agregar nuevo
        </Button>
        <div className="row gap-1">{render}</div>
      </div>
      <NuevoPlanDrawer onClose={onClose} open={open}></NuevoPlanDrawer>
    </>
  );
};

export default Planes;
