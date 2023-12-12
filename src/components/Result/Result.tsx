import svgs from '../additions/svgs'
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

export const Result = ({result}: IResult):JSX.Element => {
	return (
		<div className="result">
			{result.map(item => {
				return (
					<div key={item.fieldName} className="result-item">
						<span className='field-name'>{item.fieldName}:</span>
						<div className="image-wrapper">
							<img src={item.status ? iconPro : iconCon} alt={item.status ? 'Hit' : 'Clear'} />
						</div>
					</div>
				)
			})}
		</div>
	)
}