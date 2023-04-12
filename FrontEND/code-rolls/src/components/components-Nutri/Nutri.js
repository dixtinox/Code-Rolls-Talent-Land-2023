import React from 'react'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap'
import { useRef, useState } from 'react';
import nutria from '../images/nutri.png'


const Nutri = (props) => {
    const [isShow, invokeModal] = React.useState(false)
    const initModal = () => {
        return invokeModal(!false)
    }
    const closeModal = () => {
        return invokeModal(false)
    }

    return(
        <>
        <Button variant="success" onClick={initModal}>
          Open Modal
        </Button>
        <div className='popup--container'>
            <Modal show={isShow}>
            <Modal.Body className='transparent'>
                <Container fluid className='transparent'>
                    <Row>
                        <Col sm='4'>
                            <div className='nutri--container'>
                                <img className='nutri' src={nutria}/>
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
            </Modal.Body>
            </Modal>
        </div>
      </>
    )
}

export default Nutri;