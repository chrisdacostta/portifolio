import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ArrowUpRight, Globe } from 'lucide-react';
import { WordsPullUp } from '../components/WordsPullUp';
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle';
import { ScrollRevealText } from '../components/ScrollRevealText';
import { projects } from '../data/projects';
import { experiences } from '../data/experience';
import { capabilities } from '../data/capabilities';
import { frameworkSteps } from '../data/frameworkSteps';
import { softSkills } from '../data/softSkills';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  // Inset container padding transitions
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: custom * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }
    })
  };

  return (
    <div className="w-full bg-black overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section id="hero" className="w-full h-screen p-4 md:p-6 bg-black relative flex flex-col justify-between">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden relative flex flex-col justify-end p-6 md:p-12"
        >
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video 
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover filter brightness-[0.4]"
            />
            {/* Cinematic overlays */}
            <div className="absolute inset-0 noise-overlay opacity-[0.45] mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/85" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            
            {/* Title / Headline */}
            <div className="lg:col-span-8 flex flex-col">
              <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-accent mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-signal animate-pulse" />
                SaaS Implementation Specialist
              </span>
              <WordsPullUp 
                text="CHRISTIAN" 
                className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.8] tracking-[-0.05em] text-[#E1E0CC]"
              />
              <WordsPullUp 
                text="DA COSTA" 
                showAsterisk={true}
                className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.8] tracking-[-0.05em] text-[#E1E0CC]"
              />
            </div>

            {/* Description & CTA */}
            <div className="lg:col-span-4 flex flex-col gap-6 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-2"
              >
                <p className="text-primary-warm font-medium text-xs sm:text-sm tracking-wider uppercase">
                  Implementation · SaaS · Operations
                </p>
                <p className="text-primary/70 text-xs sm:text-sm md:text-base leading-relaxed font-light">
                  Conecto requisitos de negócio, processos e tecnologia para estruturar projetos complexos de implantação, garantindo a adoção real de produtos digitais.
                </p>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 bg-[#DEDBC8] hover:bg-[#E1E0CC] text-black font-semibold text-xs sm:text-sm rounded-full py-2 pl-4 pr-2 sm:py-3 sm:pl-6 sm:pr-3 transition-all duration-300 shadow-md pointer-events-auto"
              >
                Explorar Projetos
                <span className="bg-black rounded-full p-2 text-white group-hover:scale-105 group-hover:translate-x-1 transition-all duration-300">
                  <ArrowRight size={14} />
                </span>
              </motion.button>
            </div>

          </div>
        </motion.div>
      </section>

      {/* SECTION 2: MANIFESTO (ABOUT) */}
      <section id="about" className="w-full bg-[#F9F8F3] py-20 px-6 md:py-32 md:px-12 relative text-[#1A1917] border-y border-[#DEDBC8]/30">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 md:gap-16">
          <span className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-widest text-charcoal/50">
            01 / MANIFESTO E TRAJETÓRIA
          </span>

          <WordsPullUpMultiStyle 
            segments={[
              { text: "Eu atuo no espaço ", className: "font-bold text-charcoal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center" },
              { text: "entre o que a empresa precisa ", className: "font-serif italic text-charcoal/80 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center" },
              { text: "e o que a tecnologia deve ser para entregar esse resultado.", className: "font-bold text-charcoal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center" }
            ]}
            className="max-w-4xl mx-auto leading-[1.05]"
          />

          <ScrollRevealText 
            text="Com aproximadamente 7 anos de experiência, estruturo e conduzo projetos de implantação de plataformas SaaS, onboarding técnico de clientes corporativos e mapeamento de processos operacionais. Minha atuação foca em remover barreiras de adoção e conectar equipes operacionais, produto, integradores e liderança executiva (Sponsors) em mercados globais no Brasil, América Latina, Estados Unidos e Europa."
            className="max-w-3xl mx-auto text-[#2C2A24] text-sm sm:text-base md:text-lg text-center font-light leading-relaxed my-4"
          />

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 border-t border-charcoal/10 pt-8 w-full max-w-2xl text-xs sm:text-sm text-charcoal/70 uppercase tracking-widest font-semibold"
          >
            <span className="flex items-center gap-2">
              <Globe size={14} className="text-accent-dark" />
              Projetos Globais
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-charcoal/30" />
            <span>Português (Nativo)</span>
            <span className="w-1.5 h-1.5 rounded-full bg-charcoal/30" />
            <span>Español (Nativo)</span>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: SELECTED WORK (PROJETOS) */}
      <section id="projects" className="w-full bg-black py-20 px-6 md:py-32 md:px-12 relative text-[#E1E0CC] border-b border-charcoal-card/40">
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-charcoal-card/50 pb-8">
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-accent mb-2">
                02 / SELECTED WORK
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-warm leading-none">
                Projetos & Experiências
              </h2>
            </div>
            <p className="text-primary/60 text-xs sm:text-sm md:text-base font-light max-w-md">
              Cases de implantação real estruturados para demonstrar governança, visão de processo e sincronização de tecnologia.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => {
              const isPending = project.intro.includes("CONTENT_PENDING");
              return (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={idx}
                  className="group relative flex flex-col justify-between bg-charcoal rounded-2xl overflow-hidden border border-charcoal-card/60 p-6 h-[420px] md:h-[450px] transition-all duration-500 hover:border-[#DEDBC8]/40 hover:-translate-y-1 shadow-2xl"
                >
                  {/* Backdrop media for premium hover effect */}
                  {project.videoUrl && !isPending && (
                    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 overflow-hidden">
                      <video 
                        src={project.videoUrl} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-full object-cover filter brightness-[0.3]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    {/* Top block */}
                    <div className="flex flex-col gap-6">
                      <div className="flex justify-between items-center text-xs tracking-wider font-light text-primary/50">
                        <span>{project.number} / CASE STUDY</span>
                        <span>{project.year}</span>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-primary-warm group-hover:text-white transition-colors duration-300 leading-tight">
                          {project.title}
                        </h3>
                        <span className="text-[10px] sm:text-xs font-semibold text-accent uppercase tracking-widest bg-accent/5 border border-accent/10 rounded px-2.5 py-1 w-max">
                          {project.role}
                        </span>
                      </div>
                    </div>

                    {/* Bottom block */}
                    <div className="flex flex-col gap-6">
                      <p className="text-primary/70 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                        {isPending ? "Este case possui detalhes sob revisão corporativa de confidencialidade e dados de processo protegidos por NDA." : project.intro}
                      </p>

                      <div className="flex justify-between items-center border-t border-charcoal-card/60 pt-4">
                        <span className="text-[10px] uppercase tracking-wider text-primary/40 font-semibold truncate max-w-[180px]">
                          {project.category.split(' / ')[0]}
                        </span>
                        
                        {!isPending ? (
                          <button
                            onClick={() => navigate(`/projetos/${project.slug}`)}
                            className="flex items-center gap-1.5 text-xs font-bold text-primary-warm group-hover:text-accent transition-colors duration-300 bg-transparent border-none outline-none cursor-pointer"
                          >
                            Ver Case
                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                          </button>
                        ) : (
                          <span className="text-[10px] uppercase font-bold tracking-wider text-signal bg-signal/5 border border-signal/15 px-2 py-0.5 rounded">
                            Sob Revisão
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: CAPABILITIES */}
      <section id="capabilities" className="w-full bg-[#F9F8F3] py-20 px-6 md:py-32 md:px-12 text-[#1A1917] relative border-b border-[#DEDBC8]/30">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-charcoal/10 pb-8">
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-charcoal/50 mb-2">
                03 / CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal leading-none">
                Áreas de Atuação
              </h2>
            </div>
            <p className="text-charcoal/70 text-xs sm:text-sm md:text-base font-light max-w-md">
              Agrupamentos das competências que integram implantação técnica, automações inteligentes de operações e jornadas do cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {capabilities.map((group, groupIdx) => (
              <motion.div
                key={groupIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIdx * 0.1, duration: 0.6 }}
                className="flex flex-col border-t border-charcoal/15 pt-6 gap-6"
              >
                <h3 className="text-lg font-bold tracking-tight text-charcoal uppercase tracking-wider">
                  {group.title}
                </h3>
                
                <ul className="flex flex-col gap-3">
                  {group.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal/75 leading-tight">
                      <span className="mt-0.5 text-accent-dark flex-shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: IMPLEMENTATION PIPELINE (10 ETAPAS) */}
      <section id="implementation" className="w-full bg-[#101010] py-20 px-6 md:py-32 md:px-12 text-[#E1E0CC] relative border-b border-charcoal-card/40">
        <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-charcoal-card/50 pb-8">
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-accent mb-2">
                04 / METHODOLOGY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-warm leading-none">
                Framework de Implantação
              </h2>
            </div>
            <p className="text-primary/60 text-xs sm:text-sm md:text-base font-light max-w-md">
              Os 10 passos sequenciais e rigorosos estruturados para assegurar governança, ativação correta e Time-to-Value acelerado.
            </p>
          </div>

          {/* Interactive Stepper Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Steps Left List */}
            <div className="lg:col-span-5 flex flex-col gap-2 max-h-[500px] overflow-y-auto pr-2 border-r border-charcoal-card/30">
              {frameworkSteps.map((step, idx) => {
                const isActive = idx === activeStep;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`flex items-center gap-4 text-left px-4 py-3.5 rounded-xl border transition-all duration-300 group cursor-pointer ${
                      isActive 
                        ? 'bg-charcoal-card border-accent/40 text-white' 
                        : 'bg-transparent border-transparent hover:bg-charcoal/40 text-primary/60 hover:text-primary-warm'
                    }`}
                  >
                    <span className={`text-[10px] font-bold uppercase w-8 h-8 rounded-full flex items-center justify-center border transition-colors duration-300 ${
                      isActive 
                        ? 'border-accent text-accent bg-accent/5' 
                        : 'border-primary/20 text-primary/40 group-hover:border-primary/40'
                    }`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-bold tracking-wide uppercase select-none">
                      {step.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Step Details (Right Panel) */}
            <div className="lg:col-span-7 bg-charcoal rounded-2xl border border-charcoal-card/80 p-6 md:p-10 min-h-[420px] flex flex-col justify-between shadow-2xl">
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center border-b border-charcoal-card/50 pb-4">
                  <span className="text-xs uppercase tracking-widest font-bold text-accent">
                    Fase {String(activeStep + 1).padStart(2, '0')} de 10
                  </span>
                  <span className="text-xs text-primary/40 font-light select-none">Christian da Costa Framework</span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold tracking-tight text-primary-warm">
                    {frameworkSteps[activeStep].name}
                  </h3>
                  <p className="text-primary/80 text-sm md:text-base font-light leading-relaxed">
                    {frameworkSteps[activeStep].objective}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                  {/* Activities */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary/40">
                      Principais Atividades
                    </span>
                    <ul className="flex flex-col gap-2 text-xs text-primary/70 leading-relaxed list-disc pl-4">
                      {frameworkSteps[activeStep].activities.map((act, i) => (
                        <li key={i}>{act}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary/40">
                      Entregáveis da Fase
                    </span>
                    <ul className="flex flex-col gap-2 text-xs text-primary/70 leading-relaxed list-disc pl-4">
                      {frameworkSteps[activeStep].deliverables.map((del, i) => (
                        <li key={i}>{del}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Risks and Mitigation */}
              <div className="border-t border-charcoal-card/60 pt-6 mt-6 flex items-start gap-3 bg-[#1e1414]/15 border-l-2 border-red-500/40 p-3 rounded-r-xl">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-red-400">
                    Risco Comum Associado
                  </span>
                  <p className="text-xs text-[#E1E0CC]/80 font-light leading-relaxed italic">
                    "{frameworkSteps[activeStep].risks[0]}"
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: EXPERIENCE & HOW I WORK (TIMELINE E SOFT SKILLS) */}
      <section id="experience" className="w-full bg-[#F9F8F3] py-20 px-6 md:py-32 md:px-12 text-[#1A1917] relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Timeline - Left (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-charcoal/50">
                05 / TIMELINE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal leading-none">
                Trajetória Profissional
              </h2>
            </div>

            {/* Experience timeline list */}
            <div className="flex flex-col gap-8 border-l border-charcoal/15 pl-6 relative">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative flex flex-col gap-3 group">
                  {/* Timeline dot */}
                  <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-charcoal border-2 border-[#F9F8F3] group-hover:bg-accent-dark transition-colors duration-300" />
                  
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 className="text-lg font-bold text-charcoal tracking-tight group-hover:text-accent-dark transition-colors duration-300">
                      {exp.company}
                    </h3>
                    <span className="text-xs font-semibold text-charcoal/60 bg-charcoal/5 px-2 py-0.5 rounded">
                      {exp.period}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal/50">
                    {exp.role}
                  </span>

                  <p className="text-charcoal/70 text-xs sm:text-sm font-light leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="bg-[#E8E6DC]/40 border-l border-charcoal/10 p-3 rounded-r-lg text-xs italic text-charcoal/60 leading-relaxed">
                    <strong>Aprendizado Operacional:</strong> "{exp.learnings}"
                  </div>

                  {exp.projectSlug && (
                    <button
                      onClick={() => navigate(`/projetos/${exp.projectSlug}`)}
                      className="flex items-center gap-1 text-xs font-bold text-accent-dark hover:underline bg-transparent border-none outline-none cursor-pointer w-max"
                    >
                      Ver caso correspondente
                      <ArrowUpRight size={12} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills / Behaviors - Right (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-charcoal/50">
                06 / HOW I WORK
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal leading-none">
                Comportamentos
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {softSkills.map((skill, idx) => (
                <div key={idx} className="flex flex-col border-b border-charcoal/10 pb-5 gap-2">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-accent-dark">
                    {skill.title}
                  </h3>
                  <h4 className="text-sm sm:text-base font-bold text-charcoal tracking-tight leading-tight">
                    {skill.behavior}
                  </h4>
                  <p className="text-charcoal/70 text-xs sm:text-sm font-light leading-relaxed">
                    {skill.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7: CONTACT / CTA */}
      <section id="contact" className="w-full bg-black py-24 px-6 md:py-36 md:px-12 text-[#E1E0CC] relative text-center">
        <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center gap-8">
          <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-accent flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-signal" />
            CONTATO PROFISSIONAL
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary-warm leading-tight max-w-2xl">
            Pronto para estruturar sua próxima implantação?
          </h2>

          <p className="text-primary/70 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl">
            Conecte-se comigo para alinhar processos de atendimento, configurar automações inteligentes ou liderar projetos estratégicos de onboarding SaaS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a 
              href="mailto:infloworkdigital@gmail.com" 
              className="flex items-center justify-center gap-2 bg-[#DEDBC8] hover:bg-[#E1E0CC] text-black font-semibold text-sm rounded-full py-3 px-8 transition-colors duration-300 shadow-lg"
            >
              Enviar E-mail
              <ArrowRight size={14} />
            </a>
            <a 
              href="https://www.linkedin.com/in/chrisdacostta" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 border border-[#DEDBC8]/30 hover:border-[#E1E0CC] hover:bg-white/5 font-semibold text-sm rounded-full py-3 px-8 transition-all duration-300 text-primary-warm"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="text-[10px] uppercase tracking-widest text-primary/30 mt-16 font-light">
            © {new Date().getFullYear()} Christian da Costa · Todos os direitos reservados.
          </div>
        </div>
      </section>

    </div>
  );
};
