import '../styles/Thumb.css'
import { LogementList } from "../datas/Logement"

function Thumb() {
	const logement = LogementList.reduce(
		(acc, location) =>
			acc.includes(location.category) ? acc : acc.concat(location.category),
		[]
	)

	return (
		<div>
			<ul>
				{logement.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='kasa-logements-list'>
				{LogementList.map(({ id, cover, name}) => (
						<li key={LogementList.id}>{LogementList.name}</li>
				))}
			</ul>
		</div>
	)
}

export default Thumb

