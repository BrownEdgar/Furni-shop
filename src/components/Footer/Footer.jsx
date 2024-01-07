import { FooterBottom, FooterMiddle, FooterTop } from '../';
import './Footer.scss';

export default function Footer() {
	return (
		<footer className="Footer">
			<div className="container">
				<FooterTop />
				<hr />
				<FooterMiddle />
				<FooterBottom />
			</div>
		</footer>
	);
}
