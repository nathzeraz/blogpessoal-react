import type Postagem from "./Postagem.js";

export default interface Tema {
  id: number;
  descricao: string;
  postagem?: Postagem[] | null;
}