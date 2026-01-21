import React from "react";
import "./Banner.css"; // estilos del banner

const Banner = () => {
  return (
    <section className="banner" aria-label="Banner principal">
      <div className="banner__overlay" />
      <div className="banner__content">
        <h1 className="banner__title">Explora la infinidad de Artistas que tenemos para ti</h1>
        <p className="banner__subtitle">Musica en ingles, español y mucho mas...</p>
        <a href="#descubre" className="banner__cta">Descubrir</a>
      </div>
    </section>
  );
};

export default Banner;