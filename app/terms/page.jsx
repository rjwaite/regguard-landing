'use client'

export default function Terms() {
  return (
    <div style={{ minHeight: '100vh', background: '#050810', fontFamily: "'Inter', system-ui, sans-serif", color: '#e2e8f0' }}>
      <style>{`
        .gradient-text { background: linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero-gradient { background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(16, 185, 129, 0.15), transparent); }
        html { scroll-behavior: smooth; }
        a { color: #10b981; text-decoration: none; }
        a:hover { text-decoration: underline; }
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
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 32px 80px', position: 'relative' }}>
        <h1 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.03em' }}>
          Terms of <span className="gradient-text">Service</span>
        </h1>
        <p style={{ color: '#64748b', marginBottom: '48px' }}>Last updated: January 2025</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: '#94a3b8', lineHeight: 1.8, fontSize: '15px' }}>
          
          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>1. Acceptance of Terms</h2>
            <p>By accessing or using RegGuard.ai (&quot;the Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Service. We reserve the right to modify these Terms at any time, and your continued use of the Service constitutes acceptance of any changes.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>2. Description of Service</h2>
            <p>RegGuard.ai provides AI-powered regulatory intelligence tools, including regulatory monitoring, impact analysis, and public comment generation. The Service is designed to assist government affairs professionals, compliance teams, and organizations in tracking and responding to regulatory changes.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>3. User Accounts</h2>
            <p style={{ marginBottom: '12px' }}>To access certain features of the Service, you may be required to create an account. You agree to:</p>
            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Provide accurate and complete information when creating your account</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>4. Acceptable Use</h2>
            <p style={{ marginBottom: '12px' }}>You agree not to:</p>
            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Use the Service for any unlawful purpose or in violation of any applicable laws</li>
              <li>Attempt to gain unauthorized access to the Service or its related systems</li>
              <li>Interfere with or disrupt the integrity or performance of the Service</li>
              <li>Use automated means to access the Service without our express permission</li>
              <li>Resell, sublicense, or redistribute the Service without authorization</li>
              <li>Use the Service to generate false, misleading, or fraudulent content</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>5. AI-Generated Content</h2>
            <p style={{ marginBottom: '12px' }}>The Service uses artificial intelligence to generate content, including regulatory analyses and public comment drafts. You acknowledge that:</p>
            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>AI-generated content is provided for informational purposes and should not be considered legal advice</li>
              <li>You are responsible for reviewing and editing all AI-generated content before use</li>
              <li>We do not guarantee the accuracy, completeness, or suitability of AI-generated content</li>
              <li>You retain responsibility for any content you submit to regulatory agencies</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>6. Intellectual Property</h2>
            <p style={{ marginBottom: '12px' }}>The Service and its original content, features, and functionality are owned by RegGuard.ai and are protected by international copyright, trademark, and other intellectual property laws. You retain ownership of any content you submit to the Service, but grant us a license to use such content to provide and improve the Service.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>7. Payment and Billing</h2>
            <p style={{ marginBottom: '12px' }}>For paid subscription plans:</p>
            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Fees are billed in advance on a monthly or annual basis</li>
              <li>All fees are non-refundable unless otherwise stated</li>
              <li>We reserve the right to change pricing with 30 days&apos; notice</li>
              <li>Failure to pay may result in suspension or termination of your account</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>8. Disclaimer of Warranties</h2>
            <p>THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE. WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>9. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, REGGUARD.AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE MONTHS PRECEDING THE CLAIM.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>10. Indemnification</h2>
            <p>You agree to indemnify and hold harmless RegGuard.ai, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the Service, your violation of these Terms, or your violation of any rights of another party.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>11. Termination</h2>
            <p>We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the Service will cease immediately. You may also terminate your account at any time by contacting us.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>12. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved in the courts of Delaware.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>13. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p style={{ marginTop: '12px' }}>
              <a href="/contact" style={{ color: '#10b981' }}>Contact Form</a><br />
              Email: <a href="mailto:hello@regguard.ai" style={{ color: '#10b981' }}>hello@regguard.ai</a>
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer style={{ padding: '32px', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.3)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #10b981, #059669)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
            </div>
            <span style={{ fontSize: '14px', fontWeight: 600 }}>RegGuard.ai</span>
          </div>
          <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>© 2025 RegGuard.ai · All rights reserved</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="/privacy" style={{ color: '#64748b', textDecoration: 'none', fontSize: '12px' }}>Privacy</a>
            <a href="/terms" style={{ color: '#10b981', textDecoration: 'none', fontSize: '12px' }}>Terms</a>
            <a href="/contact" style={{ color: '#64748b', textDecoration: 'none', fontSize: '12px' }}>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
