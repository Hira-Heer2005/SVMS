import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import ValueFeatures from './components/ValueFeatures';
import TargetMarket from './components/TargetMarket';
import Pricing from './components/Pricing';
import Strategy from './components/Strategy';
import Revenue from './components/Revenue';
import Closing from './components/Closing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <ValueFeatures />
      <Pricing />
      <Closing />
      <Footer />
    </div>
  );
}

export default App;
