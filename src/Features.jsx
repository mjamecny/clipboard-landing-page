import styled from "styled-components"

const StyledFeatures = styled.section`
  padding-block: 6.4rem;
`

const Heading = styled.h2`
  color: var(--color-dark-grayish-blue);
  font-size: 3.2rem;
  text-align: center;

  @media (min-width: 64em) {
    text-align: left;
  }
`

const Content1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding-inline: 2.4rem;
  margin-top: 3.2rem;
  max-width: 64rem;
  margin: 0 auto;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding-inline: 2.4rem;
  margin-top: 3.2rem;

  @media (min-width: 75em) {
  }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 3.2rem;
  gap: 3.2rem;

  @media (min-width: 64em) {
    grid-template-columns: 1fr 1fr;
  }
`

const Image = styled.img`
  padding-inline: 2.4rem;
`

const TextContainer = styled.div``

const Text = styled.p`
  color: var(--color-grayish-blue);
  text-align: center;

  @media (min-width: 64em) {
    text-align: left;
    max-width: 32rem;
  }
`

const HeadingContent = styled.h1`
  color: var(--color-dark-grayish-blue);
  font-size: 3.2rem;
  text-align: center;
`

const TextContent = styled.p`
  color: var(--color-grayish-blue);
  text-align: center;
`

export default function Features() {
  return (
    <StyledFeatures>
      <Content1>
        <HeadingContent>Keep track of your snippets</HeadingContent>
        <TextContent>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </TextContent>
      </Content1>
      <Container>
        <Image src="image-computer.png" alt="computer image" />
        <TextContainer>
          <Content>
            <Heading>Quick Search</Heading>
            <Text>
              Easily search your snippets by content, category, web address,
              application, and more.
            </Text>
          </Content>
          <Content>
            <Heading>iCloud Sync</Heading>
            <Text>
              Instantly saves and syncs snippets across all your devices.
            </Text>
          </Content>
          <Content>
            <Heading>Complete History</Heading>
            <Text>
              Retrieve any snippets from the first moment you started using the
              app.
            </Text>
          </Content>
        </TextContainer>
      </Container>
    </StyledFeatures>
  )
}
