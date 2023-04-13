import { Button, Col, Drawer, Form, Input, Row, Space } from "antd";

export const NuevaOpcionDrawer = ({ onClose, open }) => {
  return (
    <Drawer
      title="Añadir opción de platillo"
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
              name="name"
              label="Nombre del platillo"
              rules={[{ required: true }]}
            >
              <Input placeholder="Ej: Pescado con arroz" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              name="details"
              label="Descripción del platillo"
              rules={[{ required: true }]}
            >
              <Input placeholder="Ej: 250 gr, gr, pescado blanco, 250 gr, arroz blanco cocido" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};
