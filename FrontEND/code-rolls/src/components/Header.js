import React, { useState } from "react";
import { Menu, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { DashboardOutlined, UserOutlined, BookOutlined } from "@ant-design/icons";

const AppHeader = () => {
  const [openMenu, setopenMenu] = useState(false);
  return (
    <div className="AppHeader">
      <button
        className="logoDemeter"
        onClick={() => setopenMenu(true)}
      >
        <MenuOutlined/>  &nbsp; DEMÉTER
      </button>

      <div className="SideBar">
        <Drawer
          width={300}
          bodyStyle={{ margin: 0, padding: 0 }}
          open={openMenu}
          closable={false}
          placement="left"
          title="DEMÉTER"
          onClose={() => setopenMenu(false)}
        >
          <Dash setopenMenu= {setopenMenu}/>
        </Drawer>
      </div>
    </div>
  );
};

function Dash(props) {
const {setopenMenu} = props
  const navigate = useNavigate();
  return (
    <Menu
      style={{ border: "none", padding: "20px 5px", margin: 0 }}
      className="dash--menu"
      onClick={(item) => {
        navigate(item.key);
        setopenMenu(false);
      }}
      items={[
        {
          label: "Dashboard",
          key: "/",
          icon: <DashboardOutlined />
        },
        {
          label: "Usuario",
          key: "/user",
          icon: <UserOutlined />
        },
        {
          label: "Planes Alimenticios",
          key: "/planes",
          icon: <BookOutlined />
        },
      ]}
    ></Menu>
  );
}

export default AppHeader;
