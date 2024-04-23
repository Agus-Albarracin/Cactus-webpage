import { DocumentationContent } from '../types'; // Define el tipo DocumentationContent

interface SidebarSubProps {
  subtitulos: DocumentationContent['subtitulos'];
  onSubtituloClick: (subtitulo: DocumentationContent['subtitulos'][0]) => void;
}

const SidebarSub: React.FC<SidebarSubProps> = ({ subtitulos, onSubtituloClick }) => {
  return (
    <div className="sidebar-sub">
      <h2 className='p-4'>Funciones</h2>
      <ul>
        {subtitulos.map((subtitulo, index) => (
          <li key={index} onClick={() => onSubtituloClick(subtitulo)} className="p-2 cursor-pointer">
            <div className="inline-block px-8 py-4 rounded-3xl group hover:bg-radialBlack">
              {subtitulo.titulo}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarSub;
