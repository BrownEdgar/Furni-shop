import { useSelector } from 'react-redux';
import { getFooterMiddleDataSelector } from '../../features/footerMiddle/footerMiddleSlice';
import './FooterMiddle.scss';

export default function FooterMiddle() {
	const data = useSelector(getFooterMiddleDataSelector);

	return (
		<div className="FooterMiddle">
			{data.map((elem) => (
				<div key={elem.id} className="FooterMiddle-section">
					<p className="FooterMiddle-sectionTitle">{elem.title}</p>
					<div className="FooterMiddle-list">
						{elem.productList.map((listElem) => (
							<p key={listElem.id} className="FooterMiddle-listElement">
								{listElem.body}
							</p>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
