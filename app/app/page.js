export default function HomePage() {
  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center', 
      fontFamily: 'system-ui, sans-serif',
      minHeight: '100vh',
      backgroundColor: '#f9fafb'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        color: '#059669',
        marginBottom: '1rem'
      }}>
        FundTribe
      </h1>
      <p style={{ 
        fontSize: '1.5rem', 
        color: '#6b7280',
        marginBottom: '2rem'
      }}>
        Plateforme de fonds private equity
      </p>
      <button style={{
        backgroundColor: '#059669',
        color: 'white',
        padding: '1rem 2rem',
        border: 'none',
        borderRadius: '0.5rem',
        fontSize: '1rem',
        cursor: 'pointer'
      }}>
        Coming Soon
      </button>
    </div>
  )
}
