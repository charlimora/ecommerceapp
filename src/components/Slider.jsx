//import React from 'react'
import styled from "styled-components"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const Container = styled.div`
    width: 100%;
    height: 100vh; //1 vh es 1% de la ventana. 100 vh es toda la altura de la ventana visible del navegador
    display: flex;
    background-color: coral;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Slider = () => {
  return (
    <div>
      <Container>
        <Arrow>
            <ArrowLeftIcon/>
        </Arrow>
      </Container>
    </div>
  )
}

export default Slider
