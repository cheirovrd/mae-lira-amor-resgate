import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqData = [
  {
    question: "A Amarração amorosa é gratuita?",
    answer: "Não. O valor é informado na hora da consulta via WhatsApp e leva em conta as necessidades de cada pessoa."
  },
  {
    question: "Como posso agendar minha Amarração?",
    answer: "Entre em contato via WhatsApp através do botão de consulta exclusiva. Faremos uma análise do seu caso e agendaremos o melhor horário."
  },
  {
    question: "Em quanto tempo a Amarração tem resultado?",
    answer: "Os resultados podem variar conforme cada caso, mas muitos clientes relatam mudanças positivas em poucos dias, como mostram os depoimentos."
  },
  {
    question: "Os trabalhos espirituais são sigilosos?",
    answer: "Sim, absoluto sigilo e discrição. Todas as informações pessoais e detalhes dos rituais são mantidos em completa confidencialidade."
  },
  {
    question: "Quais as formas de pagamento?",
    answer: "Aceitamos diversas formas de pagamento. Os detalhes serão informados durante a consulta inicial via WhatsApp."
  }
];

export const FAQ = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-primary bg-clip-text text-transparent">
          Perguntas Frequentes
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-primary/20">
              <AccordionTrigger className="text-left text-foreground hover:text-accent">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};