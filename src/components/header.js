import React from 'react';
import logo from '../../public/images/logo.svg';
import './App.css';
const Header = (props)=>{
  return(
    <div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Nova's code challenge! - {props.contestant}</h1>
				</header>
			</div>
  )
}

export default Header;