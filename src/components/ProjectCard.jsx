import styled from 'styled-components';

const Card = styled.div\`
  border: 2px dashed #00ffea;
  padding: 20px;
  margin-bottom: 20px;
  background: #1a1a1a;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.03);
    border-color: #ff00ff;
  }
\`;

export default function ProjectCard({ title, description }) {
  return (
    <Card>
      <h2>{title}</h2>
      <p>{description}</p>
    </Card>
  );
}
