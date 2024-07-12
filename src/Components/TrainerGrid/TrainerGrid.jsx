import React from 'react';
import './TrainerGrid.css';

const trainers = [
  {
    name: 'Bhalu More',
    role: 'GYM TRAINER',
    image: 'https://beefit.in/assets/img/home/trainer/1.png'
  },
  {
    name: 'Abhinay Amerious',
    role: 'FITNESS COACH',
    image: 'https://beefit.in/assets/img/home/trainer/2.png'
  },
  {
    name: 'Deshik Acharya',
    role: 'CENTER MANAGER',
    image: 'https://beefit.in/assets/img/home/trainer/3.png'
  },
 
];

const TrainerGrid = () => {
  return (
    <>
    <div className='trainer-main-container'>
      <div className="trainers_heading_container">
            <div>
              <span style={{ color: "#f36100" }}>OUR TEAM</span>
              <h2 style={{ color: "#fff" }}>TRAIN WITH EXPERTS</h2>
            </div>
            <div>
              <button className="trainee_btn">APPOINTMENT</button>
            </div>
          </div>
          </div>
    <div className="trainer-grid">
      {trainers.map((trainer, index) => (
        <div key={index} className="trainer-card">
          <img src={trainer.image} alt={trainer.name} className="trainer-image" />
          <div className="trainer-overlay">
            <div className="trainer-info">
              <h3>{trainer.name}</h3>
              <p>{trainer.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    </>
  );
};

export default TrainerGrid;
