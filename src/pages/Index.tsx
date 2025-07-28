import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SpecialtyCard } from "@/components/SpecialtyCard";
import { FAQ } from "@/components/FAQ";
import { Heart, Phone, Shield, Star, Zap, Clock } from "lucide-react";
import mysticalBg from "@/assets/mystical-background.jpg";
import maeLiraPortrait from "@/assets/mae-lira-portrait.jpg";
const Index = () => {
  const handleConsultation = () => {
    window.open("https://wa.me/5511999999999?text=Olá, gostaria de agendar uma consulta exclusiva com a Mãe Lira", "_blank");
  };
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${mysticalBg})`
    }}>
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            SEU AMOR AINDA PODE SER SALVO!<br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              TRAGA SEU AMOR DE VOLTA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
            Mãe Lira realiza rituais com um propósito: para casos de separação, traição, términos ou esfriamento. Com força espiritual, ela atua para resgatar o sentimento e impedir que a relação se acabe de vez.
          </p>
          
          <Button variant="mystic" size="lg" onClick={handleConsultation} className="text-lg px-8 py-6 mb-4">
            <Heart className="mr-2" />
            AGENDAR UMA CONSULTA EXCLUSIVA
          </Button>
          
          <p className="text-accent font-semibold flex items-center justify-center">
            <Clock className="mr-2 w-4 h-4" />
            As vagas e horários são limitados.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Seu amor terminou do nada?
          </h2>
          
          <div className="text-lg text-muted-foreground space-y-4 mb-8">
            <p>
              Você sente que tudo estava indo bem, mas de repente seu amor mudou e quis se afastar? Ou pior, terminou sem motivo aparente?
            </p>
            <p>
              Esses casos são mais comuns do que você imagina, principalmente quando existem influências externas, energias negativas ou até mesmo inveja agindo sobre o relacionamento.
            </p>
            <p className="text-accent font-semibold">
              Há quem não acredite, mas os efeitos desse tipo de problema são reais, e podem interferir diretamente na vida do casal.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Experiência e poder espiritual para te ajudar!" subtitle="Mãe Lira é uma especialista em amarração amorosa e em assuntos de ordem espiritual, com mais de 20 anos de experiência. Seu trabalho é focado em rituais e procedimentos para solucionar crises, eliminando influências negativas e resgatando o sentimento, com segurança, discrição e resultados de longo prazo, reais e efetivos." />
          
          
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 px-4 bg-gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Minhas Especialidades:" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SpecialtyCard icon="❤️" title="Amarração Amorosa Definitiva" description="Traz a pessoa amada de volta para você, cheia de paixão e desejo." />
            <SpecialtyCard icon="🔥" title="Trabalhos Espirituais Poderosos" description="Energias positivas para destravar sua vida amorosa." />
            <SpecialtyCard icon="🕯️" title="Oferendas e Rituais Ciganos" description="Proteção, união e fortalecimento dos laços afetivos." />
            <SpecialtyCard icon="💖" title="Adoçamento Espiritual" description="Harmoniza seu relacionamento e reacende a chama do amor." />
            <SpecialtyCard icon="🔮" title="Afastamento de Rivais" description="Corta influências negativas e protege seu relacionamento." />
          </div>
          
          <div className="text-center mt-8">
            <Button variant="mystic" size="lg" onClick={handleConsultation} className="text-lg px-8 py-6">
              <Heart className="mr-2" />
              AGENDAR UMA CONSULTA EXCLUSIVA
            </Button>
            <p className="text-accent font-semibold mt-2 flex items-center justify-center">
              <Clock className="mr-2 w-4 h-4" />
              As vagas e horários são limitados.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Os resultados são inquestionáveis:" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <TestimonialCard name="Luana Leite" text="Meus caminhos estavam fechados, eu já não tinha fé. Expus toda a situação e recebi um ótimo atendimento. Hoje estou feliz com meu marido, ele voltou com amor. Sou muito grata." hasVideo />
            <TestimonialCard name="Patrícia Saraiva" text="Fiz a amarração pois estava cansada da minha vida. Eu já tinha perdido as esperanças, mas a Mãe Lira me ajudou. Em menos de 7 dias ele voltou pra casa, hoje somos um casal feliz novamente. Foi o melhor presente que recebi." hasVideo />
            <TestimonialCard name="Ricardo Costa" text="Eu não acreditava, mas nunca mais faltou amor na minha casa. A Mãe Lira me orientou com sabedoria, me ajudou a resolver todas as pendências do meu casamento. Só tenho a agradecer por esse trabalho incrível e por me devolver a alegria de viver." hasVideo />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Porque escolher a Mãe Lira?" />
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center bg-card/80 backdrop-blur-sm border border-primary/20">
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Sigilo e Discrição</h3>
            </Card>
            <Card className="p-6 text-center bg-card/80 backdrop-blur-sm border border-primary/20">
              <Star className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Ajuda e Resultado</h3>
            </Card>
            <Card className="p-6 text-center bg-card/80 backdrop-blur-sm border border-primary/20">
              <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Suporte contínuo via WhatsApp</h3>
            </Card>
          </div>
        </div>
      </section>

      {/* About Mãe Lira Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="SOBRE MÃE LIRA" />
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="/lovable-uploads/72851f37-cb36-435b-a4bd-6249f4aa3ece.png" alt="Mãe Lira - Especialista em Amarração Amorosa" className="w-full max-w-md mx-auto rounded-lg shadow-card" />
            </div>
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Com mais de 20 anos de dedicação à espiritualidade, Mãe Lira é reconhecida por sua sensibilidade, verdade e resultados.
              </p>
              <p className="text-lg text-muted-foreground">
                Seu dom foi herdado por gerações de mulheres dedicadas aos rituais e à mediunidade, e desde jovem ela se destaca pela conexão com entidades de luz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Nunca se Consultou?" />
          
          <div className="space-y-6">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center">
                <span className="text-accent mr-3">📌</span>
                Fazer uma Consulta:
              </h3>
              <p className="text-muted-foreground">
                O primeiro passo é descrever o problema amoroso e então vamos alinhar os rituais e indicar o melhor caminho para o seu retorno amoroso.
              </p>
            </Card>
            
            <Card className="p-6 bg-card/80 backdrop-blur-sm border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center">
                <span className="text-accent mr-3">📌</span>
                Ter Fé e Envolvimento:
              </h3>
              <p className="text-muted-foreground">
                A fé é essencial no início e durante o processo. Ela ajuda a alinhar as energias e potencializar o processo.
              </p>
            </Card>
            
            <Card className="p-6 bg-card/80 backdrop-blur-sm border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center">
                <span className="text-accent mr-3">📌</span>
                Fim das Crises:
              </h3>
              <p className="text-muted-foreground">
                Após realizar os rituais corretamente, você terá a chance de reconstruir o relacionamento e superar as crises.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Descubra a verdade sobre o seu destino!
          </h2>
          
          <p className="text-lg text-primary-foreground/90 mb-6">
            Está passando por problemas no amor, na vida financeira ou sente que há algo bloqueando sua caminhada? A Mãe Lira tem uma consulta única e exclusiva que pode revelar o que está impedindo sua vida de andar.
          </p>
          
          <p className="text-lg text-primary-foreground/90 mb-8">
            Com anos de experiência e uma conexão única com o mundo espiritual, oferecemos orientações precisas para resolver crises amorosas, afastar energias negativas e abrir caminhos para sua felicidade.
          </p>
          
          <h3 className="text-2xl font-bold text-primary-foreground mb-6">
            Perdeu a Confiança no Amor? Descubra Agora Como Reconquistar a Fidelidade e Reavivar a Paixão no Seu Relacionamento!
          </h3>
          
          <p className="text-xl font-bold text-primary-foreground mb-6">
            Entre em contato agora mesmo!
          </p>
          
          <Button variant="golden" size="lg" onClick={handleConsultation} className="text-lg px-8 py-6">
            <Heart className="mr-2" />
            AGENDAR UMA CONSULTA EXCLUSIVA
          </Button>
        </div>
      </section>
    </div>;
};
export default Index;