'use client'

import { useState } from 'react'

// Données simulées du portefeuille investisseur
const PORTFOLIO_DATA = {
  totalInvested: 2500000,
  currentValue: 3125000,
  totalReturn: 625000,
  totalReturnPercent: 25.0,
  ytdReturn: 127500,
  ytdReturnPercent: 5.1,
  investments: [
    {
      id: 1,
      fundName: "European Growth Fund III",
      manager: "Ardian Partners",
      investedAmount: 500000,
      currentValue: 690000,
      unrealizedGain: 190000,
      gainPercent: 38.0,
      allocationPercent: 22.1,
      vintage: 2022,
      status: "Active"
    },
    {
      id: 2,
      fundName: "French Retail Buyout",
      manager: "Eurazeo Capital",
      investedAmount: 300000,
      currentValue: 345000,
      unrealizedGain: 45000,
      gainPercent: 15.0,
      allocationPercent: 11.0,
      vintage: 2023,
      status: "Active"
    },
    {
      id: 3,
      fundName: "GreenTech Impact Fund",
      manager: "Bpifrance",
      investedAmount: 750000,
      currentValue: 915000,
      unrealizedGain: 165000,
      gainPercent: 22.0,
      allocationPercent: 29.3,
      vintage: 2023,
      status: "Active"
    },
    {
      id: 4,
      fundName: "Infrastructure Fund IV",
      manager: "Meridiam",
      investedAmount: 500000,
      currentValue: 575000,
      unrealizedGain: 75000,
      gainPercent: 15.0,
      allocationPercent: 18.4,
      vintage: 2022,
      status: "Active"
    },
    {
      id: 5,
      fundName: "Healthcare Innovation Fund",
      manager: "Sofinnova Partners",
      investedAmount: 450000,
      currentValue: 600000,
      unrealizedGain: 150000,
      gainPercent: 33.3,
      allocationPercent: 19.2,
      vintage: 2024,
      status: "Active"
    }
  ]
}

const SECTOR_ALLOCATION = [
  { sector: "Technology", value: 890000, percent: 28.5, color: "#3b82f6" },
  { sector: "Healthcare", value: 600000, percent: 19.2, color: "#10b981" },
  { sector: "CleanTech", value: 915000, percent: 29.3, color: "#22c55e" },
  { sector: "Infrastructure", value: 575000, percent: 18.4, color: "#f59e0b" },
  { sector: "Retail", value: 145000, percent: 4.6, color: "#ef4444" }
]

