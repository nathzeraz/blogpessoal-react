import { Link } from "react-router-dom";
import type Postagem from "src/assets/models/Postagem";

interface CardPostagensProps {
  postagem: Postagem;
}

function CardPostagem({ postagem }: CardPostagensProps) {
  const dataFormatada = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date(postagem.data));

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-4 bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-700 px-5 py-4 text-white">
        <img
          src={postagem.usuario?.foto}
          className="h-12 w-12 rounded-full border-2 border-white/70 object-cover"
          alt={postagem.usuario?.nome}
        />

        <div className="min-w-0">
          <p className="text-xs opacity-90">Autor</p>
          <h3 className="truncate text-base font-semibold">
            {postagem.usuario?.nome}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-2 px-5 py-4">
        <h4 className="line-clamp-1 text-lg font-bold text-slate-900">
          {postagem.titulo}
        </h4>

        <p className="line-clamp-3 text-sm text-slate-600">{postagem.texto}</p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
            Tema: {postagem.tema?.descricao}
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
            {dataFormatada}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 border-t border-slate-200">
        <Link
          to={`/editarpostagem/${postagem.id}`}
          className="flex items-center justify-center gap-2 bg-white py-3 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-50"
        >
          ✏️ Editar
        </Link>

        <Link
          to={`/deletarpostagem/${postagem.id}`}
          className="flex items-center justify-center gap-2 bg-white py-3 text-sm font-semibold text-rose-600 transition hover:bg-rose-50"
        >
          🗑️ Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardPostagem;
