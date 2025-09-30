import {
  MenuOutlined,
  CloseOutlined,
  CodeOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../theme/ThemeContext";

const navegacao = [
  { id: 1, li: "Início", path: "/" },
  { id: 2, li: "Projectos", path: "#" },
  { id: 3, li: "Discussões", path: "#" },
  { id: 4, li: "Recursos", path: "#" },
  { id: 5, li: "Eventos", path: "#" },
  { id: 6, li: "Sobre", path: "#" },
];

export default function Header () {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, setIsDarkMode} = useContext(ThemeContext);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setIsDarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <header
      className={`${
        isDarkMode ? "bg-[#0F0F0F] text-white" : "bg-white text-black"
      } px-6 md:px-8 py-4 flex justify-between items-center relative`}
    >
      {/* Logo */}
      <div>
        <Link className="flex items-center gap-2">
          <img src="/edp.jpg" alt="Logo da EDP" className="w-[40px]" />
          <h1 className={`text-xl font-bold ${isDarkMode ? "bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent" : "text-[dodgerblue]"}`}>
            EDP
          </h1>
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium list-none">
        {navegacao.map((nav) => (
          <li key={nav.id}>
            <Link
              to={nav.path}
              className={`${isDarkMode ? "hover:text-orange-400" : "hover:text-[dodgerblue]"} ${
                location.pathname === nav.path
                  ? (`${isDarkMode ? "text-orange-400 font-bold" : "text-[dodgerblue]"} `)
                  : ""
              }`}
            >
              {nav.li}
            </Link>
          </li>
        ))}

        {/* Dark / Light Mode */}
        <li>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="text-xl  cursor-pointer"
            title="Alternar tema"
          >
            {isDarkMode ? (
              <span>🌞</span>
            ) : (
              <span style={{ transform: "rotate(180deg)" }}>🌙</span>
            )}
          </button>
        </li>

        {/* Botão Entrar */}
        <li>
          <Link
            to="/login"
            className={`ml-4 section-button text-xl px-4 py-2 rounded-md font-semibold hover:scale-105 transition-transform flex items-center gap-2 ${
              isDarkMode ? "bg-gradient-to-r from-red-500 to-orange-500" : "bg-[dodgerblue]"
            }`}
          >
            <LoginOutlined />
            Entrar
          </Link>
        </li>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <CloseOutlined className="text-xl text-orange-400" />
          ) : (
            <MenuOutlined className="text-xl text-orange-400" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div
          className={`${
            isDarkMode ? "bg-[#1A1A1A] text-white" : "bg-gray-100 text-black"
          } absolute top-16 left-0 w-full flex flex-col items-center py-6 gap-4 text-sm font-medium z-50 md:hidden`}
        >
          {navegacao.map((nav) => (
            <li className="list-none" key={nav.id}>
              <Link
                to={nav.path}
                className={`hover:text-orange-400 ${
                  location.pathname === nav.path ? "text-orange-400" : ""
                }`}
              >
                {nav.li}
              </Link>
            </li>
          ))}

          {/* Dark / Light Mode Mobile */}
          <li className="list-none">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-xl section-button transition-colors cursor-pointer"
              title="Alternar tema"
            >
              {isDarkMode ? (
                <span>🌞</span>
              ) : (
                <span style={{ transform: "rotate(180deg)" }}>🌙</span>
              )}
            </button>
          </li>

          {/* Botão Entrar Mobile */}
          <li className="list-none">
            <Link
              to="/login"
              className="bg-gradient-to-r from-red-500 to-orange-500 text-black px-4 py-2 rounded-md font-semibold flex items-center gap-2"
            >
              <LoginOutlined />
              Entrar
            </Link>
          </li>
        </div>
      )}
    </header>
  );
};

