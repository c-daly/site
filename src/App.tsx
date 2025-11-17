import { Hero } from './sections/Hero';
import { Achievements } from './sections/Achievements';
import { Projects } from './sections/Projects';
import { Interests } from './sections/Interests';
import { Contact } from './sections/Contact';
import './App.scss';

function App() {
  return (
    <div className="app-shell">
      <div className="background-texture" aria-hidden />
      <main>
        <Hero />
        <Achievements />
        <Projects />
        <Interests />
        <Contact />
      </main>
    </div>
  );
}

export default App;
