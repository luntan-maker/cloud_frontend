import logo from './logo.svg';
import './App.css';
// import Header from 'components/header.js';
import Header from './components/header';
import Education from './components/education';
import Certificates from './components/certificates';
import Skills from './components/skills';
import Experience from './components/experience';
function App() {
  return (
    <div class="stuff">
      <Header />
      <Education />
      <Certificates />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
