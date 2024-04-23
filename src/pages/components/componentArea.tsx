import React from 'react';
import { DocumentationContent, Subsection } from '../types';

interface ContentAreaProps {
  content: DocumentationContent | null;
}

const ContentArea: React.FC<ContentAreaProps> = ({ content }) => {

  return (
    <div className="content-area">
      {content && (
        <>
          <span className="block text-4xl py-8 font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-white">
            {content.titulo}
          </span>
          {content.subtitulos.map((subtitulo, index) => (
            <div key={index}>
              {typeof subtitulo.contenido === 'string' ? (
                <p>{subtitulo.contenido}</p>
              ) : (
                <div>{subtitulo.contenido}</div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ContentArea;
