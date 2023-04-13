import React from 'react'
import { Modal, Container, Row, Col } from 'react-bootstrap'
import imagen0 from '../images/nutri0.png'
import imagen1 from '../images/nutri.png'
import imagen2 from '../images/nutriAzul.png'

const Nutri = (props) => {

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
            <Modal show={props.active}>
            <Modal.Body>
                <Container fluid>
                    <Row>
                        <Col sm='4'>
                            <div className={props.class}>
                                <img className='nutri' src={seleccionarImagen(props.imagen)}/>
                            </div>
                        </Col>
                        <Col sm='8'>
                            <Modal.Header closeButton onClick={props.toggle}>
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