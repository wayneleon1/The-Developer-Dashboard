interface SearchBarProps {
  value: string
  onChange: (val: string) => void
  resultCount: number
}

export function SearchBar({ value, onChange, resultCount }: SearchBarProps) {
  return (
    <div className="search-wrapper">
      <div className="search-input-container">
        <span className="search-icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </span>
        <input
          type="text"
          className="search-input"
          placeholder="Search by name, description, or tag..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Search resources"
        />
        {value && (
          <button className="search-clear" onClick={() => onChange('')} aria-label="Clear search">
            ×
          </button>
        )}
      </div>
      <span className="search-count">
        {resultCount} resource{resultCount !== 1 ? 's' : ''}
      </span>
    </div>
  )
}
