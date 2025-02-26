import { useState } from 'react'

import BusinessCard from './components/BusinessCard'
import ImageSelector from './components/ImageSelector'
import Gallery from './components/Gallery'
import Accordion from './components/Accordion'
import ChatBot from './components/ChatBot'
import DarkModeSwitcher from './components/DarkModeSwitcher'

export default function Home() {
  const [cardImage, setCardImage] = useState('/images/cornell-seal-black.svg');

  <ImageSelector onImgChange={setCardImage}/>

  return (
    <main>
      <DarkModeSwitcher />

      <h2>Business Card</h2>
      <BusinessCard
        image={cardImage}
        name="Ezra Cornell"
        email="ezra@cornell.edu"
      />
      <ImageSelector />

      <h2>Gallery Example</h2>
      <Gallery />

      <h2>Accordion Example</h2>
      <Accordion />

      <h2>ChatBot UI</h2>
      <ChatBot />

      <h2>Rendered Date</h2>
      <p>{new Date().toLocaleString()}</p>
    </main>
  )
}
