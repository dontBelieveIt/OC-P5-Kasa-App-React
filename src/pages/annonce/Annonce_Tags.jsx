
function AnnonceTags({tags}) {
  console.log(tags)
    return (
      <div className="fiche-log-tag">
        <ul>
        {/* {tags.map((tag => (<button key={tag}>{tag}</button>)))} */}
        {/* <button>{tags[0].value}</button>
        <button>Paris 10</button>
        <button>Cozy</button> */}
          {tags.map(tag => (
            <li key={tag}><button>{tag}</button></li>
            ))}
        </ul>
      </div>
    );
  }
export default AnnonceTags
