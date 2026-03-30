import { Category } from '../types'
import { categories } from '../data/resources'

type FilterCategory = 'All' | Category

interface CategoryFilterProps {
  active: FilterCategory
  onChange: (cat: FilterCategory) => void
  showFeatured: boolean
  onToggleFeatured: () => void
}

export function CategoryFilter({
  active,
  onChange,
  showFeatured,
  onToggleFeatured,
}: CategoryFilterProps) {
  return (
    <div className="filter-row">
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-tab ${active === cat ? 'active' : ''}`}
            onClick={() => onChange(cat as FilterCategory)}
          >
            {cat}
          </button>
        ))}
      </div>
      <button
        className={`featured-toggle ${showFeatured ? 'active' : ''}`}
        onClick={onToggleFeatured}
        aria-pressed={showFeatured}
      >
        <span className="star-icon">★</span> Featured
      </button>
    </div>
  )
}
