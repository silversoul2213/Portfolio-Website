import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Backend Platform Engineer</h4>
                <h5>DigiDzn LLC</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <div className="career-description">
              <ul>
                <li>
                  Architected an event-driven <strong>LLM backend</strong> using <strong>FastAPI</strong>, <strong>Redis</strong>, and <strong>Celery</strong>, orchestrating non-blocking inference pipelines to reliably transform asynchronous audio transcripts and signals into automated tasks.
                </li>
                <li>
                  Engineered scalable semantic retrieval systems by integrating Claude and OpenAI embedding models, leveraging <strong>pgvector</strong> in <strong>PostgreSQL</strong> to execute high-dimensional similarity searches and complex semantic extraction.
                </li>
                <li>
                  Designed a fault-tolerant, offline-first synchronization engine for Google and Outlook scheduling, optimizing data flow with delta updates to strictly manage API rate limits and ensure continuous system availability.
                </li>
              </ul>
              <div className="tech-stack">
                <span>FastAPI</span>
                <span>Supabase/PostgreSQL</span>
                <span>Redis</span>
                <span>Celery</span>
                <span>pgvector</span>
                <span>Docker</span>
                <span>WebSockets</span>
                <span>OAuth</span>
              </div>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Undergraduate Researcher</h4>
                <h5>IIT Roorkee</h5>
              </div>
              <h3>2026</h3>
            </div>
            <div className="career-description">
              <ul>
                <li>
                  Developed a robust computer vision segmentation pipeline (<strong>Python</strong>/<strong>OpenCV</strong>), integrating advanced techniques like <strong>CLAHE</strong>, Gaussian filtering, morphological reconstruction, and watershed algorithms to significantly enhance complex boundary detection.
                </li>
                <li>
                  Designed and executed rigorous ablation studies and systematic experiments to isolate performance bottlenecks, resulting in algorithmic optimizations that improved Intersection over Union (IoU) by <strong>+15</strong> while achieving a <strong>2x</strong> increase in processing throughput.
                </li>
                <li>
                  Established a reproducible quantitative evaluation framework prioritizing key metrics (IoU, inference runtime) to validate pipeline efficacy and standardize preprocessing workflows for downstream research applications.
                </li>
              </ul>
              <div className="tech-stack">
                <span>Python</span>
                <span>OpenCV</span>
                <span>Morphological Reconstruction</span>
                <span>Watershed Segmentation</span>
                <span>CLAHE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
