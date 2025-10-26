import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import {
  BugOutlined,
  ToolOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

const badges = [
  {
    name: "Nelson",
    description: "Reportou 10 bugs relevantes",
    icon: <BugOutlined className="text-red-500 text-3xl" />,
  },
  {
    name: "Dev Armando Af",
    description: "Participação activa nos debates da comunidade",
    icon: <ToolOutlined className="text-orange-500 text-3xl" />,
  },
  {
    name: "Fábio Aurélio",
    description: "Organizou 3 debates técnicos",
    icon: <ThunderboltOutlined className="text-yellow-400 text-3xl" />,
  },
];

const ranking = [
  { name: "Nelson", points: 120 },
  { name: "Leandro Malungo", points: 95 },
  { name: "Fábio Aurélio", points: 80 },
  { name: "Nelson", points: 120 },
  { name: "Leandro Malungo", points: 95 },
  { name: "Fábio Aurélio", points: 80 },
];

export default function Gamificacao() {
  const { isDarkMode } = useContext(ThemeContext);
  const sectionClass = isDarkMode ? "section-dark" : "section-light";
  const cardClass = isDarkMode ? "card-dark" : "card-light";

  return (
    <section
      className={`py-16 px-6 md:px-18 text-center transition-colors duration-300 ${sectionClass}`}
    >
      <h2
        className={`text-3xl md:text-4xl font-bold text-center mb-10 ${
          isDarkMode ? "title-gradient" : ""
        }`}
      >
        Conquistas da Programação
      </h2>

      {/* Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`${cardClass} border ${
              isDarkMode ? "border-red-500" : "border-[#333333]"
            }`}
          >
            <div className="mb-4">{badge.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{badge.name}</h3>
            <p className="text-sm opacity-80">{badge.description}</p>
          </div>
        ))}
      </div>

      {/* Ranking */}
      <div
        className={`${cardClass} border ${
          isDarkMode ? "border-red-500" : "border-[#333333]"
        } max-w-xl mx-auto`}
      >
        <h3 className="text-2xl font-bold mb-4">🏆 Ranking Semanal</h3>
        <ul className="grid grid-cols-2 gap-4">
          {ranking.map((user, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-4 rounded-md transition-colors ${
                isDarkMode
                  ? "bg-[#1F1F1F] hover:bg-[#333]"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <span>
                {index + 1}. {user.name}
              </span>
              <span className="card-title font-bold">{user.points} pts</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
