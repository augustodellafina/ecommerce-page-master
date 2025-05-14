# Premium Products E-commerce Page Master

E-commerce Page Master is a modern e-commerce pagination application developed with Next.js, TypeScript, Material UI, and API integration. This project demonstrates front-end development best practices, including fluid animations, state management, and responsive design.

## 🌟 Features

- **Premium Product Catalog** - Elegant display of luxury products
- **Product Details** - Card expansion with animations using Framer Motion
- **Favorites** - Persistent favorites system with localStorage
- **API Integration** - Dynamic data consumption via Apidog
- **Responsive Design** - Optimized experience for all devices

<div align="center">
  <img src="https://user-images.githubusercontent.com/12345678/example-screenshot-1.png" alt="Product Catalog" width="45%">
  <img src="https://user-images.githubusercontent.com/12345678/example-screenshot-2.png" alt="Product Details" width="45%">
</div>

## 🚀 Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Static typing for safer code
- **Tailwind CSS** - Modern and responsive styling
- **Framer Motion** - Fluid and interactive animations
- **Heroicons** - Elegant and consistent icons
- **Apidog** - Mock API for development


## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/augustodellafina/ecommerce-page-master.git
cd luxe-essence
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
2. Import the API collection from the `/docs/apidog-collection.json` directory
3. Update the API token in `.env.local`:
```
NEXT_PUBLIC_API_URL=https://mock.apidog.com/m1/911013-893347-default
NEXT_PUBLIC_API_TOKEN=TVQmaFxwDYIu3W7jcCUHV
```

## 📱 Demo

<div align="center">
  <img src="https://user-images.githubusercontent.com/12345678/example-demo.gif" alt="Application demo" width="70%">
</div>

## 🧪 Tests

Run automated tests:

```bash
npm test
# or
yarn test
```

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

<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/GitHub_Copilot_logo.svg" class="logo" width="120"/>
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
<div style="text-align: left">⁂</div>

[^1]: pplx-full-logo-primary-dark@2x.png

[^2]: pplx-full-logo-primary-dark@2x.png
