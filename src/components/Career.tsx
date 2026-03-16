import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Skills
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology in Computer Science & Engineering</h4>
                <h5>Parul University, Gujarat</h5>
              </div>

            </div>
            <p>
              Pursuing B.Tech in Computer Science with focus on software engineering, 
              data structures, algorithms, and full-stack web development. Building strong 
              foundation in computer science fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Languages</h4>
                <h5>Technical Skills</h5>
              </div>
              
            </div>
            <p>
              Java, JavaScript, Data Structures and Algorithms, Java 17
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frameworks</h4>
                <h5>Backend Technologies</h5>
              </div>
            </div>
            <p>
              Node.js, Spring Boot, Hibernate, Express.js, REST APIs
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Technologies</h4>
                <h5>Frontend Development</h5>
              </div>
              
            </div>
            <p>
              HTML, CSS, React, Angular
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Databases</h4>
                <h5>Data Management</h5>
              </div>
            
            </div>
            <p>
              MySQL, MongoDB, Firebase
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tools</h4>
                <h5>Development & Deployment</h5>
              </div>
            </div>
            <p>
              Git, GitHub
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
