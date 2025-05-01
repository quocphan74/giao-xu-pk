import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  height?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, height }) => (
  <section>
    <h2 className="text-xl font-semibold text-white bg-blue-600 p-3 rounded-t-lg flex-shrink-0">{title}</h2>
    <div className={`space-y-4 mt-2 overflow-y-auto ${height ? height : ''}`}>{children}</div>
  </section>
);

export default Section;