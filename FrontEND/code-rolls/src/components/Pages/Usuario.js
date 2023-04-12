import React from "react";
import Nutri from "../components-Nutri/Nutri";
import BasicUserCard from "../components-Usuario/BasicUserCard";
import UserDetails from "../components-Usuario/UserDetails";
import { Row, Col, Card, Button } from "antd";
import "bootstrap/dist/css/bootstrap.css";
const Usuario = () => {
  

  return (
    // <div>
    //     <Nutri descripcion = 'Hola esta es una prueba para Nutri la Nutria'/>
    // </div>
    <div style={{ padding: "1em" }}>
      <h3 style={{ marginLeft: "10px" }}>Detalles de usuario</h3>
      <br></br>
      <Button type="primary" size="large">
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
  );
};

export default Usuario;
