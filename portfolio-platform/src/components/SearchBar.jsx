// A "controlled input": React state decides what the box shows
function SearchBar({ value, onChange }) {
  return (
    <div className="search">
      <label htmlFor="search">Search Projects</label>
      <input
        id="search"
        type="text"
        placeholder="Type a project title..."
        value={value}
        // Every keystroke sends the new text up to the parent
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;