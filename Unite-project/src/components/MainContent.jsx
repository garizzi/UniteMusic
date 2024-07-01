import React from 'react';
import './MainContent.css';
import SignupForm from './SignupForm';
import { Button } from '@material-tailwind/react';

// import notaImage from './images/nota.png'; // Certifique-se de que a imagem está no caminho correto

const MainContent = () => {
  return (
    <main>
      <SignupForm />
      <article>
        <Button color="lightBlue">Hello World</Button>
      </article>
    </main>
  );
};

export default MainContent;
