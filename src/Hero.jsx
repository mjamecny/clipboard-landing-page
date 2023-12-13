import styled, { css } from "styled-components"

const StyledHero = styled.section`
  padding-inline: 2.4rem;
`

const Container = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`

const Heading = styled.h1`
  color: var(--color-dark-grayish-blue);
  text-align: center;
  line-height: 1.2;
  font-size: 3.6rem;
`

const Text = styled.p`
  color: var(--color-grayish-blue);
  text-align: center;
  margin-top: 1.6rem;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-top: 3.2rem;

  @media (min-width: 40em) {
    flex-direction: row;
    margin: 0 auto;
    margin-top: 3.2rem;
    justify-content: center;
  }
`

const Button = styled.button`
  background: var(--color-strong-cyan);
  color: #fff;
  font-weight: 600;
  font-size: 1.8rem;
  border-radius: 100px;
  border: none;
  padding: 1.6rem 3.2rem;
  transition: opacity 0.3s;

  ${(props) =>
    props.background === "strong-cyan" &&
    css`
      background: var(--color-strong-cyan);
    `}

  ${(props) =>
    props.background === "light-blue" &&
    css`
      background: var(--color-light-blue);
    `}

  &:hover {
    opacity: 0.7;
  }
`

export default function Hero() {
  return (
    <StyledHero>
      <Container>
        <Heading>A history of everything you copy</Heading>
        <Text>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </Text>
        <ButtonContainer>
          <Button background="strong-cyan">Download for iOS</Button>
          <Button background="light-blue">Download for Mac</Button>
        </ButtonContainer>
      </Container>
    </StyledHero>
  )
}
