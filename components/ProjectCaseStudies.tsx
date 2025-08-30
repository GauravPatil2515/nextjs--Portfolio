import React, { useState } from "react";
import { projects } from "@/data";

const ProjectCaseStudies = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projectDetails = [
    {
      id: 1,
      challenge: "Real-time 3D scene understanding for autonomous systems and robotics applications",
      solution: "Integrated YOLOv8 for object detection with MiDaS depth estimation model to create comprehensive 3D scene analysis",
      implementation: ["Real-time video processing pipeline", "Custom neural network integration", "Optimized inference for edge devices"],
      results: ["15fps real-time processing", "Accurate depth estimation", "Multi-object tracking capability"],
      techDeepDive: "Utilized transfer learning on pre-trained YOLOv8 weights, fine-tuned MiDaS for better depth accuracy, and implemented efficient memory management for real-time processing."
    },
    {
      id: 2, 
      challenge: "Automated web content extraction with high accuracy and intelligent data processing",
      solution: "Built AI-powered scraping system with NLP analysis and content categorization",
      implementation: ["Adaptive scraping algorithms", "Content classification models", "Data validation pipelines"],
      results: ["99.94% extraction accuracy", "50% faster processing", "Automated content insights"],
      techDeepDive: "Implemented BeautifulSoup with custom parsing logic, integrated BERT for content analysis, and built robust error handling for diverse website structures."
    },
    {
      id: 3,
      challenge: "Early detection of skin diseases to assist dermatologists in diagnosis",
      solution: "Deep CNN architecture trained on comprehensive dermatological image dataset",
      implementation: ["Custom CNN architecture", "Data augmentation techniques", "Clinical validation process"],
      results: ["99.78% classification accuracy", "8 disease categories", "Clinical-grade performance"],
      techDeepDive: "Designed ResNet-based architecture with attention mechanisms, implemented advanced data augmentation, and used techniques like focal loss for handling class imbalance."
    },
    {
      id: 4,
      challenge: "Efficient waste collection routing in smart city environments",
      solution: "YOLOv8-based detection system combined with route optimization algorithms",
      implementation: ["Real-time garbage detection", "Dynamic route calculation", "Fleet management integration"],
      results: ["30% route efficiency improvement", "Real-time detection", "Smart city integration"],
      techDeepDive: "Fine-tuned YOLOv8 on custom garbage dataset, implemented Dijkstra's algorithm variants for route optimization, and created REST APIs for fleet management systems."
    }
  ];

  return (
    <section className="py-20 bg-black-100">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="heading mb-16">
          Project <span className="text-purple">Deep Dives</span>
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Project Selector */}
          <div className="lg:w-1/3 space-y-4">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(index)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 border ${
                  selectedProject === index 
                    ? 'bg-purple/10 border-purple text-purple' 
                    : 'bg-black-200 border-white/[0.1] text-white hover:border-purple/50'
                }`}
              >
                <h3 className="font-bold text-lg mb-2">{project.title.split(' - ')[0]}</h3>
                <p className="text-sm opacity-75">{project.title.split(' - ')[1]}</p>
              </div>
            ))}
          </div>

          {/* Project Details */}
          <div className="lg:w-2/3">
            <div className="bg-black-200 p-8 rounded-lg border border-white/[0.1]">
              <h2 className="text-3xl font-bold text-white mb-6">
                {projects[selectedProject].title}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-purple mb-3">Challenge</h3>
                  <p className="text-white-200 leading-relaxed">
                    {projectDetails[selectedProject].challenge}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple mb-3">Solution</h3>
                  <p className="text-white-200 leading-relaxed">
                    {projectDetails[selectedProject].solution}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple mb-3">Implementation</h3>
                  <ul className="space-y-2">
                    {projectDetails[selectedProject].implementation.map((item, idx) => (
                      <li key={idx} className="text-white-200 flex items-center">
                        <span className="w-2 h-2 bg-purple rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple mb-3">Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {projectDetails[selectedProject].results.map((result, idx) => (
                      <div key={idx} className="bg-purple/5 p-3 rounded border border-purple/20">
                        <span className="text-white font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple mb-3">Technical Deep Dive</h3>
                  <p className="text-white-200 leading-relaxed">
                    {projectDetails[selectedProject].techDeepDive}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCaseStudies;
