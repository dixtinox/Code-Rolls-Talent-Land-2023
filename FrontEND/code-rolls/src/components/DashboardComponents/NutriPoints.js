import React from 'react'
import { Avatar, Badge, Space } from 'antd';
import { FaPaw, FaTrophy } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';


const NutriPoints = ({title, containerColor, points, perfectDays, animar}) => {
    console.log(`Dentro de nutripoints ${points}`)
  return (
    <div className='d-flex' style={{ 
        backgroundColor: containerColor,
        borderRadius: "10px",
        padding:"20px",
        maxWidth: "340px"
    }}>
        <Space size="middle" direction='vertical' className={`elemento ${animar[0] ? 'animate__animated animate__bounce' : ''}`}>
            <h5>{title[0]}</h5>
            <div className="columns align-items-center">
                <Badge count={points} showZero overflowCount={9999}>
                    <FaPaw size={36}/>
                </Badge>
            </div>
        </Space>
        <Space size="middle" direction='vertical' className={`elemento ${animar[1] ? 'animate__animated animate__bounce' : ''}`}>
            <h5>{title[1]}</h5>
            <div className="columns align-items-center">
                <Badge count={perfectDays} showZero overflowCount={9999}>
                    <FaTrophy size={36}/>
                </Badge>
            </div>
        </Space>
    </div>
  )
}

export default NutriPoints