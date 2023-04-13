import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';

const LoginPage = () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    function saveUserAxios(){
      axios.post('http://localhost:3000/auth/signin', {
        username: username,
        password: password,
        name: "Luis",
        email: "email@gmail.com",
        birthDate: "2002-07-09T06:00:00.000+00:00",
        gender: "male",
        weight: 52,
        height: 1.75,
        healthHistory: {}
      }).then(response => {
        console.log(response.data);
        console.log('Publicado')
      }).catch(error => {
        console.log(error);
      });

    }

    function saveUser(){
        const myObject = { username: username, password: password };
        const jsonString = JSON.stringify(myObject);
        localStorage.setItem('user', jsonString);
        //console.log('Usuario guardado')
    }

    function handleLogin(event) {
        //event.preventDefault();
        saveUser();
        //console.log(`El usuario a registrar es ${username} ${password}`)
        // Aquí iría el código para autenticar al usuario
        // ...
    
        // Redirigir al usuario a la página principal después del inicio de sesión exitoso
        saveUserAxios();
        console.log('Usuario autenticado')

        history('/');
      }

    function createAccount(event){
      history('/signin');
    }

    return (
    <div className='login-page'>
      <div className='login-background'>
      </div>
      <div className='login-data'>
        <h1>Inicio de sesión</h1>
        <form onSubmit={handleLogin}>
          <label>
            Nombre de usuario:
            <Input placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value)}/>
          </label>
          <label className='mb-3'>
            Contraseña:
            <Input.Password
              placeholder="Contraseña"
               iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              value={password} onChange={e => setPassword(e.target.value)}/>
          </label>
          <button className='btn btn-warning' type="submit">Iniciar sesión</button>
        </form>
        <Link to="/signin">Crea una sesión</Link>
        <a onClick={createAccount}>No tienes cuenta? Inicia sesión aquí</a>
      </div>
    </div>
  )
}

export default LoginPage