export default function InvestorDashboard() {
  const [selectedView, setSelectedView] = useState('overview')

  const formatCurrency = (amount) => {
    if (amount >= 1000000) return `${(amount / 1000000).toFixed(1)}M€`
    if (amount >= 1000) return `${(amount / 1000).toFixed(0)}K€`
    return `${amount}€`
  }

  const formatPercent = (percent) => {
    return `${percent >= 0 ? '+' : ''}${percent.toFixed(1)}%`
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
            color: '#4b5563',
            textDecoration: 'none',
            fontWeight: '500',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem'
          }}>
            📊 Base de données
          </a>
          <a href="/dashboard" style={{
            color: '#059669',
            textDecoration: 'none',
            fontWeight: '600',
            padding: '0.5rem 1rem',
            background: 'rgba(5, 150, 105, 0.1)',
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

      {/* Header Dashboard */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '1rem',
        padding: '2rem',
        marginBottom: '2rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem'
        }}>
          <div>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              margin: '0 0 0.5rem 0',
              background: 'linear-gradient(135deg, #059669, #22c55e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Dashboard Investisseur
            </h1>
            <p style={{
              color: '#6b7280',
              fontSize: '1.1rem',
              margin: 0
            }}>
              Suivi en temps réel de votre portefeuille private equity
            </p>
          </div>
        </div>

        {/* Métriques principales */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #059669, #22c55e)',
            color: 'white',
            padding: '1.5rem',
            borderRadius: '1rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {formatCurrency(PORTFOLIO_DATA.currentValue)}
            </div>
            <div style={{ opacity: 0.9 }}>Valeur actuelle</div>
          </div>
          
          <div style={{
            background: 'rgba(34, 197, 94, 0.1)',
            padding: '1.5rem',
            borderRadius: '1rem',
            textAlign: 'center',
            border: '2px solid rgba(34, 197, 94, 0.2)'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: '#22c55e'
            }}>
              {formatPercent(PORTFOLIO_DATA.totalReturnPercent)}
            </div>
            <div style={{ color: '#6b7280' }}>Rendement total</div>
          </div>
          
          <div style={{
            background: 'rgba(245, 158, 11, 0.1)',
            padding: '1.5rem',
            borderRadius: '1rem',
            textAlign: 'center',
            border: '2px solid rgba(245, 158, 11, 0.2)'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: '#f59e0b'
            }}>
              {formatPercent(PORTFOLIO_DATA.ytdReturnPercent)}
            </div>
            <div style={{ color: '#6b7280' }}>Performance YTD</div>
          </div>
          
          <div style={{
            background: 'rgba(59, 130, 246, 0.1)',
            padding: '1.5rem',
            borderRadius: '1rem',
            textAlign: 'center',
            border: '2px solid rgba(59, 130, 246, 0.2)'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: '#3b82f6'
            }}>
              {PORTFOLIO_DATA.investments.length}
            </div>
            <div style={{ color: '#6b7280' }}>Fonds en portefeuille</div>
          </div>
        </div>
      </div>

      {/* Allocation et Holdings */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '2rem'
      }}>
        {/* Allocation sectorielle */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          borderRadius: '1rem',
          padding: '2rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '600',
            marginBottom: '2rem',
            color: '#1f2937'
          }}>
            Allocation sectorielle
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {SECTOR_ALLOCATION.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                background: 'rgba(5, 150, 105, 0.05)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(5, 150, 105, 0.1)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: item.color
                  }} />
                  <span style={{ fontWeight: '500' }}>{item.sector}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: '600' }}>{item.percent}%</div>
                  <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                    {formatCurrency(item.value)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Holdings */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          borderRadius: '1rem',
          padding: '2rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '600',
            marginBottom: '2rem',
            color: '#1f2937'
          }}>
            Principales positions
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {PORTFOLIO_DATA.investments
              .sort((a, b) => b.currentValue - a.currentValue)
              .slice(0, 5)
              .map((investment, index) => (
                <div key={investment.id} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem',
                  background: 'rgba(5, 150, 105, 0.05)',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(5, 150, 105, 0.1)'
                }}>
                  <div>
                    <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                      {investment.fundName}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                      {investment.manager}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontWeight: '600',
                      color: investment.gainPercent > 0 ? '#22c55e' : '#ef4444'
                    }}>
                      {formatPercent(investment.gainPercent)}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                      {formatCurrency(investment.currentValue)}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Détail des investissements */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '1rem',
        padding: '2rem',
        marginTop: '2rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '2rem',
          color: '#1f2937'
        }}>
          Détail des investissements
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse'
          }}>
            <thead>
              <tr style={{
                background: 'rgba(5, 150, 105, 0.1)'
              }}>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Fonds</th>
                <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600' }}>Investi</th>
                <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600' }}>Valeur actuelle</th>
                <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600' }}>Gain/Perte</th>
                <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600' }}>%</th>
                <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '600' }}>Statut</th>
              </tr>
            </thead>
            <tbody>
              {PORTFOLIO_DATA.investments.map(investment => (
                <tr key={investment.id} style={{
                  borderBottom: '1px solid rgba(5, 150, 105, 0.1)'
                }}>
                  <td style={{ padding: '1rem' }}>
                    <div>
                      <div style={{ fontWeight: '600' }}>{investment.fundName}</div>
                      <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                        {investment.manager} • {investment.vintage}
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'right', fontWeight: '500' }}>
                    {formatCurrency(investment.investedAmount)}
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'right', fontWeight: '600' }}>
                    {formatCurrency(investment.currentValue)}
                  </td>
                  <td style={{
                    padding: '1rem',
                    textAlign: 'right',
                    fontWeight: '600',
                    color: investment.unrealizedGain > 0 ? '#22c55e' : '#ef4444'
                  }}>
                    {investment.unrealizedGain > 0 ? '+' : ''}{formatCurrency(investment.unrealizedGain)}
                  </td>
                  <td style={{
                    padding: '1rem',
                    textAlign: 'right',
                    fontWeight: '600',
                    color: investment.gainPercent > 0 ? '#22c55e' : '#ef4444'
                  }}>
                    {formatPercent(investment.gainPercent)}
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'center' }}>
                    <span style={{
                      background: investment.status === 'Active' ? '#22c55e' : '#6b7280',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '1rem',
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}>
                      {investment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
