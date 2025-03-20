import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StyledButton from './components/styles/Button.styled';
import Wrapper from './components/styles/Wrapper.styled';
import Title from './components/styles/Title.styled';
import Button1 from './components/styles/Button1.styled';

function App() {

  return (
    <div className="App">
      <StyledButton href="#">Default Call-to-action</StyledButton>
      <StyledButton primary="true" href="#">Primary Call-to-action</StyledButton>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
      <Wrapper>
        <Button1>Normal</Button1>
        <Button1 primary="true">Primary</Button1>
      </Wrapper>
    </div>
  )
}

export default App
