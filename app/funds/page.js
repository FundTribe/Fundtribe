'use client'

import { useState, useMemo } from 'react'

// Base de données simulée des fonds
const FUNDS_DATABASE = [
  {
    id: 1,
    name: "European Growth Fund III",
    type: "Croissance",
    sector: "Technology",
    geography: "Europe",
    minTicket: 250000,
    targetReturn: 18.2,
    duration: "7-10 ans",
    status: "Ouvert",
    aum: 850000000,
    vintage: 2024,
    manager: "Ardian Partners",
    description: "Fonds spécialisé dans les entreprises tech européennes en croissance",
    riskLevel: "Modéré",
    currency: "EUR",
    fees: "2.5% + 20%",
    esgScore: "A",
    performance: {
      ytd: 12.5,
      "1year": 18.2,
      "3years": 16.8,
      "5years": 19.1
    }
  },
  {
    id: 2,
    name: "French Retail Buyout",
    type: "LBO",
    sector: "Retail",
    geography: "France",
    minTicket: 100000,
    targetReturn: 15.5,
    duration: "5-7 ans",
    status: "Levée en cours",
    aum: 320000000,
    vintage: 2025,
    manager: "Eurazeo Capital",
    description: "Club deal focalisé sur le retail français",
    riskLevel: "Élevé",
    currency: "EUR",
    fees: "2% + 20%",
    esgScore: "B+",
    performance: {
      ytd: 8.3,
      "1year": 15.5,
      "3years": 14.2,
      "5years": null
    }
  },
  {
    id: 3,
    name: "GreenTech Impact Fund",
    type: "Impact",
    sector: "CleanTech",
    geography: "Europe",
    minTicket: 500000,
    targetReturn: 15.8,
    duration: "8-12 ans",
    status: "Ouvert",
    aum: 1200000000,
    vintage: 2023,
    manager: "Bpifrance",
    description: "Fonds d'impact environnemental et social",
    riskLevel: "Modéré-Élevé",
    currency: "EUR",
    fees: "2% + 15%",
    esgScore: "AAA",
    performance: {
      ytd: 11.2,
      "1year": 15.8,
      "3years": 16.1,
      "5years": null
    }
  }
]

