const References = () => {
  const refs = [
    { name: 'CA Firm Partners', desc: 'Collaborations with leading Chartered Accountant firms for audit and tax expertise.' },
    { name: 'Law Firm Alliances', desc: 'Strategic partnerships with top law firms for legal-financial integrations.' },
    { name: 'Financial Sector References', desc: 'Trusted by key players in banking, investment, and wealth management sectors.' }
  ]

  return (
    <section style={{ minHeight: '100vh' }}>
      <div className="container">
        <h2>Our References</h2>
        <p style={{ textAlign: 'center', marginBottom: '40px' }}>Proudly serving and referenced by professionals in the industry.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {refs.map((ref, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--accent-golden)' }}>{ref.name}</h3>
              <p>{ref.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default References