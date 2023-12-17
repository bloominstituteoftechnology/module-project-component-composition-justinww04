import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const Url1 = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchphoto(){
      axios.get(Url1)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
    fetchphoto()
    setApod({
            "date": "2023-12-16",
            "explanation": "Peering from the shadows, the Saturn-facing hemisphere of tantalizing inner moon Enceladus poses in this Cassini spacecraft image. North is up in the dramatic scene captured during November 2016 as Cassini's camera was pointed in a nearly sunward direction about 130,000 kilometers from the moon's bright crescent. In fact, the distant world reflects over 90 percent of the sunlight it receives, giving its surface about the same reflectivity as fresh snow. A mere 500 kilometers in diameter, Encelad...",
            "hdurl": "https://apod.nasa.gov/apod/image/2312/PIA20522enceladus.jpg",
            "media_type": "image",
            "service_version": "v1",
            "title": "Crescent Enceladus",
            "url": "https://apod.nasa.gov/apod/image/2312/PIA20522enceladusC.jpg"
          
    })
  }, [])

  if(!apod) return 'Fetching Photo of the Day...'
  return (
    <section>
      <Card
      title={apod.title}
      text={apod.explanation}
      imageURL={apod.url}
      date={apod.date}
      />
    </section>
  )
}


export default App
