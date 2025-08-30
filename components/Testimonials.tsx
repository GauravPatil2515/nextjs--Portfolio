"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "ML Research Lead",
    company: "TechCorp AI",
    image: "/profile.svg", // You can replace with actual images
    testimonial: "Gaurav's expertise in computer vision is exceptional. His innovative approach to solving complex problems and attention to detail make him a valuable asset to any AI team.",
    rating: 5,
    project: "DepthVision AI"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Senior AI/ML Engineer",
    company: "Digital Solutions Inc",
    image: "/profile.svg",
    testimonial: "Working with Gaurav on AI/ML projects has been a pleasure. His ability to develop innovative computer vision solutions and deploy them efficiently is truly impressive.",
    rating: 5,
    project: "WebIntelAI"
  },
  {
    id: 3,
    name: "Prof. Anita Sharma",
    role: "Computer Science Faculty",
    company: "Mumbai University",
    image: "/profile.svg",
    testimonial: "Gaurav demonstrates exceptional understanding of deep learning concepts. His projects show both theoretical knowledge and practical implementation skills.",
    rating: 5,
    project: "Academic Mentorship"
  },
  {
    id: 4,
    name: "Alex Thompson",
    role: "Product Manager",
    company: "HealthTech Innovations",
    image: "/profile.svg",
    testimonial: "The DermAI project showcased Gaurav's ability to apply AI to real-world healthcare challenges. His solution was both technically sound and user-friendly.",
    rating: 5,
    project: "DermAI"
  }
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-yellow-400" : "text-gray-600"
        }`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <div className="py-20" id="testimonials">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            What People{" "}
            <span className="text-purple bg-gradient-to-r from-purple to-pink-500 bg-clip-text text-transparent">
              Say
            </span>
          </h1>
          <p className="text-white-100 text-lg md:text-xl max-w-2xl mx-auto">
            Testimonials and recommendations from colleagues, mentors, and collaborators
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-black-100 p-8 rounded-3xl border border-white/[0.1] relative overflow-hidden group"
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Quote mark */}
                <div className="text-purple text-6xl font-serif leading-none mb-4 opacity-20">
                  &quot;
                </div>
                
                {/* Testimonial text */}
                <p className="text-white-100 text-lg leading-relaxed mb-6">
                  {testimonial.testimonial}
                </p>
                
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Project reference */}
                <div className="mb-6">
                  <span className="px-3 py-1 bg-purple/20 text-purple rounded-full text-sm border border-purple/30">
                    {testimonial.project}
                  </span>
                </div>
                
                {/* Person info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-white-200">
                      {testimonial.role}
                    </p>
                    <p className="text-purple text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-black-100 p-8 rounded-3xl border border-white/[0.1] max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-white-100 mb-6">
              Join these satisfied collaborators and let&apos;s create something amazing together.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-purple hover:bg-purple/80 text-white rounded-full font-medium transition-colors duration-300"
            >
              Start a Project
              <span className="ml-2">→</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
