import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Descriptions, Badge } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

const UserDetails = (props) => {
  const [user, setUser] = useState([]);

  const getIMC = (weight, height) => {
    return (weight / (height*height)).toFixed(2)
  }

  const getUserData = async () => {
    const response = await axios.get(
      "http://localhost:3000/user/6436434ec1c5ad4d6023a8c0"
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
      perfectDays,
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
      perfectDays,
    });
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      <div>
        <br></br>
        <Descriptions title="Información del usuario" bordered>
          <Descriptions.Item label="nombre">{user.name}</Descriptions.Item>
          <Descriptions.Item span={2} label="Correo">
            {user.email}
          </Descriptions.Item>
          <Descriptions.Item label="Género">{user.gender}</Descriptions.Item>
          <Descriptions.Item label="Fecha de nacimiento" span={2}>
            {user.birthDate}
          </Descriptions.Item>
          <Descriptions.Item label="Estatura en metros">
            {user.height}
          </Descriptions.Item>
          <Descriptions.Item label="Peso en kg">
            {user.weight}
          </Descriptions.Item>
          <Descriptions.Item label="Indice de masa corporal">
            {getIMC(user.weight, user.height ) ?? ""}
          </Descriptions.Item>
          <Descriptions.Item label="Enfermedades de familiares" span={3}>
            {user.healthHistory?.familyDiseases ?? ""} 
          </Descriptions.Item>
          <Descriptions.Item label="Enfermedades de pasadas" span={3}>
            {user.healthHistory?.pastDiseases ?? ""} 
          </Descriptions.Item>
          <Descriptions.Item label="Enfermedades actuales" span={3}>
            {user.healthHistory?.currentDiseases ?? ""} 
          </Descriptions.Item>
          <Descriptions.Item label="Medicación actual" span={3}>
            {user.healthHistory?.currentMedications ?? ""} 
          </Descriptions.Item>
          <Descriptions.Item label="Hábitos" span={3}>
            {user.healthHistory?.habits ?? ""} 
          </Descriptions.Item>
          
        </Descriptions>
      </div>
    </>
  );
};

export default UserDetails;
