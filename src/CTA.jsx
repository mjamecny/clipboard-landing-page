import styled, { css } from "styled-components"

const StyledCTA = styled.section`
  padding-inline: 2.4rem;
  padding-block: 6.4rem;
`

const Container = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

const Heading = styled.h2`
  text-align: center;
`

const Text = styled.p`
  color: var(--color-grayish-blue);
  text-align: center;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-top: 3.2rem;

  @media (min-width: 40em) {
    flex-direction: row;
    justify-content: center;
  }
`

const Button = styled.button`
  background: var(--color-strong-cyan);
  border: none;
  border-radius: 100px;
  color: #fff;
  padding-block: 1.2rem;
  font-weight: 600;
  transition: opacity 0.3s;

  @media (min-width: 40em) {
    padding-inline: 2.4rem;
  }

  ${(props) =>
    props.color === "light-blue" &&
    css`
      background-color: var(--color-light-blue);
    `}

  ${(props) =>
    props.color === "cyan" &&
    css`
      background-color: var(--color-strong-cyan);
    `}

    &:hover {
    opacity: 0.7;
  }
`

export default function CTA() {
  return (
    <StyledCTA>
      <Container>
        <Heading>Clipboard for iOS and Mac OS</Heading>
        <Text>
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </Text>
        <ButtonContainer>
          <Button color="cyan">Download for iOS</Button>
          <Button color="light-blue">Download for Mac</Button>
        </ButtonContainer>
      </Container>
    </StyledCTA>
  )
}
