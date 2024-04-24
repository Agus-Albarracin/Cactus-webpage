import { DocumentationContent } from '../types'; // Define el tipo DocumentationContent
import Image from 'next/image';

interface SidebarProps {
  content: DocumentationContent[];
  onContentClick: (content: DocumentationContent) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ content, onContentClick }) => {
  return (
    <div className="sidebar text-white">
    <Image src="/assets/logo.png" alt="logo" width={200} height={200}/>
    <h1 className='p-4'>@google-cactus v0.0.2</h1>
      <ul>
        {content.map((item, index) => (
          <li key={index} onClick={() => onContentClick(item)} className="p-2 cursor-pointer">
            <div className="inline-block px-8 py-4 rounded-3xl group hover:bg-radialBlack">
              {item.titulo}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
