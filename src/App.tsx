import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.svg'
import './App.css'
import DownloadButton from './components/atoms/DownloadButton/DownloadButton'
import Navbar from './components/atoms/Navbar'
import Footer from './components/atoms/Footer'

import Button from './components/molecules/Button'
import TextInput from './components/molecules/TextInput'
import ToggleSwitch from './components/molecules/ToggleSwitch'
import Card from './components/molecules/Card'
import Badge from './components/molecules/Badge'

import Home from './pages/Home'
import About from './pages/About'
import Tokens from './pages/Tokens'
import Docs from './pages/Docs'
import NotFound from './pages/NotFound'

function ComponentsPage(){
  // demo state for interactive examples
  function AsyncSaveButton(){
    const [saving, setSaving] = useState(false)
    const [saved, setSaved] = useState(false)

    function handleClick(){
      if(saving) return
      setSaving(true)
      setSaved(false)
      setTimeout(()=>{
        setSaving(false)
        setSaved(true)
        setTimeout(()=>setSaved(false), 1400)
      }, 1400)
    }

    return <Button loading={saving} status={saved ? 'success' : 'idle'} onClick={handleClick}>Save</Button>
  }

  return (
    <main>
      <header className="app__header">
        <img src={viteLogo} alt="Vite logo" />
        <img src={reactLogo} alt="React logo" />
      </header>

      <section className="app__content">
        <h2>Component Demos</h2>

        <h3>Button (primary / loading / success / variants)</h3>
        <div style={{display:'flex', gap:12, alignItems:'center', marginBottom:16}}>
          <Button>Primary</Button>
          <AsyncSaveButton />
          <Button status="success">Saved</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Delete</Button>
          <Button variant="ghost" size="sm">Ghost</Button>
        </div>

        <h3>TextInput (floating label, helper, validation)</h3>
        <div style={{display:'flex', gap:24, alignItems:'flex-start', marginBottom:16, width:'100%'}}>
          <div style={{flex:1}}>
            <TextInput label="Name" placeholder="Enter name" helperText="Full name as on ID" />
          </div>
          <div style={{flex:1}}>
            <TextInput label="Email" placeholder="name@example.com" type="email" helperText="We'll never share your email." />
          </div>
          <div style={{flex:1}}>
            <TextInput label="Disabled" placeholder="Can't edit" disabled helperText="Currently not editable" />
          </div>
        </div>

        <h3>ToggleSwitch (on / off / disabled)</h3>
        <div style={{display:'flex', gap:24, alignItems:'center', marginBottom:16}}>
          <ToggleSwitch checked />
          <ToggleSwitch checked={false} />
          <ToggleSwitch checked disabled />
        </div>

        <h3>Card (default / hover / selected)</h3>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginBottom:16}}>
          <Card title="Default" image="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6" imageAlt="A happy dog">A simple card with content.</Card>
          <Card title="Hover" image="https://images.unsplash.com/photo-1552053831-71594a27632d" imageAlt="A golden retriever">Hover over this card to see elevation.</Card>
          <Card title="Selected" selected image="https://images.unsplash.com/photo-1561037404-61cd46aa615b" imageAlt="A cute dog">A selected card state.</Card>
        </div>

        <h3>Badge (default / success / warning)</h3>
        <div style={{display:'flex', gap:12, alignItems:'center', marginBottom:16}}>
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
        </div>

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


function App(){
  return (
    <div className="app-root">
      <Navbar />
      <nav style={{padding:12, background:'var(--color-background)', borderBottom:'1px solid var(--color-border)'}}>
        <Link to="/components" style={{marginRight:12}}>Components</Link>
        <Link to="/tokens" style={{marginRight:12}}>Tokens</Link>
        <Link to="/docs">Documentation</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/tokens" element={<Tokens />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
