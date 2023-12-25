//import React from 'react'
import styled from "styled-components"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from "react";
import { sliderItems } from "../data";

const Container = styled.div`
    width: 100%;
    height: 100vh; //1 vh es 1% de la ventana. 100 vh es toda la altura de la ventana visible del navegador
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"}; //uso props y estilos dinámicos
    right: ${props=> props.direction === "right" && "10px"};
    margin:auto;
    cursor: pointer;
    opacity: 0.5; //doy transparencia
    z-index: 2; //Pregunta superpondrá las flechas??
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    /* el siguiente slideIndex es el que aparece en el componente Wrapper no el de la función */
    transition: all 1.5s ease;
    transform: translateX(${(props)=> props.slideIndex * -100}vw); //moverá el elemento en el eje X, todo el ancho de pantalla
`
const Slide = styled.div`
    width: 100vw; //todo el ancho visible
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex:1;
`
const Image = styled.div`
    height: 90%;
    background-image: url(${props => props.src});
    background-size: cover;
    /*width: 100%; // Ajusta el ancho según tus necesidades
    background-size: cover; // 
    background-position: center; */ 
`

const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50 px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction)=> {           //método que se ejecuta al cliquear botones left o right
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2) //slideIndex () es el método que actualiza el estado
        } else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    };

  return (
    <div>
      <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftIcon/>
        </Arrow>
        <Wrapper className="miWrapper" slideIndex={slideIndex}>
            {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
                <Image src={item.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>Ver Ahora</Button>
            </InfoContainer>
            </Slide>
            ))} 
            {/* se cierra la interación con map */}
            {/* <Slide bg="fcf1ed">
            <ImgContainer>
                <Image src="https://images.pexels.com/photos/6393024/pexels-photo-6393024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Lo más novedoso</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quam harum ex ratione esse quaerat minima vel dolore, ea doloribus eaque, cumque voluptates accusantium provident pariatur sunt totam incidunt sapiente?</Desc>
                <Button>Ver Ahora</Button>
            </InfoContainer>
            </Slide>
            <Slide bg="fbf0f4">
            <ImgContainer>
                <Image src="https://media.istockphoto.com/id/1081869356/es/foto/tomar-en-el-turno-tarde-con-verdadera-dedicaci%C3%B3n.jpg?s=1024x1024&w=is&k=20&c=pGrbEmsR2eRr7TiR9wifPbgthvFoI2EyNdSdAHnSD1c="/>
            </ImgContainer>
            <InfoContainer>
                <Title>El mejor Software</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quam harum ex ratione esse quaerat minima vel dolore, ea doloribus eaque, cumque voluptates accusantium provident pariatur sunt totam incidunt sapiente?</Desc>
                <Button>Ver Ahora</Button>
            </InfoContainer>
            </Slide> */}
        </Wrapper>       
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightIcon/>
        </Arrow>
       
      </Container>
    </div>
  )
}

export default Slider
