import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Usuario from "../../assets/models/Usuario";
import { cadastroUsuario } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Cadastro() {

    const navigate = useNavigate(); 

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [confirmarSenha, setConfirmarSenha] = useState<string>("");

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    });


    useEffect(() => {
        if (usuario.id !== 0) {
            retornar();
        }
    }, [usuario]);

    function retornar() {
        navigate("/login");
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value);
    }

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (usuario.senha !== confirmarSenha) {
            ToastAlerta('As senhas não coincidem. Por favor, verifique e tente novamente.', 'confirmar senha');
            setUsuario({
                ...usuario,
                senha: ''
            });
            setConfirmarSenha('');
            return;
        }

        setIsLoading(true);

        try {
            // Lógica para cadastrar o usuário
            await cadastroUsuario('/usuarios/cadastrar', usuario, setUsuario);
            ToastAlerta('Usuário cadastrado com sucesso!','cadastro usuario');
        } catch (error) {
            ToastAlerta('Erro ao cadastrar o usuário. Por favor, tente novamente.', 'erro cadastro usuario');
        } finally {
            setIsLoading(false);
        }
    }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen place-items-center font-bold">
      
      {/* Coluna da imagem */}
      <div className="hidden lg:flex w-full h-full items-center justify-center bg-white">
        <img
          src="https://ik.imagekit.io/plbiw3mje/Freelancer-pana%20(1).svg"
          alt="Ilustração de cadastro"
          className="w-4/7 h-auto max-w-xl"
        />
      </div>

      {/* Coluna do formulario */}
      <form onSubmit={cadastrarNovoUsuario} className="flex justify-center items-center flex-col w-11/12 sm:w-2/3 gap-3 py-10">
        <h2 className="text-slate-900 text-5xl">Cadastrar</h2>

        <div className="flex flex-col w-full">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            value={usuario.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Usuario"
            value={usuario.usuario}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="foto">Foto</label>
          <input
            type="text"
            id="foto"
            name="foto"
            placeholder="Foto"
            value={usuario.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            placeholder="Confirmar Senha"
            value={confirmarSenha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex justify-around w-full gap-8 mt-2">
          <button
            type="reset"
            onClick={retornar}
            className="bg-gray-900 text-white rounded w-1/2 py-2 hover:bg-red-900 transition"
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="bg-gray-900 text-white rounded w-1/2 py-2 hover:bg-cyan-900 transition"
          >
            {isLoading ? 
            <ClipLoader 
            color="#ffffff" 
            size={20} 
            /> : 
            <span>Cadastrar</span>
            }
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
