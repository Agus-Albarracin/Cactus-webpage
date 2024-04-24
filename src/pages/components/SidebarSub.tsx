import React from 'react';
import { DocumentationContent } from '../../utils/types'; // Define el tipo DocumentationContent

interface SidebarSubProps {
  subtitulos: DocumentationContent['subtitulos'];
  onSubtituloClick: (subtitulo: DocumentationContent['subtitulos'][0]) => void;
}

const SidebarSub: React.FC<SidebarSubProps> = ({ subtitulos, onSubtituloClick }) => {

  const handleSubtituloClick = (subtitulo: DocumentationContent['subtitulos'][0]) => {
    // Llamar a la función de callback
    onSubtituloClick(subtitulo);

    // Obtener el ID del subtitulo seleccionado
    const subtituloId = subtitulo.titulo;

    // Encontrar el elemento correspondiente en el DOM
    const targetElement = document.getElementById(subtituloId);

    // Si el elemento existe, hacer scroll hacia él de forma suave
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sidebar-sub" >
      <h2 className='p-4'>Funciones</h2>
      <ul>
        {subtitulos.map((subtitulo, index) => (
          <li key={index} onClick={() => handleSubtituloClick(subtitulo)} className="p-2 cursor-pointer">
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

