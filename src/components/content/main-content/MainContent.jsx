import sideImage from '../../../assets/Image.png'
import styles from './MainContent.module.css'

function MainContent() {
	return (
		<main>
			<article className={styles.sideImageContent}>
				<div>
					<h2>Fringilla Euismod Adipiscing Ipsum</h2>
					<p>
						Cum sociis natoque penatibus et magnis dis parturient montes,
						nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean
						lacinia bibendum nulla sed.
					</p>
				</div>

				<img src={sideImage} className={styles.sideImage} alt='Decorative' />
			</article>

			<ul>
				<li>Tellus Ullamcorper Inceptos</li>
				<li>
					Magna Condimentum
					<ul>
						<li>Mattis Tristique</li>
						<li>Pharetra Pellentesque Dapibus</li>
					</ul>
				</li>
				<li>Aenean Inceptos</li>
				<li>Parturient Bibendum</li>
			</ul>
		</main>
	)
}

export default MainContent
