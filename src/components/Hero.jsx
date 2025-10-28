import kc from '../assets/kcmain.jpeg';
import About from './About';
import Contact from './Contact';
import Services from './Services';

const Hero = () => {
  return (
    <>
    <section
      id="home"
      style={{
        position: 'relative',
        backgroundImage: `url(${kc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white', // default text color
      }}
    >
      {/* Overlay for better readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent black overlay
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px',
          padding: '0 20px',
        }}
      >
        <h1
         className='text-7xl'
        >
          KCTAX  Wealth  Advisor
        </h1>
        <p
          style={{
            fontSize: '1.8rem',
            color: '#f97316', // accent orange
            marginBottom: '20px',
            fontStyle: 'italic',
          }}
        >
          "Compliance. Finance. Law."
        </p>
        <p
          style={{
            fontSize: '1.5rem',
            color: 'white',
          }}
        >
          Your trusted partner in wealth management and advisory services.
        </p>
      </div>
    </section>
    <About/>
    <Services/>
    <Contact/>
    </>
  );
};

export default Hero;
