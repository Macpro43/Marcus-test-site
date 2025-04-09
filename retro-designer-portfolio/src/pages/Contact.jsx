import styled from 'styled-components';

const Container = styled.div\`
  padding: 60px 20px;
  max-width: 600px;
  margin: auto;
  color: #fff;
\`;

const Input = styled.input\`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background: #0e0e0e;
  border: 1px solid #00ffea;
  color: #00ffea;
\`;

const TextArea = styled.textarea\`
  width: 100%;
  padding: 10px;
  background: #0e0e0e;
  border: 1px solid #00ffea;
  color: #00ffea;
  margin-bottom: 10px;
\`;

const Button = styled.button\`
  background: #00ffea;
  color: #0e0e0e;
  padding: 10px 20px;
  font-family: 'Press Start 2P', monospace;
  cursor: pointer;
  border: none;

  &:hover {
    background: #ff00ff;
    color: #fff;
  }
\`;

export default function Contact() {
  return (
    <Container>
      <h1>Contact Me</h1>
      <form>
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <TextArea rows="4" placeholder="Your Message" />
        <Button type="submit">Send</Button>
      </form>
    </Container>
  );
}
