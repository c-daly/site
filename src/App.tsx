import { Hero } from './sections/Hero';
import { Highlights } from './sections/Highlights';
import { Workstreams } from './sections/Workstreams';
import { Footer } from './sections/Footer';
import './App.scss';

function App() {
  return (
    <div className="app-shell">
      <div className="background-grid" aria-hidden />
      <main>
        <Hero />
        <Highlights />
        <Workstreams />
        <Footer />
      </main>
    </div>
  );
}

export default App;
