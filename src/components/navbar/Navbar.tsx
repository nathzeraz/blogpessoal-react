import { Activity, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

function Navbar() {

    const navigate = useNavigate();

    const { handleLogout, usuario } = useContext(AuthContext);

    const usuarioEstaLogado: boolean = usuario.token !== undefined && usuario.token !== "";

    function logout() {
        handleLogout();
        alert('Usuário deslogado com sucesso!');
        navigate('/');
    }

    return (
        <>
            <div className='w-full flex justify-center py-4 bg-gray-900 text-white'>

                <div className="container flex justify-between text-lg mx-8">
                    <Link to='/' className='text-2xl font-bold'>Blog Pessoal</Link>

                    <div className='flex gap-4'>
                        Postagens |
                        Temas |
                        Cadastrar Tema |
                        Perfil |
                        <Activity mode={usuarioEstaLogado ? "visible" : "hidden"}>
                            <Link to=''><li className="cursor-pointer hover:underline" onClick={logout}>Sair</li></Link>
                        </Activity>


                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;