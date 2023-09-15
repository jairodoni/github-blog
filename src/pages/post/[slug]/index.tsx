import { DetailsPost } from "@/components/DetailsPost";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


export default function Post() {
  return (
    <div>
      <DetailsPost />
      <ReactMarkdown remarkPlugins={[[remarkGfm, { skipHtml: false }]]}>
        # Jairo Doni
        ## 👋 Olá pessoal, bem-vindo ao meu perfil!!!
        * Lists
        * [ ] todo
        * [x] done
        A table:
        | a | b |
        | - | - |
        A paragraph with *emphasis* and **strong importance**
      </ReactMarkdown>
    </div>
  );
}