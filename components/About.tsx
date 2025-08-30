import React from "react";
import { coursework } from "@/data";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="heading">
          About <span className="text-purple">Me</span>
        </h1>
        
        <div className="mt-20 mb-16">
          <div className="bg-black-100 p-8 rounded-3xl border border-white/[0.1]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Who I Am</h2>
            <p className="text-white-200 text-lg leading-relaxed mb-4">
              AI/ML Engineering student + GenAI practitioner working on agentic AI use cases and high‑impact, efficient LLM pipelines.
            </p>
            <p className="text-white-200 text-lg leading-relaxed">
              Hands‑on coder, rapid prototyper. Building intelligent solutions for computer vision, deep learning, and machine learning applications.
            </p>
          </div>
        </div>

        <div className="bg-black-100 p-8 rounded-3xl border border-white/[0.1]">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Technical Stack</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {coursework.map((course, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-purple/10 text-purple border border-purple/20 rounded-full text-sm font-medium"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
