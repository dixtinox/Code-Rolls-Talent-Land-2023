import React from 'react';
import Plan from '../components-Planes/Plan';
import "bootstrap/dist/css/bootstrap.css";
import data from '../components-Planes/data'

/*<Plan nombre={cosa.title} tipo={cosa.tipo} autor={cosa.autor} tinte={cosa.tinte}/>*/


const Planes = () => {
    const render = data.map((cosa) => <Plan nombre={cosa.nombre} tipo={cosa.tipo} autor={cosa.autor} tinte={cosa.tinte}/>)
    return (
        <div className='container-fluid'>
            <div className='row gap-1'>
                {render}
            </div>
        </div>
    )
}

export default Planes;