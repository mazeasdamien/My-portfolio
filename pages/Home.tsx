import React, { useMemo } from 'react';
import { portfolioData } from '../data';
import { FilterType } from '../types';
import { ArrowUpRight, Download, FileText, Briefcase, GraduationCap, BookOpen, PlayCircle, Wrench, Youtube, Users, Bot, Brain, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SpotlightCard } from '../components/SpotlightCard';
import { BoomerangVideo } from '../components/BoomerangVideo';

interface HomeProps {
  filter: FilterType;
  isLoading: boolean;
}

const Home: React.FC<HomeProps> = ({ filter, isLoading }) => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [photoOffset, setPhotoOffset] = React.useState({ x: 0, y: 0 });

  const filteredData = useMemo(() => {
    if (filter === 'all') return portfolioData;
    if (filter === 'cv') return [];
    return portfolioData.filter(item => {
      if (filter === 'portfolio') return item.category === 'portfolio' || item.category === 'tools';
      return item.category === filter;
    });
  }, [filter]);

  const getSemesterTheme = (dateStr: string) => {
    const lower = dateStr.toLowerCase();
    if (lower.includes('spring')) {
      return {
        badge: 'bg-[rgba(98,183,77,0.1)] text-[rgb(98,183,77)] border-[rgba(98,183,77,0.2)]',
        spotlight: 'rgb(98, 183, 77)', // Green (Training)
        arrow: 'text-[rgb(98,183,77)]'
      };
    }
    if (lower.includes('fall') || lower.includes('autumn')) {
      return {
        badge: 'bg-[rgba(241,100,32,0.1)] text-[rgb(241,100,32)] border-[rgba(241,100,32,0.2)]',
        spotlight: 'rgb(241, 100, 32)', // Orange (Projects)
        arrow: 'text-[rgb(241,100,32)]'
      };
    }
    return {
      badge: 'bg-neutral-50 text-neutral-700 border-neutral-100',
      spotlight: 'rgba(115, 115, 115, 1)', // neutral-500
      arrow: 'text-neutral-400'
    };
  };

  // Mouse tracking for profile photo avoidance
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      if (filter === 'all') {
        const photoElement = document.querySelector('.profile-photo-container');
        if (photoElement) {
          const rect = photoElement.getBoundingClientRect();
          const photoCenterX = rect.left + rect.width / 2;
          const photoCenterY = rect.top + rect.height / 2;

          const dx = e.clientX - photoCenterX;
          const dy = e.clientY - photoCenterY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const maxDistance = 250;
          const maxOffset = 30;

          if (distance < maxDistance) {
            const strength = 1 - (distance / maxDistance);
            const offsetX = -(dx / distance) * maxOffset * strength;
            const offsetY = -(dy / distance) * maxOffset * strength;
            setPhotoOffset({ x: offsetX, y: offsetY });
          } else {
            setPhotoOffset({ x: 0, y: 0 });
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [filter]);

  if (isLoading) {
    return (
      <div className="min-h-screen max-w-7xl mx-auto px-6 py-12 flex flex-col items-center justify-center animate-fade-in">
        <Loader2 className="animate-spin text-neutral-300 mb-4" size={48} strokeWidth={1} />
        <span className="text-xs font-medium tracking-widest text-neutral-400 uppercase">Loading</span>
      </div>
    );
  }

  if (filter === 'cv') {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20">
        {/* Header with Download */}
        <div className="flex justify-between items-end mb-16 border-b border-neutral-200 pb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0ms' }}>
          <h1 className="text-4xl font-bold tracking-tighter text-neutral-900">Curriculum Vitae</h1>
          <a href="pdfs/CV2026.pdf" download className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 px-4 py-2 rounded-full">
            <Download size={16} />
            <span className="hidden sm:inline">Download PDF</span>
          </a>
        </div>

        {/* Headsets Banner */}
        <div className="mb-16 animate-fade-in-up opacity-0" style={{ animationDelay: '50ms' }}>
          <img
            src="images/headsets.png"
            alt="VR Headsets"
            className="w-full h-auto rounded-xl shadow-sm"
          />
        </div>

        {/* Education Section */}
        <section className="mb-16 animate-fade-in-up opacity-0" style={{ animationDelay: '100ms' }}>
          <h2 className="text-xs font-bold uppercase tracking-widest text-[rgb(9,172,239)] mb-8 flex items-center gap-2">
            Education
            <span className="h-px flex-grow bg-[rgba(9,172,239,0.2)]"></span>
          </h2>

          <div className="space-y-12">
            <div className="group flex gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 p-1 sm:p-2 bg-white border border-neutral-100 rounded-lg flex items-center justify-center">
                <img src="images/logos/cranfield.webp" alt="Cranfield University" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                  <h3 className="text-lg font-bold text-neutral-900">Doctor of Philosophy (Ph.D.) in Manufacturing</h3>
                  <span className="text-xs font-mono font-medium text-[rgb(9,172,239)] bg-[rgba(9,172,239,0.1)] px-2 py-1 rounded mt-1 sm:mt-0">Apr 2024</span>
                </div>
                <div className="text-[rgb(9,172,239)] font-medium mb-2">Cranfield University — Centre for Digital and Design Engineering</div>
                <p className="text-neutral-600 text-sm leading-relaxed mb-1">Thesis: Key principles for assessing and implementing remote inspection with telexistence capability</p>
                <p className="text-neutral-500 text-sm">Advisors: Prof. John Ahmet Erkoyuncu & Prof. Frédéric Noël</p>
              </div>
            </div>

            {/* Arts et Metiers */}
            <div className="group flex gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 p-1 sm:p-2 bg-white border border-neutral-100 rounded-lg flex items-center justify-center">
                <img src="images/logos/artsetmetiers.svg" alt="Arts et Métiers" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                  <h3 className="text-lg font-bold text-neutral-900">M.Sc. in Digital Mock-up and 3D Visualization</h3>
                  <span className="text-xs font-mono font-medium text-[rgb(9,172,239)] bg-[rgba(9,172,239,0.1)] px-2 py-1 rounded mt-1 sm:mt-0">Sep 2019</span>
                </div>
                <div className="text-[rgb(9,172,239)] font-medium mb-2">Arts et Métiers ParisTech — Institut de Chalon</div>
                <p className="text-neutral-600 text-sm leading-relaxed mb-1">Thesis: VR application for immersive prototyping for industrial designers</p>
                <p className="text-neutral-500 text-sm">Advisors: Prof. Sebastian Stadler & Prof. Jean-Rémy Chardonnet</p>
              </div>
            </div>

            {/* Bachelor */}
            <div className="group flex gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 p-1 sm:p-2 bg-white border border-neutral-100 rounded-lg flex items-center justify-center">
                <img src="images/logos/poitiers.webp" alt="University of Poitiers" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                  <h3 className="text-lg font-bold text-neutral-900">Computer-Aided Drafting & Design</h3>
                  <span className="text-xs font-mono font-medium text-[rgb(9,172,239)] bg-[rgba(9,172,239,0.1)] px-2 py-1 rounded mt-1 sm:mt-0">Jul 2017</span>
                </div>
                <div className="text-[rgb(9,172,239)] font-medium">University Institute of Technology of Blois and Angoulême</div>
                <p className="text-neutral-500 text-sm">Three-year technical degree</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16 animate-fade-in-up opacity-0" style={{ animationDelay: '200ms' }}>
          <h2 className="text-xs font-bold uppercase tracking-widest text-[rgb(241,100,32)] mb-6 flex items-center gap-2">
            Certifications
            <span className="h-px flex-grow bg-[rgba(241,100,32,0.2)]"></span>
          </h2>
          <div className="group flex gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 p-1 sm:p-2 bg-white border border-neutral-100 rounded-lg flex items-center justify-center">
              <img src="images/logos/fanuc.webp" alt="FANUC" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="flex-grow">
              <h3 className="text-base font-bold text-neutral-900 mb-1">FANUC Robotics Standard Teach Pendant Programming</h3>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-neutral-600">R30iB+ Controller</span>
                <span className="text-[rgba(241,100,32,0.6)]">•</span>
                <span className="bg-[rgba(241,100,32,0.1)] text-[rgb(241,100,32)] px-2 py-0.5 rounded text-xs font-medium">Sep 2021</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16 animate-fade-in-up opacity-0" style={{ animationDelay: '300ms' }}>
          <h2 className="text-xs font-bold uppercase tracking-widest text-[rgb(98,183,77)] mb-8 flex items-center gap-2">
            Experience
            <span className="h-px flex-grow bg-[rgba(98,183,77,0.2)]"></span>
          </h2>
          <div className="space-y-12">

            {/* BNBU */}
            <div className="group flex gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 p-1 sm:p-2 bg-white border border-neutral-100 rounded-lg flex items-center justify-center">
                <img src="images/logos/bnbu.webp" alt="BNBU" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                  <h3 className="text-lg font-bold text-neutral-900">Lecturer in Computer Science and Technology</h3>
                  <span className="text-xs font-mono font-medium text-[rgb(98,183,77)] bg-[rgba(98,183,77,0.1)] px-2 py-1 rounded mt-1 sm:mt-0">Sep 2024 - Jun 2025</span>
                </div>
                <div className="text-[rgb(98,183,77)] font-medium mb-3">Beijing Normal & Hong Kong Baptist University (BNBU) — Zhuhai, China</div>
                <ul className="list-disc pl-4 space-y-1 text-sm text-neutral-600 marker:text-[rgb(98,183,77)]">
                  <li>Designed a Human-Computer Interaction course (14 lectures of 1-hour and 14 labs of 2-hour).</li>
                  <li>Taught undergraduate students (Teaching load: 9 hours per week).</li>
                  <li>Mentored 10 students (4 groups) for their final year projects.</li>
                  <li>Conducted research in virtual co-existence spaces.</li>
                </ul>
              </div>
            </div>

            {/* CNRS */}
            <div className="group flex gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 p-1 sm:p-2 bg-white border border-neutral-100 rounded-lg flex items-center justify-center">
                <img src="images/logos/cnrs.webp" alt="CNRS" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                  <h3 className="text-lg font-bold text-neutral-900">Research Associate</h3>
                  <span className="text-xs font-mono font-medium text-[rgb(98,183,77)] bg-[rgba(98,183,77,0.1)] px-2 py-1 rounded mt-1 sm:mt-0">Oct 2023 - Sep 2024</span>
                </div>
                <div className="text-[rgb(98,183,77)] font-medium mb-3">CNRS@CREATE — Singapore</div>
                <ul className="list-disc pl-4 space-y-1 text-sm text-neutral-600 marker:text-[rgb(98,183,77)]">
                  <li>Conducted research on points of view for virtual navigation.</li>
                  <li>Used and deployed eye tracking (Tobii) for Unity 3D frameworks.</li>
                </ul>
              </div>
            </div>

            {/* G-SCOP */}
            <div className="group flex gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 p-1 sm:p-2 bg-white border border-neutral-100 rounded-lg flex items-center justify-center">
                <img src="images/logos/gscop.webp" alt="G-SCOP" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                  <h3 className="text-lg font-bold text-neutral-900">Visiting Researcher</h3>
                  <span className="text-xs font-mono font-medium text-[rgb(98,183,77)] bg-[rgba(98,183,77,0.1)] px-2 py-1 rounded mt-1 sm:mt-0">Oct 2022 - Mar 2023</span>
                </div>
                <div className="text-[rgb(98,183,77)] font-medium mb-3">Grenoble Alpes University - Laboratory G-SCOP — Grenoble, France</div>
                <ul className="list-disc pl-4 space-y-1 text-sm text-neutral-600 marker:text-[rgb(98,183,77)]">
                  <li>Conducted research in tele-assistance.</li>
                  <li>Developed an application for remote expert – local worker collaboration on Unity 3D.</li>
                  <li>Operated, programmed, and remote-controlled Universal Robots collaborative robots.</li>
                </ul>
              </div>
            </div>

            {/* Safran */}
            <div className="group flex gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 p-1 sm:p-2 bg-white border border-neutral-100 rounded-lg flex items-center justify-center">
                <img src="images/logos/safran.webp" alt="Safran" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                  <h3 className="text-lg font-bold text-neutral-900">Augmented Reality Engineer</h3>
                  <span className="text-xs font-mono font-medium text-[rgb(98,183,77)] bg-[rgba(98,183,77,0.1)] px-2 py-1 rounded mt-1 sm:mt-0">Mar 2020 - Aug 2020</span>
                </div>
                <div className="text-[rgb(98,183,77)] font-medium mb-3">Safran — Gloucester, UK</div>
                <ul className="list-disc pl-4 space-y-1 text-sm text-neutral-600 marker:text-[rgb(98,183,77)]">
                  <li>Analyzed and defined AR use cases to optimize A320 landing gear maintenance (visual inspection, assembly, painting).</li>
                  <li>Developed technical specifications and managed software integration of Diota (now Delmia).</li>
                  <li>Supported implementation by providing on-site technical support and training.</li>
                </ul>
              </div>
            </div>

            {/* TUM */}
            <div className="group flex gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 p-1 sm:p-2 bg-white border border-neutral-100 rounded-lg flex items-center justify-center">
                <img src="images/logos/tumcreate.webp" alt="TUMCREATE" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                  <h3 className="text-lg font-bold text-neutral-900">Research Assistant</h3>
                  <span className="text-xs font-mono font-medium text-[rgb(98,183,77)] bg-[rgba(98,183,77,0.1)] px-2 py-1 rounded mt-1 sm:mt-0">Feb 2019 - Aug 2019</span>
                </div>
                <div className="text-[rgb(98,183,77)] font-medium mb-3">TUM CREATE — Singapore</div>
                <ul className="list-disc pl-4 space-y-1 text-sm text-neutral-600 marker:text-[rgb(98,183,77)]">
                  <li>Part of the Design for Autonomous Mobility research team led by Dr. Henriette Cornet.</li>
                  <li>Conducted research on the use of VR for industrial designers and user preference in mobility.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section className="animate-fade-in-up opacity-0" style={{ animationDelay: '400ms' }}>
          <h2 className="text-xs font-bold uppercase tracking-widest text-[rgb(154,58,137)] mb-8 flex items-center gap-2">
            Skills
            <span className="h-px flex-grow bg-[rgba(154,58,137,0.2)]"></span>
          </h2>
          <div className="bg-white border border-neutral-100 rounded-xl p-6 shadow-sm w-1/2 mx-auto">
            <img
              src="images/skills.png"
              alt="Skills Overview"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>
      </div>
    )
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 min-h-screen">

      {filter === 'all' ? (
        <>
          <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            <BoomerangVideo />
            <div className="order-2 lg:order-1 animate-fade-in-up opacity-0 relative z-10" style={{ animationDelay: '0ms' }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none mb-8 text-neutral-900">
                Bridging <br />
                <span className="text-[rgb(98,183,77)]">Physical</span> & <span className="text-[rgb(9,172,239)]">Digital</span> Worlds
              </h1>
              <p className="text-xl text-neutral-600 max-w-xl leading-relaxed">
                Researcher specializing in <strong className="text-[rgb(154,58,137)]">XR</strong> and <strong className="text-[rgb(241,100,32)]">HCI</strong>.
                Designing systems that allow humans to inhabit and act within remote environments, not just view them.
              </p>
            </div>
            <div
              className="profile-photo-container order-1 lg:order-2 relative aspect-square w-80 mx-auto lg:mx-0 animate-fade-in-up opacity-0 z-10 group"
              style={{
                animationDelay: '200ms',
                transform: `translate(${photoOffset.x}px, ${photoOffset.y}px)`,
                transition: 'transform 0.15s ease-out'
              }}
            >
              <img
                src="images/profil.webp"
                alt="Damien Mazeas"
                className="absolute inset-0 w-full h-full object-cover rounded-full shadow-xl"
              />
              <img
                src="images/cat.jpg"
                alt="Cat"
                className="absolute inset-0 w-full h-full object-cover rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"
              />
            </div>
          </section>

          <ResearchFocusSection />
        </>
      ) : filter === 'publication' ? (
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredData.map((item, index) => {
            const hasLink = !!item.url;

            return (
              <SpotlightCard
                key={index}
                as={hasLink ? 'a' : 'div'}
                href={hasLink ? item.url : undefined}
                target={hasLink ? "_blank" : undefined}
                rel={hasLink ? "noreferrer" : undefined}
                className={`block group animate-fade-in-up opacity-0 ${hasLink ? 'hover:scale-[1.01] cursor-pointer' : 'cursor-default hover:shadow-none'}`}
                innerClassName="flex flex-col sm:flex-row gap-4 p-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="min-w-[100px] text-sm text-neutral-400 font-bold font-mono pt-1">{item.displayDate}</div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-neutral-900 leading-tight mb-2">
                    {item.title}
                  </h3>
                  <div className="text-sm text-neutral-600 mb-1" dangerouslySetInnerHTML={{ __html: item.authors || '' }}></div>
                  <div className="text-xs font-medium text-neutral-400 uppercase tracking-wider">{item.period}</div>
                </div>
                {hasLink && (
                  <div className="self-start p-2 text-blue-600 transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                )}
              </SpotlightCard>
            );
          })}
        </div>
      ) : filter === 'teaching' ? (
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredData.map((item, index) => {
            const hasLink = !!item.url;
            const theme = getSemesterTheme(item.displayDate);

            return (
              <SpotlightCard
                key={index}
                as={hasLink ? 'a' : 'div'}
                href={hasLink ? item.url : undefined}
                target={hasLink ? "_blank" : undefined}
                rel={hasLink ? "noreferrer" : undefined}
                spotlightColor={theme.spotlight}
                className={`block group animate-fade-in-up opacity-0 ${hasLink ? 'hover:scale-[1.01] cursor-pointer' : 'cursor-default hover:shadow-none'}`}
                innerClassName="flex flex-col sm:flex-row gap-6 p-6 items-start sm:items-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${theme.badge} whitespace-nowrap`}>
                  {item.displayDate}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
                  <div className="text-sm text-neutral-600 mt-1">{item.description}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm font-medium text-neutral-400 whitespace-nowrap">
                    {item.period}
                  </div>
                  {hasLink && <ArrowUpRight size={20} className={theme.arrow} />}
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredData.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="h-full animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card item={item} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

const ResearchFocusSection = () => {
  const researchAreas = [
    {
      title: "Social XR & Co-presence",
      description: "How do we maintain non-verbal cues in virtual spaces? I design navigational frameworks that make remote collaboration feel natural and spatially aware.",
      tags: ["User Studies", "Spatial Computing"],
      icon: Users,
      color: "text-[rgb(9,172,239)]",
      bg: "bg-[rgba(9,172,239,0.1)]",
    },
    {
      title: "Robotic Embodiment",
      description: "Moving beyond 2D screens. I build immersive interfaces that provide depth and situational awareness, allowing operators to experience a sense of presence.",
      tags: ["Teleoperation", "VR Interfaces"],
      icon: Bot,
      color: "text-[rgb(154,58,137)]",
      bg: "bg-[rgba(154,58,137,0.1)]",
    },
    {
      title: "Cognitive Augmentation",
      description: "Reducing cognitive load for industrial workers. My work focuses on context-aware AR that delivers the right information at the precise moment it's needed.",
      tags: ["Training", "Maintenance"],
      icon: Brain,
      color: "text-[rgb(98,183,77)]",
      bg: "bg-[rgba(98,183,77,0.1)]",
    }
  ];

  return (
    <section className="mb-24">
      <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-8 border-b border-neutral-200 pb-2 animate-fade-in-up opacity-0" style={{ animationDelay: '300ms' }}>Research Focus</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {researchAreas.map((area, index) => (
          <article
            key={area.title}
            className="group p-8 bg-white border border-neutral-100 rounded-2xl hover:border-neutral-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col animate-fade-in-up opacity-0"
            style={{ animationDelay: `${400 + (index * 100)}ms` }}
          >
            <div className={`w-12 h-12 ${area.bg} rounded-xl flex items-center justify-center mb-6 transition-transform duration-300`}>
              <area.icon className={`${area.color}`} size={24} />
            </div>

            <h3 className="text-xl font-bold text-neutral-900 mb-4">{area.title}</h3>
            <p className="text-neutral-600 leading-relaxed mb-8 flex-grow">
              {area.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {area.tags.map(tag => (
                <span key={tag} className={`px-2.5 py-1 ${area.bg} ${area.color} text-xs font-medium rounded-full border border-transparent`}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

function getSubtitleStyle(subtitle?: string) {
  const lower = subtitle?.toLowerCase() || '';
  if (lower.includes('teaching')) return { text: 'text-[rgb(9,172,239)]', border: 'hover:bg-[rgba(9,172,239,0.5)]' };
  if (lower.includes('research')) return { text: 'text-[rgb(154,58,137)]', border: 'hover:bg-[rgb(154,58,137)]' };
  if (lower.includes('training')) return { text: 'text-[rgb(98,183,77)]', border: 'hover:bg-[rgba(98,183,77,0.5)]' };
  if (lower.includes('projects')) return { text: 'text-[rgb(241,100,32)]', border: 'hover:bg-[rgba(241,100,32,0.5)]' };
  return { text: 'text-neutral-500', border: 'hover:bg-neutral-300' };
}

const Card: React.FC<{ item: any }> = ({ item }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const isInternal = item.url?.startsWith('/') && !item.url.endsWith('.pdf');
  const isYoutube = !!item.youtubeId;
  const isClickable = !!(item.url || item.youtubeId);
  const isArduino = item.title?.includes('Arduino');
  const href = isYoutube ? `https://www.youtube.com/watch?v=${item.youtubeId}` : item.url;
  const showCategory = item.category !== 'portfolio';

  const subtitleStyle = getSubtitleStyle(item.subtitle);

  // Determine spotlight color based on subtitle/category
  let spotlightColor = 'rgb(9, 172, 239)'; // Default blue
  const lowerSubtitle = item.subtitle?.toLowerCase() || '';

  if (lowerSubtitle.includes('teaching')) spotlightColor = 'rgb(9, 172, 239)'; // Blue
  else if (lowerSubtitle.includes('research')) spotlightColor = 'rgb(154, 58, 137)'; // Purple
  else if (lowerSubtitle.includes('training')) spotlightColor = 'rgb(98, 183, 77)'; // Green
  else if (lowerSubtitle.includes('projects')) spotlightColor = 'rgb(241, 100, 32)'; // Orange

  // Custom logic for Tutorials
  if (isYoutube) spotlightColor = 'rgba(220, 38, 38, 1)'; // red-600
  if (isArduino) spotlightColor = 'rgba(13, 148, 136, 1)'; // teal-600

  // Determine display category
  let displayCategory = item.category;
  if (item.category === 'tutorial') {
    if (isYoutube) displayCategory = 'YOUTUBE';
    if (isArduino) displayCategory = 'PAGE';
  }

  // Determine icon color
  let iconColor = subtitleStyle.text;
  if (isYoutube) iconColor = 'text-red-600';
  if (isArduino) iconColor = 'text-teal-600';

  // Determine category color and border
  let categoryColor = 'text-neutral-400';
  let borderClass = subtitleStyle.border;

  if (isYoutube) {
    categoryColor = 'text-red-600';
    borderClass = 'hover:bg-red-600';
  }
  if (isArduino) {
    categoryColor = 'text-teal-600';
    borderClass = 'hover:bg-teal-600';
  }

  // Determine component and props for SpotlightCard
  let Component: any = 'div';
  let props: any = {};

  if (isClickable) {
    if (isInternal) {
      Component = Link;
      props.to = item.url;
    } else {
      Component = 'a';
      props.href = href;
      props.target = '_blank';
      props.rel = "noopener noreferrer";
    }
  }

  return (
    <SpotlightCard
      as={Component}
      {...props}
      spotlightColor={spotlightColor}
      className={`block h-full group transition-all duration-300 ${isClickable ? `hover:scale-[1.01] cursor-pointer ${borderClass}` : 'cursor-default hover:shadow-none'}`}
      innerClassName="flex flex-col p-5 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-2 items-center">
          {showCategory && <span className={`text-xs font-bold uppercase tracking-widest ${categoryColor}`}>{displayCategory}</span>}
          {item.subtitle && (
            <span className={`text-xs font-bold uppercase tracking-widest ${item.category === 'portfolio' ? subtitleStyle.text : 'text-neutral-500'}`}>
              {item.subtitle}
            </span>
          )}
        </div>
        <span className="text-sm font-bold text-neutral-500 font-mono ml-auto">{item.displayDate}</span>
      </div>

      {item.thumbnail && (
        <div className="mb-6 aspect-video overflow-hidden rounded-lg bg-white relative">
          <img
            src={isHovered && item.hoverThumbnail ? item.hoverThumbnail : item.thumbnail}
            alt={item.title}
            className="w-full h-full object-contain transition-opacity duration-300"
          />
        </div>
      )}

      <div className="flex justify-between items-start gap-2 mb-2">
        <h3 className="text-lg font-bold leading-tight text-neutral-900">
          {item.title}
        </h3>
        <div className={`${iconColor} flex-shrink-0 mt-0.5`}>
          {isYoutube ? <PlayCircle size={20} /> : <ArrowUpRight size={20} />}
        </div>
      </div>

      {item.description && (
        <p className="text-sm text-neutral-600 mb-4">
          {item.description}
        </p>
      )}

      {item.authors && <p className="text-xs text-neutral-400 mt-auto line-clamp-2">{item.authors}</p>}
      {item.period && !item.authors && <p className="text-xs text-neutral-400 mt-auto">{item.period}</p>}
    </SpotlightCard>
  );
};

function getIconForCategory(category: string) {
  switch (category) {
    case 'publication': return FileText;
    case 'employment': return Briefcase;
    case 'degree': return GraduationCap;
    case 'teaching': return BookOpen;
    case 'tutorial': return Youtube;
    case 'tools': return Wrench;
    default: return ArrowUpRight;
  }
}

export default Home;
