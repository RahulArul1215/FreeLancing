import logo from './logo.svg';
import './App.css';
import HeroSection from './Component/Hero';
import Counters from './Component/Counters';
import ResortSection from './Component/ResortSection';
import JustSection from './Component/JustSection';
import UpcomingResorts from './Component/UpcomingResorts';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <Counters/>
      <ResortSection/>
      <JustSection/>  
      <UpcomingResorts/>
    </div>
  );
}

export default App;
