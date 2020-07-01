import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import './Personal.css';


function Personal(props) {
    return (
        <div className={"d-flex flex-wrap justify-content-center  pt-5 pb-3"}>
            
                <div className="d-flex flex-column">
                    <img className="selfie" alt="Me" src="https://avatars1.githubusercontent.com/u/1947151?s=400&u=19cf3879633d99fadb1e10a8601af0c07f5a2e27&v=4" />
                    <div className="text-center">
                        <a className="socialIcon" href={props.social.linkedIn} ><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a className="socialIcon" href={props.social.gitHub} ><FontAwesomeIcon icon={faGithub} /></a>
                        <a className="socialIcon" href={props.social.faceBook} ><FontAwesomeIcon icon={faFacebook} /></a>
                    </div>
                </div>
            
                <div className="text-center">
                    <div className="name">{props.name}</div>
                    <div>{props.email}</div>
                    <hr className="ml-5 mr-5 divider" />
                    <div className="pt-1 whoAmI">{props.whoAmI}</div>
                </div>
        </div>
    );
}

export default Personal;