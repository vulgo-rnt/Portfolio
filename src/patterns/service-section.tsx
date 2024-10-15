import {
  LandingPage,
  ECommerce,
  Support,
  Automation,
} from "@/components/icons/@index";

export default function ServiceSection() {
  return (
    <section className="dark:text-color_btn_dark mb-24">
      <h2>Em que posso ser útil.</h2>
      <h1 className="text-5xl mb-10 font-medium tracking-wider max-sm:tracking-widest max-sm:text-4xl ">
        Serviços
      </h1>
      <div className="grid grid-cols-2 gap-6 lg:gap-28">
        <span className="flex flex-col gap-6">
          <LandingPage />
          <h1 className="text-2xl">Landing Page</h1>
          <p className="text-secondary">
            Página única, com uma abordagem simplificada e focada na oferta
            central de uma campanha de marketing digital, com o objetivo de
            converter leads em clientes.
          </p>
        </span>
        <span className="flex flex-col gap-6">
          <ECommerce />
          <h1 className="text-2xl">E-commerce</h1>
          <p className="text-secondary">
            Foco em lojistas, tanto para B2B (Business to Business), empresas
            que vendem para outras empresas, e B2C (Business to Client),
            empresas que vendem para o consumidor final.
          </p>
        </span>
        <span className="flex flex-col gap-6">
          <Support />
          <h1 className="text-2xl">Manutenção</h1>
          <p className="text-secondary">
            Soluções de erros, atualizações e otimização do código para garantir
            a melhor performance e segurança. Perfeito para clientes que
            precisam corrigir bugs ou refatorar seus sistemas.
          </p>
        </span>
        <span className="flex flex-col gap-6">
          <Automation />
          <h1 className="text-2xl">Automação e Integração</h1>
          <p className="text-secondary">
            Implementação de sistemas automáticos para simplificar processos
            repetitivos e economizar tempo. Conexão de seu sistema com diversas
            plataformas, otimizando a troca de dados e funcionalidades.
          </p>
        </span>
      </div>
    </section>
  );
}
