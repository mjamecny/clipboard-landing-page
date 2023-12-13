import styled from "styled-components"

const StyledLogos = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.4rem;
  max-width: 120rem;
  margin: 0 auto;
  padding-block: 6.4rem;

  @media (min-width: 64em) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Image = styled.img``

export default function Logos() {
  return (
    <StyledLogos>
      <Image src="logo-google.png" alt="google logo" />
      <Image src="logo-hp.png" alt="hp logo" />
      <Image src="logo-ibm.png" alt="ibm logo" />
      <Image src="logo-microsoft.png" alt="microsoft logo" />
    </StyledLogos>
  )
}
