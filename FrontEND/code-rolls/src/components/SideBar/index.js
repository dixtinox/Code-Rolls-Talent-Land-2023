import React from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
  const navigate = useNavigate()
  return (
    <div className='Sidebar'>
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

    </div>
  )
}

export default SideBar