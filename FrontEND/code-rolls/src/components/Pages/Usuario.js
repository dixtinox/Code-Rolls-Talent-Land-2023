import {Form,Button,CheckBox,DatePicker,Input,Select} from 'antd';
import {Draw} from './Drawer2'; 


function Usuario(){
    return <>
    
        <div className="App"> 
            <header className="App-header">
                <Form>
                    <h1>Datos actuales</h1>
                    <Form.Item name='fullName' label='Nombre completo'>
                    <Input placeholder= ""/>
                   </Form.Item>

                   <Form.Item name='Edad' label='Edad'>
                    <Input placeholder= ""/>
                   </Form.Item>

                   <Form.Item name='Peso' label='Peso'>
                    <Input placeholder= ""/>
                   </Form.Item>

                   <Form.Item name='Estatura' label='Estatura'>
                    <Input placeholder= ""/>
                   </Form.Item>

                   <Form.Item name='Genero' label='Genero'>
                    <Input placeholder= ""/>
                   </Form.Item>

                   <Form.Item name='Antecedentes' label='Antecedentes'>
                    <Input placeholder= ""/>
                   </Form.Item>
                   
                </Form>
            </header>
            <button>Editar</button>
        </div>
        
        <Draw></Draw>
    
    </>
}

export default Usuario;