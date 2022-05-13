import Header from './header/Header'
import MainContent from './main-content/MainContent'

import styles from './Content.module.css'

function Content() {
	return (
		<section className={styles.content}>
			<Header />
			<MainContent />
		</section>
	)
}

export default Content
