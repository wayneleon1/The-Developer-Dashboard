import { useState, useMemo } from 'react'
import { Resource, Category } from '../types'
import { resources as allResources } from '../data/resources'

type FilterCategory = 'All' | Category

export function useResourceFilter() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All')
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim()

    return allResources.filter((r: Resource) => {
      const matchesSearch =
        query === '' ||
        r.name.toLowerCase().includes(query) ||
        r.description.toLowerCase().includes(query) ||
        r.tags.some((tag) => tag.includes(query))

      const matchesCategory = activeCategory === 'All' || r.category === activeCategory

      const matchesFeatured = !showFeaturedOnly || r.featured === true

      return matchesSearch && matchesCategory && matchesFeatured
    })
  }, [search, activeCategory, showFeaturedOnly])

  return {
    search,
    setSearch,
    activeCategory,
    setActiveCategory,
    showFeaturedOnly,
    setShowFeaturedOnly,
    filtered,
    total: allResources.length,
  }
}
