import React from 'react';
import ImageCircular from './ImageCircular';
import './PersonalInfo.css';

const PersonalInfo =(props)=>{
    return (
        <div className="AvatarDesc">
                    <div className="leftFloat">
                        <h3 className="leftName">{ props.groomName }</h3>
                        <p className="leftDesc">Far far away, behind the word mountains. Separated they live in Bookmarksgrove</p>                    
                    </div>
                    <ImageCircular sr={ props.groomAvatar } className="leftImage" />
                    <ImageCircular sr={ props.brideAvatar } className="rightImage" />
                    <div className="rightFloat">
                        <h3 className="rightName">{ props.brideName }</h3>
                        <p className="rightDesc">Far far away, behind the word mountains. Separated they live in Bookmarksgrove</p>
                    </div>
        </div>
    )
}

export default PersonalInfo;