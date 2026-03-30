import { Resource } from '../types'

interface ResourceCardProps {
  resource: Resource
}

const categoryColors: Record<string, string> = {
  Documentation: 'cat-docs',
  Tutorial: 'cat-tutorial',
  Tool: 'cat-tool',
  Reference: 'cat-reference',
  Library: 'cat-library',
  Community: 'cat-community',
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const catClass = categoryColors[resource.category] ?? 'cat-docs'

  return (
    <a
      href={resource.link}
      target="_blank"
      rel="noopener noreferrer"
      className="resource-card"
      aria-label={`Open ${resource.name}`}
    >
      <div className="card-header">
        <div className="card-title-row">
          <h3 className="card-name">{resource.name}</h3>
          {resource.featured && <span className="featured-badge">★</span>}
        </div>
        <span className={`category-badge ${catClass}`}>{resource.category}</span>
      </div>
      <p className="card-description">{resource.description}</p>
      <div className="card-footer">
        <div className="card-tags">
          {resource.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <span className="card-link-arrow">↗</span>
      </div>
    </a>
  )
}
