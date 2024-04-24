import Head from 'next/head';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import SidebarSub from './components/SidebarSub';
import ContentArea from './components/componentArea';
import { DocumentationContent } from './types';
import  documentationContent from './documentation/documentationContent';
import './page.styles.css';


const Documentation: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<DocumentationContent | null>(null);
  const [selectedSubtitulo, setSelectedSubtitulo] = useState<DocumentationContent['subtitulos'][0] | null>(null);

  const handleContentClick = (content: DocumentationContent) => {
    setSelectedContent(content);
    setSelectedSubtitulo(null);
  };

  const handleSubtituloClick = (subtitulo: DocumentationContent['subtitulos'][0]) => {
    setSelectedSubtitulo(subtitulo);
  };
  return (
    <div className='grid-container'>
      <Head>
        <link rel="icon" href="icon.ico" />
      </Head>
      <Sidebar content={documentationContent} onContentClick={handleContentClick} />
      <ContentArea content={selectedContent} />
      {selectedContent && (
        <SidebarSub subtitulos={selectedContent.subtitulos} onSubtituloClick={handleSubtituloClick} />
      )}
    </div>
  );
};

export default Documentation;
