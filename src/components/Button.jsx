import styled from "styled-components"

const Button = styled.button`
  height: 50px;
  width: 300px;
  border-radius: 5px;
  background-color: ${props => props.color};
`

export default Button