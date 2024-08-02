import data_professional_survey from "./assets/Data_Professional_Survey_Breakdown.pdf";
import hr_analytics from "./assets/hr_analytics_dashboard.pdf";

const about = {
  name: "Octavianus Bagaswara Adi",
  description:
    "As a graduate from Aerospace Engineering at Institut Teknologi Bandung, my journey has been marked by a commitment to intertwining technical expertise with societal impact. The recent completion of a project at Bangkit Academy, earning a spot in the top 50 out of 639, highlighted my ability to leverage machine learning tools like TensorFlow to create meaningful solutions. In parallel, my tenure as Vice President at TSA ITB was defined by empowering teams to deliver social projects that resonate with the Sustainable Development Goals; a testament to my leadership and dedication to driving positive change. Our collaboration with the Tanoto Foundation was fundamental in steering successful initiatives, showcasing my capabilities in project management and social responsibility.",
  resume: "",
  social: {
    linkedin: "https://www.linkedin.com/in/octavianusbagas/",
    github: "https://github.com/gasous30",
    mail: "mailto:octavianus.bagaswara@gmail.com",
  },
};

const education = [
  {
    title: "Bachelor of Engineering in Aerospace Engineering",
    subtitle: "Institut Teknologi Bandung, Indonesia",
    description: [
      "Published 1 article at Jurnal Kewarganegaraan and 2 conference papers at the IEEE International Conference on Aerospace Electronics and Remote Sensing Technology (ICARES).",
      "Learn about design, construction, and science of aircraft and spacecraft.",
    ],
    year: "2020 - 2024 (expected)",
  },
  {
    title: "Hanyang International Winter School",
    subtitle: "Hanyang University",
    description: [
      "Learn about principle of microeconomics and contemporary society and marketing",
    ],
    year: "2024",
  },
  {
    title: "Bangkit Academy by Google, GoTo, and Traveloka",
    subtitle: "Machine Learning Cohort",
    description: [
      "Achieved recognition among the top 50 product-based capstone projects out of 639 entries.",
      "Developed FONA: Food Nutrition Assistant, an application with 5 features designed to help users calculate theirdaily nutritional requirements.",
      "Learn about data analytics, fundamental mathematics for machine learning, practical TensorFlow application, and advanced machine learning and deep learning techniques.",
    ],
    year: "2023 - 2024",
  },
];

