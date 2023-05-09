import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import HeroSection from './Component/HeroSection';
import ClientSection from './Component/ClientSection';
import AboutUs from './Component/AboutUs';
import WhyUs from './Component/WhyUs';
import Services from './Component/Services';
import CallToAction from './Component/CallToAction';
import Portfolio from './Component/Portfolio';
import Team from './Component/Team';
import FrequentlyAsked from './Component/FrequentlyAsked';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import NavigationBar from './Component/menubar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <NavigationBar/> */}
      <HeroSection></HeroSection>
      <ClientSection></ClientSection>
      <AboutUs></AboutUs>
      <WhyUs></WhyUs>
      <Services></Services>
      <CallToAction />
      <Portfolio />
      <Team />
      <FrequentlyAsked />
      <Contact></Contact>
      <Footer/>
    </div>
  );
}

export default App;
