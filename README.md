# DJSanch Portfolio

A modern, responsive portfolio website built with Next.js and Shadcn UI, showcasing my skills, projects, and experience as a Full Stack Developer.

## 🚀 Features

- **Modern Design**: Clean and professional design using Shadcn UI components
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Navigation**: Smooth scrolling navigation between sections
- **Contact Form**: Functional contact form with validation
- **Dark Mode Ready**: Built with dark mode support (can be easily enabled)
- **SEO Optimized**: Proper meta tags and structured data
- **Performance**: Optimized for fast loading and smooth interactions

## 📋 Sections

1. **Home/Hero**: Introduction and overview with skills and social links
2. **About**: Detailed background, education, work experience, and interests
3. **Projects**: Showcase of completed projects with technologies used
4. **Certifications**: Professional certifications and achievements
5. **Contact**: Contact form and contact information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/djsanch/DJSanch_Portfolio.git
cd DJSanch_Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
DJSanch_Portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/           # Shadcn UI components
│   │   ├── sections/     # Page sections
│   │   │   ├── hero.tsx
│   │   │   ├── about.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── certifications.tsx
│   │   │   └── contact.tsx
│   │   ├── layout.tsx
│   │   ├── navigation.tsx
│   │   └── footer.tsx
│   └── lib/
│       └── utils.ts
├── public/               # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `src/components/sections/hero.tsx` - Update name, title, skills, and social links
- `src/components/sections/about.tsx` - Update education, experience, and interests
- `src/components/sections/projects.tsx` - Update projects with your own
- `src/components/sections/certifications.tsx` - Update certifications
- `src/components/sections/contact.tsx` - Update contact information
- `src/components/footer.tsx` - Update social links

### Styling

- Colors and themes can be customized in `src/app/globals.css`
- Component styles can be modified in individual component files
- Tailwind classes can be adjusted for different layouts

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Add the section to the navigation in `src/components/navigation.tsx`
3. Import and add the section to `src/app/page.tsx`

## 📱 Responsive Design

The portfolio is fully responsive and includes:

- Mobile-first design approach
- Responsive navigation with mobile menu
- Adaptive grid layouts
- Touch-friendly interactions
- Optimized typography for all screen sizes

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: contact@djsanch.com
- **GitHub**: [@djsanch](https://github.com/djsanch)
- **LinkedIn**: [DJSanch](https://linkedin.com/in/djsanch)

---

Built with ❤️ using Next.js and Shadcn UI
