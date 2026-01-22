import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Perfil() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [usuario.token]);

  return (
    <div className="min-h-[80vh] flex justify-center px-4 py-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="w-full max-w-4xl">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
          {/* CAPA */}
          <div className="relative">
            <img
              className="w-full h-64 md:h-72 object-cover"
              src="https://ik.imagekit.io/plbiw3mje/milky-way-full-stars-space.jpg"
              alt="Capa do Perfil"
            />

            {/* overlay de contraste */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* título na capa */}
            <div className="absolute bottom-4 left-6 text-white">
              <p className="text-sm uppercase tracking-wider text-white/80">
                Perfil
              </p>
              <h1 className="text-2xl md:text-3xl font-bold">{usuario.nome}</h1>
            </div>
          </div>

          {/* CONTEÚDO */}
          <div className="relative px-6 pb-8">
            {/* AVATAR */}
            <div className="flex justify-center">
              <img
                className="rounded-full w-32 h-32 md:w-40 md:h-40 -mt-16 md:-mt-20 border-4 border-slate-950 object-cover shadow-xl"
                src={usuario.foto || "https://ik.imagekit.io/plbiw3mje/Playful%20cat-bro.svg?updatedAt=1768497558732"}
                alt={`Foto de perfil de ${usuario.nome}`}
              />
            </div>

            {/* CARD DE INFO */}
            <div className="mt-6 mx-auto max-w-2xl rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md p-6 text-white shadow-lg">
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/70">
                    Nome
                  </p>
                  <p className="text-lg md:text-xl font-semibold">{usuario.nome}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/70">
                    Email
                  </p>
                  <p className="text-base md:text-lg text-white/90 break-all">
                    {usuario.usuario}
                  </p>
                </div>

                {/* linha no final do card (separadora) */}
                <div className="h-px bg-white/10 my-2" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Perfil;
