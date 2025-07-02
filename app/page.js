export default function HomePage() {
  return (
    <div style={{ 
      fontFamily: "'Inter', system-ui, sans-serif",
      overflow: 'hidden'
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)',
        zIndex: -2
      }} />

      {/* Floating particles */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden'
      }}>
        {/* Particle 1 */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '20px',
          height: '20px',
          background: 'rgba(5, 150, 105, 0.3)',
          borderRadius: '50%',
          animation: 'float1 6s ease-in-out infinite'
        }} />
        {/* Particle 2 */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: '15px',
          height: '15px',
          background: 'rgba(34, 197, 94, 0.4)',
          borderRadius: '50%',
          animation: 'float2 8s ease-in-out infinite'
        }} />
        {/* Particle 3 */}
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '20%',
          width: '25px',
          height: '25px',
          background: 'rgba(16, 185, 129, 0.2)',
          borderRadius: '50%',
          animation: 'float3 7s ease-in-out infinite'
        }} />
      </div>

      {/* Header */}
      <header style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(5, 150, 105, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        animation: 'slideDown 0.8s ease-out'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo animé */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            animation: 'bounceIn 1s ease-out'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #059669, #22c55e)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              boxShadow: '0 4px 15px rgba(5, 150, 105, 0.3)',
              animation: 'logoSpin 4s linear infinite'
            }}>
              <div style={{
                width: '20px',
                height: '20px',
                background: 'white',
                borderRadius: '50%',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '8px',
                  height: '8px',
                  background: '#059669',
                  borderRadius: '50%'
                }} />
              </div>
            </div>
            <span style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #059669, #22c55e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              FundTribe
            </span>
          </div>

          {/* Navigation */}
          <nav style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <a href="#" style={{
              color: '#4b5563',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem'
            }}
            onMouseOver={(e) => {
              e.target.style.color = '#059669';
              e.target.style.background = 'rgba(5, 150, 105, 0.1)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.color = '#4b5563';
              e.target.style.background = 'transparent';
              e.target.style.transform = 'translateY(0)';
            }}>
              Fonds
            </a>
            <a href="#" style={{
              color: '#4b5563',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem'
            }}
            onMouseOver={(e) => {
              e.target.style.color = '#059669';
              e.target.style.background = 'rgba(5, 150, 105, 0.1)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.color = '#4b5563';
              e.target.style.background = 'transparent';
              e.target.style.transform = 'translateY(0)';
            }}>
              Club Deals
            </a>
            <button style={{
              background: 'linear-gradient(135deg, #059669, #22c55e)',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.75rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(5, 150, 105, 0.3)'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.05)';
              e.target.style.boxShadow = '0 8px 25px rgba(5, 150, 105, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 4px 15px rgba(5, 150, 105, 0.3)';
            }}>
              Accès Beta
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '2rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10
        }}>
          {/* Badge animé */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(5, 150, 105, 0.1)',
            color: '#065f46',
            padding: '0.75rem 1.5rem',
            borderRadius: '50px',
            fontSize: '0.9rem',
            fontWeight: '500',
            marginBottom: '2rem',
            border: '1px solid rgba(5, 150, 105, 0.2)',
            animation: 'fadeInUp 1s ease-out 0.2s both'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              background: '#22c55e',
              borderRadius: '50%',
              animation: 'pulse 2s infinite'
            }} />
            🚀 Plateforme révolutionnaire en beta
          </div>

          {/* Titre principal avec animation */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            fontWeight: 'bold',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            animation: 'fadeInUp 1s ease-out 0.4s both'
          }}>
            L'avenir du{' '}
            <span style={{
              background: 'linear-gradient(135deg, #059669, #22c55e, #34d399)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              position: 'relative',
              display: 'inline-block',
              animation: 'shimmer 3s ease-in-out infinite'
            }}>
              Private Equity
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
            color: '#6b7280',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            lineHeight: '1.6',
            animation: 'fadeInUp 1s ease-out 0.6s both'
          }}>
            Découvrez, analysez et investissez dans les meilleures opportunités du marché français avec notre IA révolutionnaire
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            marginBottom: '4rem',
            animation: 'fadeInUp 1s ease-out 0.8s both'
          }}>
            <button style={{
              background: 'linear-gradient(135deg, #059669, #22c55e)',
              color: 'white',
              border: 'none',
              padding: '1.2rem 3rem',
              borderRadius: '1rem',
              fontSize: '1.2rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              boxShadow: '0 10px 30px rgba(5, 150, 105, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-5px) scale(1.05)';
              e.target.style.boxShadow = '0 20px 40px rgba(5, 150, 105, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 10px 30px rgba(5, 150, 105, 0.3)';
            }}>
              🎯 Découvrir la démo interactive
            </button>
            
            <button style={{
              background: 'rgba(255, 255, 255, 0.9)',
              color: '#374151',
              border: '2px solid rgba(5, 150, 105, 0.3)',
              padding: '1rem 2.5rem',
              borderRadius: '1rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseOver={(e) => {
              e.target.style.borderColor = '#059669';
              e.target.style.color = '#059669';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.borderColor = 'rgba(5, 150, 105, 0.3)';
              e.target.style.color = '#374151';
              e.target.style.transform = 'translateY(0)';
            }}>
              📚 Voir comment ça marche
            </button>
          </div>

          {/* Stats animées */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto',
            animation: 'fadeInUp 1s ease-out 1s both'
          }}>
            {[
              { number: '500+', label: 'Fonds analysés', icon: '📊', delay: '1.1s' },
              { number: '€50M', label: 'Volume traité', icon: '💰', delay: '1.2s' },
              { number: '97%', label: 'Précision IA', icon: '🎯', delay: '1.3s' }
            ].map((stat, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '2rem',
                borderRadius: '1.5rem',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                animation: `statBounce 1s ease-out ${stat.delay} both`,
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-10px) scale(1.05)';
                e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
              }}>
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '0.5rem'
                }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #059669, #22c55e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  color: '#6b7280',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Geometric shapes animated */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.1), rgba(34, 197, 94, 0.1))',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          animation: 'morphing 8s ease-in-out infinite'
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(16, 185, 129, 0.15))',
          borderRadius: '50%',
          animation: 'float1 6s ease-in-out infinite'
        }} />
      </section>

      {/* Styles CSS intégrés */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideDown {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes bounceIn {
            0% { transform: scale(0); opacity: 0; }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); opacity: 1; }
          }
          
          @keyframes logoSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes shimmer {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          
          @keyframes float1 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          
          @keyframes float2 {
            0%, 100% { transform: translateX(0px) rotate(0deg); }
            50% { transform: translateX(20px) rotate(180deg); }
          }
          
          @keyframes float3 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
            33% { transform: translate(20px, -20px) rotate(120deg); }
            66% { transform: translate(-20px, 10px) rotate(240deg); }
          }
          
          @keyframes morphing {
            0%, 100% { 
              borderRadius: 30% 70% 70% 30% / 30% 30% 70% 70%;
              transform: rotate(0deg);
            }
            25% { 
              borderRadius: 58% 42% 75% 25% / 76% 46% 54% 24%;
              transform: rotate(90deg);
            }
            50% { 
              borderRadius: 50% 50% 33% 67% / 55% 27% 73% 45%;
              transform: rotate(180deg);
            }
            75% { 
              borderRadius: 33% 67% 58% 42% / 63% 68% 32% 37%;
              transform: rotate(270deg);
            }
          }
          
          @keyframes statBounce {
            0% {
              opacity: 0;
              transform: translateY(50px) scale(0.8);
            }
            70% {
              transform: translateY(-10px) scale(1.05);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          @media (max-width: 768px) {
            nav {
              display: none !important;
            }
          }
        `
      }} />
    </div>
  )
}
