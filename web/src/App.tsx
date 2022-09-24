// Componentes e Propriedades
import { useEffect, useState } from 'react';


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
        <CreateAdBanner />
    </div>
    )
}

export default App
