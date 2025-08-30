export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I specialize in AI/ML and computer vision projects",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm based in Thane, Maharashtra, India",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I mostly work with these technologies",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "AI & ML Engineering student interested in computer vision",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently pursuing B.E. in AI & ML",
    description: "SIES Graduate School of Technology",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to collaborate on your next AI/ML project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "DepthVision AI - Depth Estimation",
    des: "Computer vision project that estimates depth from stereo camera images using deep learning.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/GauravPatil2515",
  },
  {
    id: 2,
    title: "AI Model Development & Research",
    des: "Advanced machine learning model that processes and analyzes complex datasets using state-of-the-art deep learning algorithms.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/GauravPatil2515",
  },
  {
    id: 3,
    title: "DermAI - Skin Disease Detection",
    des: "Machine learning model that identifies different skin conditions from medical images.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/GauravPatil2515",
  },
  {
    id: 4,
    title: "Garbage Detection System",
    des: "YOLOv8-based system for detecting garbage in images for waste management applications.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/GauravPatil2515",
  },
];

export const testimonials = [
  {
    quote:
      "Participated in ByteCamp Hackathon and secured Top 3 in the Sustainability Track. It was a great learning experience working on environmental solutions.",
    name: "ByteCamp Hackathon 2024",
    title: "Top 3 - Sustainability Track",
  },
  {
    quote:
      "Selected as a semifinalist for Deep Blue Project Season 10 at Mastek. Got to work on interesting AI and software development challenges.",
    name: "Deep Blue Project S10",
    title: "Semifinalist - Mastek",
  },
  {
    quote:
      "Currently pursuing B.E. in AI & ML at SIES Graduate School of Technology with CGPA 8.57. Learning a lot about machine learning and its applications.",
    name: "Academic Progress",
    title: "B.E. AI & ML Student",
  },
  {
    quote:
      "Working on AI projects like DermAI and DepthVision has been exciting. Still learning and improving my skills in computer vision and machine learning.",
    name: "Project Experience",
    title: "AI/ML Development",
  },
  {
    quote:
      "From computer vision to machine learning research, my specialized skill set allows me to develop innovative AI solutions. Every project is an opportunity to learn, innovate, and contribute to the future of intelligent technology.",
    name: "Continuous Learning",
    title: "AI/ML Engineer",
  },
];

export const companies = [
  {
    id: 1,
    name: "tensorflow",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "pytorch",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "opencv",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "scikit-learn",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "python",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "B.E. in Artificial Intelligence & Machine Learning",
    desc: "Currently pursuing degree at SIES Graduate School of Technology with CGPA 8.57. Focusing on Computer Vision, Deep Learning, and Data Analytics.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "AI/ML Project Developer",
    desc: "Built multiple production-ready AI systems including DermAI (99.78% accuracy) and WebIntelAI (99.94% accuracy) using TensorFlow and PyTorch.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "AI/ML Research & Development",
    desc: "Focused on developing cutting-edge AI models and algorithms. Specializing in computer vision, deep learning, and machine learning applications for real-world problems.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Hackathon & Competition Winner",
    desc: "Top 3 in ByteCamp Hackathon Sustainability Track and Semifinalist in Deep Blue Project Season 10 at Mastek, showcasing innovation in AI solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/GauravPatil2515",
  },
  {
    id: 2,
    img: "/link.svg", 
    link: "https://linkedin.com/in/gaurav-patil",
  },
  {
    id: 3,
    img: "/twit.svg",
    link: "mailto:gauravpatil2516@gmail.com",
  },
];

export const coursework = [
  "Machine Learning Algorithms",
  "Deep Learning & Neural Networks", 
  "Computer Vision",
  "Natural Language Processing",
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Artificial Intelligence",
  "Pattern Recognition"
];

export const technicalMetrics = [
  {
    category: "AI/ML Projects",
    value: "4+",
    description: "Completed projects"
  },
  {
    category: "Model Accuracy",
    value: "99.7%",
    description: "Best performance achieved"
  },
  {
    category: "Programming Languages",
    value: "5+",
    description: "Languages used"
  },
  {
    category: "Academic CGPA",
    value: "8.57",
    description: "Current performance"
  }
];
