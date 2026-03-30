export type Category = 'Documentation' | 'Tutorial' | 'Tool' | 'Reference' | 'Library' | 'Community'

export interface Resource {
  id: string
  name: string
  description: string
  category: Category
  link: string
  tags: string[]
  featured?: boolean
}
