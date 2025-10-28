import { useState } from 'react';
import logo from '../assets/KC.png';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #000000, #1a1a1a, #000000)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '96px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '48px',
          color: '#e5e7eb',
        }}
      >
        {/* ✅ Left Side - Logo */}
        <div
          style={{
            flex: '1 1 40%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src={logo}
            alt="KCTAX Logo"
            style={{
              height: '320px',
              width: '320px',
              objectFit: 'contain',
              borderRadius: '16px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
              transition: 'transform 0.3s ease',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>

        {/* ✅ Right Side - Content */}
        <div
          style={{
            flex: '1 1 55%',
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
          }}
        >
          {/* Title */}
          <h2
            style={{
              fontSize: '3rem',
              fontWeight: 800,
              background: 'linear-gradient(to right, #f97316, #eab308, #f59e0b)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              textAlign: 'left',
            }}
          >
            About Us
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: '1.125rem',
              color: '#d1d5db',
              lineHeight: '1.75',
              textAlign: 'justify',
            }}
          >
            <span style={{ fontWeight: 600, color: '#facc15' }}>KCTAX Wealth Advisor</span>{' '}
            stands as a trusted name in financial excellence. Headquartered in{' '}
            <span style={{ color: '#fb923c' }}>New Delhi, India</span>, we bring together
            decades of combined expertise in{' '}
            <span style={{ fontWeight: 500, color: '#facc15' }}>
              taxation, finance, law, and investment advisory
            </span>
            . Our mission is to empower individuals and businesses to achieve lasting
            financial security and growth through strategic planning and transparent
            consultation.
          </p>

          <p
            style={{
              fontSize: '1.125rem',
              color: '#d1d5db',
              lineHeight: '1.75',
              textAlign: 'justify',
            }}
          >
            We believe that true wealth isn’t just about numbers — it’s about freedom,
            clarity, and confidence. From income tax management to portfolio optimization
            and legal compliance, our holistic approach ensures our clients make informed
            decisions with complete peace of mind.
          </p>

          {/* Address Box */}
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div
              style={{
                background: 'linear-gradient(to right, #facc15, #fb923c, #f59e0b)',
                color: '#000000',
                fontWeight: 500,
                borderRadius: '16px',
                boxShadow:
                  '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                padding: '24px',
                maxWidth: '448px',
                width: '100%',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p style={{ fontSize: '1.125rem' }}>
                <strong>Address:</strong> Delhi, India – 110001
              </p>
            </div>
          </div>

          {/* Subtext */}
          <div
            style={{
              color: '#9ca3af',
              fontSize: '0.875rem',
              marginTop: '8px',
              textAlign: 'left',
            }}
          >
            <p>Building Trust • Empowering Growth • Delivering Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
