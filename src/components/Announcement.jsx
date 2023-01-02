import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color:white;
    margin-top: 0;
`

const Announcement = () => {
  return (
    <Container>
      Super descuentos en la Tienda de Software del Profe Carlos
    </Container>
  )
}

export default Announcement