import { Achievements } from './components/Achievements'
import { EvalDisplay } from './components/eval/EvalDisplay'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <div className="mx-auto max-w-[84rem] px-4 sm:px-8 lg:px-14">
      <a
        href="#main"
        className="absolute top-2 left-2 z-10 -translate-y-20 bg-ink px-3 py-2 text-sm text-on-ink focus:translate-y-0"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <EvalDisplay />
        <Projects />
        <Skills />
        <Achievements />
      </main>
      <Footer />
    </div>
  )
}
