import './styles/global.css';
import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import Services  from './components/Services';
import Portfolio from './components/Portfolio';
import About     from './components/About';
import Contact   from './components/Contact';

function Footer() {
  return (
    <footer style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px 40px', borderTop: '0.5px solid #1e1e1e',
      fontSize: '12px', color: '#444', fontFamily: 'var(--font-body)',
    }}>
      <span>© {new Date().getFullYear()} <strong><em>millerbibilloy beco</em></strong>. Todos os direitos reservados.</span>
      <span>Desenvolvido com paixão ❤</span>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
