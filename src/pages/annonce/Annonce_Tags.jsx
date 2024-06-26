
function AnnonceTags({tags}) {
    return (
      <div className="fiche-log-tag">
          {tags.map(tag => (
            <button key={tag}>{tag}</button>
            ))}
      </div>
    );
  }
export default AnnonceTags
