import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      {/* Simple Header */}
      <nav style={{
        padding: '20px 40px',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#2563eb' }}>
          StockFlow
        </h1>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <button 
            onClick={() => navigate('/how-it-works')}
            style={{
              padding: '10px 20px',
              border: 'none',
              backgroundColor: 'transparent',
              color: '#374151',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            How It Works
          </button>
          <button 
            onClick={() => navigate('/signin')}
            style={{
              padding: '10px 20px',
              border: '1px solid #2563eb',
              backgroundColor: 'white',
              color: '#2563eb',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Sign In
          </button>
          <button 
            onClick={() => navigate('/signup')}
            style={{
              padding: '10px 20px',
              border: 'none',
              backgroundColor: '#2563eb',
              color: 'white',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{
        padding: '80px 40px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#1f2937'
        }}>
          Inventory Management Made Simple
        </h2>
        <p style={{
          fontSize: '20px',
          color: '#6b7280',
          marginBottom: '40px'
        }}>
          Manage your stock, track sales, and grow your business with StockFlow
        </p>
        <button 
          onClick={() => navigate('/signup')}
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            border: 'none',
            backgroundColor: '#2563eb',
            color: 'white',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Get Started
        </button>
      </div>

      {/* Features Section - Very Basic */}
      <div style={{
        padding: '60px 40px',
        backgroundColor: '#f9fafb'
      }}>
        <h3 style={{
          fontSize: '32px',
          textAlign: 'center',
          marginBottom: '40px',
          color: '#1f2937'
        }}>
          Key Features
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{
            padding: '30px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h4 style={{ fontSize: '20px', marginBottom: '10px' }}>📦 Inventory Tracking</h4>
            <p style={{ color: '#6b7280' }}>Keep track of all your products</p>
          </div>
          <div style={{
            padding: '30px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h4 style={{ fontSize: '20px', marginBottom: '10px' }}>💰 Sales Management</h4>
            <p style={{ color: '#6b7280' }}>Monitor your sales performance</p>
          </div>
          <div style={{
            padding: '30px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h4 style={{ fontSize: '20px', marginBottom: '10px' }}>📊 Reports</h4>
            <p style={{ color: '#6b7280' }}>Generate insights from your data</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
