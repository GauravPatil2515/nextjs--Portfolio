import React from "react";

const Timeline = () => {
  const timelineData = [
    {
      year: "2023",
      title: "Started B.E. in AI & ML",
      institution: "SIES Graduate School of Technology",
      description: "Began my journey in Artificial Intelligence and Machine Learning with strong foundation in programming and mathematics.",
      achievements: ["Top 10% in first semester", "Introduction to Python and ML algorithms"],
      type: "education"
    },
    {
      year: "2024",
      title: "First AI/ML Projects",
      institution: "Personal Development",
      description: "Developed DermAI and WebIntelAI projects, achieving high accuracy rates and gaining practical experience.",
      achievements: ["99.78% accuracy in DermAI", "99.94% accuracy in WebIntelAI", "Learned TensorFlow and PyTorch"],
      type: "project"
    },
    {
      year: "2024",
      title: "ByteCamp Hackathon Success",
      institution: "Sustainability Track",
      description: "Secured Top 3 position in sustainability track, focusing on AI solutions for environmental challenges.",
      achievements: ["Top 3 team placement", "Sustainability-focused AI solution", "Team leadership experience"],
      type: "achievement"
    },
    {
      year: "2024",
      title: "Deep Blue Project Semifinalist",
      institution: "Mastek",
      description: "Selected as semifinalist for prestigious Deep Blue Project, showcasing problem-solving skills in industry scenarios.",
      achievements: ["Semifinalist selection", "Industry exposure", "Advanced problem-solving"],
      type: "achievement"
    },
    {
      year: "2025",
      title: "Advanced AI Projects",
      institution: "Current Focus",
      description: "Working on DepthVision AI and Enhanced Garbage Detection, pushing boundaries in computer vision and object detection.",
      achievements: ["Real-time object detection", "Depth estimation systems", "YOLOv8 optimization"],
      type: "project"
    },
    {
      year: "2025-2027",
      title: "Upcoming Goals",
      institution: "Future Plans",
      description: "Complete degree with honors, pursue advanced certifications, and contribute to open-source AI projects.",
      achievements: ["TensorFlow certification", "Research publications", "Industry internships"],
      type: "future"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "education": return "bg-blue-500";
      case "project": return "bg-purple";
      case "achievement": return "bg-green-500";
      case "future": return "bg-yellow-500";
      default: return "bg-purple";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "education": return "🎓";
      case "project": return "🚀";
      case "achievement": return "🏆";
      case "future": return "🔮";
      default: return "📈";
    }
  };

  return (
    <section className="py-20 bg-black-100" id="timeline">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="heading mb-16">
          My <span className="text-purple">Journey</span>
        </h1>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple opacity-30"></div>
          
          {timelineData.map((item, index) => (
            <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-black-200 p-6 rounded-lg border border-white/[0.1] hover:border-purple/50 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className="text-purple font-bold text-lg">{item.year}</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-purple font-medium mb-3">{item.institution}</p>
                  <p className="text-white-200 mb-4 leading-relaxed">{item.description}</p>
                  <div className="space-y-1">
                    {item.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-purple rounded-full"></span>
                        <span className="text-white-200">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Timeline Dot */}
              <div className="w-2/12 flex justify-center">
                <div className={`w-6 h-6 rounded-full ${getTypeColor(item.type)} border-4 border-black-100 relative z-10`}></div>
              </div>
              
              {/* Empty Space */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>

        {/* Current Status */}
        <div className="mt-16 text-center bg-purple/10 p-8 rounded-lg border border-purple/20">
          <h2 className="text-2xl font-bold text-white mb-4">Current Status</h2>
          <p className="text-lg text-white-200 mb-4">
            B.E. AI & ML Student | CGPA: 8.57 | Semester 3/8 Complete
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple">4+</div>
              <div className="text-white-200">AI/ML Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple">2</div>
              <div className="text-white-200">Major Achievements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple">99.9%</div>
              <div className="text-white-200">Best Model Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
