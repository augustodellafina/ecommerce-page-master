# Premium Products E-commerce Page Master

E-commerce Page Master is a modern e-commerce pagination application developed with Next.js, TypeScript, Tailwind CSS, and API integration. This project demonstrates front-end development best practices, including fluid animations, state management, and responsive design.

## 🌟 Features

- **Premium Product Catalog** - Elegant display of luxury products
- **Product Details** - Card expansion with animations using Framer Motion
- **Favorites** - Persistent favorites system with localStorage
- **API Integration** - Dynamic data consumption via Apidog
- **Responsive Design** - Optimized experience for all devices

<div align="center" style="display:flex; align-items:center; justify-content:space-between;">
  <img src="https://github.com/augustodellafina/ecommerce-page-master/blob/dc60f2b08e3a6a83db2fef86cbfa7790c22eaeb6/public/cover-1.png" alt="Product Catalog" width="48.5%">
  <img src="https://github.com/augustodellafina/ecommerce-page-master/blob/dc60f2b08e3a6a83db2fef86cbfa7790c22eaeb6/public/cover-2.png" alt="Product Details" width="48.5%">
</div>

## 🚀 Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Static typing for safer code
- **Tailwind CSS** - Modern and responsive styling
- **Framer Motion** - Fluid and interactive animations
- **Heroicons** - Elegant and consistent icons
- **Apidog** - Mock API for development


## 📋 Prerequisites

- Node.js 20.x or higher
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/augustodellafina/ecommerce-page-master.git
cd ecommerce-page-master
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Configure environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your settings.

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Access [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 API Configuration

The project uses Apidog as a mock API service. To configure:

1. Create an account on [Apidog](https://apidog.com)
2. Import the API collection from the `/docs/ecommerce-page-master-apidog.json` directory
3. Update the API token in `.env.local`:
```
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_API_TOKEN=
```

## 📱 Demo

<div align="center">
  <img src="https://github.com/augustodellafina/ecommerce-page-master/blob/dc60f2b08e3a6a83db2fef86cbfa7790c22eaeb6/public/e-commerce-page-master.gif" alt="Application demo" width="100%">
</div>

## 📦 Production Build

To generate a production build:

```bash
npm run build
# or
yarn build
```

## 🌐 Deploy

The project is configured for deployment on Vercel. Simply connect your GitHub repository to your Vercel account.

## 🗂️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── components/         # Reusable components
│   │   ├── Header.tsx      # Application header
│   │   ├── Footer.tsx      # Application footer
│   │   └── Product/        # Product-related components
│   ├── layout.tsx          # Main layout
│   └── page.tsx            # Home page
├── data/                   # API mocks
├── types/                  # TypeScript type definitions
└── utils/                  # Utility functions
```

## 📄 License

This project is licensed under the MIT license.

## 👏 Acknowledgments

<div align="left">
  <a href="https://www.perplexity.ai/" target="_blank"><img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" alt="Perplexity AI Logo" width="120px"></a>
</div>
<div align="left">
  <a href="https://github.com/features/copilot" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/GitHub_Copilot_logo.svg" alt="GitHub Copilot Logo" width="120px"></a>
</div>

- [Next.js](https://nextjs.org) - React framework
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Apidog](https://apidog.com) - Mock API platform

<div align="left">
  <p>Developed by <a href="https://github.com/augustodellafina">Augusto Dellafina</a></p>
  <p>
    <a href="https://linkedin.com/in/augustofchagas">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
    </a>
  </p>
</div>

