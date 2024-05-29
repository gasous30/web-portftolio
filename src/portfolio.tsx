const about = {
  name: "Octavianus Bagaswara Adi",
  description:
    "I am an Aerospace Engineering undergraduate student with a deep passion for Data Analysis, Machine Learning, and Web Development. As I near the completion of my undergraduate program, I am driven to explore these dynamic fields to foster innovation within the aerospace industry and beyond. My experience includes proficiency in TensorFlow for Image Classification and Object Detection, as well as using MATLAB, Simulink, and Python for Data Analysis and Aerospace Simulation. Additionally, my previous projects have honed my project management, time management, and stress management skills.",
  resume: "",
  social: {
    linkedin: "https://www.linkedin.com/in/octavianusbagas/",
    github: "https://github.com/gasous30",
  },
};

const education = [
  {
    title: "Bachelor of Engineering in Aerospace Engineering",
    subtitle: "Institut Teknologi Bandung, Indonesia",
    description:
      "Learn about design, construction, and science of aircraft and spacecraft.",
    year: "2020 - 2024 (expected)",
  },
  {
    title: "Hanyang International Winter School",
    subtitle: "Hanyang University",
    description:
      "Learn about principle of microeconomics and contemporary society and marketing",
    year: "2024",
  },
];

const projects = [
  {
    title: "Food Detection and Nutrition Calculator Application",
    description:
      "An application-based food detection and calculator system, provide nutrient values, and assist users in calculating their daily nutrition needs.",
    tag: "Machine Learning",
    tech: ["Python", "Tensorflow"],
  },
  {
    title: "Web Based Application Wind Turbine Damage Detection",
    description:
      "An application-based damage detection occurring on conventional wind turbine blades using Object Detection.",
    tag: "Machine Learning",
    tech: ["React", "Typescript", "Express", "Python", "Tensorflow"],
  },
  {
    title: "Chatbot Application for Helping Covid-19 Patients",
    description:
      "An interactive chatbot to aid users in locating the nearest plasma and vaccination centers based on their current location.",
    tag: "Data",
    tech: ["React", "Express", "Twilio", "Mongodb"],
  },
  {
    title: "Fandango Movie Rating Discrepancy Analysis",
    description:
      "A Python-based tool designed to compare and analyze the differences in movie ratings between Fandango and other websites.",
    tag: "Data",
    tech: ["Python"],
    link: "https://github.com/gasous30/fandango-data-analysis/blob/main/Capstone-Project%20FINISHED.ipynb",
  },
  {
    title: "Aircraft Departure and Arrival Analysis",
    description:
      "A Python tool plots flight paths on Google Maps and retrieves airport satellite photos.",
    tag: "Data",
    tech: ["Python", "Selenium"],
    link: "https://github.com/gasous30/flight_data_analysis/blob/main/flight_data_analysis_renew.ipynb",
  },
  {
    title: "Titanic Data Analysis",
    description:
      "A Python-based tool was developed to analyze Kaggle data, utilizing Support Vector Machine with KNN Imputer to classify survivors based on various parameters, and implemented a multiprocess program for faster analysis using the concurrent module.",
    tag: "Data",
    tech: ["Python", "Scikitlearn"],
    link: "https://github.com/gasous30/titanic-kaggle-machineLearning/blob/main/titanic-kaggle-machineLearning.ipynb",
  },
  {
    title:
      "Design and Implementation of Hardware-In-The-Loop Simulation for Thrust Vectoring Controlled Rocket",
    description:
      "A MATLAB-based tool was designed and implemented using HILS for a TVC vehicle, introducing a new approach to flight control system design.",
    tag: "Engineering",
    tech: ["Matlab", "Simulink"],
  },
  {
    title:
      "Design of Racing UAV for Kontes Robot Terbang Indonesia (KRTI) 2021",
    description:
      "Developed a racing UAV, analyzed its aerodynamic performance using XFLR5, and designed it with Solidworks and CorelDraw.",
    tag: "Engineering",
    tech: ["XFLR5", "Coreldraw", "Solidworks"],
  },
  {
    title:
      "Differential Evolution and DATCOM Implementation to Enhance Airframe Design Longitudinal Stability",
    description:
      "A MATLAB-based program was developed to optimize airframe design processes using metaheuristic methods, determining a preliminary design that meets longitudinal dynamic stability criteria according to regulations while considering the airframe's weight.",
    tag: "Machine Learning",
    tech: ["Matlab", "DATCOM"],
    link: "https://ieeexplore.ieee.org/document/10329909",
  },
  {
    title:
      "Robust Controller Design for Planar Rocket with Thrust Vectoring Control",
    description:
      "A MATLAB-based simulation program was developed for a robust control system for 3-DOF thrust vectoring.",
    tag: "Engineering",
    tech: ["Matlab", "Simulink"],
    link: "https://ieeexplore.ieee.org/document/10329891",
  },
];

const workExperience = [
  {
    title: "Front End Web Developer",
    subtitle: "Internnet Indonesia",
    description:
      "Developed websites for Internnet Indonesia Wave 5 using the Next framework and a content management system using the Vite framework.",
    year: "Nov 2021 - Oct 2023",
  },
  {
    title: "On the Job Training Aerodynamics Engineer",
    subtitle: "PT Dirgantara Indonesia",
    description:
      "Analyzed and evaluated the accuracy, strengths, and limitations of aerodynamic software tools, including VSPAERO and ANSYS Fluent, in calculating lift and drag forces on a wing, providing valuable insights into their performance and applicability for reliable and precise aerodynamic calculations.",
    year: "Jun - Jul 2023",
  },
];

const orgExperience = [
  {
    title: "Vice President",
    subtitle: "Tanoto Scholars Association (TSA) ITB",
    description:
      "Facilitated the supervision of six divisions, achieving recognition for the best project showcase among nine Tanoto Scholars Association accros Indonesia, and guided four social projects in collaboration with the Tanoto Foundation to fulfill beneficiary needs.",
    year: "Dec 2022 - Dec 2023",
  },
  {
    title: "Media, Communication, and Information Staff Web Division",
    subtitle: "KMPN ITB",
    description:
      "Developed a website for KMPN (Keluarga Mahasiswa Teknik Penerbangan) using the React framework and a headless CMS by integrating WordPress and React.",
    year: "Jun 2022 - Apr 2023",
  },
  {
    title:
      "KMPN UAV Development Team (KUDT) Systems Department AI Division Staff",
    subtitle: "KMPN ITB",
    description:
      "Make a pathfinding algorithm for UAV based on the regulations and avoiding high buildings such as cell tower, skyscraper, etc.",
    year: "Sept - Dec 2022",
  },
  {
    title: "UAV Design Engineer at Racing Plane Division",
    subtitle: "Aksantara ITB",
    description:
      "Designed a racing UAV optimized to achieve the most laps within 3 minutes on a figure-8 track, analyzed its aerodynamics, and calculated its performance.",
    year: "Mar 2021 - Jan 2023",
  },
];

export { about, education, projects, workExperience, orgExperience };