import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Avatar } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const BasicUserCard = (props) => {
  const { Meta } = Card;
  const navigate = useNavigate();

  return (
    <>
      <div >
        <br></br>
        <Card>
        <Meta
          avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Card
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
      </Card>
      </div>
    </>
  );
};

export default BasicUserCard;
