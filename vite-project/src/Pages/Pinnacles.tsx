import './Pinnacles.css';

import React, { useEffect } from 'react';

interface CardProps {
  title: string;
  date: string;
  description: string;
}

const TimelineEntry: React.FC<CardProps & { position: 'left' | 'right' }> = ({ title, date, description, position }) => {
  return (
    <div className={`container ${position}`}>
      <div className="content">
        <h2>{title}</h2>
        <h3>{date}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Pinnacles: React.FC = () => {
  useEffect(() => {
    const progressBar = document.getElementById('myBar');
    const updateProgressBar = () => {
      if (progressBar) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
      }
    };

    window.onscroll = () => updateProgressBar();

    // Clean up the event listener on unmount
    return () => {
      window.onscroll = null;
    };
  }, []);
  return (
    <div>
      <div className="header">
        <div className="progress-container">
          <div className="progress-bar" id="myBar"></div>
        </div>
      </div>
      <div className="timeline">
        <div className="timeline">
         <TimelineEntry
            title="Data Analytics Apprentice, Google"
            date="June-2024"
            description="Dreams DO Come True! Currently working with PerfSol Team under Large Customer Sales."
            position="left"
          />
         <TimelineEntry
            title="Machine Learning Intern, Ziegler Aerospace"
            date="12/23 - 05/24"
            description="Worked as ML Intern on a project for reognizing and recreating safety stickers on Airlines."
            position="right"
          />
          <TimelineEntry
            title="Mathworks and AICTE Virtual Internship Completion"
            date="October-2023"
            description="MathWorks and AICTE collaborated to launch the 'Get Started with AI' virtual internship, upskilling 5000 students, which I have completed and earned certification for."
            position="left"
          /> 
          <TimelineEntry
            title="ML Team Lead, GDSC ANITS"
            date="September-2023"
            description="Have been selected as the team lead of Machine Learning Division."
            position="right"
          />
          <TimelineEntry
            title="Azure Security Compliance and Identity fundamentals"
            date="June-2023"
            description="Mastered Azure Security Compliance and Identity Fundamentals, solidifying expertise in safeguarding systems and managing identities within the Azure environment."
            position="left"
          />
          <TimelineEntry
            title="Azure Fundamentals"
            date="June-2023"
            description="Achieved proficiency in Azure Fundamentals, gaining insights into cloud technology and its diverse array of services."
            position="right"
          /> 
          <TimelineEntry
            title="Azure AI Fundamentals"
            date="May-2023"
            description="Successfully accomplished the Azure AI Fundamentals course, enhancing my proficiency in artificial intelligence within the Azure ecosystem."
            position="left"
          />
          <TimelineEntry
            title="Foundational Year Completion"
            date="December-2022"
            description="After overcoming numerous hurdles, I successfully attained my Foundational Year certification, marking the completion of a significant phase in my journey."
            position="right"
          />
          <TimelineEntry
            title="IEEE Xtreme 16.0"
            date="October-2022"
            description="Participated in IEEE Xtreme 16.0, securing the 139th position at the state level in a rigorous 24-hour programming contest."
            position="left"
          />
          <TimelineEntry
            title="ACM Summer Schools"
            date="July-2022"
            description="I was one of the 50 female students across India who got a chance to attend the ACM Summer School jointly conducted by IIT Madras and RBCSDSAI"
            position="right"
          />
          <TimelineEntry
            title="First Year Triumph: Runner-Up Achievement"
            date="April-2022"
            description="Secured second position in BTech's freshman year, earning a reward of 1500 rupees."
            position="left"
          />
          <TimelineEntry
            title="IITM Online BS Degree"
            date="October-2021;"
            description="Qualified the qualifier exam and have successfully entered the foundational year of BS Degree in Data Science and Programming."
            position="right"
          />
          {/* Add more TimelineEntry components for other entries */}
        </div>
      </div>
    </div>
  );
};

export default Pinnacles;
