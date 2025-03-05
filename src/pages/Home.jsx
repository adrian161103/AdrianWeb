import React from 'react'
import Page from '../components/page'
import Presentacion from '../components/home/Presentacion'
import Image from '../components/image.jsx'
import Habilidades from '../components/home/Habilidades.jsx'
import Certificado from '../components/home/Certificado.jsx'
import AboutMe from '../components/home/AboutMe.jsx'
import Tecnologias from '../components/home/Tecnologias.jsx'


function Home() {
  
  return (
    <>
    <Image />
    <Page>
    <Presentacion />
    <AboutMe />
    <Certificado />
    <Habilidades />
    <Tecnologias />
  
    </Page>

    </>
  )
}

export default Home