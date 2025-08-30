import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding YOLOv8: Real-time Object Detection",
      excerpt: "Deep dive into YOLOv8 architecture and implementation for real-time object detection applications.",
      readTime: "5 min read",
      date: "Jan 2025",
      category: "Computer Vision",
      tags: ["YOLOv8", "Object Detection", "Computer Vision"],
      status: "Published"
    },
    {
      title: "Building Production-Ready ML Models with TensorFlow",
      excerpt: "Best practices for deploying machine learning models in production environments with TensorFlow Serving.",
      readTime: "8 min read", 
      date: "Dec 2024",
      category: "Machine Learning",
      tags: ["TensorFlow", "MLOps", "Production"],
      status: "Published"
    },
    {
      title: "Computer Vision in Healthcare: A Case Study",
      excerpt: "How DermAI achieved 99.78% accuracy in skin disease classification using deep learning techniques.",
      readTime: "6 min read",
      date: "Nov 2024", 
      category: "Healthcare AI",
      tags: ["Healthcare", "CNN", "Medical Imaging"],
      status: "Published"
    },
    {
      title: "AI Model Deployment: From Research to Production",
      excerpt: "Complete guide to deploying machine learning models in production using cloud platforms, containerization, and MLOps best practices.",
      readTime: "10 min read",
      date: "Coming Soon",
      category: "MLOps",
      tags: ["Docker", "AWS", "Model Deployment"],
      status: "Draft"
    }
  ];

  const learningResources = [
    {
      title: "AI/ML Research Papers",
      description: "Stay updated with latest research in Computer Vision and Deep Learning",
      count: "50+ papers read",
      icon: "📚"
    },
    {
      title: "Online Courses",
      description: "Continuous learning through Coursera, edX, and specialized AI courses",
      count: "10+ courses completed",
      icon: "🎓"
    },
    {
      title: "Tech Conferences",
      description: "Attending AI/ML conferences and workshops for industry insights", 
      count: "5+ events attended",
      icon: "🎤"
    },
    {
      title: "Open Source",
      description: "Contributing to AI/ML open source projects and libraries",
      count: "15+ contributions",
      icon: "💻"
    }
  ];

  return (
    <section className="py-20 bg-black-100">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="heading mb-16">
          Learning & <span className="text-purple">Insights</span>
        </h1>
        
        {/* Blog Posts Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-black-200 p-6 rounded-lg border border-white/[0.1] hover:border-purple/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-purple/20 text-purple px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    post.status === 'Published' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {post.status}
                  </span>
                </div>
                
                <h3 className="text-white font-bold text-xl mb-3 leading-tight">{post.title}</h3>
                <p className="text-white-200 mb-4 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-white/5 text-white-200 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center text-sm text-white-200">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Resources */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Continuous Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningResources.map((resource, index) => (
              <div key={index} className="bg-purple/5 p-6 rounded-lg border border-purple/20 text-center hover:bg-purple/10 transition-all duration-300">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{resource.title}</h3>
                <p className="text-white-200 text-sm mb-3">{resource.description}</p>
                <span className="text-purple font-semibold">{resource.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-black-200 p-8 rounded-lg border border-white/[0.1]">
          <h2 className="text-2xl font-bold text-white mb-4">Want to Discuss AI/ML?</h2>
          <p className="text-white-200 mb-6 max-w-2xl mx-auto">
            I love sharing knowledge and learning from fellow developers and researchers. 
            Feel free to reach out if you want to discuss any AI/ML topics or collaborate on projects.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="mailto:gauravpatil2516@gmail.com" 
              className="bg-purple hover:bg-purple/80 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Start a Conversation
            </a>
            <a 
              href="https://linkedin.com/in/gaurav-patil" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple text-purple hover:bg-purple hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
