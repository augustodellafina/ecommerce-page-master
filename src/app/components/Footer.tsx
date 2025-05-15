// src/app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white mt-24">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="text-center text-sm text-slate-600 space-y-2">
          <p className="font-serif italic">&ldquo;True elegance never goes out of style&rdquo;</p>
          <p>© 2025 E-commerce Page Master. All rights resered.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-slate-900 transition-colors">Terms and Conditions</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Privacity</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
