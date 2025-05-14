export interface Product {
  id: number
  title: string
  category?: {
    id?: number
    name?: string
  }
  description: string
  price: number
  oldPrice?: number
  photoUrls?: string[]
  tags?: Array<{
    id?: number
    name?: string
  }>
  status?: 'published'
}
