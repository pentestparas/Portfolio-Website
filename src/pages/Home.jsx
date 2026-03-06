import Hero from '../components/features/Hero';
import AboutSection from '../components/features/AboutSection';

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <span id="about"></span>
      <AboutSection />
    </div>
  );
}
