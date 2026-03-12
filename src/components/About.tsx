import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <div className="about-badge">
          <div className="badge-dot"></div>
          <h3 className="title">About Me</h3>
        </div>
        <p className="para">
          I’m an AI Engineer and Researcher from <span className="text-highlight">IIT Roorkee</span>, specializing in the intersection of efficient machine learning and <span className="text-highlight">scalable infrastructure</span>. I bridge the gap between theoretical models and production, building low-latency <span className="text-highlight">LLM pipelines</span>, high-dimensional vector search, and parameter-efficient deep learning systems.
        </p>
      </div>
    </div>
  );
};

export default About;
