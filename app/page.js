export default function HomePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
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
            transform: translateY(-3px) scale(1.05);
          }
          
          .hover-card {
            transition: all 0.3s ease;
          }
          
          .hover-card:hover {
            transform: translateY(-5px) scale(1.05);
          }
        `
      }} />

      <div style={{
        fontFamily: 'Inter, system-ui, sans-serif',
        background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)',
        minHeight: '100vh',
        padding: '2rem'
      }}>
        {/* Header */}
        <header style={{
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          borderRadius: '1rem',
          padding: '1rem 2rem',
          marginBottom: '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
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
            <h1 style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              margin: 0,
              background: 'linear-gradient(135deg, #059669, #22c55e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
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
            <a href="/funds" style={{
              color: '#4b5563',
              textDecoration: 'none',
              fontWeight: '500',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              transition: 'all 0.3s ease'
            }}>
              📊 Base de données
            </a>
            <a href="/dashboard" style={{
              color: '#4b5563',
              textDecoration: 'none',
              fontWeight: '500',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              transition: 'all 0.3s ease'
            }}>
              📈 Dashboard
            </a>
            <a href="#" style={{
              color: '#4b5563',
              textDecoration: 'none',
              fontWeight: '500',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              transition: 'all 0.3s ease'
            }}>
              🎯 Analytics
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
        </header>

        {/* Main Content */}
        <main style={{
          textAlign: 'center',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* Badge */}
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
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            fontWeight: 'bold',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            color: '#1f2937'
          }}>
            L'avenir du{' '}
            <span style={{
              background: 'linear-gradient(135deg, #059669, #22c55e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Private Equity
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
            color: '#6b7280',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            lineHeight: '1.6'
          }}>
            Découvrez, analysez et investissez dans les meilleures opportunités du marché français avec notre IA révolutionnaire
          </p>

          {/* Boutons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            marginBottom: '4rem'
          }}>
            <a href="/funds" style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #059669, #22c55e)',
              color: 'white',
              textDecoration: 'none',
              padding: '1.2rem 3rem',
              borderRadius: '1rem',
              fontSize: '1.2rem',
              fontWeight: '700',
              boxShadow: '0 10px 30px rgba(5, 150, 105, 0.3)',
              transition: 'all 0.3s ease'
            }}
            className="hover-scale">
              🎯 Découvrir la base de données
            </a>
            
            <a href="/dashboard" style={{
              display: 'inline-block',
              background: 'rgba(255, 255, 255, 0.9)',
              color: '#374151',
              textDecoration: 'none',
              border: '2px solid rgba(5, 150, 105, 0.3)',
              padding: '1rem 2.5rem',
              borderRadius: '1rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease'
            }}
            className="hover-scale">
              📚 Voir le dashboard
            </a>
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
              <div key={index} className="hover-card" style={{
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '2rem',
                borderRadius: '1.5rem',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer'
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

          {/* Section de démonstration */}
          <div style={{
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
              Plateforme complète de private equity
            </h2>
            <p style={{
              color: '#6b7280',
              marginBottom: '2rem',
              fontSize: '1.1rem'
            }}>
              Base de données complète, dashboard investisseur, analytics avancées
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              <a href="/funds" style={{
                display: 'block',
                background: 'rgba(5, 150, 105, 0.1)',
                padding: '1.5rem',
                borderRadius: '1rem',
                textDecoration: 'none',
                color: '#059669',
                border: '2px solid rgba(5, 150, 105, 0.2)',
                transition: 'all 0.3s ease'
              }}
              className="hover-scale">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊</div>
                <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Base de données</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>6 fonds avec filtres avancés</div>
              </a>
              
              <a href="/dashboard" style={{
                display: 'block',
                background: 'rgba(59, 130, 246, 0.1)',
                padding: '1.5rem',
                borderRadius: '1rem',
                textDecoration: 'none',
                color: '#3b82f6',
                border: '2px solid rgba(59, 130, 246, 0.2)',
                transition: 'all 0.3s ease'
              }}
              className="hover-scale">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📈</div>
                <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Dashboard</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Portefeuille 3.1M€ (+25%)</div>
              </a>
              
              <div style={{
                background: 'rgba(245, 158, 11, 0.1)',
                padding: '1.5rem',
                borderRadius: '1rem',
                color: '#f59e0b',
                border: '2px solid rgba(245, 158, 11, 0.2)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎯</div>
                <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Analytics</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Bientôt disponible</div>
              </div>
            </div>
          </div>

          {/* Call to Action final */}
          <div style={{
            marginTop: '4rem',
            padding: '3rem',
            background: 'linear-gradient(135deg, #059669, #22c55e)',
            borderRadius: '2rem',
            color: 'white'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Prêt à révolutionner vos investissements ?
            </h2>
            <p style={{
              marginBottom: '2rem',
              fontSize: '1.1rem',
              opacity: 0.9
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
                  border: 'none',
                  fontSize: '1rem',
                  minWidth: '300px',
                  outline: 'none'
                }}
              />
              <button className="hover-scale" style={{
                background: 'white',
                color: '#059669',
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
