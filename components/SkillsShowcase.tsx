import React from "react";

const SkillsShowcase = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 95, description: "Primary language for AI/ML development" },
        { name: "JavaScript", level: 85, description: "Algorithm implementation and data processing" },
        { name: "TypeScript", level: 80, description: "Type-safe AI/ML applications" },
        { name: "C", level: 75, description: "System programming and algorithms" }
      ]
    },
    {
      category: "AI/ML Frameworks",
      skills: [
        { name: "TensorFlow", level: 90, description: "Deep learning model development" },
        { name: "PyTorch", level: 85, description: "Research and production ML models" },
        { name: "OpenCV", level: 88, description: "Computer vision applications" },
        { name: "scikit-learn", level: 82, description: "Traditional ML algorithms" }
      ]
    },
    {
      category: "Data Science Tools",
      skills: [
        { name: "Jupyter", level: 85, description: "Interactive data analysis and modeling" },
        { name: "Git", level: 80, description: "Version control for ML projects" },
        { name: "Docker", level: 78, description: "ML model containerization" },
        { name: "AWS/GCP", level: 75, description: "Cloud deployment for AI solutions" }
      ]
    },
    {
      category: "Data & Analytics",
      skills: [
        { name: "NumPy", level: 90, description: "Numerical computing" },
        { name: "Pandas", level: 88, description: "Data manipulation and analysis" },
        { name: "Matplotlib", level: 85, description: "Data visualization" },
        { name: "SQL", level: 80, description: "Database management and queries" }
      ]
    }
  ];

  const SkillBar = ({ skill }: { skill: { name: string; level: number; description: string } }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-purple font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-black-300 rounded-full h-2 mb-2">
        <div 
          className="bg-gradient-to-r from-purple to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      <p className="text-white-200 text-sm">{skill.description}</p>
    </div>
  );

  return (
    <section className="py-20 bg-black-100" id="skills">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="heading mb-16">
          Technical <span className="text-purple">Expertise</span>
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-black-200 p-8 rounded-lg border border-white/[0.1]">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specialization Areas */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Specialization Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { area: "Computer Vision", projects: "3+", icon: "👁️" },
              { area: "Deep Learning", projects: "4+", icon: "🧠" },
              { area: "Machine Learning", projects: "5+", icon: "🤖" },
              { area: "Data Analytics", projects: "3+", icon: "📊" }
            ].map((spec, index) => (
              <div key={index} className="bg-purple/10 p-6 rounded-lg border border-purple/20">
                <div className="text-4xl mb-4">{spec.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{spec.area}</h3>
                <p className="text-purple font-medium">{spec.projects} Projects</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
