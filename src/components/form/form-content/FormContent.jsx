import styles from './FormContent.module.css'

function FormContent() {
	return (
		<form className={styles.formContent}>
			<h4>
				Compensation <br /> Calculator
			</h4>
			<p className={styles.formInputWrapper}>
				<label htmlFor='income'>Average income</label>
				<span>
					<input
						id='income'
						type='number'
						inputMode='numeric'
						required
						min='0'
						max='100000'
					/>
					€
				</span>
			</p>
			<p className={styles.formInputWrapper}>
				<label htmlFor='sick-days'>Days on sick-leave</label>
				<span>
					<input
						id='sick-days'
						type='number'
						inputMode='numeric'
						required
						min='0'
						max='240'
					/>
					days
				</span>
			</p>
			<p className={styles.checkboxWrapper}>
				<input type='checkbox' className={styles.checkbox} />
				<label>I have tubercolosis</label>
			</p>
			<button className={styles.submitBtn}>Calculate</button>
		</form>
	)
}

export default FormContent
