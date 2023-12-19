import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #5d86d3;
    color:white;
   // margin-top: 0;
   display: flex;
   align-items: center;
   font-size: 14px;
   font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
      Super descuentos en la Tienda de Software del Profe Carlos
    </Container>
  )
}

export default Announcement