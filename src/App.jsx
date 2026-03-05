import { useState } from 'react';
import Ballpit from './Ballpit';
import ReflectiveCard from './ReflectiveCard';
import './App.css';

function App() {
  const [showReflectiveCard, setShowReflectiveCard] = useState(false);

  return (
    <div className="landing">
      <div
        className="ballpit-wrapper"
        style={{
          width: '100%',
          maxWidth: '1080px',
          aspectRatio: '1',
          minHeight: '320px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Ballpit
          count={100}
          gravity={0.01}
          friction={0.9975}
          wallBounce={0.95}
          followCursor={false}
          colors={['#5227FF', '#7cff67', '#ff6b6b']}
        />
        <div className="hero-content">
          <h1 className="hero-title">
            <img src="/logo.png" alt="Умные решения" className="hero-logo" />
          </h1>
          <h1 className="hero-date">8 МАРТА</h1>
          <p className="hero-subtitle">
            ПУСТЬ ЭТОТ ПРАЗДНИК ДАРИТ ВДОХНОВЕНИЕ, РАДОСТЬ И НАПОЛНЯЕТ ВАШУ ЖИЗНЬ ГАРМОНИЕЙ И СЧАСТЬЕМ!
          </p>
          <button
            type="button"
            className="hero-cta"
            onClick={() => setShowReflectiveCard(true)}
          >
            главное лицо праздника!
          </button>
        </div>
      </div>

      {showReflectiveCard && (
        <div
          className="reflective-card-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Reflective card"
        >
          <button
            type="button"
            className="reflective-card-close"
            onClick={() => setShowReflectiveCard(false)}
            aria-label="Закрыть"
          >
            ×
          </button>
          <div
            className="reflective-card-backdrop"
            onClick={() => setShowReflectiveCard(false)}
            aria-hidden="true"
          />
          <div className="reflective-card-wrap">
            <ReflectiveCard
              overlayColor="rgba(0, 0, 0, 0.2)"
              blurStrength={12}
              glassDistortion={30}
              metalness={1}
              roughness={0.75}
              displacementStrength={20}
              noiseScale={1}
              specularConstant={5}
              grayscale={0.15}
              color="#ffffff"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
