import React from "react";
import Nutri from "../components-Nutri/Nutri";
import BasicUserCard from "../components-Usuario/BasicUserCard";
import { Row, Col, Descriptions, Badge, Card, Button } from "antd";
import "bootstrap/dist/css/bootstrap.css";

const Usuario = () => {
  return (
    // <div>
    //     <Nutri descripcion = 'Hola esta es una prueba para Nutri la Nutria'/>
    // </div>
    <div style={{ padding: "1em" }}>
      <h3 style={{ marginLeft: "10px" }}>Usuario</h3>
      <br></br>
        <Button type="primary" size="large">Editar</Button>
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
            <Descriptions title="User Info" bordered>
              <Descriptions.Item label="Product">
                Cloud Database
              </Descriptions.Item>
              <Descriptions.Item label="Billing Mode">
                Prepaid
              </Descriptions.Item>
              <Descriptions.Item label="Automatic Renewal">
                YES
              </Descriptions.Item>
              <Descriptions.Item label="Order time">
                2018-04-24 18:00:00
              </Descriptions.Item>
              <Descriptions.Item label="Usage Time" span={2}>
                2019-04-24 18:00:00
              </Descriptions.Item>
              <Descriptions.Item label="Status" span={3}>
                <Badge status="processing" text="Running" />
              </Descriptions.Item>
              <Descriptions.Item label="Negotiated Amount">
                $80.00
              </Descriptions.Item>
              <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
              <Descriptions.Item label="Official Receipts">
                $60.00
              </Descriptions.Item>
              <Descriptions.Item label="Config Info">
                Data disk type: MongoDB
                <br />
                Database version: 3.4
                <br />
                Package: dds.mongo.mid
                <br />
                Storage space: 10 GB
                <br />
                Replication factor: 3
                <br />
                Region: East China 1
                <br />
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Usuario;
