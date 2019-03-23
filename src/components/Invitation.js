import React from 'react';
import { Icon } from 'semantic-ui-react';
import './Invitation.css';

const Invitation=()=>{
    return (
        <div className="fh5co-bg">
            <div className="overlay"></div>
            <div className="containers">
                <div className="row1">
                    <div>Our Special Events</div>
                    <h2>Wedding Events</h2>
                </div>

                <div className="row2">
                    <div className="main-ceremony">
                        <h3>Main Ceremony</h3>
                        <div className="event-col">
                            <div className="event-time">
                                <Icon className="time_icon" loading fitted name="clock outline" size="large"></Icon>
                                <span>4:00 PM</span>
                                <span>6:00 PM</span>
                            </div>
                            <div className="event-date">
                                <Icon className="time_icon" fitted name="calendar outline" size="large"></Icon>
                                <span>Monday 28</span>
                                <span>April, 2019</span>
                            </div>
                        </div>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                        </p>
                    </div>
                    <div className="wedding-ceremony">
                        <h3>Wedding Ceremony</h3>
                        <div className="event-col">
                            <div className="event-time">
                                <Icon className="time_icon" loading fitted name="clock outline" size="large"></Icon>
                                <span>4:00 PM</span>
                                <span>6:00 PM</span>
                            </div>
                            <div className="event-date">
                                <Icon className="time_icon" fitted name="calendar outline" size="large"></Icon>
                                <span>Monday 28</span>
                                <span>April, 2019</span>
                            </div>
                        </div>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Invitation;