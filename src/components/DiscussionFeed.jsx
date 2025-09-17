const discussions = [
  {
    title: "Dados os desafios sócio econômico e político do nosso país, há chances das startups se manterem vivas e crescerem?",
    author: "Fábio Aurélio",
    replies: 12,
    tag: "#startups",
  },
  {
    title: "O que acham do Mercado de trabalho em Angola?",
    author: "Leandro Malungo",
    replies: 8,
    tag: "#mercadodetrabalho",
  },
  {
    title: "O que achas sobre o processo de digitalização do ensino em Angola?",
    author: "Fábio Aurélio",
    replies: 10,
    tag: "#digitalizacaodoensino",
  },
];

const DiscussionFeed = () => {
  return (
    <section className="bg-[#1A1A1A] text-white py-16 px-6 md:px-18">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
        Discussões da Comunidade
      </h2>
      <div className="space-y-6 mb-8">
        {discussions.map((item, index) => (
          <div
            key={index}
            className="bg-[#0F0F0F] p-6 rounded-lg shadow-md hover:border-orange-500 border border-transparent transition-all"
          >
            <h3 className="text-lg font-semibold text-orange-400 mb-2">
              {item.title}
            </h3>
            <div className="flex justify-between text-sm text-gray-400">
              <span>👤 {item.author}</span>
              <span>💬 {item.replies} respostas</span>
              <span className="text-orange-500">{item.tag}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <a
          href="#"
          className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-black text-xl font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-transform"
        >
          Ver Mais
        </a>
      </div>
    </section>
  );
};

export default DiscussionFeed;
