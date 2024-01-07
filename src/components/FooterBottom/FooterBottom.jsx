import { useSelector } from 'react-redux';
import { getFooterBottomDataSelector } from '../../features/footerBottom/footerBottomSlice';
import './FooterBottom.scss';

export default function FooterBottom() {
	const data = useSelector(getFooterBottomDataSelector);

	return (
		<div className="FooterBottom">
			<p className="FooterBottom-content">{data}</p>
		</div>
	);
}
