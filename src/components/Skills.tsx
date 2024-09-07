// src/components/Skills.tsx
import React from 'react';
import SkillCard from './SkillCard';
import './Skills.css';

// Import or provide URLs for skill icons
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Adobe Photoshop', icon: SiAdobephotoshop },
    { name: 'Adobe Premiere Pro', icon: SiAdobepremierepro },
    { name: 'After Effects', icon: SiAdobeaftereffects },
    // Add more skills as needed
  ];

  return (
    <section className="skills-section">
      <h2>Skills & Tools</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} skillName={skill.name} skillIcon={skill.icon} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
