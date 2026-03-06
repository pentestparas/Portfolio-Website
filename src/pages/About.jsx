import AboutSection from '../components/features/AboutSection';
import ExperienceSection from '../components/features/ExperienceSection';
import SecurityDisclosures from '../components/features/SecurityDisclosures';
import LeadershipImpact from '../components/features/LeadershipImpact';
import EducationSection from '../components/features/EducationSection';
import ResumeViewer from '../components/features/ResumeViewer';

export default function About() {
  return (
    <div className="py-8 space-y-20">
      <AboutSection />
      <ExperienceSection />
      
      <div className="grid grid-cols-1 gap-20">
        <SecurityDisclosures />
        <LeadershipImpact />
        <EducationSection />
        <ResumeViewer />
      </div>
    </div>
  );
}
