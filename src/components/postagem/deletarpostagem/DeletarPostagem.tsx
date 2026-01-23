import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Postagem from "../../../assets/models/Postagem";
import { buscar, deletar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarPostagem() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [postagem, setPostagem] = useState<Postagem>({} as Postagem);

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/postagens/${id}`, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/postagens");
  }

  async function deletarPostagem() {
    setIsLoading(true);

    try {
      await deletar(`/postagens/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      ToastAlerta("Postagem apagada com sucesso",'deletar postagem');
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      } else {
        alert("Erro ao deletar a postagem.");
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        <header className="bg-orange-600 text-white text-center py-4">
          <h1 className="text-2xl font-bold">Deletar Postagem</h1>
        </header>

        <div className="p-6 text-center space-y-4">
          <p className="text-lg text-slate-800">
            Você tem certeza que deseja apagar a postagem?
          </p>

          <div className="border rounded-lg p-4 bg-slate-50 text-left">
            <p className="font-bold">
              {postagem.titulo ? postagem.titulo : "Carregando título..."}
            </p>
            <p className="text-sm text-slate-600">
              {postagem.texto ? postagem.texto : "Carregando texto..."}
            </p>
          </div>
        </div>

        <div className="flex">
          <button
            type="button"
            onClick={retornar}
            disabled={isLoading}
            className="w-1/2 py-3 font-semibold bg-gray-100 hover:bg-gray-300"
          >
            Cancelar
          </button>

          <button
            type="button"
            onClick={deletarPostagem}
            disabled={isLoading}
            className="w-1/2 py-3 bg-orange-600 text-white font-semibold hover:bg-orange-700 transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? <ClipLoader color="#ffffff" size={20} /> : "Confirmar"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarPostagem;
