// import logo from './logo.svg';
import React from 'react';
import "./CSS/login.css";
// import "./Image/logo.png";
import logo from "./images/calendar.png";

export function App() {
  return (
  <div className="container">
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
    <header>
        <nav>
            <ul class="left-section">
                <li><a href="#" className="calendarImg">
                  <img src={logo}></img></a> 
                </li>
                <li><button className="eventos-btn">Eventos</button></li>
                <li><button className="populares-btn">Populares</button></li>
                <li><button className="organizar-btn">Organizar Eventos</button></li>
            </ul>
            <ul class="right-section">
                {/* <li><a href="#" id="procurar-btn">Procurar</a></li> */}
                <form class="search-container">
                <input type="text" className="search-bar" placeholder="Busca"></input>
                <a href="#"><img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"></img></a>
              </form>
                <li><button className="entrar-btn">Entrar</button></li>
                <li><button className="registrar-btn">Registrar</button></li>
                
            </ul>
        </nav>
    </header>



 <div class="geral">
    <p className ="text">
      <h1 className ="h1">Login</h1>
      <span className ="span1">Realize login para acessar as funcionalidades da Plataforma</span>
    </p>


  <form className='form'>
    <div className="InputContainer">
      <label htmlFor="email"></label>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="username"/>
    </div>

    <div className="InputContainer">
      <label htmlFor="password"></label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"/>
    </div>
    {/* <a href='#'>Esqueceu sua senha?<br/></a> */}
    <button className='buttonNewRegister'>
    Registre-se
    </button>
    <button className='buttonLogin'>
    Entrar
    </button>
  </form>
  </div>
  </div>
  );
  
}

// export default App;

