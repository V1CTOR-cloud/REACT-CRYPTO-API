import React from "react";


function validarLogin(usuario, contraseña) {
    let arruser = usuario.split();
    let arrPass = contraseña.split();

    
}

function Login() {

    return (
        <div className="cont-form">
            <form action="">
                <h1>Login</h1>
                <input type="text" placeholder="Nombre/email..." className="box"/>
                <input type="password" name="pass" id="" placeholder="Contraseña"
                 className="box"/>
                <input type="submit" value="Iniciar sesión" className="btn" />
            </form>
        </div>
    )
}

export default Login;