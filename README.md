# RegGuard.ai Landing Page

AI-powered regulatory intelligence platform landing page with waitlist signup.

## 🚀 Quick Deploy (10 minutes)

### Step 1: Setup Supabase Database (2 min)

1. Go to [supabase.com](https://supabase.com) and open your project
2. Click **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy the entire contents of `supabase-setup.sql` and paste it
5. Click **Run** (or press Cmd/Ctrl + Enter)
6. You should see "Success. No rows returned" - this means it worked!

### Step 2: Create GitHub Repository (3 min)

1. Go to [github.com/new](https://github.com/new)
2. Name it `regguard-landing`
3. Keep it **Public** (required for free Vercel)
4. Click **Create repository**
5. You'll see instructions - keep this page open

### Step 3: Push Code to GitHub (3 min)

Open your terminal and run these commands:

```bash
# Navigate to the project folder
cd regguard-landing

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - RegGuard.ai landing page"

# Connect to GitHub (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/regguard-landing.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Deploy on Vercel (2 min)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **Add New → Project**
4. Find `regguard-landing` and click **Import**
5. **IMPORTANT:** Before clicking Deploy, expand **Environment Variables**
6. Add these two variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = `https://rgnqvleyzyzrzwtdxkeq.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnbnF2bGV5enl6cnp3dGR4a2VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzNTAzMTAsImV4cCI6MjA3OTkyNjMxMH0.Ts5OeE3krJkMK_NDZnrxGVc4-jGPnGW0DwmUsSaZr5E`
7. Click **Deploy**
8. Wait ~60 seconds - your site is LIVE! 🎉

Your site will be at: `https://regguard-landing.vercel.app`

---

## 🌐 Connect Your Domain (Optional)

### If you own regguard.ai:

1. In Vercel, go to your project → **Settings** → **Domains**
2. Type `regguard.ai` and click **Add**
3. Vercel will show you DNS records to add
4. Go to your domain registrar (Namecheap, GoDaddy, etc.)
5. Add these DNS records:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

6. Wait 5-10 minutes for DNS propagation
7. Your site is now live at regguard.ai! 🎉

---

## 📊 View Your Waitlist Signups

### Option 1: Supabase Dashboard
1. Go to [supabase.com](https://supabase.com) → Your project
2. Click **Table Editor** in sidebar
3. Click **waitlist** table
4. See all your signups!

### Option 2: Quick Stats
Run this in Supabase SQL Editor:
```sql
SELECT * FROM waitlist_stats;
```

### Option 3: Export to CSV
1. In Table Editor, click the **waitlist** table
2. Click the **Export** button (top right)
3. Download CSV

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

---

## 📁 Project Structure

```
regguard-landing/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.jsx       # Root layout + SEO meta tags
│   └── page.jsx         # Landing page component
├── lib/
│   └── supabase.js      # Supabase client
├── public/              # Static assets (add favicon, OG image here)
├── .env.local           # Environment variables (don't commit!)
├── .env.example         # Template for env vars
├── .gitignore          
├── next.config.js       # Next.js config
├── package.json         # Dependencies
├── supabase-setup.sql   # Database setup script
└── README.md            # This file
```

---

## ✅ Post-Launch Checklist

- [ ] Test signup form (check Supabase for entries)
- [ ] Test on mobile device
- [ ] Add favicon.ico to /public folder
- [ ] Create OG image (1200x630px) and add to /public/og-image.png
- [ ] Connect custom domain
- [ ] Submit to Google Search Console
- [ ] Set up Google Analytics (optional, Vercel Analytics is built-in)

---

## 🔒 Security Notes

- Your Supabase anon key is safe to expose publicly (it's designed for this)
- Row Level Security (RLS) is enabled - users can only INSERT, not read other emails
- Email validation happens client-side and server-side

---

## 📈 Future Enhancements

- [ ] Add email confirmation (Supabase Auth)
- [ ] Admin dashboard to view signups
- [ ] Referral tracking
- [ ] A/B testing different headlines
- [ ] Integration with email marketing (ConvertKit, Mailchimp)

---

## Need Help?

- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Vercel Docs](https://vercel.com/docs)

Built with ❤️ for RegGuard.ai
