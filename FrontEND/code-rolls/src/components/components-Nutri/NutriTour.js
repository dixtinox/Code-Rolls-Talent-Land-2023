import React from 'react'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap'
import imagen1 from '../images/nutri.png'
import imagen2 from '../images/nutriAzul.png'

const NutriTour = (props) => {

    function seleccionarImagen(num){
        if(num == 1){
            return imagen1
        }else{
            return imagen2
        }
    }

    return (
        <Container fluid>
            <Row>
                <Col sm='4'>
                    <div className='nutri--container'>
                        <img className='nutri' src={seleccionarImagen(props.imagen)}/>
                    </div>
                </Col>
                <Col sm='8'>
                    <Modal.Header closeButton onClick={closeModal}>
                        <Modal.Title>Nutri</Modal.Title>
                    </Modal.Header>
                    {props.descripcion}
                </Col>
            </Row>
        </Container>
    )
}

export default NutriTour;
