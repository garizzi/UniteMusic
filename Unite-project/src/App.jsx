import React from 'react';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import MainContent from './components/MainContent';


// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  return (
    <div className='container'>
      <h1>Unite</h1>
      <Header />
      <MainContent />
      <LoginForm />
    </div>
  );
}

export default App;
