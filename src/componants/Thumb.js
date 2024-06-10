import '../styles/Thumb.css'
import { LogementList } from "../datas/Logement"

function Thumb() {
    let logements = LogementList.map(function(element) {
        return(
        <li key={element.id}> 
            <article className='kasa-thumb-article' style={{ 
      backgroundImage:`url(${element.cover})`}} alt={element.name} >
                <div className='kasa-thumb-article__title'>{element.name}</div>
            </article>
        </li> 
        )
        
    })

	return (
		<div className='kasa-thumb'>
			<ul className='kasa-logements-list'>
                {logements}
			</ul>
		</div>
	)
}

export default Thumb