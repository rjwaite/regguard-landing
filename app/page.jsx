'use client'

import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [billingCycle, setBillingCycle] = useState('annual')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    
    setLoading(true)
    setError('')
    
    try {
      const { error: supabaseError } = await supabase
        .from('waitlist')
        .insert([{ 
          email: email.toLowerCase().trim(),
          source: 'landing_page',
          created_at: new Date().toISOString()
        }])
      
      if (supabaseError) {
        if (supabaseError.code === '23505') {
          setSubmitted(true)
        } else {
          throw supabaseError
        }
      } else {
        setSubmitted(true)
      }
    } catch (err) {
      console.error('Error:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const features = [
    { icon: '🔍', title: 'Real-Time Monitoring', desc: 'Track regulatory changes across 50+ federal agencies and all 50 states. Never miss a rule that impacts your business.' },
    { icon: '🤖', title: 'AI Impact Analysis', desc: 'Instant analysis of how proposed rules affect your industry, with compliance cost estimates and risk scoring.' },
    { icon: '✍️', title: 'Comment Generation', desc: 'Draft professional public comments in seconds. Our AI understands regulatory language and persuasive advocacy.' },
    { icon: '⏰', title: 'Deadline Management', desc: 'Automated alerts for comment deadlines, effective dates, and compliance milestones. Stay ahead, not behind.' }
  ]

  const stats = [
    { value: '10,000+', label: 'Regulations Tracked' },
    { value: '< 30s', label: 'To Generate Comments' },
    { value: '50+', label: 'Federal Agencies' },
    { value: '24/7', label: 'Monitoring' }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      desc: 'For solo practitioners and small consulting firms',
      monthlyPrice: 99,
      annualPrice: 79,
      highlight: false,
      features: [
        { text: '1 user', included: true },
        { text: '3 industries tracked', included: true },
        { text: '10 AI comments / month', included: true },
        { text: 'Email alerts', included: true },
        { text: 'Federal Register monitoring', included: true },
        { text: 'Basic impact scoring', included: true },
        { text: 'Team collaboration', included: false },
        { text: 'API access', included: false },
        { text: 'Priority support', included: false },
      ],
      cta: 'Coming Soon'
    },
    {
      name: 'Professional',
      desc: 'For government affairs teams and trade associations',
      monthlyPrice: 299,
      annualPrice: 249,
      highlight: true,
      badge: 'Most Popular',
      features: [
        { text: 'Up to 5 users', included: true },
        { text: '10 industries tracked', included: true },
        { text: '50 AI comments / month', included: true },
        { text: 'Email + Slack alerts', included: true },
        { text: 'Federal + State monitoring', included: true },
        { text: 'Advanced impact scoring', included: true },
        { text: 'Team collaboration', included: true },
        { text: 'Comment analytics', included: true },
        { text: 'Priority support', included: true },
      ],
      cta: 'Coming Soon'
    },
    {
      name: 'Enterprise',
      desc: 'For large organizations with complex compliance needs',
      monthlyPrice: null,
      annualPrice: null,
      highlight: false,
      features: [
        { text: 'Unlimited users', included: true },
        { text: 'Unlimited industries', included: true },
        { text: 'Unlimited AI comments', included: true },
        { text: 'All alert channels', included: true },
        { text: 'Global regulatory coverage', included: true },
        { text: 'Custom AI training', included: true },
        { text: 'Full API access', included: true },
        { text: 'SSO / SAML', included: true },
        { text: 'Dedicated account manager', included: true },
      ],
      cta: 'Contact Sales'
    }
  ]

  const faqs = [
    { q: 'What counts as an "AI comment"?', a: 'Each time you generate a public comment draft using our AI, it counts as one comment. Regenerating the same comment also counts. Editing a generated comment does not use additional credits.' },
    { q: 'Can I change plans later?', a: "Yes! You can upgrade or downgrade at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at your next billing cycle." },
    { q: 'What industries do you cover?', a: 'We track regulations affecting Financial Services, Healthcare, Technology, Manufacturing, Energy, Retail, Telecommunications, Transportation, and more. Enterprise plans include custom industry configuration.' },
    { q: 'Is there a free trial?', a: 'Yes! All paid plans include a 14-day free trial with full access to features. No credit card required to start.' }
  ]

  const inputStyle = {
    flex: 1,
    padding: '14px 18px',
    borderRadius: '10px',
    fontSize: '14px',
    color: '#e2e8f0',
    background: 'rgba(15, 23, 42, 0.8)',
    border: '1px solid rgba(71, 85, 105, 0.4)',
    outline: 'none',
    transition: 'all 0.3s ease',
    opacity: loading ? 0.7 : 1
  }

  const buttonStyle = {
    padding: '14px 28px',
    borderRadius: '10px',
    border: 'none',
    color: 'white',
    fontSize: '14px',
    fontWeight: 600,
    cursor: loading ? 'wait' : 'pointer',
    whiteSpace: 'nowrap',
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    boxShadow: '0 4px 20px rgba(16, 185, 129, 0.4)',
    transition: 'all 0.3s ease',
    opacity: loading ? 0.7 : 1
  }

  const successBoxStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '14px 20px',
    borderRadius: '10px',
    background: 'rgba(16, 185, 129, 0.15)',
    border: '1px solid rgba(16, 185, 129, 0.3)'
  }

  return (
    <div style={{ minHeight: '100vh', background: '#050810', fontFamily: "'Inter', system-ui, sans-serif", color: '#e2e8f0', overflow: 'hidden' }}>
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        .gradient-text { background: linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero-gradient { background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(16, 185, 129, 0.15), transparent), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(59, 130, 246, 0.1), transparent); }
        .glass-card { background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.08); transition: all 0.4s ease; }
        .glass-card:hover { transform: translateY(-4px); border-color: rgba(16, 185, 129, 0.4); }
        .pricing-card { transition: all 0.3s ease; }
        .pricing-card:hover { transform: translateY(-8px); }
        .nav-link:hover { color: #e2e8f0 !important; }
        html { scroll-behavior: smooth; }
      `}</style>

      <div className="hero-gradient" style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }} />

      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100, background: 'rgba(5, 8, 16, 0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #10b981, #059669)', boxShadow: '0 4px 20px rgba(16, 185, 129, 0.4)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
          </div>
          <span style={{ fontSize: '20px', fontWeight: 700 }}>RegGuard<span className="gradient-text">.ai</span></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <a href="#features" className="nav-link" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s' }}>Features</a>
          <a href="#pricing" className="nav-link" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s' }}>Pricing</a>
          <a href="#faq" className="nav-link" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s' }}>FAQ</a>
          <a href="#cta" style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', color: 'white', fontSize: '13px', fontWeight: 600, cursor: 'pointer', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', boxShadow: '0 4px 20px rgba(16, 185, 129, 0.4)', textDecoration: 'none' }}>Get Beta Access</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 32px 60px', maxWidth: '1300px', margin: '0 auto', gap: '40px' }}>
        <div style={{ flex: 1, maxWidth: '560px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '100px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', marginBottom: '24px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
            <span style={{ fontSize: '12px', fontWeight: 500, color: '#10b981' }}>Now accepting beta applications</span>
          </div>
          <h1 style={{ fontSize: '52px', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.04em', marginBottom: '20px', margin: '0 0 20px 0' }}>
            Regulatory intelligence, <span className="gradient-text">powered by AI</span>
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.6, color: '#94a3b8', marginBottom: '32px', margin: '0 0 32px 0' }}>
            Monitor federal regulations, analyze compliance impact, and generate public comments in seconds. Stay ahead of regulatory changes that matter to your business.
          </p>
          
          {/* Hero Email Form - Inline */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '28px' }}>
            {!submitted ? (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  disabled={loading}
                  style={inputStyle}
                />
                <button type="submit" disabled={loading} style={buttonStyle}>
                  {loading ? 'Joining...' : 'Request Access →'}
                </button>
              </>
            ) : (
              <div style={successBoxStyle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span style={{ color: '#10b981', fontWeight: 500, fontSize: '14px' }}>
                  You&apos;re on the list! We&apos;ll be in touch soon.
                </span>
              </div>
            )}
          </form>
          
          {error && (
            <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '-20px', marginBottom: '20px' }}>{error}</p>
          )}
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex' }}>
              {['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b'].map((color, i) => (
                <div key={i} style={{ width: '32px', height: '32px', borderRadius: '50%', background: color, border: '2px solid #050810', marginLeft: i > 0 ? '-8px' : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 600 }}>{['JD', 'MK', 'AS', 'RL'][i]}</div>
              ))}
            </div>
            <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}><span style={{ color: '#e2e8f0', fontWeight: 600 }}>500+</span> professionals on the waitlist</p>
          </div>
        </div>

        {/* Preview Window */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', animation: 'float 6s ease-in-out infinite' }}>
          <div style={{ width: '520px', borderRadius: '16px', overflow: 'hidden', background: 'linear-gradient(165deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.95))', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 80px rgba(0,0,0,0.5)', transform: 'rotateY(-3deg)' }}>
            <div style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.3)' }}>
              <div style={{ display: 'flex', gap: '6px' }}><div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} /><div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} /><div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} /></div>
              <div style={{ flex: 1, textAlign: 'center', fontSize: '11px', color: '#64748b', fontFamily: 'monospace' }}>app.regguard.ai</div>
            </div>
            <div style={{ padding: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '14px' }}>
                {[{ label: 'Tracked', value: '847', color: '#3b82f6' }, { label: 'High Impact', value: '23', color: '#f59e0b' }, { label: 'Open', value: '12', color: '#10b981' }].map((stat, i) => (
                  <div key={i} style={{ padding: '12px', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <p style={{ fontSize: '9px', color: '#64748b', marginBottom: '2px', textTransform: 'uppercase', margin: '0 0 2px 0' }}>{stat.label}</p>
                    <p style={{ fontSize: '20px', fontWeight: 700, color: stat.color, fontFamily: 'monospace', margin: 0 }}>{stat.value}</p>
                  </div>
                ))}
              </div>
              <div style={{ borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                <div style={{ padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#10b981' }} /><span style={{ fontSize: '10px', fontWeight: 600, color: '#94a3b8' }}>Live Feed</span></div>
                {[{ agency: 'SEC', title: 'AI Transparency Requirements...', impact: 92 }, { agency: 'EPA', title: 'Carbon Emissions Reporting...', impact: 85 }, { agency: 'FTC', title: 'Digital Advertising Rules...', impact: 88 }].map((reg, i) => (
                  <div key={i} style={{ padding: '10px 12px', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.03)' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: 700, fontFamily: 'monospace', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa' }}>{reg.agency}</span>
                      <span style={{ fontSize: '10px', color: '#cbd5e1' }}>{reg.title}</span>
                    </div>
                    <span style={{ padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: 600, fontFamily: 'monospace', background: reg.impact >= 85 ? '#ef4444' : '#f59e0b', color: 'white' }}>{reg.impact}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '10px', padding: '12px', borderRadius: '8px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.08))', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '6px' }}><span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#10b981' }} /><span style={{ fontSize: '9px', fontWeight: 600, color: '#10b981', textTransform: 'uppercase' }}>AI Analysis</span></div>
                <p style={{ fontSize: '10px', color: '#86efac', lineHeight: 1.5, margin: 0 }}>HIGH IMPACT: This rule affects financial institutions using AI/ML. Estimated compliance cost: $2-5M...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '32px', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.3)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 6px 0' }} className="gradient-text">{stat.value}</p>
              <p style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '80px 32px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 16px 0' }}>Everything you need to <span className="gradient-text">stay compliant</span></h2>
          <p style={{ fontSize: '16px', color: '#94a3b8', maxWidth: '500px', margin: '0 auto' }}>From monitoring to analysis to action — RegGuard.ai handles the entire regulatory intelligence workflow.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {features.map((feature, i) => (
            <div key={i} className="glass-card" style={{ padding: '28px', borderRadius: '16px', cursor: 'pointer' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.15))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '16px' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 10px 0' }}>{feature.title}</h3>
              <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ padding: '100px 32px', background: 'linear-gradient(180deg, transparent 0%, rgba(16, 185, 129, 0.03) 50%, transparent 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 16px 0' }}>Simple, transparent <span className="gradient-text">pricing</span></h2>
            <p style={{ fontSize: '16px', color: '#94a3b8', maxWidth: '500px', margin: '0 auto 32px' }}>Start free for 14 days. No credit card required. Cancel anytime.</p>
            
            {/* Billing Toggle */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'rgba(30, 41, 59, 0.5)', padding: '4px', borderRadius: '10px' }}>
              <span onClick={() => setBillingCycle('monthly')} style={{ padding: '10px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, cursor: 'pointer', background: billingCycle === 'monthly' ? 'rgba(16, 185, 129, 0.2)' : 'transparent', color: billingCycle === 'monthly' ? '#10b981' : '#64748b', transition: 'all 0.2s ease' }}>Monthly</span>
              <span onClick={() => setBillingCycle('annual')} style={{ padding: '10px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, cursor: 'pointer', background: billingCycle === 'annual' ? 'rgba(16, 185, 129, 0.2)' : 'transparent', color: billingCycle === 'annual' ? '#10b981' : '#64748b', transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Annual
                <span style={{ padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 600, background: 'linear-gradient(135deg, #10b981, #059669)', color: 'white' }}>Save 20%</span>
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'stretch' }}>
            {pricingPlans.map((plan, i) => (
              <div key={i} className="pricing-card" style={{ borderRadius: '20px', padding: plan.highlight ? '3px' : '0', background: plan.highlight ? 'linear-gradient(135deg, #10b981, #06b6d4, #3b82f6)' : 'transparent', display: 'flex' }}>
                <div style={{ borderRadius: plan.highlight ? '18px' : '20px', padding: '32px', background: 'linear-gradient(165deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)', border: plan.highlight ? 'none' : '1px solid rgba(255,255,255,0.08)', position: 'relative', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {plan.badge && (
                    <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', padding: '6px 16px', borderRadius: '100px', background: 'linear-gradient(135deg, #10b981, #059669)', fontSize: '12px', fontWeight: 600, color: 'white', boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)', whiteSpace: 'nowrap' }}>{plan.badge}</div>
                  )}
                  <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 8px 0' }}>{plan.name}</h3>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 24px 0', lineHeight: 1.5, minHeight: '40px' }}>{plan.desc}</p>
                  <div style={{ marginBottom: '28px', minHeight: '80px' }}>
                    {plan.monthlyPrice !== null ? (
                      <>
                        <span style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-0.03em' }}>${billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice}</span>
                        <span style={{ fontSize: '16px', color: '#64748b' }}>/mo</span>
                        {billingCycle === 'annual' && <p style={{ fontSize: '12px', color: '#10b981', margin: '6px 0 0 0' }}>Billed annually (${plan.annualPrice * 12}/year)</p>}
                      </>
                    ) : (
                      <>
                        <span style={{ fontSize: '48px', fontWeight: 800 }}>Custom</span>
                        <p style={{ fontSize: '12px', color: '#64748b', margin: '6px 0 0 0' }}>Tailored to your needs</p>
                      </>
                    )}
                  </div>
                  <button style={{ width: '100%', padding: '14px', borderRadius: '10px', border: plan.highlight ? 'none' : '1px solid rgba(255,255,255,0.15)', background: plan.highlight ? 'linear-gradient(135deg, #10b981, #059669)' : 'rgba(255,255,255,0.05)', color: 'white', fontSize: '14px', fontWeight: 600, cursor: 'pointer', marginBottom: '28px', boxShadow: plan.highlight ? '0 4px 16px rgba(16, 185, 129, 0.4)' : 'none', transition: 'all 0.2s ease' }}>{plan.cta}</button>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>What&apos;s included</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                      {plan.features.map((feature, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', fontSize: '13px', color: feature.included ? '#cbd5e1' : '#475569', borderBottom: j < plan.features.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                          {feature.included ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                          ) : (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                          )}
                          {feature.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enterprise CTA */}
          <div style={{ marginTop: '48px', padding: '32px 40px', borderRadius: '20px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.08) 100%)', border: '1px solid rgba(16, 185, 129, 0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 8px 0' }}>Need a custom solution?</h3>
              <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0 }}>We offer tailored plans for large organizations with specific compliance needs, custom integrations, and dedicated support.</p>
            </div>
            <button style={{ padding: '14px 28px', borderRadius: '10px', border: '1px solid rgba(16, 185, 129, 0.5)', background: 'transparent', color: '#10b981', fontSize: '14px', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s ease' }}>Talk to Sales →</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={{ padding: '80px 32px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 800, letterSpacing: '-0.03em', margin: 0 }}>Frequently asked <span className="gradient-text">questions</span></h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ padding: '24px 28px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.6) 100%)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 12px 0', color: '#f1f5f9' }}>{faq.q}</h4>
              <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" style={{ padding: '80px 32px', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15), transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 20px 0' }}>Ready to transform your <span className="gradient-text">regulatory workflow?</span></h2>
          <p style={{ fontSize: '16px', color: '#94a3b8', margin: '0 0 32px 0' }}>Join 500+ government affairs professionals already on the waitlist.</p>
          
          {/* Bottom CTA Form - Inline */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', justifyContent: 'center', maxWidth: '460px', margin: '0 auto' }}>
            {!submitted ? (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  disabled={loading}
                  style={{ ...inputStyle, padding: '16px 20px', borderRadius: '12px', fontSize: '15px' }}
                />
                <button type="submit" disabled={loading} style={{ ...buttonStyle, padding: '16px 28px', borderRadius: '12px', fontSize: '15px' }}>
                  {loading ? 'Joining...' : 'Join Waitlist →'}
                </button>
              </>
            ) : (
              <div style={{ ...successBoxStyle, padding: '16px 24px', borderRadius: '12px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span style={{ color: '#10b981', fontWeight: 500 }}>You&apos;re on the list!</span>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '32px', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.3)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #10b981, #059669)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
            </div>
            <span style={{ fontSize: '14px', fontWeight: 600 }}>RegGuard.ai</span>
          </div>
          <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>© 2025 RegGuard.ai · All rights reserved</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="/privacy" style={{ color: '#64748b', textDecoration: 'none', fontSize: '12px' }}>Privacy</a>
            <a href="/terms" style={{ color: '#64748b', textDecoration: 'none', fontSize: '12px' }}>Terms</a>
            <a href="mailto:hello@regguard.ai" style={{ color: '#64748b', textDecoration: 'none', fontSize: '12px' }}>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
