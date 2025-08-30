"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import MagicButton from "./MagicButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "General Inquiry"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setSubmitStatus("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", message: "", subject: "General Inquiry" });
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  };

  return (
    <div className="py-20" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Let&apos;s Build Something{" "}
            <span className="text-purple bg-gradient-to-r from-purple to-pink-500 bg-clip-text text-transparent">
              Amazing
            </span>
          </h1>
          <p className="text-white-100 text-lg md:text-xl max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate on AI/ML solutions? 
            Let&apos;s discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple/20 rounded-full flex items-center justify-center">
                    <span className="text-purple text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-white-100 font-medium">Email</p>
                    <p className="text-white-200">gauravpatil.dev@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple/20 rounded-full flex items-center justify-center">
                    <span className="text-purple text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-white-100 font-medium">Location</p>
                    <p className="text-white-200">Thane, Maharashtra, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple/20 rounded-full flex items-center justify-center">
                    <span className="text-purple text-xl">💼</span>
                  </div>
                  <div>
                    <p className="text-white-100 font-medium">Availability</p>
                    <p className="text-white-200">Open for freelance & full-time opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">Expertise Areas</h4>
              <div className="flex flex-wrap gap-2">
                {["Computer Vision", "Deep Learning", "LLMs", "Data Science", "AI Research", "Cloud Deployment"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple/20 text-purple rounded-full text-sm border border-purple/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-black-100 p-8 rounded-3xl border border-white/[0.1]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div variants={inputVariants} whileFocus="focus" className="space-y-2">
                  <label htmlFor="name" className="text-white-100 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black-200 border border-white/[0.1] rounded-lg text-white placeholder-white-200 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple"
                    placeholder="Your full name"
                  />
                </motion.div>

                <motion.div variants={inputVariants} whileFocus="focus" className="space-y-2">
                  <label htmlFor="email" className="text-white-100 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black-200 border border-white/[0.1] rounded-lg text-white placeholder-white-200 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div variants={inputVariants} whileFocus="focus" className="space-y-2">
                <label htmlFor="subject" className="text-white-100 font-medium">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black-200 border border-white/[0.1] rounded-lg text-white focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Technical Consultation">Technical Consultation</option>
                  <option value="Other">Other</option>
                </select>
              </motion.div>

              <motion.div variants={inputVariants} whileFocus="focus" className="space-y-2">
                <label htmlFor="message" className="text-white-100 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black-200 border border-white/[0.1] rounded-lg text-white placeholder-white-200 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple resize-none"
                  placeholder="Tell me about your project or what you'd like to discuss..."
                />
              </motion.div>

              <MagicButton
                title={isSubmitting ? "Sending..." : "Send Message"}
                icon={isSubmitting ? "⏳" : "📤"}
                position="right"
                handleClick={() => {}}
                otherClasses="w-full !bg-purple hover:!bg-purple/80 disabled:opacity-50"
              />

              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center"
                >
                  {submitStatus}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
