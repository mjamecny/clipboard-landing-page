import styled from "styled-components"

const StyledHeader = styled.header`
  background: url("bg-header-mobile.png");
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  @media (min-width: 23.43em) {
    background: url("bg-header-desktop.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
`

const Image = styled.img`
  width: 100px;
`

export default function Header() {
  return (
    <StyledHeader>
      <Image src="logo.svg" alt="logo" />
    </StyledHeader>
  )
}
