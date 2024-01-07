import { useSelector } from 'react-redux';
import { getFooterTopDataSelector } from '../../features/footerTop/footerTopSlice';
import './FooterTop.scss';

export default function FooterTop() {
	const data = useSelector(getFooterTopDataSelector);

	return (
		<div className="FooterTop">
			<h4 className="FooterTop-title">{data.title}</h4>
			<ul className="FooterTop-socialPageList">
				{data.socialIcons.map((elem) => (
					<li key={elem.id} className="FooterTop-iconWrapper">
						<a href={elem.link}>
							<img src={`./src/assets/${elem.icon}.svg`} alt={elem.name} />
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
