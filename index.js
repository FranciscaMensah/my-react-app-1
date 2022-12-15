import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

// import logo from '../public/logo192.png';

function Navbar (){
    return (
        <div className="nav">
            <img className="nav--logo" src="logo512.png" alt="" />
           <h1 className="nav--title">ReactJS Facts</h1>
        </div>
    )
}

function MainContent (){
    return(
        <div className="main">
        <h1 className='main--title'>Importance of React</h1>
        <ul className='main--list'>
            <li>It is component-based.</li>
            <li>It makes code easy to manage.</li>
            <li>It is component-based.</li>
            <li>It is is the new tech of front-end.</li>
            <li>It makes code reusable.</li>
        </ul>
        
        </div>
    )
}


function App (){
    return (
        <>
        <Navbar />
        <MainContent />
        </>
    )
}


ReactDom.render(<div>
    <App />
</div>, 
document.getElementById("root"));