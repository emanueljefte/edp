const eventos = [
  {
    nome: 'Live: Como Programar com IA de forma correcta e ter produtividade',
    data: '20 Set 2025',
    hora: '19h',
    tipo: 'Live',
},
  {
    nome: 'TalkShow EDP',
    data: '28 Set 2025',
    hora: '19h',
    tipo: 'TalkShow',
},
];

export default function Eventos() {
  return (
    <section className="bg-[#1A1A1A] text-white py-16 px-6 md:px-18 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
        Eventos e Encontros
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {eventos.map((evento, index) => (
          <div key={index} className="bg-[#2A2A2A] p-6 rounded-lg border border-orange-500 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">{evento.nome}</h3>
            <p className="text-sm text-gray-300 mb-1">📅 {evento.data}</p>
            <p className="text-sm text-gray-300 mb-4">⏰ {evento.hora}</p>
            <span className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-black text-xl font-semibold px-4 py-2 rounded-md">
              {evento.tipo}
            </span>
          </div>
))}
      </div>
    </section>
);
}