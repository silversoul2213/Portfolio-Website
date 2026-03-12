import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "F1 Race Strategy Simulator",
    category: "Sept 2025 – Oct 2025",
    description: (
      <ul className="project-features">
        <li>
          Engineered an ML-driven race simulator using <strong>Python</strong> and <strong>Scikit-learn</strong>, combining a <strong>Huber Regressor</strong> (achieving an <strong>MAE of ~2.7s</strong>) with a <strong>Monte Carlo engine</strong> to accurately model dynamic race variables like tire wear, fuel degradation, traffic, and safety cars.
        </li>
        <li>
          Deployed a low-latency production inference system by containerizing a <strong>FastAPI</strong> backend with <strong>Docker</strong>, delivering real-time strategy recommendations in <strong>under 500ms</strong>.
        </li>
        <li>
          Architected an end-to-end MLOps pipeline utilizing <strong>GitHub Actions</strong> for Continuous Integration (CI), automated model retraining, and real-time data drift monitoring to ensure sustained predictive accuracy.
        </li>
      </ul>
    ),
  },
  {
    name: "Operationalizing Interpretability for Transformer Models",
    category: "Nov 2025 – Dec 2025",
    description: (
      <ul className="project-features">
        <li>
          Engineered an Explainable AI (XAI) pipeline for a fine-tuned <strong>BERT sentiment classifier</strong>, integrating <strong>BertViz</strong>, <strong>Captum</strong>, and <strong>SHAP</strong> to map token-level attributions and achieve <strong>93.5% test accuracy</strong>.
        </li>
        <li>
          Analyzed and mitigated model bias through rigorous inspection of internal network representations, successfully identifying and pruning <strong>40%</strong> of <strong>redundant attention heads</strong>.
        </li>
        <li>
          Optimized model architecture for efficiency via targeted compression, projecting a <strong>2.5x reduction in inference latency</strong> while maintaining robust predictive performance.
        </li>
      </ul>
    ),
  },
  {
    name: "Fine-Tuning Deep Learning on Astrophysical Data",
    category: "Sep 2024 – Nov 2024",
    description: (
      <ul className="project-features">
        <li>
          Developed a specialized computer vision pipeline for complex astrophysical data, successfully adapting a <strong>ResNet-50</strong> architecture to automate galactic morphology classification using the Galaxy Zoo dataset.
        </li>
        <li>
          Applied Parameter-Efficient Fine-Tuning (<strong>PEFT</strong>) by implementing Low-Rank Adaptation (<strong>LoRA</strong>), strategically updating model weights to optimize the training process.
        </li>
        <li>
          Achieved an <strong>84% test accuracy</strong>—a <strong>15% improvement</strong> over baseline metrics—while simultaneously reducing computational overhead and training costs by <strong>40%</strong>.
        </li>
      </ul>
    ),
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Description</h4>
                <div className="work-description">{project.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
