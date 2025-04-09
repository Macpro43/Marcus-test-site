import ProjectCard from '../components/ProjectCard';

const sampleProjects = [
  { title: 'Galactic UI Kit', description: 'Retro-futuristic interface for dashboards.' },
  { title: 'PixelPay', description: 'Crypto wallet with arcade vibes.' },
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
