import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">
        <span className="fade-in">What is Waslah?</span>
      </h1>
      <div className="logo-bounce">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Waslah Logo"
          className="about-logo"
        />
      </div>
      <p className="about-desc slide-in">
        <strong>Waslah</strong> is a platform designed to connect students,
        trainees, and supervisors for a seamless internship management experience.
      </p>
      <ul className="about-list">
        <li className="list-animate">
          🔗 Connects students with internship opportunities
        </li>
        <li className="list-animate">
          📊 Tracks progress and tasks for trainees
        </li>
        <li className="list-animate">
          📝 Enables supervisors to manage reports and trainees
        </li>
        <li className="list-animate">
          💬 Built-in chat for easy communication
        </li>
      </ul>
      <p className="about-goal fade-in">
        Our goal is to make internships more organized, transparent, and productive
        for everyone involved!
      </p>
      <div className="about-wave"></div>
    </div>
  );
}

export default About;