import React from 'react';
import MenuText from './MenuText'
import './App.css';

const App = () => {
    const venue='New York, USA';
    const date_wedding='June 1st, 2080';
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
                    <h1>Adam & Ede</h1>
                    <h2>We are getting married</h2>
                </div>
                <div className="date-container">
                    <div className="days-section">
                        <div>
                            <span className="simply-amount">30</span>
                            <span className="simply-word">days</span>
                        </div>
                    </div>
                    <div className="hours-section">
                        <div>
                            <span className="simply-amount">30</span>
                            <span className="simply-word">days</span>
                        </div>
                    </div>
                    <div className="minutes-section">
                        <div>
                            <span className="simply-amount">30</span>
                            <span className="simply-word">days</span>
                        </div>
                    </div>
                    <div className="seconds-section">
                        <div>
                            <span className="simply-amount">30</span>
                            <span className="simply-word">days</span>
                        </div>
                    </div>
                </div>
                <div className="save-date">
                        <div class="ui white button" style={{color:'#F14E95'}}>
                            <i class="heart red icon"></i>SAVE THE DATE
                        </div>
                </div>
            </div> 
            <div className="row-page2"> 
                <div className="text-center">
                    <h2>Hello</h2>
                    <h3>{date_wedding} {venue}</h3>
                    <p>We invited you to celebrate our wedding</p>
                </div>
            </div>
        </div> 
        <div className="footer"></div>
    </div>
    );
}

export default App;