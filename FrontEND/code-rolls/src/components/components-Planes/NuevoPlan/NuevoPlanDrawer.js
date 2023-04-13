import { Button, Col, Drawer, Form, Input, Row, Space } from "antd";

export const NuevoPlanDrawer = ({ onClose, open }) => {
  return (
    <Drawer
      title="Crear nuevo plan alimenticio"
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
            <Form.Item
              name="diet_name"
              label="Nombre del plan alimenticio"
              rules={[{ required: true }]}
            >
              <Input
                placeholder="Ingresa el nombre del plan alimenticio"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              name="diet_label"
              label="Ingresa una etiqueta para el plan alimenticio"
              rules={[{ required: true }]}
            >
              <Input placeholder="Ej: Aumento de masa muscular" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              name="author"
              label="Ingresa el autor del plan alimenticio"
              rules={[{ required: true }]}
            >
              <Input placeholder="Ej: Nutriologo José Rodríguez" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};
