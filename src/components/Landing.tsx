import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              SOMIL
              <br />
              <span>AGRAWAL</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>An AI</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Developer</div>
              <div className="landing-h2-2">Researcher</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Researcher</div>
              <div className="landing-h2-info-1">Developer</div>
            </h2>
          </div>

          {/* Mobile-only hero centerpiece (replaces the desktop 3D character) */}
          <div className="landing-mobile" aria-hidden="true">
            <div className="landing-mobile-halo"></div>
            <div className="landing-card">
              <div className="landing-card-sheen"></div>
              <div className="landing-card-head">
                <div className="landing-card-avatar">SA</div>
                <div className="landing-card-idbox">
                  <span className="landing-card-name">Somil Agrawal</span>
                  <span className="landing-card-role">
                    AI Developer · Researcher
                  </span>
                </div>
              </div>
              <div className="landing-card-status">
                <span className="landing-card-dot"></span>
                Open to work
              </div>
              <div className="landing-card-tags">
                <span>PyTorch</span>
                <span>FastAPI</span>
                <span>LLMs</span>
                <span>MLOps</span>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
