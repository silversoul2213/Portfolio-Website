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
          <div className="hero-dossier" aria-hidden="true">
            <div className="dossier-aura"></div>
            <div className="dossier-panel">
              <span className="dossier-tick tick-tl"></span>
              <span className="dossier-tick tick-tr"></span>
              <span className="dossier-tick tick-bl"></span>
              <span className="dossier-tick tick-br"></span>
              <div className="dossier-scan"></div>

              <div className="dossier-top">
                <span className="dossier-kicker">PROFILE</span>
                <span className="dossier-state">
                  <i className="dossier-blip"></i>AVAILABLE
                </span>
              </div>

              <div className="dossier-id">
                <h3 className="dossier-name">Somil Agrawal</h3>
                <p className="dossier-role">
                  AI Developer <span>/</span> Researcher
                </p>
              </div>

              <div className="dossier-specs">
                <div className="dossier-row">
                  <span className="dossier-key">FOCUS</span>
                  <span className="dossier-val">LLMs · Fine-tuning · MLOps</span>
                </div>
                <div className="dossier-row">
                  <span className="dossier-key">STACK</span>
                  <span className="dossier-val">PyTorch / FastAPI / Redis</span>
                </div>
              </div>

              <div className="dossier-signal">
                <div className="dossier-eq">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="dossier-serial">NO. 2213</span>
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
