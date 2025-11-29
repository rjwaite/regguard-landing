'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    
    setLoading(true)
    setError('')
    
    try {
      const { error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert([{ 
          name: formData.name.trim(),
          email: formData.email.toLowerCase().trim(),
          subject: formData.subject.trim() || null,
          message: formData.message.trim(),
          created_at: new Date().toISOString()
        }])
      
      if (supabaseError) {
        throw supabaseError
      }
      
      setSubmitted(true)
    } catch (err) {
      console.error('Error:', err)
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%',
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

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: 500,
    color: '#e2e8f0',
    marginBottom: '8px'
  }

  return (
    <div style={{ minHeight: '100vh', background: '#050810', fontFamily: "'Inter', system-ui, sans-serif", color: '#e2e8f0' }}>
      <style>{`
        .gradient-text { background: linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero-gradient { background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(16, 185, 129, 0.15), transparent); }
        html { scroll-behavior: smooth; }
        a { color: #10b981; text-decoration: none; }
        a:hover { text-decoration: underline; }
        input:focus, textarea:focus { border-color: #10b981 !important; box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.15); }
      `}</style>

      <div className="hero-gradient" style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }} />

      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100, background: 'rgba(5, 8, 16, 0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #10b981, #059669)', boxShadow: '0 4px 20px rgba(16, 185, 129, 0.4)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
          </div>
          <span style={{ fontSize: '20px', fontWeight: 700, color: '#e2e8f0' }}>RegGuard<span className="gradient-text">.ai</span></span>
        </a>
        <a href="/" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>← Back to Home</a>
      </nav>

      {/* Content */}
      <main style={{ maxWidth: '600px', margin: '0 auto', padding: '120px 32px 80px', position: 'relative' }}>
        <h1 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.03em' }}>
          Get in <span className="gradient-text">Touch</span>
        </h1>
        <p style={{ color: '#94a3b8', marginBottom: '48px', fontSize: '17px', lineHeight: 1.6 }}>
          Have a question about RegGuard.ai? Want to learn more about our platform or discuss enterprise solutions? We&apos;d love to hear from you.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <label style={labelStyle}>Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                disabled={loading}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                disabled={loading}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                disabled={loading}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                required
                disabled={loading}
                style={{ ...inputStyle, minHeight: '150px', resize: 'vertical', fontFamily: 'inherit' }}
              />
            </div>

            {error && (
              <p style={{ color: '#ef4444', fontSize: '14px', margin: 0 }}>{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                padding: '16px 28px',
                borderRadius: '10px',
                border: 'none',
                color: 'white',
                fontSize: '15px',
                fontWeight: 600,
                cursor: loading ? 'wait' : 'pointer',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                boxShadow: '0 4px 20px rgba(16, 185, 129, 0.4)',
                transition: 'all 0.3s ease',
                opacity: loading ? 0.7 : 1
              }}
            >
              {loading ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        ) : (
          <div style={{
            padding: '48px 32px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.08) 100%)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px' }}>Message Sent!</h2>
            <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
              Thank you for reaching out. We&apos;ll get back to you as soon as possible, usually within 24 hours.
            </p>
            <a 
              href="/"
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                borderRadius: '8px',
                border: '1px solid rgba(16, 185, 129, 0.5)',
                color: '#10b981',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none'
              }}
            >
              ← Back to Home
            </a>
          </div>
        )}


      </main>

      {/* Footer */}
      <footer style={{ padding: '32px', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.3)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
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
            <a href="/contact" style={{ color: '#10b981', textDecoration: 'none', fontSize: '12px' }}>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
