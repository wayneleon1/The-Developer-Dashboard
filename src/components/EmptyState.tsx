interface EmptyStateProps {
  query: string
  onReset: () => void
}

export function EmptyState({ query, onReset }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <div className="empty-icon">⌕</div>
      <p className="empty-title">No results for &quot;{query}&quot;</p>
      <p className="empty-sub">Try adjusting your search or filter.</p>
      <button className="reset-btn" onClick={onReset}>
        Reset filters
      </button>
    </div>
  )
}
