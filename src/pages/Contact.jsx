import React from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { contactLocalAnime ,  contactSocialAnime , contactFormAnime } from '../resources/Animations'
import Navbar from '../components/Navbar'
import SocialLinks from '../components/SocialLinks'
import contact from '../img/contact.jpg'
import { mobile } from '../resources/Responsive'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background:url(${contact});   
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  ${mobile({
    display: 'grid',
    flexDirection: 'column',
})}
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  text-items: center;
  color: white;
  text-shadow: 10px 5px 5px #000;
  margin-top: 150px;
  ${mobile({
    marginTop: '100px'
})}
`
const Local = styled(motion.h2)`
  font-size: 30px;
  ${mobile({
    fontSize: '25px'
})}
`
const Descr = styled(motion.p)`
  font-size: 25px;
  ${mobile({
    fontSize: '15px'
})}
`
const Right = styled(motion.form)`
  display: flex;
  flex-direction: column;
  text-items: center;
  color: white;
  text-shadow: 10px 5px 5px #000;
  margin-top: 150px;
  ${mobile({
    marginTop: '-50px'
})}
`
const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 50px;
  ${mobile({
    fontSize: '25px',
    marginBottom: '20px'
})}
`
const Input = styled.input`
  height: 30px;
  width: 450px;
  margin-bottom: 20px;
  font-size: 15px;
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  text-shadow: 10px 5px 5px #000;
  ::-webkit-input-placeholder {
    color: white;
}
${mobile({
  fontSize: '10px',
})}
`
const Message = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  ${mobile({
    fontSize: '15px'
  })}
`
const TextArea = styled.textarea`
  display: flex;
  height: 150px;
  margin: 0px 0px 20px;
  font-size: 20px;
  border: 1px solid #fff;
  color: white;
  text-shadow: 10px 5px 5px #000;
  background: transparent;
  ::placeholder {
    color: white;
}
${mobile({
  height: '100px'
})}
`
const Button = styled.button`
  width: 100px;  
  padding: 5px;
  color: #000;
  text-shadow: 5px 3px 3px #000;
  background: transparent;
  cursor: pointer;
  ${mobile({
    fontSize: '12px'
  })}
`
export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      ).then((res) => {
          console.log(res);
      }).catch(err => console.log(err));
  } 

  return (
    <>
    <Navbar />
    <Container>
      <Left>
        <Local variants={contactLocalAnime} initial='initial' animate='animate'>Localização</Local>
        <Descr variants={contactSocialAnime } initial='initial' animate='animate'>Av. João Cesar de Oliveira nº 55.380</Descr>
      </Left>
      <SocialLinks />
      <Right onSubmit={sendEmail} variants={contactFormAnime} initial='initial' animate='animate'>
        <Title>Entre em Contato</Title>
        <Input placeholder='Nome' />
        <Input  placeholder='Email' />     
        <Message>Escreva sua mensagem</Message>   
        <TextArea />
        <Button>Enviar</Button>
      </Right>
    </Container>
    </>
  )
}
