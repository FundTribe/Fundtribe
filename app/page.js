export default function HomePage() {
  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        .float {
          animation: float 3s ease-in-out infinite;
        }
        
        .spin {
          animation: spin 8s linear infinite;
        }
        
        .pulse {
          animation: pulse 2s infinite;
        }
        
        .hover-scale {
          transition: all 0.3s ease;
        }
        
        .hover-scale:hover {
          transform: translateY(-5px) scale(1.05);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #059669, #22c55e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div style={{
        fontFamily: 'Inter, system-ui, sans-serif',
        background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)',
        minHeight: '100vh'
      }}>
        {/* Header */}
        <header className="fade-in" style={{
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(5, 150, 105, 0.2)',
          padding: '1rem 0',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            {/* Logo FundTribe */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div className="spin" style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #059669, #22c55e)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(5, 150, 105, 0.3)'
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
              <h1 className="gradient-text" style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                margin: 0
              }}>
                FundTribe
              </h1>
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
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                transition: 'all 0.3s ease'
              }}>
                Fonds
              </a>
              <a href="#" style={{
                color: '#4b5563',
                textDecoration: 'none',
                fontWeight: '500',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                transition: 'all 0.3s ease'
              }}>
                Club Deals
              </a>
              <button className="hover-scale" style={{
                background: 'linear-gradient(135deg, #059669, #22c55e)',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.75rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(5, 150, 105, 0.3)'
              }}>
                Accès Beta
              </button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <main style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 2rem',
          textAlign: 'center'
        }}>
          {/* Badge */}
          <div className="fade-in" style={{
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
            border: '1px solid rgba(5, 150, 105, 0.2)'
          }}>
            <span className="pulse" style={{
              width: '8px',
              height: '8px',
              background: '#22c55e',
              borderRadius: '50%'
            }} />
            🚀 Plateforme révolutionnaire en beta
          </div>

          {/* Titre principal */}
          <h1 className="fade-in" style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            fontWeight: 'bold',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            color: '#1f2937'
          }}>
            L'avenir du{' '}
            <span className="gradient-text">
              Private Equity
            </span>
          </h1>

          <p className="fade-in" style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
            color: '#6b7280',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            lineHeight: '1.6'
          }}>
            Découvrez, analysez et investissez dans les meilleures opportunités du marché français avec notre IA révolutionnaire
          </p>

          {/* Boutons CTA */}
          <div className="fade-in" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            marginBottom: '4rem'
          }}>
            <button className="hover-scale" style={{
              background: 'linear-gradient(135deg, #059669, #22c55e)',
              color: 'white',
              border: 'none',
              padding: '1.2rem 3rem',
              borderRadius: '1rem',
              fontSize: '1.2rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(5, 150, 105, 0.3)'
            }}>
              🎯 Découvrir la démo interactive
            </button>
            
            <button className="hover-scale" style={{
              background: 'rgba(255, 255, 255, 0.9)',
              color: '#374151',
              border: '2px solid rgba(5, 150, 105, 0.3)',
              padding: '1rem 2.5rem',
              borderRadius: '1rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)'
            }}>
              📚 Voir comment ça marche
            </button>
          </div>

          {/* Statistiques */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {[
              { number: '500+', label: 'Fonds analysés', icon: '📊' },
              { number: '€50M', label: 'Volume traité', icon: '💰' },
              { number: '97%', label: 'Précision IA', icon: '🎯' }
            ].map((stat, index) => (
              <div key={index} className="float hover-scale" style={{
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '2rem',
                borderRadius: '1.5rem',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                animationDelay: `${index * 0.2}s`
              }}>
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '0.5rem'
                }}>
                  {stat.icon}
                </div>
                <div className="gradient-text" style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
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

          {/* Call to Action final */}
          <div className="fade-in" style={{
            marginTop: '4rem',
            padding: '3rem',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '2rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(5, 150, 105, 0.2)'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#1f2937'
            }}>
              Prêt à révolutionner vos investissements ?
            </h2>
            <p style={{
              color: '#6b7280',
              marginBottom: '2rem',
              fontSize: '1.1rem'
            }}>
              Rejoignez les investisseurs qui font confiance à FundTribe
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <input
                type="email"
                placeholder="votre.email@exemple.com"
                style={{
                  padding: '1rem 1.5rem',
                  borderRadius: '0.75rem',
                  border: '2px solid rgba(5, 150, 105, 0.3)',
                  fontSize: '1rem',
                  minWidth: '300px',
                  outline: 'none'
                }}
              />
              <button className="hover-scale" style={{
                background: 'linear-gradient(135deg, #059669, #22c55e)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '0.75rem',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Accès Prioritaire
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
