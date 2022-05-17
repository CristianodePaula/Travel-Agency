import React from 'react'
import {
  Container,
  BoxLeft,
  Local,
  Desc,
  BoxRight,
  Title,
  Input,
  Message,
  TextArea,
  Button
} from './ContactStyle'
import emailjs from '@emailjs/browser'
import {
  contactLocalAnime,
  contactSocialAnime,
  contactFormAnime
} from '../../resources/Animations'
import Navbar from '../../components/Navbar/Navbar'
import SocialLinks from '../../components/SocialLinks/SocialLinks'

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
        <BoxLeft>
          <Local
            variants={contactLocalAnime}
            initial='initial'
            animate='animate'>
            Localização
          </Local>
          <Desc
            variants={contactSocialAnime}
            initial='initial'
            animate='animate'>
            Av. João Cesar de Oliveira nº 55.380
          </Desc>
        </BoxLeft>
        <SocialLinks />
        <BoxRight
          onSubmit={sendEmail}
          variants={contactFormAnime}
          initial='initial'
          animate='animate'>
          <Title>Entre em Contato</Title>
          <Input placeholder='Nome' />
          <Input placeholder='Email' />
          <Message>Escreva sua mensagem</Message>
          <TextArea />
          <Button>Enviar</Button>
        </BoxRight>
      </Container>
    </>
  )
}
