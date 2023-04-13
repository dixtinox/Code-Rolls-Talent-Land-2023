import React from 'react'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap'
import {BsInfoCircle} from 'react-icons/bs'
import imagen0 from '../images/nutri0.png'
import imagen1 from '../images/nutri.png'
import imagen2 from '../images/nutriAzul.png'

const Nutri = (props) => {

    const [isShow, invokeModal] = React.useState(false)
    const initModal = () => {
        return invokeModal(!false)
    }
    const closeModal = () => {
        return invokeModal(false)
    }

    function seleccionarImagen(num){
        if(num == 0){
            return imagen0
        }else if(num == 1){
            return imagen1
        }else{
            return imagen2
        }
    }

    return(
        <>
        <Button variant={props.variant} onClick={(event) => {
            initModal();
        }}>
        <BsInfoCircle />
        </Button>
        <div className='popup--container'>
            <Modal show={isShow}>
            <Modal.Body>
                <Container fluid>
                    <Row>
                        <Col sm='4'>
                            <div className={props.class}>
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
            </Modal.Body>
            </Modal>
        </div>
      </>
    )
}

export default Nutri;