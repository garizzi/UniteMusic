import React from 'react';
import './SignupForm.css';

const SignupForm = () => {
  return (
    <aside>
      <h2><span>Inscreva-se Agora</span></h2>
      <h2>Na Unite Music!!</h2>
      <p>O site Unite Music foi feito para agilizar e ajudar os artistas no processo de formações de bandas, te ajudando a encontrar um outro músico compatível com você!!.</p>
      <form action="cadastro.html">
        <input type="submit" value="Cadastre-se! > " />
      </form>
    </aside>
  );
};

export default SignupForm;
