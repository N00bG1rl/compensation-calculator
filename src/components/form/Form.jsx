import FormContent from './form-content/FormContent'
import FormResult from './form-result/FormResult'

import styles from './Form.module.css'

function Form() {
	return (
		<section className={styles.formWrapper}>
			<FormContent />
			<FormResult />
		</section>
	)
}

export default Form
