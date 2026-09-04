import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Accordion.module.css';

interface AccordionProps {
  question: string;
  answer: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <button 
        className={styles.trigger} 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={styles.question}>{question}</span>
        <ChevronDown 
          className={`${styles.icon} ${isOpen ? styles.openIcon : ''}`} 
          size={20} 
        />
      </button>
      
      <div 
        className={`${styles.content} ${isOpen ? styles.openContent : ''}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.innerContent}>
          {answer}
        </div>
      </div>
    </div>
  );
};
