import styles from './FormResult.module.css'

function FormResult() {
	return (
		<article className={styles.formResult}>
			<article className={styles.overview}>
				<section>
					<p>
						The employer compensates <br /> <b>4 days</b>
					</p>
					<p className={styles.resultSum}>112,00€</p>
					<p className={styles.dailySum}>
						Daily allowance <br /> 28,00 €
					</p>
				</section>
				<section>
					<p>
						Health Insurance compensates <br /> <b>0 days</b>
					</p>
					<p className={styles.resultSum}>0,00€</p>
					<p className={styles.dailySum}>
						Daily allowance <br /> 28,00 €
					</p>
				</section>
			</article>
			<section className={styles.totalAmount}>
				<p>Compensation total for 7 days (net)</p>
				<p className={styles.totalSum}>112,00€</p>
			</section>
		</article>
	)
}

export default FormResult
