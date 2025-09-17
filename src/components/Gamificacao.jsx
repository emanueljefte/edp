import { BugOutlined, ToolOutlined, ThunderboltOutlined} from '@ant-design/icons';

const badges = [
  {
    name: 'Nelson',
    description: 'Reportou 10 bugs relevantes',
    icon: <BugOutlined className="text-red-500 text-3xl" />,
},
  {
    name: 'Dev Armando Af',
    description: 'Participação activa nos debates da comunidade',
    icon: <ToolOutlined className="text-orange-500 text-3xl" />,
},
  {
    name: 'Fábio Aurélio',
    description: 'Organizou 3 debates técnicos',
    icon: <ThunderboltOutlined className="text-yellow-400 text-3xl" />,
},
];

const ranking = [
  { name: 'Nelson', points: 120},
  { name: 'Leandro Malungo', points: 95},
  { name: 'Fábio Aurélio', points: 80},
];

export default function Gamificacao() {
  return (
    <section className="bg-[#1A1A1A] text-white py-16 px-6 md:px-18 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
        Conquistas da Programação
      </h2>

      {/* Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {badges.map((badge, index) => (
          <div key={index} className="bg-[#2A2A2A] p-6 rounded-lg border border-orange-500 hover:scale-105 transition-transform">
            <div className="mb-4">{badge.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{badge.name}</h3>
            <p className="text-sm text-gray-300">{badge.description}</p>
          </div>
))}
      </div>

      {/* Ranking */}
      <div className="bg-[#2A2A2A] p-6 rounded-lg border border-red-500 max-w-xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">🏆 Ranking Semanal</h3>
        <ul className="space-y-3">
          {ranking.map((user, index) => (
            <li key={index} className="flex justify-between items-center bg-[#1F1F1F] p-4 rounded-md hover:bg-[#333] transition-colors">
              <span>{index + 1}. {user.name}</span>
              <span className="text-orange-400 font-bold">{user.points} pts</span>
            </li>
))}
        </ul>
      </div>
    </section>
);
}