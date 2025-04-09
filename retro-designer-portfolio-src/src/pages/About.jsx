import styled from 'styled-components';

const Container = styled.div\`
  padding: 60px 20px;
  max-width: 800px;
  margin: auto;
  color: #fff;
\`;

export default function About() {
  return (
    <Container>
      <h1>About Me</h1>
      <p>
        I'm a digital product designer with 10+ years of experience creating intuitive and visually striking experiences.
        My passion lies in blending high-tech functionality with a nostalgic retro vibe to create unique interfaces users love.
      </p>
      <p>
        When I'm not designing, I enjoy pixel art, retro gaming, and exploring the intersections of technology and storytelling.
      </p>
    </Container>
  );
}
