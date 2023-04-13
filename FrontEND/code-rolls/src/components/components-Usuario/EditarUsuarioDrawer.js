import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  Row,
  Space,
  Select,
  DatePicker,
} from "antd";

export const EditarUsuarioDrawer = ({ onClose, open }) => {
  const { Option } = Select;
  return (
    <Drawer
      title="Editar usuario"
      width={520}
      onClose={onClose}
      open={open}
      bodyStyle={{ paddingBottom: 80 }}
      extra={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onClose} type="primary">
            Submit
          </Button>
        </Space>
      }
    >
      <Form layout="vertical">
        <Row>
          <Col span={24}>
            <Form.Item name="name" label="Nombre" rules={[{ required: true }]}>
              <Input
                placeholder="Ingresa tu nombre"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item name="email" label="email" rules={[{ required: true }]}>
              <Input placeholder="Ej: Ingresa tu correo electrónico" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
              name="birthDate"
              label="Ingresa tu fecha de nacimiento"
              rules={[{ required: true }]}
            >
              <DatePicker></DatePicker>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true, message: "Please select gender!" }]}
            >
              <Select placeholder="Selecciona tu género">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};
