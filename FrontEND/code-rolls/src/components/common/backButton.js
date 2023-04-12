import { Button, Space } from "antd";
import { ArrowLeftOutlined } from '@ant-design/icons';




  export const BackButton = ({ onClick }) => (
    <Space>
      <Button shape="circle" title="Regresar" onClick={onClick}>
        <ArrowLeftOutlined />
      </Button>
    </Space>
  );