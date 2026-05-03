import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Perfume Haven</h1>
      <p className="about-description">
        Perfume Haven is your ultimate destination for luxury fragrances. We believe that a signature scent is the invisible accessory that completes your presence. Our curated collection features the finest perfumes from world-renowned houses and niche artisans alike, ensuring you find the perfect expression of your individuality.
      </p>

      <div className="team-section">
        <h3>Our Team</h3>
        <div className="team-grid">
          <div className="team-member">
            <h4 className="team-member-name">BARAA ABUAFIFEH</h4>
            <span className="team-member-role">Founder & CEO</span>
          </div>
          <div className="team-member">
            <h4 className="team-member-name">QUSAI ABBAD</h4>
            <span className="team-member-role">Head Fragrance Curator</span>
          </div>
          <div className="team-member">
            <h4 className="team-member-name">KHALID ALENZI</h4>
            <span className="team-member-role">Customer Experience Lead</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
