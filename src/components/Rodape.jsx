import { FacebookOutlined, GithubOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined, YoutubeOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const navegacao = [
    {id: 1, li: 'Início', path: '#'},
    {id: 2, li: 'Projectos', path: '#'},
    {id: 3, li: 'Discussões', path: '#'},
    {id: 4, li: 'Recursos', path: '#'},
    {id: 5, li: 'Eventos', path: '#'},
    {id: 6, li: 'Sobre', path: '#'},
];

export default function Rodape() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12 px-6 md:px-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Navegação */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navegação</h4>
          <ul className="space-y-2 text-gray-300">
            {navegacao.map((nav) => (
                <li key={nav.id}><Link to={nav.path} className="hover:text-orange-400">{nav.li}</Link></li>
            ))}
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Conecte-se</h4>
          <div className="flex justify-center md:justify-start space-x-4 text-2xl text-orange-400">
            <a href="#"><GithubOutlined /></a>
            <a href="#"><LinkedinOutlined /></a>
            <a href="#"><MailOutlined /></a>
            <a href="#"><FacebookOutlined /></a>
            <a href="#"><YoutubeOutlined /></a>
            <a href="#"><InstagramOutlined /></a>
          </div>
        </div>

        {/* Manifesto */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Sobre a EDP</h4>
          <p className="text-sm text-gray-400 mb-4">
            Na EDP, acreditamos que cada erro é uma oportunidade de crescimento. Nossa missão é transformar bugs em aprendizado coletivo.
          </p>
          <a href="#" className="text-orange-400 hover:underline text-sm">Termos de uso e privacidade</a>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © 2025 Erro da Programação. Todos os direitos reservados.
      </div>
    </footer>
);
}