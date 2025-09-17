const HeroSection = () => {
  return (
    <section className="bg-[#1A1A1A] text-white text-center py-20 px-4 md:px-20">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
        ERRO DA PROGRAMAÇÃO
      </h2>
      <p className="text-base md:text-lg max-w-xl mx-auto mb-8">
        Transformando bugs em aprendizado. Aqui, cada erro é uma oportunidade.
      </p>
      <a
        href="#"
        className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-black text-xl font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-transform"
>
        Junte-se à comunidade
      </a>
    </section>
);
};

export default HeroSection;