import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';
import {
  Phone,
  Users,
  Calendar,
  TrendingUp,
  BarChart3,
  Settings,
  LogOut,
  Mic,
  MessageSquare,
  Bell,
  Search
} from 'lucide-react';

const CustomerPortal = () => {
  const { customerId } = useParams();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    if (!user || user.id !== customerId) {
      navigate('/');
    }
  }, [user, customerId, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const stats = [
    { label: 'Total Calls', value: '1,284', change: '+12%', icon: <Phone size={20} /> },
    { label: 'Active Leads', value: '342', change: '+8%', icon: <Users size={20} /> },
    { label: 'Appointments', value: '89', change: '+24%', icon: <Calendar size={20} /> },
    { label: 'Conversion Rate', value: '28.4%', change: '+3.2%', icon: <TrendingUp size={20} /> }
  ];

  const recentCalls = [
    { name: 'Rahul Sharma', phone: '+91 98765 43210', duration: '4:32', sentiment: 'Positive', time: '2 min ago', project: 'Golden Palms Villas' },
    { name: 'Priya Patel', phone: '+91 87654 32109', duration: '3:15', sentiment: 'Positive', time: '15 min ago', project: 'Heritage Apartments' },
    { name: 'Amit Kumar', phone: '+91 76543 21098', duration: '2:48', sentiment: 'Neutral', time: '1 hour ago', project: 'Sunrise Plots' },
    { name: 'Sneha Reddy', phone: '+91 65432 10987', duration: '5:21', sentiment: 'Positive', time: '2 hours ago', project: 'Royal Towers' },
    { name: 'Vikram Singh', phone: '+91 54321 09876', duration: '1:45', sentiment: 'Neutral', time: '3 hours ago', project: 'Emerald Estates' }
  ];

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 size={18} /> },
    { id: 'calls', label: 'Call Logs', icon: <Phone size={18} /> },
    { id: 'leads', label: 'Leads', icon: <Users size={18} /> },
    { id: 'appointments', label: 'Appointments', icon: <Calendar size={18} /> },
    { id: 'agent', label: 'AI Agent', icon: <Mic size={18} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={18} /> }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#fafafa' }}>
      <Navbar />

      <div style={{
        display: 'flex',
        paddingTop: 72
      }}>
        {/* Sidebar */}
        <aside className="portal-sidebar" style={{
          width: sidebarCollapsed ? 72 : 260,
          height: 'calc(100vh - 72px)',
          position: 'fixed',
          left: 0,
          top: 72,
          background: '#fff',
          borderRight: '1px solid #e5e5e5',
          padding: '32px 0',
          transition: 'transform 0.3s ease, width 0.2s ease',
          overflow: 'hidden',
          zIndex: 50,
          transform: sidebarCollapsed ? 'translateX(0)' : 'var(--sidebar-transform, translateX(0))'
        }}>
          <div style={{ padding: '0 20px', marginBottom: 32 }}>
            {!sidebarCollapsed && (
              <div style={{
                fontSize: 13,
                fontWeight: 600,
                color: '#737373',
                letterSpacing: '0.05em',
                marginBottom: 8
              }}>
                {user?.company?.toUpperCase()}
              </div>
            )}
            {!sidebarCollapsed && (
              <div style={{
                fontSize: 15,
                fontWeight: 500
              }}>
                {user?.name}
              </div>
            )}
          </div>

          <nav style={{ padding: '0 12px' }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: sidebarCollapsed ? '12px 0' : '12px 16px',
                  justifyContent: sidebarCollapsed ? 'center' : 'flex-start',
                  marginBottom: 4,
                  background: activeTab === tab.id ? '#000' : 'transparent',
                  color: activeTab === tab.id ? '#fff' : '#525252',
                  border: 'none',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {tab.icon}
                {!sidebarCollapsed && tab.label}
              </button>
            ))}
          </nav>

          <div style={{
            position: 'absolute',
            bottom: 32,
            left: 0,
            right: 0,
            padding: '0 12px'
          }}>
            <button
              onClick={handleLogout}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: sidebarCollapsed ? '12px 0' : '12px 16px',
                justifyContent: sidebarCollapsed ? 'center' : 'flex-start',
                background: 'transparent',
                color: '#525252',
                border: 'none',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              <LogOut size={18} />
              {!sidebarCollapsed && 'Logout'}
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="portal-main" style={{
          marginLeft: sidebarCollapsed ? 72 : 260,
          flex: 1,
          padding: 'var(--portal-padding, 40px)',
          transition: 'margin-left 0.2s ease, padding 0.2s ease'
        }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 40
          }}>
            <div>
              <h1 style={{
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: '-0.03em',
                marginBottom: 8
              }}>
                Dashboard
              </h1>
              <p style={{
                fontSize: 15,
                color: '#525252'
              }}>
                Welcome back! Here's what's happening with your AI agent.
              </p>
            </div>

            <div style={{
              display: 'flex',
              gap: 12
            }}>
              <button style={{
                padding: '10px 16px',
                background: '#fff',
                border: '1px solid #e5e5e5',
                borderRadius: 8,
                cursor: 'pointer'
              }}>
                <Bell size={18} />
              </button>
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                style={{
                  padding: '10px 16px',
                  background: '#fff',
                  border: '1px solid #e5e5e5',
                  borderRadius: 8,
                  cursor: 'pointer'
                }}
              >
                {sidebarCollapsed ? '→' : '←'}
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 24,
            marginBottom: 40
          }}>
            {stats.map((stat, idx) => (
              <div
                key={idx}
                style={{
                  padding: 28,
                  background: '#fff',
                  borderRadius: 16,
                  border: '1px solid #e5e5e5'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 16
                }}>
                  <div style={{
                    padding: 12,
                    background: '#fafafa',
                    borderRadius: 12
                  }}>
                    {stat.icon}
                  </div>
                  <div style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: '#16a34a'
                  }}>
                    {stat.change}
                  </div>
                </div>
                <div style={{
                  fontSize: 32,
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  marginBottom: 4
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: 14,
                  color: '#737373'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Recent Calls */}
          <div style={{
            background: '#fff',
            borderRadius: 16,
            border: '1px solid #e5e5e5',
            padding: 32
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 24
            }}>
              <h2 style={{
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: '-0.02em'
              }}>
                Recent Calls
              </h2>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '8px 16px',
                background: '#fafafa',
                borderRadius: 8,
                border: '1px solid #e5e5e5'
              }}>
                <Search size={16} style={{ color: '#737373' }} />
                <input
                  type="text"
                  placeholder="Search calls..."
                  style={{
                    border: 'none',
                    background: 'transparent',
                    fontSize: 14,
                    width: 200,
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <div style={{
              overflowX: 'auto'
            }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse'
              }}>
                <thead>
                  <tr style={{
                    borderBottom: '1px solid #e5e5e5'
                  }}>
                    <th style={{
                      textAlign: 'left',
                      padding: '12px 16px',
                      fontSize: 13,
                      fontWeight: 500,
                      color: '#737373',
                      letterSpacing: '0.02em'
                    }}>
                      Name
                    </th>
                    <th style={{
                      textAlign: 'left',
                      padding: '12px 16px',
                      fontSize: 13,
                      fontWeight: 500,
                      color: '#737373',
                      letterSpacing: '0.02em'
                    }}>
                      Phone
                    </th>
                    <th style={{
                      textAlign: 'left',
                      padding: '12px 16px',
                      fontSize: 13,
                      fontWeight: 500,
                      color: '#737373',
                      letterSpacing: '0.02em'
                    }}>
                      Project
                    </th>
                    <th style={{
                      textAlign: 'left',
                      padding: '12px 16px',
                      fontSize: 13,
                      fontWeight: 500,
                      color: '#737373',
                      letterSpacing: '0.02em'
                    }}>
                      Duration
                    </th>
                    <th style={{
                      textAlign: 'left',
                      padding: '12px 16px',
                      fontSize: 13,
                      fontWeight: 500,
                      color: '#737373',
                      letterSpacing: '0.02em'
                    }}>
                      Sentiment
                    </th>
                    <th style={{
                      textAlign: 'left',
                      padding: '12px 16px',
                      fontSize: 13,
                      fontWeight: 500,
                      color: '#737373',
                      letterSpacing: '0.02em'
                    }}>
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentCalls.map((call, idx) => (
                    <tr
                      key={idx}
                      style={{
                        borderBottom: idx < recentCalls.length - 1 ? '1px solid #f5f5f5' : 'none'
                      }}
                    >
                      <td style={{ padding: '16px' }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 12
                        }}>
                          <div style={{
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            background: '#fafafa',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 14,
                            fontWeight: 600
                          }}>
                            {call.name.charAt(0)}
                          </div>
                          <span style={{ fontWeight: 500 }}>{call.name}</span>
                        </div>
                      </td>
                      <td style={{
                        padding: '16px',
                        fontSize: 14,
                        color: '#525252'
                      }}>
                        {call.phone}
                      </td>
                      <td style={{
                        padding: '16px',
                        fontSize: 14
                      }}>
                        {call.project}
                      </td>
                      <td style={{
                        padding: '16px',
                        fontSize: 14,
                        color: '#525252'
                      }}>
                        {call.duration}
                      </td>
                      <td style={{ padding: '16px' }}>
                        <span style={{
                          padding: '6px 12px',
                          borderRadius: 980,
                          fontSize: 12,
                          fontWeight: 500,
                          background: call.sentiment === 'Positive' ? '#dcfce7' : '#f5f5f5',
                          color: call.sentiment === 'Positive' ? '#16a34a' : '#737373'
                        }}>
                          {call.sentiment}
                        </span>
                      </td>
                      <td style={{
                        padding: '16px',
                        fontSize: 14,
                        color: '#737373'
                      }}>
                        {call.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div style={{
            marginTop: 40,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24
          }}>
            <QuickActionCard
              icon={<MessageSquare size={24} />}
              title="Configure AI Agent"
              description="Customize your agent's personality and knowledge base"
              action="Configure"
            />
            <QuickActionCard
              icon={<Phone size={24} />}
              title="Connect Phone Number"
              description="Forward your existing number or get a new one"
              action="Connect"
            />
            <QuickActionCard
              icon={<BarChart3 size={24} />}
              title="View Analytics"
              description="Deep dive into call metrics and performance"
              action="View Reports"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

const QuickActionCard = ({ icon, title, description, action }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
}) => (
  <div style={{
    padding: 32,
    background: '#fff',
    borderRadius: 16,
    border: '1px solid #e5e5e5'
  }}>
    <div style={{
      marginBottom: 16,
      color: '#000'
    }}>
      {icon}
    </div>
    <h3 style={{
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      marginBottom: 8
    }}>
      {title}
    </h3>
    <p style={{
      fontSize: 14,
      color: '#525252',
      marginBottom: 20,
      lineHeight: 1.6
    }}>
      {description}
    </p>
    <button className="btn-primary" style={{
      padding: '10px 20px',
      fontSize: 14
    }}>
      {action}
    </button>
  </div>
);

export default CustomerPortal;
