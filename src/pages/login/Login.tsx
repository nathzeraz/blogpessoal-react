import { Link } from "react-router-dom";

function Login() {

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold ">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4" >
                    <h2 className="text-slate-900 text-5xl ">Entrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuario"
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
                            className="border-2 border-slate-700 rounded p-2"

                        />
                    </div>
                    <button 
                        type='submit' 
                        className="bg-gray-800 text-white rounded px-6 py-2 mt-4 hover:bg-cyan-900 transition">
                        <span>Entrar</span>
                    </button>

                    <hr className="border-slate-800 w-full" />

                   <p>
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className="text-cyan-700 hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
                </form>
                <div className="hidden lg:flex w-full h-full items-center justify-center bg-white">
        <img
          src="https://ik.imagekit.io/plbiw3mje/Computer%20login-bro%20(2).svg"
          alt="Ilustração de cadastro"
          className="w-4/7 h-auto max-w-xl"
        />
      </div>
            </div>
        </>
    );
}

export default Login;