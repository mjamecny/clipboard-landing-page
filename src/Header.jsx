import styled from "styled-components"

const StyledHeader = styled.header`
  background: url("../public/bg-header-mobile.png");
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  @media (min-width: 23.43em) {
    background: url("../public/bg-header-desktop.png");
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
      <Image src="../public/logo.svg" alt="logo" />
    </StyledHeader>
  )
}
