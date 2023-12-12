import './result.scss'
import iconCon from '../../assets/images/icon_con.png'
import iconPro from '../../assets/images/icon_pro.png'

interface IResultItem {
	fieldName: string
	status: boolean
}

interface IResult {
	result: IResultItem[]
}

//result for checking, list of hits/clears
export const Result = ({result}: IResult):JSX.Element => {
	return (
		<ul className="result">
			{result.map(item => {
				return (
					<li key={item.fieldName} className="result-item" aria-label='Status for every field'>
						<span className='field-name'>{item.fieldName}:</span>
						<div className="image-wrapper">
							<img src={item.status ? iconPro : iconCon} alt={item.status ? 'Hit' : 'Clear'} />
						</div>
					</li>
				)
			})}
		</ul>
	)
}