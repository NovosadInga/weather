import s from './NotFound.module.scss'
import cloud from './../../assets/img/cloud-error.png'
import { Button } from '../../components/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
export const NotFound = () => {
	const navigate = useNavigate()
	return (
		<div className={s.error}>
			<div className="container">
				<div className="card">
					<div className={s.content}>
						<img className={s.img} src={cloud} alt="" />
						<h1 className={s.title}>404</h1>
						<div className={s.text}>
							<p>Такої сторінки не існує</p>
							<p>Ви можете дізнатись прогноз погоди у Вашому місті, пройшовши за посиланням</p>
						</div>
						<Button text="На головну" classes='error_btn' onClick={() => { navigate('/') }} />
					</div>
				</div>
			</div>
		</div>
	);
}
