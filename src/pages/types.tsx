export interface Subsection {
  titulo: string;
  contenido: JSX.Element | String;
}

export interface DocumentationContent {
    titulo: string;
    subtitulos: Subsection[];
}
