import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";

const News = () => {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Lo Nuevo
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Descubre los últimos lanzamientos de artistas indie, playlists exclusivas
          y eventos que no te puedes perder.
        </p>

        {/* Grid de novedades */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Nuevo Álbum
            </h3>
            <p className="text-gray-500 mb-4">
              "Ecos del Silencio" – una experiencia sonora única de la escena indie local.
            </p>
            <a
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
            >
              <FaSpotify className="mr-2" /> Escúchalo en Spotify
            </a>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Playlist Exclusiva
            </h3>
            <p className="text-gray-500 mb-4">
              Curada por nuestra comunidad indie, con lo mejor de la música emergente.
            </p>
            <a
              href="https://music.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-pink-600 hover:text-pink-800 font-medium"
            >
              <FaApple className="mr-2" /> Disponible en Apple Music
            </a>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Evento en Vivo
            </h3>
            <p className="text-gray-500 mb-4">
              Concierto indie este fin de semana en Dolores Hidalgo. ¡No faltes!
            </p>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-red-600 hover:text-red-800 font-medium"
            >
              <FaYoutube className="mr-2" /> Mira el teaser en YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
