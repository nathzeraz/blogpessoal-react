import React from 'react';

function Home() {
  return (
      <>
          <div className="bg-gray-900 flex justify-center">
            <div className="container grid grid-cols-2 text-white">
              <div className="flex flex-col gap-4 intems-center justify-center py-4">
                 <h2 className="text-5xl font-bold">
                     Seja Bem Vinde!
              </h2>
            <p className="text-xl">
              Expresse aqui seus pensamentos e opiniões
            </p>

            <div className="flex justify-around w-1/2 mt-4">
              <div className='rounded-full text-white border-white border-2 px-6 px-2'
              >
                Nova Postagem
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://i.imgur.com/fyfri1v.png"
              alt="Imagem Página Home"
              className='w-2/3'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
