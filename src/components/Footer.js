import React from 'react'
import gitHubIcon from '../assets/GitHub-Mark-32px-blue.png'
const Footer = () => {
    const emailIcon = '📩'
    return (
        <div id="contact" className="has-text-centered">
            <div>
                <div id='email' className="column is-one-third">
                    <a href="mailto:tbarnaby1@gmail.com"> email{emailIcon}</a>

                </div>
                <div id='linkedin' className="column is-one-third">
                    <a href="https://linkedin.com/in/tbarns"> linkedin</a>

                    <figure className="image is-32x32 is-inline-block">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin icon"/>
                    </figure>
                </div>
                <div id='github' className="column is-one-third">
                    <a href="https://github.com/tbarns"> GitHub</a>

                    <figure className="image is-32x32 is-inline-block">
                        <img src={gitHubIcon} alt="github icon"/>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Footer