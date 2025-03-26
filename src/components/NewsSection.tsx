
import React from 'react';
import Section from './Section';

const newsItems = [
  {
    date: 'June 15, 2023',
    title: 'New Research Grant Awarded',
    description: 'Received $1.2M grant from the National Science Foundation for research on AI applications in healthcare.',
  },
  {
    date: 'May 3, 2023',
    title: 'Paper Published in Nature',
    description: 'Our recent work on deep learning models for medical imaging was published in Nature.',
  },
  {
    date: 'April 12, 2023',
    title: 'Keynote Speaker at AI Conference',
    description: 'Delivered keynote address at the International Conference on Artificial Intelligence in Medicine.',
  },
  {
    date: 'March 8, 2023',
    title: 'New Lab Opening',
    description: 'Proud to announce the opening of our new AI and Computational Biology Laboratory.',
  },
];

const NewsSection = () => {
  return (
    <Section 
      id="news" 
      title="Latest News" 
      subtitle="Stay updated with my recent academic achievements, publications, and research developments."
      className="bg-gradient-to-b from-white to-secondary/30"
    >
      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-primary/30 pl-8 ml-4 space-y-10 py-4">
          {newsItems.map((item, index) => (
            <div key={index} className="relative no-visible animate-fade-up">
              <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-primary"></div>
              <div className="text-sm text-primary font-medium mb-2">{item.date}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default NewsSection;
