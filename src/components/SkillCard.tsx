// src/components/SkillCard.tsx
import React from 'react';
import './SkillCard.css';

interface SkillCardProps {
  skillName: string;
  skillIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const SkillCard: React.FC<SkillCardProps> = ({ skillName, skillIcon:Icon }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        <Icon fontSize={60} />
      </div>
      <h3>{skillName}</h3>
    </div>
  );
};

export default SkillCard;
