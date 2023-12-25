//import React from 'react'
import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Products = () => {
  return (
    <Container>
      {popularProducts.map(item=>(
        <Product myprop_item={item} key={item.id}/> // se estableció un prop llamado myprop_item
      ))}
    </Container>
  )
}

export default Products
