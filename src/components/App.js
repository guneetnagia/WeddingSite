import React from 'react';
import MenuText from './MenuText';
import Clock from './Clock';
import './App.css';


const App = () => {
    function getBride() { 
        return 'Adam';
    }
    function getGroom(){
        return 'Eve';
    }
    function getVenue(){
        return 'New York, USA';
    }
    function getDate_Wedding(){
        return 'May, 4, 2019';
    }    
    return (
    <div className="body">
        <div className="header-wed"></div>
        <div className="body-wed">
            <div className="parallax">
                <div className="menu-container">
                    <div className="menu-left">Wedding</div>
                    <div className="menu-right"><MenuText /></div>
                </div>
                <div className="bg-image text-center">
                    <h1>{ getBride() } & { getGroom() }</h1>
                    <h2>We are getting married</h2>
                </div>

                <Clock deadline={getDate_Wedding()}/>

                <div className="save-date">
                        <div className="ui white button" style={{color:'#F14E95'}}>
                            <i className="heart red icon"></i>SAVE THE DATE
                        </div>
                </div>
            </div> 
            <div className="row-page2"> 
                <div className="text-center">
                    <h2>Hello</h2>
    
                    <h3>{ getDate_Wedding() } { getVenue() }</h3>
                    <p>We invited you to celebrate our wedding</p>
                </div>
            </div>
        </div> 
        <div className="footer"></div>
    </div>
    );
}

export default App;