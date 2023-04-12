import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {Card} from 'antd';
import { BoldOutlined } from '@ant-design/icons';

const Plan = (props) => {
  return (
    <div className='planes--plan col-lg-3 col-md-4 col-sm-6 mx-auto'>
        <a href='' style={{color: 'transparent'}}>
            <Card title = {props.nombre} style={{backgroundColor: props.tinte, color: 'white'}}>
                <p><strong>TIPO:</strong> {props.tipo}</p>
                <p><strong>DADA POR:</strong> {props.autor}</p>
            </Card>
        </a>
    </div>
  )
}

export default Plan