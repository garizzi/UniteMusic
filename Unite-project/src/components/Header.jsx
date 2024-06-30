import React from 'react';
import './SignupForm.jsx';

const Header = () => {
  return (
    <header>
      <div id="title">
        <h1>Unite Music</h1>
      </div>
      <ul>
        <a href="indexFR.html"><li>Navegar</li></a>
        <a href="indexA.html"><li>Atividades</li></a>
        <a href="indexR.html"><li>Suporte</li></a>
        <a href="login.html" id="inscreva-se-btn"><li>Login</li></a>
      </ul>
    </header>
  );
};

export default Header;