const projects = [
  {
    title: "Food Detection and Nutrition Calculator Application",
    description:
      "An application-based food detection and calculator system, provide nutrient values, and assist users in calculating their daily nutrition needs.",
    tag: "Machine Learning",
    tech: ["Python", "Tensorflow"],
    link: "https://www.canva.com/design/DAF5c_V7JuM/aexO7xfGBG8Cfn3mHUv-WQ/view?utm_content=DAF5c_V7JuM&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  },
  {
    title: "Web Based Application Wind Turbine Damage Detection",
    description:
      "An application-based damage detection occurring on conventional wind turbine blades using Object Detection.",
    tag: "Machine Learning",
    tech: ["React", "Typescript", "Express", "Python", "Tensorflow"],
    link: "https://itbdsti-my.sharepoint.com/:p:/g/personal/13620059_mahasiswa_itb_ac_id/EX1GYWtQGstNt-7neDTdjg0Bh6iDaJA1HVOYOBBSvbNTCQ?e=qT6VCf",
  },
  {
    title: "Chatbot Application for Helping Covid-19 Patients",
    description:
      "An interactive chatbot to aid users in locating the nearest plasma and vaccination centers based on their current location.",
    tag: "Machine Learning",
    tech: ["React", "Express", "Twilio", "Mongodb"],
    link: "https://www.canva.com/design/DAEvW0rgfrg/hJslN38m12A4wAOcxVmhNA/view?utm_content=DAEvW0rgfrg&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  },
  {
    title: "Flight Delay Dashboard in US",
    description:
      "An interactive dashboard for flight delay in US from January 2017 to July 2022",
    tag: "Data",
    tech: ["Tableau"],
    link: "https://public.tableau.com/shared/2T5TF9MK3?:display_count=n&:origin=viz_share_link",
  },
  {
    title: "HR Analytics Dashboard",
    description:
      "An interactive dashboard developed using Power BI aims to provide insights into various aspects of human resources within an organization.",
    tag: "Data",
    tech: ["PowerBI"],
    link: hr_analytics,
  },
  {
    title: "Data Professional Survey Dashboard",
    description:
      "An interactive dashboard developed using Power BI aims to provide insights into data professional.",
    tag: "Data",
    tech: ["PowerBI"],
    link: data_professional_survey,
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
      "Hardware-In-The-Loop Simulation Analysis on Thrust Vectoring Control Design for Ducted Fan UAV",
    description:
      "A MATLAB-based tool was designed and implemented using HILS for a TVC vehicle, introducing a new approach to flight control system design.",
    tag: "Engineering",
    tech: ["Matlab", "Simulink"],
    link: "https://digilib.itb.ac.id/gdl/view/81873/13620059?rows=1&per_page=2",
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
  {
    title:
      "Optimization of Electrical Energy Production with Automatic Resonance Frequency Adjustment on Vortex Shedding Turbine using a Fluid-Structure Interaction Approach",
    description:
      "Optimization of electrical energy production through automatic resonance frequency adjustment in vortex shedding turbines, employing a fluid-structure interaction approach to enhance efficiency and performance in renewable energy systems.",
    tag: "Engineering",
    tech: ["Matlab"],
    link: "https://www.canva.com/design/DAFwCZHN2PA/-6-928qEBOy9AoSXFVJ1HQ/view?utm_content=DAFwCZHN2PA&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  },
  {
    title:
      "Static Load Analysis of Scissor Lift on High Catering Truck using Finite Element Method",
    description:
      "Static load analysis of a scissor lift on a high catering truck using the finite element method to assess structural integrity, ensure safety, and optimize design for enhanced performance and reliability.",
    tag: "Engineering",
    tech: ["Abacus"],
    link: "https://www.canva.com/design/DAFjQ_WMAzc/bvr3mk-QsebIfjppFtOmtA/view?utm_content=DAFjQ_WMAzc&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  },
  {
    title: "Conceptual Design of Urban Air Mobility (UAM) Aircraft",
    description:
      "Designed LIG-MB eVTOL UAM aircraft, a sustainable, 4-passenger electric vehicle designed for urban air mobility. It complies with FAA and FATO regulations, featuring VTOL capability, autonomous flight, and advanced safety systems for efficient and eco-friendly transportation.",
    tag: "Engineering",
    tech: ["Matlab", "Excel", "Solidworks", "DATCOM"],
    link: "https://www.canva.com/design/DAF2TY5GQeI/75SRwO4EvqIeMfGJXrNw9Q/view?utm_content=DAF2TY5GQeI&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  },
];

const workExperience = [
  {
    title: "Front End Web Developer",
    subtitle: "Internnet Indonesia",
    description: [
      "Developed websites for Internnet Indonesia Wave 5 using the Next framework.",
      "Developed content management system website for Internnet Indonesia by using Vite framework.",
    ],
    year: "Nov 2021 - Oct 2023",
  },
  {
    title: "On the Job Training Aerodynamics Engineer",
    subtitle: "PT Dirgantara Indonesia",
    description: [
      "Analyzed several aerodynamic software tools, including VSPAERO and ANSYS Fluent, to calculate the lift and drag forces on a wing",
      "Assessed the strengths and limitations of VSPAERO and ANSYS Fluent in estimating lift and drag forces, providing valuable insights into their performance and applicability",
      "Evaluated the accuracy of VSPAERO and ANSYS Fluent in predicting lift and drag forces, ensuring reliable and precise aerodynamic calculations for wing designs.",
    ],
    year: "Jun - Jul 2023",
  },
];

const orgExperience = [
  {
    title: "Vice President",
    subtitle: "Tanoto Scholars Association (TSA) ITB",
    description: [
      "Assisted the president in supervising six divisions, totaling 40 members, to execute social projects aligned with SDGs.",
      "Attained recognition for the best project showcase among nine Tanoto Scholars Association across Indonesia.",
      "Guided four social projects to fulfill beneficiary needs through collaboration with the Tanoto Foundation.",
    ],
    year: "Dec 2022 - Dec 2023",
  },
  {
    title: "Media, Communication, and Information Staff Web Division",
    subtitle: "KMPN ITB",
    description: [
      "Developed a website for KMPN (Keluarga Mahasiswa Teknik Penerbangan) using the React framework",
      "Developing headless CMS for KMPN by integrating WordPress and React.",
    ],
    year: "Jun 2022 - Apr 2023",
  },
  {
    title:
      "KMPN UAV Development Team (KUDT) Systems Department AI Division Staff",
    subtitle: "KMPN ITB",
    description: [
      "Make a pathfinding algorithm for UAV based on the regulations and avoiding high buildings such as cell tower, skyscraper, etc.",
    ],
    year: "Sept - Dec 2022",
  },
  {
    title: "UAV Design Engineer at Racing Plane Division",
    subtitle: "Aksantara ITB",
    description: [
      "Designed a racing UAV optimized to achieve the most laps within 3 minutes on a figure-8 track",
      "Analyzed a racing UAV's aerodynamics using XFLR 5",
      "Calculated performance of a racing UAV",
    ],
    year: "Mar 2021 - Jan 2023",
  },
];

const achievement = [
  {
    title:
      "1st Place in Scientific Writing and Prototyping Competition at Milezero Project 2.0",
    subtitle: "Issued by IEEE ITB",
    description: [
      "I, along with the team, have developed an application that can be used to detect damage occurring on conventional wind turbine blades using Object Detection. Once detected, the program will connect to a simulation created with Simulink (MATLAB) and calculate the amount of power lost. Subsequently, the program will output the losses incurred if repairs are not carried out. In this program, my role involves creating the Object Detection function using Tensorflow and designing the UI/UX with ReactJS, as well as integrating Python and MATLAB.",
    ],
    year: "Mar 2022",
  },
  {
    title: "3rd Place in Mathematical Modelling Competition",
    subtitle: "Issued by Himpunan Mahasiswa Matematika ITB",
    description: [
      "My team and I have developed a mathematical model used to calculate the profits and revenue of a company based on various variables that have arisen as a result of the COVID-19 pandemic.",
    ],
    year: "Mar 2022",
  },
  {
    title: "1st Place in Scientific Writing Competition at EBOTEC #11",
    subtitle: "Issued by FMIPA UGM",
    description: [
      "My team and I have created a chatbot designed to help users find the closest plasma center based on their current location. This application is integrated with WhatsApp using the Twilio API.",
    ],
    year: "Nov 2021",
  },
  {
    title:
      "3rd Place in Kontes Robot Terbang Indonesia (KRTI) Racing Plane Division",
    subtitle: "Issued by Pusat Prestasi Nasional",
    description: [
      "Our team won 3rd place in the Kontes Robot Terbang Indonesia (KRTI) Racing Plane Division by designing a UAV that completed the most laps on an 8-figure track within 3 minutes.",
    ],
    year: "Nov 2021",
  },
  {
    title: "TELADAN Leadership Program Awardee",
    subtitle: "Issued by Tanoto Foundation",
    description: [
      "Selected as one of the 150 TELADAN scholarship awardees from a pool of 10,895 applicants across nine partner universities in Indonesia. The TELADAN program offers a comprehensive package, including a full scholarship and leadership development training, with the goal of nurturing future leaders.",
    ],
    year: "Jan 2021",
  },
];

const certification = [
  {
    title: "TensorFlow Developer Certificate",
    subtitle: "TensorFlow Certificate Program",
    issued: "Mar 2024",
    expired: "Mar 2027",
    credID: "98824562",
    credLink: "https://www.credential.net/0f70d965-2cca-46c4-ad61-88c689452fc3",
    description:
      "This Level One certification exam evaluates a developer's foundational knowledge in integrating machine learning into tools and applications. It covers building TensorFlow models using Computer Vision, Convolutional Neural Networks, Natural Language Processing, and strategies for handling real-world image data.",
  },
  {
    title: "Mechanical Design at the level of ASSOCIATE using SOLIDWORKS",
    subtitle: "Dassault Systèmes",
    issued: "Jul 2021",
    credID: "C-VCSWHU8M7A",
    credLink: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-VCSWHU8M7A",
    description:
      "Achieved Associate-level certification in Mechanical Design using SOLIDWORKS, earning a perfect score. This certification demonstrates proficiency in creating and analyzing mechanical components and assemblies using SOLIDWORKS, showcasing skills in 3D modeling, design principles, and simulation techniques.",
  },
];

export {
  about,
  education,
  projects,
  workExperience,
  orgExperience,
  achievement,
  certification,
};
