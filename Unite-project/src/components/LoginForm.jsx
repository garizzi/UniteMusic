import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [values, setValues] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione validação e lógica de envio aqui
  };

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form" onSubmit={handleSubmit}>
            <span className="login100-form-title p-b-26">
              Bem-vindo
            </span>
            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <span className="focus-input100" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input100 validate-input">
              <span className="btn-show-pass" onClick={() => setShowPass(!showPass)}>
                <i className={showPass ? "zmdi zmdi-eye-off" : "zmdi zmdi-eye"}></i>
              </span>
              <input
                className="input100"
                type={showPass ? 'text' : 'password'}
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <span className="focus-input100" data-placeholder="Password"></span>
            </div>
            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button className="login100-form-btn">Login</button>
              </div>
            </div>
            <div className="text-center p-t-115">
              <span className="txt1">Não tem uma conta? Cadastre-se</span>
              <a className="txt2" href="cadastro.html">Aqui!</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
