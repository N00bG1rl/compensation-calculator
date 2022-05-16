import styles from './FormContent.module.css'

function FormContent({
	onFormChange,
	onCheckboxClick,
	onFormSubmit,
	isCheckboxChecked,
}) {
	return (
		<form onSubmit={onFormSubmit} className={styles.formContent}>
			<h4>
				Compensation <br /> Calculator
			</h4>
			<p className={styles.formInputWrapper}>
				<label htmlFor='income'>Average income</label>
				<span>
					<input
						id='income'
						name='income'
						type='number'
						inputMode='numeric'
						required
						min='0'
						max='100000'
						onChange={onFormChange}
					/>
					€
				</span>
			</p>
			<p className={styles.formInputWrapper}>
				<label htmlFor='sick-days'>Days on sick-leave</label>
				<span>
					<input
						id='sick-days'
						name='sickDays'
						type='number'
						inputMode='numeric'
						required
						min='0'
						max='365'
						onChange={onFormChange}
					/>
					days
				</span>
			</p>
			<p className={styles.checkboxWrapper}>
				<input
					type='checkbox'
					id='tubercolosis'
					name='tubercolosis'
					checked={isCheckboxChecked}
					onChange={onCheckboxClick}
					className={styles.checkbox}
				/>
				<label htmlFor='tubercolosis'>I have tubercolosis</label>
			</p>
			<button type='submit' className={styles.submitBtn}>
				Calculate
			</button>
		</form>
	)
}

export default FormContent
