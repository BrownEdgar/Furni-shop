import { useSelector } from 'react-redux';
import { CheckIcon } from '../../icons';
import { getDataSelector } from '../../features/createSection/createSectionSlice';
import './CreateSection.scss';

export default function CreateSection() {
	const data = useSelector(getDataSelector);

	return (
		<div className="CreateSection container">
			<div className="CreateSection-imageWrapper">
				<img src={`/images/${data.img}`} alt="aestetic home with furniture" />
			</div>
			<div className="CreateSection-textWrapper flexbox">
				<h1 className="CreateSection-title title">{data.title}</h1>
				<p className="CreateSection-description body">{data.desc}</p>
				<div className="CreateSection-checklist flexbox">
					{data.checklist.map((check) => (
						<div className="CreateSection-check flexbox" key={check.key}>
							<CheckIcon />
							<div className="CreateSection-gago">
								<h4 className="CreateSection-subtitle title">{check.title}</h4>
								<span className="CreateSection-body body">{check.body}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