export default function FundsDatabase() {
  const [filters, setFilters] = useState({
    search: '',
    type: 'all',
    sector: 'all',
    status: 'all'
  })

  // Filtrage des fonds
  const filteredFunds = useMemo(() => {
    return FUNDS_DATABASE.filter(fund => {
      const matchesSearch = fund.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                          fund.manager.toLowerCase().includes(filters.search.toLowerCase())
      const matchesType = filters.type === 'all' || fund.type === filters.type
      const matchesSector = filters.sector === 'all' || fund.sector === filters.sector
      const matchesStatus = filters.status === 'all' || fund.status === filters.status

      return matchesSearch && matchesType && matchesSector && matchesStatus
    })
  }, [filters])

  const formatCurrency = (amount) => {
    if (amount >= 1000000000) return `${(amount / 1000000000).toFixed(1)}Md€`
    if (amount >= 1000000) return `${(amount / 1000000).toFixed(0)}M€`
    if (amount >= 1000) return `${(amount / 1000).toFixed(0)}K€`
    return `${amount}€`
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ouvert': return '#22c55e'
      case 'Fermé': return '#ef4444'
      case 'Levée en cours': return '#f59e0b'
      default: return '#6b7280'
    }
  }

  return (
    <div style={{
      fontFamily: 'Inter, system-ui, sans-serif',
      background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)',
      minHeight: '100vh',
      padding: '2rem'
    }}>
      {/* Navigation */}
      <nav style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '1rem',
        padding: '1rem 2rem',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}>
        <a href="/" style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          textDecoration: 'none',
          background: 'linear-gradient(135deg, #059669, #22c55e)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          FundTribe
        </a>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="/funds" style={{
            color: '#059669',
            textDecoration: 'none',
            fontWeight: '600',
            padding: '0.5rem 1rem',
            background: 'rgba(5, 150, 105, 0.1)',
            borderRadius: '0.5rem'
          }}>
            📊 Base de données
          </a>
          <a href="/dashboard" style={{
            color: '#4b5563',
            textDecoration: 'none',
            fontWeight: '500',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem'
          }}>
            📈 Dashboard
          </a>
          <a href="/" style={{
            color: '#4b5563',
            textDecoration: 'none',
            fontWeight: '500',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem'
          }}>
            🏠 Accueil
          </a>
        </div>
      </nav>

      {/* Header */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '1rem',
        padding: '2rem',
        marginBottom: '2rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          margin: '0 0 0.5rem 0',
          background: 'linear-gradient(135deg, #059669, #22c55e)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Base de données des fonds
        </h1>
        <p style={{
          color: '#6b7280',
          fontSize: '1.1rem',
          margin: 0
        }}>
          {filteredFunds.length} fonds disponibles
        </p>
      </div>

      {/* Filtres */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '1rem',
        padding: '2rem',
        marginBottom: '2rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '1.5rem',
          color: '#1f2937'
        }}>
          Filtres
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {/* Recherche */}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
              Recherche
            </label>
            <input
              type="text"
              placeholder="Nom du fonds ou gestionnaire..."
              value={filters.search}
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid rgba(5, 150, 105, 0.2)',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
          </div>

          {/* Type de fonds */}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
              Type de fonds
            </label>
            <select
              value={filters.type}
              onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid rgba(5, 150, 105, 0.2)',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                outline: 'none'
              }}
            >
              <option value="all">Tous les types</option>
              <option value="Croissance">Croissance</option>
              <option value="LBO">LBO</option>
              <option value="Impact">Impact</option>
            </select>
          </div>

          {/* Statut */}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
              Statut
            </label>
            <select
              value={filters.status}
              onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid rgba(5, 150, 105, 0.2)',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                outline: 'none'
              }}
            >
              <option value="all">Tous les statuts</option>
              <option value="Ouvert">Ouvert</option>
              <option value="Fermé">Fermé</option>
              <option value="Levée en cours">Levée en cours</option>
            </select>
          </div>
        </div>
      </div>

      {/* Liste des fonds */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '2rem'
      }}>
        {filteredFunds.map(fund => (
          <div key={fund.id} style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}>
            {/* Header de la carte */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '1rem'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  margin: '0 0 0.5rem 0',
                  color: '#1f2937'
                }}>
                  {fund.name}
                </h3>
                <p style={{
                  color: '#6b7280',
                  margin: '0 0 0.5rem 0',
                  fontSize: '0.9rem'
                }}>
                  {fund.manager}
                </p>
              </div>
              <div style={{
                background: getStatusColor(fund.status),
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '1rem',
                fontSize: '0.8rem',
                fontWeight: '500'
              }}>
                {fund.status}
              </div>
            </div>

            {/* Métriques principales */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                background: 'rgba(5, 150, 105, 0.05)',
                borderRadius: '0.75rem'
              }}>
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  color: '#059669',
                  marginBottom: '0.25rem'
                }}>
                  {fund.targetReturn}%
                </div>
                <div style={{
                  fontSize: '0.8rem',
                  color: '#6b7280'
                }}>
                  Rendement cible
                </div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                background: 'rgba(5, 150, 105, 0.05)',
                borderRadius: '0.75rem'
              }}>
                <div style={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: '#059669',
                  marginBottom: '0.25rem'
                }}>
                  {formatCurrency(fund.minTicket)}
                </div>
                <div style={{
                  fontSize: '0.8rem',
                  color: '#6b7280'
                }}>
                  Ticket minimum
                </div>
              </div>
            </div>

            {/* Description */}
            <p style={{
              color: '#6b7280',
              fontSize: '0.9rem',
              marginBottom: '1.5rem',
              lineHeight: '1.5'
            }}>
              {fund.description}
            </p>

            {/* Bouton d'action */}
            <button style={{
              width: '100%',
              background: 'linear-gradient(135deg, #059669, #22c55e)',
              color: 'white',
              border: 'none',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Voir détails
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
