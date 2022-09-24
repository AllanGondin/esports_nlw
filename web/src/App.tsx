// Componentes e Propriedades
import { useEffect, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog' 


import './styles/main.css';
import logoImg from './assets/logo.svg'
import { GamerBanner } from './components/GamerBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

interface Game {
  id: string
  title: string
  bannerURL: string
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])
  
  // function handleButtonClick() {
  //   setHasUserClickedOnButton(!hasUserClickedOnButton);
  // }

  useEffect(()=>{
    fetch('http://localhost:3333/games')
    .then(response => response.json())
    .then(data => {
      setGames(data)
    })
  }, [])
  
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg}/>

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
        </h1>

        <div className='grid grid-cols-6 gap-6 mt-16'>
          {games.map(game => {
            return (
              <GamerBanner 
                key={game.id}
                bannerUrl={game.bannerURL} 
                title={game.title} 
                adsCount={game._count.ads}
              />
            )
          })}

        </div>
        <Dialog.Root>
          <CreateAdBanner />

          <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

              <Dialog.Content className='fixed bg-[#2A2634] 
              py-8 px-10 
              text-white 
              top-1/2 
              left-1/2 
              -translate-x-1/2 
              -translate-y-1/2
              rounded-lg
              w-[480px]
              shadow-black/25'>

                <Dialog.Title className='text-3xl font-black '>Publique um Anúncio</Dialog.Title>

                <Dialog.Content>
                  <form>

                    <div>
                      <label htmlFor="game">Qual o Gama?</label>
                      <input id="game" placeholder='Selecione o game que deseja jogar' />
                    </div>
                    <div>
                      <label htmlFor="name">Seu Nome (ou Nickname)</label>
                      <input id="name"placeholder='Como the chamam dentro do game?' />
                    </div>
                    <div>
                      <label htmlFor="game">Qual o Gama?</label>
                      <input placeholder='Selecione o game que deseja jogar' />
                    </div>

                  </form>
                </Dialog.Content>

              </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
    </div>
    )
}

export default App
