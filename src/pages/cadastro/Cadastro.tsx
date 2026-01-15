function Cadastro() {
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
      <form className="flex justify-center items-center flex-col w-11/12 sm:w-2/3 gap-3 py-10">
        <h2 className="text-slate-900 text-5xl">Cadastrar</h2>

        <div className="flex flex-col w-full">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
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

        <div className="flex flex-col w-full">
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            placeholder="Confirmar Senha"
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex justify-around w-full gap-8 mt-2">
          <button
            type="button"
            className="bg-gray-900 text-white rounded w-1/2 py-2 hover:bg-red-900 transition"
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="bg-gray-900 text-white rounded w-1/2 py-2 hover:bg-cyan-900 transition"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
