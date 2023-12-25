//import React from 'react'
import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

/* Nota: Info e Image no aparecían de inicio pero al aplicar el estilo
condicional para hover, fue necesario colocarlos al principio; de lo 
contrario no se reconocerían {Info} e {Image} en Container &:hover*/
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute; //necesita del position: relative en el Container para visualizarse adecuadamente
    top:0;
    left: 0;
    background-color:rgba(0,0,0,0.2); //antes era gris para diferenciarlo y trabajarlo
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
` 
const Image = styled.img`
  height: 50%;
  width: 80%;
  z-index: 2;
  object-fit: contain;
  transition: all 0.5s ease;
`

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #DBDBEA;
    position: relative; //lo que esté dentro del contenedor se visuallizará solo en referencia a este contenedor y no al body
    &:hover ${Info}{
      opacity: 1;
    }
    &:hover ${Image} {
      transform: scale(1.2); /* Ajusta el valor según sea necesario */
    }
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover{
      background-color: #e9f5f5;
      transform: scale(1.3);
    }
` 
const Product = ({myprop_item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={myprop_item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon/>
        </Icon>
        <Icon>
          <SearchOutlinedIcon/>
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon/>
        </Icon>
      </Info>
    </Container>

  )
}

export default Product
