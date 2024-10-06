import React from "react";

export default function Main(){
    return(
        <div className="main_container">
            <div className="description">
                <h1 className="name">Laura Smith</h1>
                <p className="occupation">Frontend Developer</p>
                <p className="website">LauraSmith.website</p>
            </div>
        <div className="btns">
            <button className="email">
            <img className="e_icon" src="./envelope.png"/>
            <p>Email</p>
            </button>

            <button className="linkedin">
            <img className="l_icon" src="./linkedin-3-16.png"/>
            <p>Linkedin</p>
            </button>

        </div>
        <div className="content">
            <div className="about">
                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className="interests">
                <h2>Interests</h2>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>

        </div>
    )
}