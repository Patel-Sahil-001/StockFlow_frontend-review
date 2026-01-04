function Button({ children, onClick, variant = 'primary', ...props }) {
  const styles = {
    primary: {
      backgroundColor: '#2563eb',
      color: 'white',
    },
    secondary: {
      backgroundColor: '#6b7280',
      color: 'white',
    },
    danger: {
      backgroundColor: '#ef4444',
      color: 'white',
    }
  };

  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500',
        ...styles[variant]
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
