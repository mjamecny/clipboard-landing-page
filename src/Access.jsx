import styled from "styled-components"

const StyledAccess = styled.section`
  padding-inline: 2.4rem;
  padding-block: 6.4rem;
`

const Container = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

const Heading = styled.h1`
  color: var(--color-dark-grayish-blue);
  font-size: 3.2rem;
  text-align: center;
`

const Text = styled.p`
  color: var(--color-grayish-blue);
  text-align: center;
`

const Image = styled.img`
  padding-inline: 2.4rem;
  margin-top: 6.4rem;
`

export default function Access() {
  return (
    <StyledAccess>
      <Container>
        <Content>
          <Heading>Access Clipboard Anywhere</Heading>
          <Text>
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </Text>
        </Content>
        <Image src="image-devices.png" alt="devices image" />
      </Container>
    </StyledAccess>
  )
}
