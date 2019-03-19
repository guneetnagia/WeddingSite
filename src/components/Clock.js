import React from 'react';
import './Clock.css';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            days:0,hours:0,minutes:0,seconds:0
        }
    }
    componentWillMount(){
        console.log(this.props.deadline);
    }

    componentDidMount(){
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
     }  

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        console.log(time);
        if(time<0){
            this.setState({
                days:0,hours:0,minutes:0,seconds:0
            })
        }
        else{
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60)
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor(time/(1000*60*60*24));
            this.setState({
                days,hours,minutes,seconds
            });
        }
    }

    render(){
        return(

            <div className="date-container">
                    <div className="days-section">
                        <div>
                            <span className="simply-amount">{ this.state.days }</span>
                            <span className="simply-word">days</span>
                        </div>
                    </div>
                    <div className="hours-section">
                        <div>
                            <span className="simply-amount">{ this.state.hours }</span>
                            <span className="simply-word">hours</span>
                        </div>
                    </div>
                    <div className="minutes-section">
                        <div>
                            <span className="simply-amount">{ this.state.minutes }</span>
                            <span className="simply-word">minutes</span>
                        </div>
                    </div>
                    <div className="seconds-section">
                        <div>
                            <span className="simply-amount">{ this.state.seconds }</span>
                            <span className="simply-word">seconds</span>
                        </div>
                    </div>
                </div>
                

        );
    }
}

export default Clock;