import React from 'react';
import grupo from "../../public/assets/Group.png"
import "../components/Hero.css"


const Hero = () => {
    return (
        <section className="hero">
            <img src={grupo} className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    );
}

export default Hero;
