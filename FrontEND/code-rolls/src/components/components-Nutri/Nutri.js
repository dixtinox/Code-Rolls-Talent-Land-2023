import React from 'react'
import { Button, Tour } from 'antd';
import { useRef, useState } from 'react';
import nutria from '../images/nutri.png'


const Nutri = (props) => {
    const ref = useRef(null);
    const [open, setOpen] = useState(false);
    const steps = [
        {
        title: 'Nutri',
        description: props.descripcion,
        target: () => ref.current,
        placement: 'bottom',
        cover: (
            <div className='step--cover'>
                <img className='nutri' alt="nutri.png" src={nutria} />
            </div>
          )
        }
    ];
    return (
        <div>
            <Button type="text" onClick={() => setOpen(true)} ref={ref}>
                a
            </Button>
            <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
        </div>
    )
}

export default Nutri;