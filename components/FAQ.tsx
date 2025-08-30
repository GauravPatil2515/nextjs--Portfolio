"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    id: 1,
    question: "What technologies and frameworks do you specialize in?",
    answer: "I specialize in AI/ML technologies including Python, TensorFlow, PyTorch, OpenCV, and YOLOv8 for computer vision. I also work with data science tools like Jupyter, Pandas, NumPy, and cloud platforms like AWS and Google Cloud for deploying AI solutions."
  },
  {
    id: 2,
    question: "Can you help with both AI model development and web application integration?",
    answer: "Absolutely! I offer end-to-end solutions from developing custom AI models to deploying them in production environments. This includes creating APIs, building data pipelines, and deploying scalable AI solutions using modern cloud technologies and MLOps practices."
  },
  {
    id: 3,
    question: "What types of computer vision projects have you worked on?",
    answer: "I've worked on diverse computer vision projects including depth estimation using stereo vision, medical image analysis for dermatological conditions, object detection and classification systems, and intelligent web content analysis. Each project involved custom model development and real-world deployment."
  },
  {
    id: 4,
    question: "How do you approach a new AI/ML project?",
    answer: "I start with understanding the problem domain and data requirements, then move to exploratory data analysis and model architecture design. I emphasize iterative development, thorough testing, and creating production-ready solutions with proper documentation and deployment strategies."
  },
  {
    id: 5,
    question: "What is your experience with Large Language Models (LLMs)?",
    answer: "I have experience working with LLMs for various applications including intelligent web content analysis, natural language processing tasks, and integrating LLM capabilities into web applications. I work with both open-source models and APIs from providers like OpenAI."
  },
  {
    id: 6,
    question: "Do you provide ongoing support and maintenance for deployed projects?",
    answer: "Yes, I offer ongoing support including model performance monitoring, updates based on new data, bug fixes, and feature enhancements. I believe in building long-term partnerships with clients to ensure their AI solutions continue to deliver value."
  },
  {
    id: 7,
    question: "How long does a typical AI/ML project take to complete?",
    answer: "Project timelines vary based on complexity, but typically range from 2-8 weeks for proof-of-concept to 3-6 months for production-ready solutions. I provide detailed project timelines during the initial consultation phase and maintain regular communication throughout development."
  },
  {
    id: 8,
    question: "Can you work with existing datasets or help with data collection?",
    answer: "I can work with both existing datasets and assist with data collection strategies. I have experience with data preprocessing, augmentation, annotation, and building robust datasets for training custom models. I also help establish data pipelines for continuous learning systems."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="py-20" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="text-purple bg-gradient-to-r from-purple to-pink-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-white-100 text-lg md:text-xl max-w-2xl mx-auto">
            Common questions about my services, expertise, and approach to AI/ML projects
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black-100 rounded-2xl border border-white/[0.1] overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/[0.02] transition-colors duration-300"
              >
                <h3 className="text-white font-semibold text-lg pr-4">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-purple text-2xl flex-shrink-0"
                >
                  ↓
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openItems.includes(item.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <div className="h-px bg-white/[0.1] mb-6" />
                      <p className="text-white-100 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple/10 to-pink-500/10 p-8 rounded-3xl border border-purple/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-white-100 mb-6">
              Don&apos;t hesitate to reach out. I&apos;m here to discuss your project requirements and how I can help.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-purple hover:bg-purple/80 text-white rounded-full font-medium transition-colors duration-300"
            >
              Get in Touch
              <span className="ml-2">💬</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
