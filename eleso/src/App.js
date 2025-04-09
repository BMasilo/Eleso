import './App.css';
import Social from './Components/Social';
import Main from './Components/Main';
import FAQSection from './Components/FAQSection';
import HowItWorksSection from './Components/HowItWorksSection';
import BenefitsSection from './Components/BenefitsSection';

function App() {
  return (
    <div className="App">
      <Social/>
      <Main/>
      <BenefitsSection/>
      <HowItWorksSection/>
      <FAQSection/>
    </div>
  );
}

export default App;
