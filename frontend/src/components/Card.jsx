function Card({ title, children }) {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      {title && (
        <h3 style={{
          fontSize: '20px',
          fontWeight: '600',
          marginBottom: '20px',
          color: '#1f2937'
        }}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}

export default Card;
