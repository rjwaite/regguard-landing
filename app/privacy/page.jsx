'use client'

export default function Privacy() {
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
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p style={{ color: '#64748b', marginBottom: '48px' }}>Last updated: January 2025</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: '#94a3b8', lineHeight: 1.8, fontSize: '15px' }}>
          
          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>1. Introduction</h2>
            <p>RegGuard.ai (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>2. Information We Collect</h2>
            <p style={{ marginBottom: '12px' }}>We may collect information about you in a variety of ways:</p>
            <p style={{ marginBottom: '12px' }}><strong style={{ color: '#e2e8f0' }}>Personal Data:</strong> When you sign up for our waitlist or create an account, we collect your email address and any other information you choose to provide.</p>
            <p style={{ marginBottom: '12px' }}><strong style={{ color: '#e2e8f0' }}>Usage Data:</strong> We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, access times, and the pages you have viewed.</p>
            <p><strong style={{ color: '#e2e8f0' }}>Cookies:</strong> We use cookies and similar tracking technologies to track activity on our website and hold certain information to improve your experience.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>3. How We Use Your Information</h2>
            <p style={{ marginBottom: '12px' }}>We use the information we collect to:</p>
            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Provide, operate, and maintain our services</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Communicate with you about updates, security alerts, and support</li>
              <li>Send you marketing and promotional communications (with your consent)</li>
              <li>Process transactions and send related information</li>
              <li>Detect and prevent fraud or other harmful activities</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>4. Sharing Your Information</h2>
            <p style={{ marginBottom: '12px' }}>We do not sell your personal information. We may share your information in the following situations:</p>
            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong style={{ color: '#e2e8f0' }}>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
              <li><strong style={{ color: '#e2e8f0' }}>Legal Requirements:</strong> If required by law or in response to valid requests by public authorities</li>
              <li><strong style={{ color: '#e2e8f0' }}>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>5. Data Security</h2>
            <p>We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>6. Your Privacy Rights</h2>
            <p style={{ marginBottom: '12px' }}>Depending on your location, you may have the following rights:</p>
            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>7. Third-Party Services</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>8. Children&apos;s Privacy</h2>
            <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete that information.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#e2e8f0', marginBottom: '16px' }}>10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
            <a href="/privacy" style={{ color: '#10b981', textDecoration: 'none', fontSize: '12px' }}>Privacy</a>
            <a href="/terms" style={{ color: '#64748b', textDecoration: 'none', fontSize: '12px' }}>Terms</a>
            <a href="/contact" style={{ color: '#64748b', textDecoration: 'none', fontSize: '12px' }}>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
