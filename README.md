# 🚀 Shehata Antonious - Software Engineer Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Portfolio-blue?style=for-the-badge&logo=github)](https://antoniousshehata.github.io/)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-green?style=for-the-badge&logo=github)](https://antoniousshehata.github.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

A modern, professional portfolio website showcasing 10+ years of software engineering experience in .NET, React, Docker, and cloud technologies. Built with clean HTML5, Tailwind CSS, and JavaScript with multilingual support.

## 🌟 Live Portfolio

**🔗 [View Live Portfolio](https://antoniousshehata.github.io/)**

> Professional portfolio showcasing career progression from Junior Software Engineer (2012) to Technical Lead (2023) at the Egyptian Parliament, with scalable solutions serving 500,000+ users.

---

## 👨‍💻 About Shehata Antonious

**Senior Software Engineer | Technical Lead | Cloud Architect**

- 🎓 **Master of Computer Science** - GISMA University, Germany
- 🎓 **MBA Global Business** - ESLSCA Business School, France  
- 🌍 **Location**: Potsdam, Germany
- 🗣️ **Languages**: German (B1), English (C1), Arabic (Native)
- 📧 **Contact**: antoniousmaher@gmail.com

### 🚀 Career Highlights
- **10+ years** in enterprise software development
- **Technical Lead** for cloud migration reducing infrastructure costs by 30%
- **Kubernetes architect** maintaining 99.9% system uptime
- **Microservices expert** transitioning monolithic systems to modern architecture
- **Xamarin developer** creating tablet apps for 1,200+ MPs
- **HR automation** reducing manual work by 85% for 4,000+ employees

---

## 🎨 Portfolio Features

### ✨ Modern Design & UX
- 🎭 **Glass morphism effects** with backdrop blur and modern aesthetics
- ⚡ **Animated typing effect** showcasing multiple developer roles
- 🃏 **Interactive skill cards** with smooth hover animations and transitions
- 📈 **Professional timeline** visualizing career progression with alternating layout
- 🏆 **Certificate gallery** with 21+ certifications and modal views
- 📱 **Fully responsive** design optimized for desktop, tablet, and mobile

### 🌍 Multilingual Support
- 🇬🇧 **English** - International audience
- 🇩🇪 **German** - German job market focus
- 🔄 **Dynamic switching** with persistent language preference
- 📝 **Professional translations** tailored for German tech industry
- 🔧 **i18next integration** for seamless content management

### 📧 Advanced Contact System
- 📬 **Functional contact form** with multiple backend integrations
- ✅ **Form validation** with real-time feedback and error handling
- 🎯 **Multiple sending options**: Formspree, EmailJS, PHP backend
- 📱 **Social media integration** with professional links
- 💌 **Animated feedback** for successful form submissions

### 🗂️ Content Sections
- **🏠 Hero Section**: Animated introduction with professional headshot and contact info
- **👤 About Section**: Education, certifications, and language proficiency with progress bars
- **⚡ Skills Section**: 7 categorized technical skills with modern card layout
- **💼 Experience Timeline**: Career progression from 2012-2023 with detailed achievements
- **🎓 Certificates Section**: Interactive gallery with 21+ professional certifications
- **📞 Contact Section**: Multiple contact methods with integrated form

---

## 🛠️ Technology Stack

### Frontend Technologies
```
HTML5          Modern semantic markup
CSS3           Advanced styling with custom properties
Tailwind CSS   Utility-first CSS framework for rapid UI development
JavaScript     Vanilla ES6+ for dynamic interactions
```

### Development Tools
```
PostCSS        CSS processing and optimization
Live Server    Local development server with hot reload
Tailwind CLI   CSS compilation and purging
i18next        Internationalization framework
Font Awesome   Professional icon library
```

### Deployment & Hosting
```
GitHub Pages   Static site hosting with automatic deployment
GitHub Actions CI/CD pipeline for automated builds
Custom Domain  Professional domain configuration
CDN            Fast global content delivery
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v14 or higher)
- **Git** for version control
- **Modern browser** for development

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/AntoniousShehata/AntoniousShehata.github.io.git
cd AntoniousShehata.github.io
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:8080
```

### Available Scripts

```bash
# Development with live reload and CSS compilation
npm run dev

# Build CSS for production
npm run build

# Alternative development server
npm run tailwind
```

---

## 📁 Project Structure

```
portfolio/
├── 📄 index.html              # Main portfolio page (GitHub Pages)
├── 📁 assets/                 # Compiled assets for production
│   ├── 📁 css/               # Compiled Tailwind CSS
│   └── 📁 build/             # Production builds
├── 📁 locales/               # Translation files
│   ├── 📁 en/                # English translations
│   └── 📁 de/                # German translations
├── 📁 Images/                # Profile and professional images
├── 📁 certificates/          # Certificate images (21+ certs)
├── 📁 public/                # Development files
│   ├── 📄 index.html         # Development HTML
│   ├── 📁 assets/            # Development assets
│   └── 📁 locales/           # Development translations
├── 📁 css/                   # Source CSS files
│   └── 📄 main.css           # Main Tailwind CSS file
├── 📄 tailwind.config.js     # Tailwind configuration
├── 📄 postcss.config.js      # PostCSS configuration
├── 📄 package.json           # Project dependencies and scripts
└── 📄 README.md              # This documentation
```

---

## 🔧 Development Workflow

### Local Development
1. **Start development server**: `npm run dev`
2. **Edit files**: Changes auto-reload in browser
3. **CSS compilation**: Tailwind CSS compiles automatically
4. **Test multilingual**: Switch between EN/DE languages

### Making Changes
1. **Create feature branch**: `git checkout -b feature-name`
2. **Make changes**: Edit HTML, CSS, or translation files
3. **Test locally**: Verify changes on localhost:8080
4. **Commit changes**: `git commit -m "descriptive message"`
5. **Push branch**: `git push origin feature-name`

### Deployment
- **Automatic**: GitHub Pages deploys `main` branch automatically
- **Manual trigger**: Push to `main` branch triggers deployment
- **Live in**: 2-5 minutes after push to main

---

## 🌐 Multilingual Configuration

### Adding New Languages
1. **Create translation file**: `locales/[lang]/translation.json`
2. **Translate all keys**: Use existing EN/DE as reference
3. **Update language selector**: Add new language option
4. **Test thoroughly**: Verify all sections display correctly

### Translation Structure
```json
{
  "navigation": { ... },
  "hero": { ... },
  "about": { ... },
  "skills": { ... },
  "experience": { ... },
  "certificates": { ... },
  "contact": { ... }
}
```

---

## 📈 Performance Features

- ⚡ **Lazy loading** for images and certificates
- 🗜️ **CSS minification** for faster load times
- 📱 **Responsive images** with optimized sizes
- 🔄 **Efficient animations** with CSS transforms
- 💾 **Local storage** for language preferences
- 🌐 **CDN integration** for external resources

---

## 🤝 Contributing

While this is a personal portfolio, contributions for bug fixes or improvements are welcome:

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b improvement/your-feature`
3. **Make changes** and test thoroughly
4. **Commit with clear message**: `git commit -m "Add: feature description"`
5. **Push to branch**: `git push origin improvement/your-feature`
6. **Create Pull Request** with detailed description

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact & Connect

- 🌐 **Portfolio**: [antoniousshehata.github.io](https://antoniousshehata.github.io/)
- 📧 **Email**: antoniousmaher@gmail.com
- 📱 **Phone**: +491773948619
- 💼 **LinkedIn**: [Connect with me](https://linkedin.com/in/shehata-antonious)
- 💻 **GitHub**: [AntoniousShehata](https://github.com/AntoniousShehata)
- 📍 **Location**: Potsdam, Germany

---

## 🙏 Acknowledgments

- **Tailwind CSS** for the amazing utility-first framework
- **Font Awesome** for the comprehensive icon library
- **i18next** for seamless internationalization
- **GitHub Pages** for reliable hosting
- **GISMA University** for academic excellence
- **Egyptian Parliament** for professional growth opportunities

---

<div align="center">
  <h3>⭐ If you found this portfolio inspiring, please give it a star! ⭐</h3>
  <p><i>Built with ❤️ by Shehata Antonious</i></p>
  <p><strong>© 2025 Shehata Antonious. All rights reserved.</strong></p>
</div>
