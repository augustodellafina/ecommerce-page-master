// src/app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white mt-24">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="text-center text-sm text-slate-600 space-y-2">
          <p className="font-serif italic">&ldquo;A verdadeira elegância nunca passa de moda&rdquo;</p>
          <p>© 2024 LuxeEssence. Todos os direitos reservados.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-slate-900 transition-colors">Termos</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
