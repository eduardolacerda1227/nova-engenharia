import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Services } from './sections/Services'
import { Projects } from './sections/Projects'
import { Presentation } from './sections/Presentation'
import { Contact } from './sections/Contact'

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <html lang="pt-BR" />
        <title>Nova Engenharia | Soluções em engenharia civil</title>
        <meta
          name="description"
          content="Nova Engenharia — projetos estruturais, gerenciamento de obras, consultoria técnica e regularização. Engenharia civil com excelência e compromisso com prazo."
        />
        <link rel="canonical" href="https://www.novaengenharia.com.br/" />
      </Helmet>

      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Presentation />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </HelmetProvider>
  )
}

export default App
