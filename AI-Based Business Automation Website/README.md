# CodeCelix Task AI-Based Business Automation Website

A modern, responsive website for showcasing AI-powered business automation solutions. Built with React, TypeScript, and cutting-edge UI components.

## 🚀 Features

- **Modern UI/UX**: Beautiful gradient effects, glass morphism, and smooth animations
- **Dark Mode**: Full dark/light theme support with smooth transitions
- **Form Validation**: Real-time form validation with Zod schema validation
- **Responsive Design**: Fully responsive across all devices
- **Contact Page**: Dedicated contact form with validation
- **Demo Booking**: Advanced booking system with date/time picker
- **Multiple Pages**: Home, Solutions, How It Works, Contact, and Book Demo

## 📁 Project Structure

```
src/
├── components/
│   ├── home/              # Home page sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── WhyChooseSection.tsx
│   │   └── CTASection.tsx
│   ├── layout/            # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/                # Reusable UI components (shadcn/ui)
│   └── ThemeToggle.tsx    # Dark/Light mode toggle
├── pages/
│   ├── Index.tsx          # Home page
│   ├── Solutions.tsx      # Solutions page
│   ├── HowItWorks.tsx     # How It Works page
│   ├── Contact.tsx        # Contact form page
│   ├── BookDemo.tsx       # Demo booking page
│   └── NotFound.tsx       # 404 page
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── App.tsx                # Main app component with routing
```

## 🛠️ Technologies Used

- **Vite** - Fast build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Framer Motion** - Animations
- **shadcn/ui** - UI component library
- **Tailwind CSS** - Styling
- **next-themes** - Theme management
- **date-fns** - Date formatting

## 🎨 Key Features

### Form Validation
- Real-time validation with error messages
- Errors clear automatically when user starts typing
- Email validation, required fields, min/max length checks
- Date validation (prevents past dates)

### Dark Mode
- System-aware theme detection
- Manual theme toggle with smooth transitions
- Persistent theme preference

### Responsive Navigation
- Mobile-friendly hamburger menu
- Smooth animations
- Active route highlighting

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Available Routes

- `/` - Home page
- `/solutions` - Solutions overview
- `/how-it-works` - How the platform works
- `/contact` - Contact form
- `/book-demo` - Demo booking form

## 🎯 Form Features

### Contact Form (`/contact`)
- Name (required, min 2 characters)
- Email (required, valid email format)
- Company (optional)
- Message (required, min 10 characters)

### Demo Booking Form (`/book-demo`)
- Name, Email, Company (required)
- Phone (optional)
- Preferred Date (calendar picker, future dates only)
- Preferred Time (dropdown, 9 AM - 5 PM)
- Additional Notes (optional)

## 🔧 Development

```bash
# Run development server with hot reload
npm run dev

# Type checking
npm run build

# Lint code
npm run lint
```

## 📝 Environment Variables

No environment variables required for basic functionality.

## 🚀 Deployment

This project can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `dist` folder.

## 📄 License

This project is built for demonstration purposes.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!
