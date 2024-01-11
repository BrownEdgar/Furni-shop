import { useSelector } from 'react-redux';
import './BestFurniture.scss';
import { getBestFurnitureDataSelector } from '../../features/bestFurniture/bestFurnitureSlice';

export default function BestFurniture() {
	const data = useSelector(getBestFurnitureDataSelector);

	return (
		<div className="BestFurniture">
			<div className="container">
				<div className="BestFurniture-textWrapper">
					<h2 className="BestFurniture-title">{data.title}</h2>
					<span className="BestFurniture-body">{data.body}</span>
				</div>
				<div className="BestFurniture-imageWrapper">
					<img src={`./${data.img}`} alt="furniture" />
				</div>
			</div>
		</div>
	);
}
