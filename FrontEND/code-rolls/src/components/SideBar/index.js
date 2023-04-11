import React, { useState } from 'react'
import { Menu, Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
  const [openMenu, setopenMenu] = useState(false);
  return (
    
    <div className='Sidebar'>
      <Drawer 
      open={openMenu}
      closable={false} 
      placement='left'
      onClose={() => 
        setopenMenu(false)}>
        <Dash />
      </Drawer>
    </div>
  )
}

function Dash(){
  const navigate = useNavigate()
  return(
    <Menu
        onClick={(item) => {
          navigate(item.key);
        }}
       items={[
        {
          label: "Dashboard",
          key: "/"
        },
        {
          label: "Usuario",
          key: "/user"
        },
        {
          label: "Planes Alimenticios",
          key: "/planes"
        },
      ]}>
    </Menu>
  )
  
}

export default SideBar