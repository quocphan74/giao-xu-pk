import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section>
    <h2 className="text-xl font-semibold text-white bg-blue-600 p-3 rounded-t-lg">{title}</h2>
    <div className="space-y-4 mt-2">{children}</div>
  </section>
);

export default Section;