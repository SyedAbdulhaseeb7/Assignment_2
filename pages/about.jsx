// pages/about.js
import React from 'react';

const teamMembers = [
  {
    name: "Haseeb",
    role: "CEO",
    image: "https://media.istockphoto.com/id/1185229534/photo/business-man-looking-at-camera.jpg?s=1024x1024&w=is&k=20&c=SpinpYurrMWT3QMGY7KFlcfejLmgdsG9kzoEJdK_m1E=",
  },
  {
    name: "Anas",
    role: "Invester",
    image: "https://media.istockphoto.com/id/1209719307/photo/business-handshake.jpg?s=1024x1024&w=is&k=20&c=LKgO8oYlW6NiqlWL3cjwxZ7r_kISxP9HO8Hwz6y_CW4=",
  },
  {
    name: "Subhan",
    role: "Partner",
    image: "https://media.istockphoto.com/id/639334442/photo/glad-to-have-you-on-board.jpg?s=1024x1024&w=is&k=20&c=3s3hoAViYJeAl2isEW-wRGS_JNtLGA5mj8K0JTawbD8=",
  },
];

const about = () => {
  return (
    <div className="custom-background">
    <div className="custom-container">
      <h1 className="custom-title">About Us</h1>
      <p className="custom-paragraph">
        Welcome to our website! We are dedicated to providing the best services to our customers.
        Our mission is to deliver high-quality solutions tailored to your needs.
      </p>
  
      {/* Team Section */}
      <h2 className="custom-section-title">Meet Our Team</h2>
      <div className="custom-team-section">
        {teamMembers.map((member, index) => (
          <div key={index} className="custom-team-member">
            <img src={member.image} alt={member.name} />
            <h3 className="custom-team-member-name">{member.name}</h3>
            <p className="custom-team-member-role">{member.role}</p>
          </div>
        ))}
      </div>
  
      {/* Additional Sections */}
      <h2 className="custom-section-title">Our Mission</h2>
      <p className="custom-section-paragraph">
        Our mission is to empower individuals and businesses with innovative solutions that enhance productivity and efficiency.
      </p>
  
      <h2 className="custom-section-title">Our Vision</h2>
      <p className="custom-section-paragraph">
        We envision a world where technology and creativity work hand-in-hand to bring about transformative changes.
      </p>
  
      <h2 className="custom-section-title">Get In Touch</h2>
      <p className="custom-section-paragraph">
        If you have any questions or would like to learn more about our services, feel free to <a href="/contact" className="custom-link">contact us</a>.
      </p>
    </div>
  </div>
  
  );
};

export default about;
