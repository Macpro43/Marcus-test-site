import styled from 'styled-components';

const Container = styled.div\`
  padding: 80px 20px;
  text-align: center;
\`;

const Title = styled.h1\`
  font-size: 18px;
  color: #00ffea;
  text-shadow: 0 0 10px #00ffea;
\`;

const SubTitle = styled.p\`
  font-size: 12px;
  color: #fff;
\`;

export default function Home() {
  return (
    <Container>
      <Title>HELLO, I’M A DIGITAL PRODUCT DESIGNER</Title>
      <SubTitle>Crafting pixel-perfect, high-tech, user-friendly experiences with a retro twist.</SubTitle>
    </Container>
  );
}
