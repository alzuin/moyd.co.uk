# MOYD Landing Page

> Master of Your Domain – Fractional CTO services by Alberto Zuin

This is the source code for [moyd.co.uk](https://moyd.co.uk), a modern and mobile-friendly landing page for promoting high-impact fractional CTO services. It highlights offerings, process (The MOYD Method™), and provides contact options for startups, scale-ups, and investors.

---

## 🔧 Tech Stack

- **React** (via [Vite](https://vitejs.dev/))
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Scroll Parallax** for scroll-based hero visuals
- **Lottie** for animated MOYD Method
- **Brevo** (formerly Sendinblue) for CRM/contact + scheduling
- **Google Analytics** + SEO-ready meta

---

## 📦 Setup & Development

1. **Install dependencies**

```bash
npm install
```

2. **Start development server**

```bash
npm run dev
```

3. **Build for production**

```bash
npm run build
```

4. **Preview the production build**

```bash
npm run preview
```

---

## 🌐 Deployment

The site is designed to be deployed as a static site, optimized for:

- **AWS S3 + CloudFront**
- Netlify / Vercel
- GitHub Pages (with custom domain support)

---

## 📬 Contact & Booking Integration

- **Contact form** posts directly to Brevo (CRM + automated workflows)
- **Appointment booking** uses Brevo’s built-in calendar with Google Calendar sync

Both options are embedded in the site and toggle dynamically.

---

## 📎 Other Features

- Responsive design with mobile-first layout
- Parallax hero background for visual impact
- The MOYD Method™ explained with animation and visual cards
- Links to [LinkedIn](https://www.linkedin.com/in/alzuin/) and [GitHub](https://github.com/alzuin)
- Google Analytics included via gtag

---

## 📛 Favicon & Branding

- Custom logo included as `moyd.svg`
- Located in `/public` and registered via `<link rel="icon">` in `index.html`

---

## 🔒 License

MIT – feel free to fork or adapt, but branding content (logo and name) is protected under personal and business identity rights.

---

## ✨ Author

**Alberto Zuin**  
[LinkedIn →](https://www.linkedin.com/in/alzuin/)  
[GitHub →](https://github.com/alzuin)