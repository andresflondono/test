import { useState } from "react";

import Page from "./components/Page";
import Container from "./components/Container";
import Typography from "./components/Typography";
import ButtonsContainer from "./components/ButtonsContainer";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("black");

  const changeColor  = (event) => {
    setColor(event.target.value);
  }

  const blue = "#1F4690"
  const red = "#FA1616"

  return (
    <Page>
      <Container>
        <Typography color={color}>Prueba básica React</Typography>
        <ButtonsContainer>
          <Button color={blue} value={blue} onClick={changeColor}/>
          <Button color={red} value={red} onClick={changeColor}/>
        </ButtonsContainer>
      </Container>
    </Page>
  );
}

export default App;
