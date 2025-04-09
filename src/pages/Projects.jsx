import ProjectCard from '../components/ProjectCard';

const sampleProjects = [
  {
    title: 'Galactic UI Kit',
    description: 'A cosmic-themed interface design system built for futuristic SaaS dashboards.',
  },
  {
    title: 'PixelPay',
    description: 'A crypto wallet app with an 8-bit arcade interface for fun, intuitive transactions.',
  },
  {
    title: 'TimeWarp Portfolio',
    description: 'A retro timeline-based personal site built like a side-scrolling game.',
  },
  {
    title: 'NeonForms',
    description: 'A form builder app with glowing themes and pixel animations for engaging user input.',
  },
];

export default function Projects() {
  return (
    <div style={{ padding: '60px 20px' }}>
      {sampleProjects.map((proj, i) => (
        <ProjectCard key={i} {...proj} />
      ))}
    </div>
  );
}
