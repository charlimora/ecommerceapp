import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props=>props.color};
    display: flex; //permite que los siguienets estilos tengan efecto
    align-items: center; //alineación vertical
    justify-content: center; //alineación horizontal
    margin-right: 20px;
`
const Center = styled.div`
    flex:1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex:1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 70%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>AndreuTech.</Logo>
            <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto natus nihil optio, qui maiores corporis libero illo rerum a debitis sapiente aperiam deserunt ipsam ab nulla quod asperiores, magnam totam?</Desc>
            <SocialContainer>
                <SocialIcon color="#3B5999">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="#E4405F">
                    <TwitterIcon/>
                </SocialIcon>
                <SocialIcon color="#55ACEE">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="#E60023">
                    <PinterestIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Links Útiles</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Devices</ListItem>
                <ListItem>Office</ListItem>
                <ListItem>Notebook</ListItem>
                <ListItem>Mi Cuenta</ListItem>
                <ListItem>Lista de Deseos</ListItem>
                <ListItem>Otros</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contacto</Title>
            <ContactItem>
                <RoomIcon style={{marginRight:"10px"}}/>622, Miami, South 26455
            </ContactItem>
            <ContactItem>
                <PhoneIcon style={{marginRight:"10px"}}/>+7 2532 352554
            </ContactItem>
            <ContactItem>
                <MailOutlineIcon style={{marginRight:"10px"}}/>contact@andreutech.com.co
            </ContactItem>
            <Payment src="https://images.ctfassets.net/gc4s9mi2asix/27iheywutAjlzI1CWL3srg/faf536e2fabecb072ef5864bc3a0950b/Accepted-Cards-US.png"/>
        </Right>
    </Container>
  )
}

export default Footer
