import { Activity, ReactNode, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

    const navigate = useNavigate();

    const { handleLogout, usuario } = useContext(AuthContext);

    const usuarioEstaLogado: boolean = usuario.token !== undefined && usuario.token !== "";

    function logout() {
        handleLogout();
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
        navigate('/');
    }

let component: ReactNode

if (usuario.token !== ""){

    component = (

            <div className='w-full flex justify-center py-4 bg-gray-900 text-white'>

                <div className="container flex justify-between text-lg mx-8">
                    <Link to='/' className='text-2xl font-bold'>Blog Pessoal</Link>

                    <div className='flex gap-4'>
                        <Link to='/postagens' className='hover:underline'>Postagens</Link>
                        <Link to='/temas' className="hover:underline"> Temas </Link>
                        <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema </Link>
                        <Link to='/perfil' className='hover:underline'>Perfil</Link>
                        <Activity mode={usuarioEstaLogado ? "visible" : "hidden"}>
                            <Link to=''><li className="cursor-pointer hover:underline" onClick={logout}>Sair</li></Link>
                        </Activity>
                    </div>
                </div>
            </div>
    )
}

    return ( 
        <>
            { component }
        </>
    );
}
export default Navbar;