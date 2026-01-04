import { useNavigate } from 'react-router-dom';

function HowItWorks() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      {/* Header */}
      <nav style={{
        padding: '20px 40px',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 
          onClick={() => navigate('/')}
          style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: '#2563eb',
            cursor: 'pointer'
          }}
        >
          StockFlow
        </h1>
        <div style={{ display: 'flex', gap: '15px' }}>
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

      {/* Main Content */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '60px 40px'
      }}>
        <h2 style={{
          fontSize: '42px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '20px',
          color: '#1f2937'
        }}>
          How It Works
        </h2>
        <p style={{
          fontSize: '18px',
          textAlign: 'center',
          color: '#6b7280',
          marginBottom: '60px'
        }}>
          Get started with StockFlow in just a few simple steps
        </p>

        {/* Steps */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}>
          {/* Step 1 */}
          <div style={{
            display: 'flex',
            gap: '30px',
            alignItems: 'flex-start'
          }}>
            <div style={{
              minWidth: '60px',
              height: '60px',
              backgroundColor: '#2563eb',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              color: 'white'
            }}>
              1
            </div>
            <div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                marginBottom: '10px',
                color: '#1f2937'
              }}>
                Create Your Account
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                Sign up with your email and set up your business profile. It takes less than a minute to get started with StockFlow.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div style={{
            display: 'flex',
            gap: '30px',
            alignItems: 'flex-start'
          }}>
            <div style={{
              minWidth: '60px',
              height: '60px',
              backgroundColor: '#2563eb',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              color: 'white'
            }}>
              2
            </div>
            <div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                marginBottom: '10px',
                color: '#1f2937'
              }}>
                Add Your Products
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                Upload your inventory with product names, quantities, and prices. You can add products manually or import them in bulk from a CSV file.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div style={{
            display: 'flex',
            gap: '30px',
            alignItems: 'flex-start'
          }}>
            <div style={{
              minWidth: '60px',
              height: '60px',
              backgroundColor: '#2563eb',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              color: 'white'
            }}>
              3
            </div>
            <div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                marginBottom: '10px',
                color: '#1f2937'
              }}>
                Track Sales & Inventory
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                Record every sale and watch your inventory update automatically. Get real-time alerts when stock levels are running low.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div style={{
            display: 'flex',
            gap: '30px',
            alignItems: 'flex-start'
          }}>
            <div style={{
              minWidth: '60px',
              height: '60px',
              backgroundColor: '#2563eb',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              color: 'white'
            }}>
              4
            </div>
            <div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                marginBottom: '10px',
                color: '#1f2937'
              }}>
                Generate Reports
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                Access detailed reports and analytics to understand your business performance. Make data-driven decisions to grow your business.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          marginTop: '80px',
          padding: '40px',
          backgroundColor: '#f9fafb',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '15px',
            color: '#1f2937'
          }}>
            Ready to Get Started?
          </h3>
          <p style={{
            fontSize: '16px',
            color: '#6b7280',
            marginBottom: '30px'
          }}>
            Join hundreds of businesses managing their inventory with StockFlow
          </p>
          <button 
            onClick={() => navigate('/signup')}
            style={{
              padding: '15px 40px',
              fontSize: '18px',
              border: 'none',
              backgroundColor: '#2563eb',
              color: 'white',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            Create Free Account
          </button>
        </div>

        {/* Back Button */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button 
            onClick={() => navigate('/')}
            style={{
              padding: '10px 30px',
              backgroundColor: 'transparent',
              color: '#6b7280',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
