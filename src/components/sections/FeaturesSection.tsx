import React from 'react';
import { Button } from '../ui/Button';
import styles from './FeaturesSection.module.css';
import { Lightbulb, Users, MessageCircle, ShieldCheck, Award, Rocket } from 'lucide-react';

const features = [
  {
    icon: <Lightbulb size={32} />,
    eyebrow: 'LEARNING THROUGH EXPERIENCE',
    headline: 'It Looks Like Play. We See Learning.',
    items: [
      { title: 'Blocks', desc: 'Problem-Solving  Building. Balancing. Trying again.' },
      { title: 'Story Time', desc: 'Communication  Listening. Imagining. Expressing.' },
      { title: 'Group Play', desc: 'Social Confidence  Sharing. Waiting. Growing together.' },
      { title: 'Art & Creation', desc: 'Creativity  Exploring ideas in their own way.' }
    ],
    closing: 'Because at this age, every meaningful experience can become an opportunity to learn.'
  },
  {
    icon: <Users size={32} />,
    eyebrow: 'SMALLER LEARNING GROUPS',
    headline: 'At 3, Being Seen Matters.',
    desc: 'Every child learns, communicates and settles into school differently. A smaller learning environment gives teachers more opportunities to understand each little learner  and it’s a ratio we hold school-wide, not just in the Early Years.',
    stats: 'Approx. 1:10* Student–Teacher Ratio',
    list: [
      'More individual interaction',
      'Greater classroom participation',
      'Better understanding of each learner',
      'More opportunities to ask and express'
    ],
    cta: 'MEET OUR EARLY YEARS TEAM'
  },
  {
    icon: <MessageCircle size={32} />,
    eyebrow: 'CONFIDENT COMMUNICATION',
    headline: 'English Should Become a Way to Express  Not a Fear.',
    desc: 'Children get everyday opportunities to communicate through Stories, Conversations, Songs, Show & Tell and classroom participation. Because confidence with language grows through using it, not simply memorising it  a habit that carries straight into the Discover Hour and DEED programs your child will meet in the years ahead.',
    cta: 'EXPERIENCE A TSUS CLASSROOM'
  },
  {
    icon: <ShieldCheck size={32} />,
    eyebrow: 'PEACE OF MIND FOR PARENTS',
    headline: 'The Reassurance Every Parent Looks for First.',
    list: [
      'Nurturing Environment  A child-focused space designed for young learners.',
      'Personal Attention  Smaller groups support meaningful interaction.',
      'Early-Years Educators  Teachers, and a dedicated didi per section.',
      'Safe, Supervised Campus  A secure environment.'
    ]
  },
  {
    icon: <Award size={32} />,
    eyebrow: 'A NAME PARENTS TRUST',
    headline: 'Educating for Life. Every Child. Every Day.',
    desc: 'A trusted educational foundation combined with a future-focused approach to learning  carried through every stage, from a child’s first day in Nursery to the day they leave TSUS in Grade 10.',
    list: [
      'Integrity  Learning to care.',
      'Curiosity  Learning to question.',
      'Pride in Heritage  Learning to understand and respect.',
      'Pursuit of Excellence  Learning to keep trying.'
    ],
    brandLine: 'The Shri Ram Universal School, Ludhiana The 21st Century Skills School'
  },
  {
    icon: <Rocket size={32} />,
    eyebrow: 'THE JOURNEY AHEAD',
    headline: 'Future Skills Start With Strong Foundations.',
    desc: 'At age three or four, future-ready education begins with curiosity, communication, creativity, problem-solving and independence  the exact habits your child builds in TSUS’s Early Years classrooms. As children progress through TSUS, this foundation grows into grade-appropriate future skills: AI and Robotics, a Digital Literacy Lab, real-world design thinking, and more.'
  }
];

export const FeaturesSection = () => {
  return (
    <section className={`py-section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          {features.map((feat, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconWrapper}>{feat.icon}</div>
              <span className={styles.eyebrow}>{feat.eyebrow}</span>
              <h3 className={styles.headline}>{feat.headline}</h3>

              {feat.desc && <p className={styles.desc}>{feat.desc}</p>}

              {feat.stats && <div className={styles.stats}>{feat.stats}</div>}

              {feat.items && (
                <ul className={styles.itemsList}>
                  {feat.items.map((item, i) => (
                    <li key={i}>
                      <strong>{item.title} →</strong> {item.desc}
                    </li>
                  ))}
                </ul>
              )}

              {feat.list && (
                <ul className={styles.bulletList}>
                  {feat.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {feat.closing && <p className={styles.closing}>{feat.closing}</p>}
              {feat.brandLine && <p className={styles.brandLine}>{feat.brandLine}</p>}

              {feat.cta && (
                <div className={styles.cta}>
                  <Button variant="outline">{feat.cta}</Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
