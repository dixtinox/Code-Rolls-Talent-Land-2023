import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Avatar, Row, Col, Statistic } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { DollarCircleOutlined, StarOutlined } from "@ant-design/icons";


const BasicUserCard = () => {
  const { Meta } = Card;
  const [user, setUser] = useState([]);

  const getUserData = async () => {
    const response = await axios.get(
      "http://localhost:3000/user/6436005c3c4616f372641688"
    );
    const {
      id,
      name,
      email,
      birthDate,
      gender,
      weight,
      height,
      healthHistory,
      nutriPoints,
      perfectDays
    } = response.data;
    setUser({
      id,
      name,
      email,
      birthDate,
      gender,
      weight,
      height,
      healthHistory,
      nutriPoints,
      perfectDays
    })
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div >
        <br></br>
        <Card>
        <Meta
          avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />}
          title={user.name}
        />
        <Row gutter={16}>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="NutriPoints"
          value={user.nutriPoints}
          precision={0}
          valueStyle={{ color: '#3f8600' }}
          suffix={<DollarCircleOutlined />}
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Días perfectos"
          value={user.perfectDays}
          precision={0}
          valueStyle={{ color: '#e8940e' }}
          suffix={<StarOutlined />}
        />
      </Card>
    </Col>
  </Row>
      </Card>
      </div>
    </>
  );
};

export default BasicUserCard;
