'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ProductImage,
  ProductCategory,
  ProductPrice,
  FavoriteButton,
  CloseButton
} from '@/app/components/Product'
import { Product } from '@/types'

export default function Home() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const savedFavorites = localStorage.getItem('favorites')
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites))
  }, [])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://mock.apidog.com/m1/911013-893347-default/products',
          {
            headers: {
              'api_key': 'TVQmaFxwDYIu3W7jcCUHV'
            }
          }
        )

        if (!response.ok) {
          throw new Error(`Erro HTTP ${response.status}: ${response.statusText}`)
        }

        const responseData = await response.json()
        const dataArray = Array.isArray(responseData)
          ? responseData
          : responseData?.data || []

        const validProducts = dataArray.filter((item: Partial<Product>) =>
          item?.status === 'published' &&
          typeof item?.id === 'number' &&
          typeof item?.title === 'string'
        )

        setProducts(validProducts)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido')
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(id)
        ? prev.filter(fid => fid !== id)
        : [...prev, id]
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  if (!isMounted) return null

  return (
    <main className="mx-auto max-w-7xl flex-1 px-6 py-12 w-full">
      <div className="mb-12 text-center space-y-4">
        <h2 className="text-4xl font-light text-slate-800 font-serif">Coleção Outono</h2>
        <p className="mt-4 text-slate-600 font-serif italic">
          Peças que redefinem a elegância atemporal
        </p>
      </div>

      {/* Mensagens e Cards */}
      {loading ? (
        <div className="text-center py-8">Carregando produtos...</div>
      ) : error ? (
        <div className="text-center py-8 text-red-600">{error}</div>
      ) : products.length === 0 ? (
        <div className="text-center py-16 text-slate-500 text-lg">
          Nenhum produto encontrado no momento.<br />
          Volte mais tarde ou tente atualizar a página.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map(product => (
            <motion.div
              key={product.id}
              className="group relative rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out overflow-hidden bg-white border border-gray-50 hover:ring p-2 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
              transition={{ duration: 0.3, ease: [0.19, 1.0, 0.22, 1.0] }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <ProductImage
                  src={product.photoUrls?.[0] || '/fallback-image.jpg'}
                  alt={product.title}
                />

                <FavoriteButton
                  isFavorite={favorites.includes(product.id)}
                  toggle={() => toggleFavorite(product.id)}
                />
              </div>

              <ProductCategory
                category={product.category?.name || 'Sem categoria'}
              />

              <div className="p-4 flex flex-col space-y-3 text-left">
                <h3 className="text-xl font-serif font-semibold text-slate-800">
                  {product.title}
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2 font-light leading-relaxed tracking-wide">
                  {product.description}
                </p>

                <ProductPrice
                  price={product.price}
                  oldPrice={product.oldPrice}
                />
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Modal de detalhes */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white rounded-xl max-w-4xl w-full p-6 relative overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 0, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.19, 1.0, 0.22, 1.0] }}
            >
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{ duration: 0.2, delay: 0 }}
              >
                <CloseButton onClick={() => setSelectedProduct(null)} />
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative">
                  <ProductImage
                    src={selectedProduct.photoUrls?.[0] || '/fallback-image.jpg'}
                    alt={selectedProduct.title}
                  />

                  <FavoriteButton
                    isFavorite={favorites.includes(selectedProduct.id)}
                    toggle={() => toggleFavorite(selectedProduct.id)}
                  />
                </div>

                <div className="space-y-4">
                  <motion.div
                    initial={{opacity: 0, y: 20, filter: "blur(8px)"}}
                    animate={{opacity: 1, y: 0, filter: "blur(0px)"}}
                    exit={{opacity: 0, y: 10}}
                    transition={{duration: 0.4, delay: 0.1}}
                    className='pr-14'
                  >
                    <h2 className="text-3xl font-serif font-semibold text-slate-800">
                      {selectedProduct.title}
                    </h2>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <ProductCategory
                      category={selectedProduct.category?.name || 'Sem categoria'}
                      inCard={false}
                    />
                    </motion.div>

                  <motion.p
                    className="text-lg text-slate-600 leading-relaxed"
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    {selectedProduct.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                  >
                    <ProductPrice
                      price={selectedProduct.price}
                      oldPrice={selectedProduct.oldPrice}
                    />
                  </motion.div>

                  {selectedProduct.tags && selectedProduct.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.tags.map(tag => (
                        <span
                          key={tag.id}
                          className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-sm"
                        >
                          #{tag.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}