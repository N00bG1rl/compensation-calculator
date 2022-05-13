import styles from './FormResult.module.css'

function FormResult() {
	return (
		<article className={styles.formResult}>
			<section>
				<p>The employer compensate 4 days</p>
				<p>112,00€</p>
				<p>Daily allowance 28.00 €</p>
			</section>
			<section>
				<p>Health Insurence compensate 0 days</p>
				<p>0,00€</p>
				<p>Daily allowance 28.00 €</p>
			</section>
			<section>
				<h3>Compensation total for 7 days (net)</h3>
				<p>112,00€</p>
			</section>
		</article>
	)
}

export default FormResult
