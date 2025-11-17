import { Hero } from './sections/Hero';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { GithubShowcase } from './sections/GithubShowcase';
import { Contact } from './sections/Contact';
import './App.scss';

function App() {
  return (
    <div className="app-shell">
      <div className="background-texture" aria-hidden />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <GithubShowcase />
        <Contact />
      </main>
    </div>
  );
}

export default App;
