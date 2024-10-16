import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import ImageText from "../components/common/ImageText";
import Footer from "../components/Footer/Footer";
import "./css/aboutMe.css";

const AboutMe = () => {
  const aboutMe = {
    title: "About Me",
    subtitle: `I’m passionate about innovation and driven by impact`,
    content: `I really enjoy working on cutting-edge projects and developing
              enabling new technologies in the hope that these will one day
              translate back to the real world and have a direct impact on our
              lives. I also enjoy being surrounded by brilliant people that
              share the vision of “technology for good” and I’m truly humbled by
              their support. Meanwhile, I’m excited by the ever-growing
              challenges I’m faced with as my career unfolds and keen to take
              them on.`,
  };

  const workExperience = {
    title: "Work Experience",
    subtitle: `I have gained valuable experience through various projects and internships that have honed my skills in software development and teamwork.`,
    content: `Throughout my journey, I have had the opportunity to work on diverse projects, including web applications, automation systems, and freelance platforms. These experiences have allowed me to collaborate with talented individuals, learn new technologies, and contribute to innovative solutions. I believe that each project presents a unique challenge, and I am always eager to tackle these challenges head-on, ensuring quality and efficiency in my work. My exposure to real-world applications has deepened my understanding of user needs and the importance of creating impactful, user-centered designs. I look forward to continuing to grow and learn as I advance in my career, taking on new responsibilities and pushing the boundaries of what is possible.`,
  };

  const awards = {
    title: "Awards and Achievements",
    subtitle: "",
    content: `
    - Awarded 'Best Innovator' in TechExpo 2023 for developing a smart IoT based energy monitoring system
    - Secured 1st place in CodeStorm'23, a national level coding competition
    - Selected as a keynote speaker for a university seminar on AI and machine learning applications
    - Completed Google Cloud Certification in Data Engineering with distinction
    - Recognized as 'Top Contributor' in an open-source development community
    - Published a research paper on blockchain security at the International Conference on Emerging Technologies
    - Won the 'Most Impactful Solution' award at the Hack4Good Hackathon for developing a disaster relief platform
    `,
  };


  return (
    <div className="aboutMe w-[100%] h-[100%] bg-[#2a2a2a]"> 
      <Navbar />
      <div className="pt-20"></div>
      <ImageText title={aboutMe.title} subtitle={aboutMe.subtitle} content={aboutMe.content}/>
      <Footer/>
    </div>
  );
};

export default AboutMe;
