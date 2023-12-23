//import React from 'react'
import styled from "styled-components";
import {categories} from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

/**En el código a continuación se usa la variable myprop_item como prop. Esto se hace para 
 * diferenciar de la variable "item" la cual se usa para hacer el recorrido del array. Este prop
 * myprop_item se pasa al componente CategoryItem para poder renderizar los elementos
 */
const Categories = () => {
  return (
    <Container>
        {categories.map(item=>(
          <CategoryItem myprop_item = {item} key={item.id}/>
        )
        )}
    </Container>
  )
}

export default Categories
