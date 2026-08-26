import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, ShieldAlert } from 'lucide-react';
import { projects } from '../data/projects';
import { MarkdownRenderer } from '../components/MarkdownRenderer';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);

  // Scroll to top on route mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="w-full min-h-screen bg-black text-[#E1E0CC] flex flex-col justify-center items-center gap-6 p-6">
        <ShieldAlert size={48} className="text-red-500" />
        <h1 className="text-2xl font-bold tracking-tight">Projeto Não Encontrado</h1>
        <p className="text-sm text-primary/60 font-light max-w-sm text-center">
          O caso solicitado pode ter sido renomeado, removido ou está sob revisão técnica.
        </p>
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 border border-[#DEDBC8]/30 hover:border-[#E1E0CC] hover:bg-white/5 text-xs font-semibold uppercase tracking-widest rounded-full py-2.5 px-6 transition-all duration-300"
        >
          <ArrowLeft size={14} /> Voltar ao Início
        </button>
      </div>
    );
  }

  const isPending = project.intro.includes("CONTENT_PENDING");

  return (
    <div className="w-full bg-[#F9F8F3] min-h-screen text-[#1A1917] pb-24">
      {/* Cinematic Project Hero */}
      <section className="w-full h-[60vh] md:h-[70vh] bg-black text-[#E1E0CC] relative p-4 md:p-6">
        <div className="w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden relative flex flex-col justify-between p-6 md:p-12">
          {/* Backdrop video or abstract theme */}
          <div className="absolute inset-0 z-0">
            {project.videoUrl ? (
              <video
                src={project.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover filter brightness-[0.35]"
              />
            ) : (
              <div className="w-full h-full bg-[#101010] bg-noise opacity-[0.2]" />
            )}
            <div className="absolute inset-0 noise-overlay opacity-[0.3] mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
          </div>

          {/* Top navigation */}
          <div className="relative z-10 w-full">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#E1E0CC]/80 hover:text-white transition-colors duration-300 bg-transparent border-none outline-none cursor-pointer"
            >
              <ArrowLeft size={16} /> Voltar
            </button>
          </div>

          {/* Bottom metadata details */}
          <div className="relative z-10 w-full flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded">
                Caso {project.number}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-primary-warm bg-white/5 border border-white/10 px-3 py-1 rounded">
                {project.year}
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Project Metadata Card */}
      <section className="max-w-4xl mx-auto -mt-10 relative z-20 px-4">
        <div className="bg-[#101010] text-[#E1E0CC] border border-charcoal-card rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-2xl">
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] uppercase font-bold tracking-widest text-primary/40 flex items-center gap-1.5">
              <User size={10} /> Papel de Atuação
            </span>
            <span className="text-sm font-semibold text-primary-warm leading-tight">{project.role}</span>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] uppercase font-bold tracking-widest text-primary/40 flex items-center gap-1.5">
              <Tag size={10} /> Categoria
            </span>
            <span className="text-sm font-semibold text-primary-warm leading-tight">{project.category}</span>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] uppercase font-bold tracking-widest text-primary/40 flex items-center gap-1.5">
              <Calendar size={10} /> Ano de Entrega
            </span>
            <span className="text-sm font-semibold text-primary-warm leading-tight">{project.year}</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-4xl mx-auto px-6 mt-12 md:mt-16">
        {isPending ? (
          <div className="border border-charcoal/10 rounded-2xl p-6 md:p-10 bg-[#E8E6DC]/30 flex flex-col items-center gap-4 text-center">
            <ShieldAlert size={36} className="text-accent-dark" />
            <h3 className="text-lg font-bold text-charcoal tracking-tight">Informações de Caso Confidenciais</h3>
            <p className="text-xs sm:text-sm text-charcoal/70 max-w-md font-light leading-relaxed">
              O conteúdo completo deste caso está sob revisão e omitido devido a termos de confidencialidade (NDA). Para conhecer mais sobre projetos similares, entre em contato.
            </p>
          </div>
        ) : (
          <article className="prose prose-stone max-w-none">
            <MarkdownRenderer content={project.content} />
          </article>
        )}
      </section>
    </div>
  );
};
