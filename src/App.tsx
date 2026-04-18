import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DownloadButton from './components/atoms/DownloadButton/DownloadButton'

function App() {
  const [count] = useState(0)

  return (
    <main>
      <header className="app__header">
        <img src={viteLogo} alt="Vite logo" />
        <img src={reactLogo} alt="React logo" />
      </header>

      <section className="app__content">
        <img src={heroImg} alt="Hero artwork" />

        <div className="app__actions">
          <DownloadButton href={heroImg} filename="hero.png">
            Download Hero
          </DownloadButton>
        </div>
      </section>
    </main>
  )
}

export default App
