"use client"

import { DocumentationContent } from '../../utils/types'; // Define el tipo DocumentationContent
import Image from 'next/image';
import { useRouter } from "next/navigation";

interface SidebarProps {
  content: DocumentationContent[];
  onContentClick: (content: DocumentationContent) => void;
}


const Sidebar: React.FC<SidebarProps> = ({ content, onContentClick }) => {
  
  const router = useRouter();
  
  const handleTitleClick = () => {
      router.push("/");
  };

  return (
    <div className="sidebar text-white">
    <span className="p-4" onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
      <Image src="/assets/logo.png" alt="logo" width={200} height={200} />
    <h1 className='p-4'>@google-cactus v0.0.2</h1>
    </span>

      <ul>
        {content && content.map((item, index) => (
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
