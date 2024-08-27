import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import './App.scss'
import {Helmet} from "react-helmet";



function App() {
  return (
      <>
      <Helmet>
          <meta charSet="utf-8"/>
          <title>Owen Nyenhuis</title>
          <link rel="canonical" href="http://mysite.com/example"/>
          <meta name="description" content="Owen Nyenhuis' Portfolio"/>
      </Helmet>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </>
  )
}

export default App
