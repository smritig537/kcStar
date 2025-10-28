import { useState } from 'react';
import { Briefcase, Scale, TrendingUp } from 'lucide-react';
import service from '../assets/service.jpg';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: 'CA Services',
      desc: `We provide comprehensive Chartered Accountancy services that include tax filing, audits, GST registration, business incorporation, and strategic financial advisory. Our team ensures that your business stays compliant with every regulation while maximizing efficiency and profitability.`,
      icon: <Briefcase style={{ width: '64px', height: '64px', color: '#f97316', marginBottom: '24px' }} />,
    },
    {
      title: 'Law Services',
      desc: `Our legal division offers specialized assistance in corporate law, taxation law, contract drafting, intellectual property protection, and litigation support. We work closely with clients to deliver transparent, reliable, and timely legal guidance tailored to business goals.`,
      icon: <Scale style={{ width: '64px', height: '64px', color: '#f97316', marginBottom: '24px' }} />,
    },
    {
      title: 'Finance Advisory',
      desc: `Our finance advisory experts help clients with investment planning, portfolio management, and wealth creation strategies. Whether you’re an individual or a business, we align your financial goals with actionable strategies for long-term security and growth.`,
      icon: <TrendingUp style={{ width: '64px', height: '64px', color: '#f97316', marginBottom: '24px' }} />,
    },
  ];

  return (
    <section
      id="services"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #000000, #1a1a1a, #000000)',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '96px 24px',
      }}
    >
      {/* Background Image Banner */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1536px',
          margin: '0 auto 80px',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        }}
      >
        <img
          src={service}
          alt="KCTAX Services"
          style={{
            width: '100%',
            height: '400px',
            objectFit: 'cover',
            opacity: 0.8,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.4), transparent)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '24px',
          }}
        >
          <h2
            style={{
              fontSize: '3rem',
              fontWeight: 700,
              color: '#f97316',
              marginBottom: '16px',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))',
            }}
          >
            Our Services
          </h2>
          <p
            style={{
              color: '#d1d5db',
              fontSize: '1.125rem',
              maxWidth: '672px',
              lineHeight: '1.75',
            }}
          >
            Delivering professional excellence through our expert Chartered Accountancy,
            Law, and Financial Advisory services — empowering your business with trust,
            transparency, and strategic growth.
          </p>
        </div>
      </div>

      {/* ✅ Service Cards in Row */}
      <div style={{ maxWidth: '1792px', width: '100%', textAlign: 'center' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            justifyItems: 'center',
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: 'linear-gradient(to bottom right, #0a0a0a, #000000)',
                border: '1px solid rgba(251, 146, 60, 0.3)',
                padding: '48px',
                borderRadius: '24px',
                boxShadow:
                  hoveredIndex === index
                    ? '0 20px 25px -5px rgba(251, 146, 60, 0.4), 0 10px 10px -5px rgba(251, 146, 60, 0.2)'
                    : '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                transition: 'all 0.5s ease',
                transform: hoveredIndex === index ? 'translateY(-12px)' : 'translateY(0)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                maxWidth: '384px',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {service.icon}
              <h3
                style={{
                  fontSize: '1.875rem',
                  fontWeight: 600,
                  color: '#fb923c',
                  marginBottom: '16px',
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  color: '#d1d5db',
                  textAlign: 'justify',
                  fontSize: '1.125rem',
                  lineHeight: '1.75',
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
