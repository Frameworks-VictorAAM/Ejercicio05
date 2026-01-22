import { FaFacebookF, FaInstagram, FaTwitter, FaSpotify } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Sobre Nosotros
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Somos una tienda de música indie dedicada a apoyar artistas emergentes
          y ofrecer experiencias únicas a nuestros clientes. Creemos en el poder
          de la música independiente para transformar culturas y conectar
          personas.
        </p>

        {/* Bloque de valores */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Innovación</h3>
            <p className="text-gray-500">
              Traemos lo último en tendencias musicales y experiencias digitales.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Comunidad</h3>
            <p className="text-gray-500">
              Apoyamos a artistas locales y fomentamos la cultura indie.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Pasión</h3>
            <p className="text-gray-500">
              La música es nuestra esencia y compartimos esa pasión contigo.
            </p>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 text-2xl">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 text-2xl">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400 text-2xl">
            <FaTwitter />
          </a>
          <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500 text-2xl">
            <FaSpotify />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
