import styles from './FormContent.module.css'

function FormContent() {
	return (
		<form action='' className={styles.form}>
			<h1>Compensation Calculator</h1>
			<p>
				<label htmlFor=''>Average income</label>
				<input
					id=''
					type='number'
					inputMode='numeric'
					required
					min='0'
					max='100000'
				/>
				<span>€</span>
			</p>
			<p>
				<label>Days on sick-leave</label>
				<input
					id=''
					type='number'
					inputMode='numeric'
					required
					min='0'
					max='240'
				/>
				<span>days</span>
			</p>
			<p>
				<label>I have tubercolosis</label>
				<input type='checkbox' />
			</p>
			<button>Calculate</button>
		</form>
	)
}

export default FormContent
