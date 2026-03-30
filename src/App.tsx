import { SearchBar } from './components/SearchBar'
import { CategoryFilter } from './components/CategoryFilter'
import { ResourceCard } from './components/ResourceCard'
import { EmptyState } from './components/EmptyState'
import { useResourceFilter } from './hooks/useResourceFilter'
import { Category } from './types'

type FilterCategory = 'All' | Category

function App() {
  const {
    search,
    setSearch,
    activeCategory,
    setActiveCategory,
    showFeaturedOnly,
    setShowFeaturedOnly,
    filtered,
    total,
  } = useResourceFilter()

  const handleReset = () => {
    setSearch('')
    setActiveCategory('All')
    setShowFeaturedOnly(false)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="header-left">
            <span className="logo-mark">{'</>'}</span>
            <div>
              <h1 className="site-title">Dev Dashboard</h1>
              <p className="site-subtitle">Curated resources for modern developers</p>
            </div>
          </div>
          <div className="header-stats">
            <span className="stat-item">
              <span className="stat-num">{total}</span> resources
            </span>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="controls">
          <SearchBar value={search} onChange={setSearch} resultCount={filtered.length} />
          <CategoryFilter
            active={activeCategory as FilterCategory}
            onChange={setActiveCategory as (cat: FilterCategory) => void}
            showFeatured={showFeaturedOnly}
            onToggleFeatured={() => setShowFeaturedOnly(!showFeaturedOnly)}
          />
        </div>

        {filtered.length > 0 ? (
          <div className="resource-grid">
            {filtered.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        ) : (
          <EmptyState query={search || activeCategory} onReset={handleReset} />
        )}
      </main>

      <footer className="footer">
        <p>
          Built with{' '}
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            React
          </a>{' '}
          +{' '}
          <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer">
            TypeScript
          </a>{' '}
          +{' '}
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            Vite
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
