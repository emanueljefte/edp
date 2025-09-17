import { MenuOutlined, CloseOutlined, CodeOutlined, LoginOutlined} from "@ant-design/icons";
import { useState} from "react";
import { Link} from "react-router-dom";

const navegacao = [
  { id: 1, li: "Início", path: "/"},
  { id: 2, li: "Projectos", path: "#"},
  { id: 3, li: "Discussões", path: "#"},
  { id: 4, li: "Recursos", path: "#"},
  { id: 5, li: "Eventos", path: "#"},
  { id: 6, li: "Sobre", path: "#"},
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0F0F0F] text-white px-6 md:px-8 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <div>
        <Link className="flex items-center gap-2">
          <img src="/edp.jpg" alt="Logo da EDP" className="w-[40px]" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            EDP
          </h1>
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium list-none">
        {navegacao.map((nav) => (
          <li key={nav.id}>
            <Link to={nav.path} className={`hover:text-orange-400 ${location.pathname === nav.path ? 'text-orange-400 font-bold': ''}`}>
              
                {nav.li}
              </Link>
          </li>
))}
        {/* Botão Entrar */}
        <li>
          <Link
            to="/login"
            className="ml-4 bg-gradient-to-r from-red-500 to-orange-500 text-black text-xl px-4 py-2 rounded-md font-semibold hover:scale-105 transition-transform flex items-center gap-2"
>
            <LoginOutlined />
            Entrar
          </Link>
        </li>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen? (
            <CloseOutlined className="text-xl text-orange-400" />
): (
            <MenuOutlined className="text-xl text-orange-400" />
)}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#1A1A1A] flex flex-col items-center py-6 gap-4 text-sm font-medium z-50 md:hidden">
          {navegacao.map((nav) => (
            <li className="list-none" key={nav.id}>
              <Link to={nav.path} className={`hover:text-orange-400 ${location.pathname === nav.path ? 'text-orange-400': ''}`}>
              
                {nav.li}
              </Link>
            </li>
))}
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

export default Header;