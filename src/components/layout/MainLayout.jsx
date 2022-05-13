import Content from '../content/Content'
import Form from '../form/Form'

import styles from './MainLayout.module.css'

function MainLayout() {
	return (
		<div className={styles.wrapper}>
			<Content />
			<Form />
		</div>
	)
}

export default MainLayout
