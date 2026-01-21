import { Link } from 'react-router-dom';
import type Tema from 'src/assets/models/Tema';

interface CardTemaProps {
    tema: Tema;
}

function CardTema({ tema }: CardTemaProps) {
    return (
        <div className='boorder flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-linear-to-r from-cyan-900 via-cyan-400 to-cyan-900'>Tema</header>
            <p className='p-4 text-lg font-semibold'>{tema.descricao}</p>
            <div className='flex'>
                <Link to={`/editartema/${tema.id}`}
                    className='w-full bg-cyan-600 text-white text-center py-2 hover:brightness-70 transition-all'>
                        <button>Editar</button>
                </Link>

                <Link to={`/deletartema/${tema.id}`}
                className='text-slate-100 bg-red-400 hover:bg-red-800 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardTema;