import { useEffect, useState } from 'react'
import './App.css'
import api from './api'


function App() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await api.get('/api/artists');
        setArtists(response.data);
      } catch (error) {
        console.error('Erro ao buscarartistas', error)
      }
    };
    fetchArtist();
  }, []);

  return (
    <div className='page'>
      
      <div className="corner">
        <div className="name">iSpotify ®</div>
        <button className="artists" id="button"><img src="src/images/artists-icon.png" id="icon" alt="radio" width="16" height="16" />Artistas</button>
        <button className="liked-songs" id="button"><img src="src/images/favorite-icon.svg" id="icon" alt="heart" width="16" height="16" />Músicas Curtidas</button>
        <button className="logout" id="button"><img src="src/images/logout-icon.svg" id="icon" alt="door" width="16" height="16" />Logout</button>
      </div>

      <main className="content">
        <h1>Artistas</h1>
        <ul className="card-grid">
          {artists.map(a => (
            <li key={a.id} className='card'>
              <div className='card-button'>
                <img src={a.image} alt={a.name} className="foto" />
                <div className='card-body'>
                  <h3 className='card-title'>{a.name}</h3>
                  <span className='card-subtitle'>Artista</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>

    </div>
  )
}

export default App
