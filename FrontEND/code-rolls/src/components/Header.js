import React, { useState } from 'react'
import { Menu, Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const AppHeader = () => {
  const [openMenu, setopenMenu] = useState(false);
  return (
    <div className='AppHeader'>
      <input type='button' onClick={() => setopenMenu(true)} value='DEMÉTER' className='logoDemeter'/>

      <div className='SideBar'>
        <Drawer 
        width={300}
        bodyStyle={{margin: 0, padding: 0}}
        open={openMenu}
        closable={false} 
        placement='left'
        onClose={() => 
        setopenMenu(false)}
        >
          <Dash />
        </Drawer>
      </div>

    </div>
  )
}

function Dash(){
  const navigate = useNavigate()
  return(
    <Menu
      style={{ border: 'none', padding: '20px 5px', margin: 0}}
        className='dash--menu'
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

export default AppHeader