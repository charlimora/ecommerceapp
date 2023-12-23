import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #659d1d;
    color:white;
   // margin-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
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