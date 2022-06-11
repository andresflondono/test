import styled from "styled-components"

const Container = styled.div`
  height: 500px;
  width: 800px;
  border: 3px solid #4D4C7D;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  @media (max-width: 800px) {
    width: 90%;
  }
`

export default Container