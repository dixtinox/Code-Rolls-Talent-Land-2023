import React from "react";
import { useState } from 'react'
import BasicUserCard from "../components-Usuario/BasicUserCard";
import UserDetails from "../components-Usuario/UserDetails";
import { Row, Col, Card, Button } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import { EditarUsuarioDrawer } from "../components-Usuario/EditarUsuarioDrawer";
const Usuario = () => {
  
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    // <div>
    //     <Nutri descripcion = 'Hola esta es una prueba para Nutri la Nutria'/>
    // </div>
    <>
      <div style={{ padding: "1em" }}>
        <h3 style={{ marginLeft: "10px" }}>Detalles de usuario</h3>
        <br></br>
        <Button type="primary" size="large" onClick={showDrawer}>
          Editar
        </Button>
        <br></br>
        <br></br>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card>
              <BasicUserCard></BasicUserCard>
            </Card>
          </Col>
          <Col span={15} offset={1}>
            <Card>
              <UserDetails></UserDetails>
            </Card>
          </Col>
        </Row>
      </div>
      <EditarUsuarioDrawer  onClose={onClose} open={open}></EditarUsuarioDrawer></>
  );
};

export default Usuario;
