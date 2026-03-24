# Nehemie Bookkeeping and Tax Solutions

A professional tax services web application built with React and TailwindCSS. This platform showcases comprehensive tax preparation, planning, and resolution services for individuals and businesses.

## 🚀 Features

- **Modern UI/UX Design**: Clean, responsive interface built with TailwindCSS
- **Service Modules**: Six main service categories with detailed information
- **Interactive Cards**: Hover effects and smooth transitions
- **Mobile Responsive**: Optimized for all device sizes
- **Professional Layout**: Hero section, services grid, about section, and contact information

## 🛠️ Services Offered

1. **Tax Preparation** - Federal & State returns, E-filing, Maximized deductions
2. **Tax Planning** - Year-round planning, Retirement strategies, Investment guidance
3. **Business Services** - Corporate returns, Payroll taxes, Sales tax, Business consulting
4. **Tax Resolution** - IRS representation, Offer in compromise, Payment plans
5. **Financial Planning** - Investment planning, Retirement planning, Estate planning
6. **Consultation** - One-on-one sessions, Tax questions, Second opinions

## 📦 Technologies Used

- **React 19.2.3** - Frontend framework
- **TailwindCSS 3.4.0** - CSS framework for styling
- **Lucide React 0.294.0** - Icon library
- **Create React App** - Build tool and development environment

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nehemieimtaxsolutionllc.git
cd nehemieimtaxsolutionllc
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📱 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Customization

### Color Scheme

The primary color scheme is defined in `tailwind.config.js`:
- Primary: Blue gradient (#0ea5e9 to #0284c7)
- Secondary: Gray tones for backgrounds and text

### Adding New Services

To add new service modules, update the `modules` array in `src/App.js`:

```javascript
{
  id: 7,
  title: "New Service",
  description: "Service description",
  icon: IconComponent,
  features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
}
```

## 📐 Project Structure

```
src/
├── App.js              # Main application component
├── App.css             # Component-specific styles
├── index.js            # Application entry point
├── index.css           # Global styles and Tailwind imports
└── setupTests.js       # Test configuration
```

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deployment Options

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload the `build` folder to S3 with static website hosting
- **Traditional Hosting**: Upload the `build` folder to any web server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **Phone**: (555) 123-4567
- **Email**: info@nehemietax.com
- **Office**: 17505 Autumn Falls Dr, Manor, Texas 78653

## 📄 License

© 2024 Nehemie Bookkeeping and Tax Solutions. All rights reserved.

---

**Built with ❤️ for Nehemie Bookkeeping and Tax Solutions**
