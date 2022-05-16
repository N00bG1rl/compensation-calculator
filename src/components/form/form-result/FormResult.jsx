import styles from './FormResult.module.css'

function FormResult({ result }) {
	const {
		compensatedDaysFromEmployer,
		compensatedDaysFromHealthInsurance,
		compensatedAmountFromEmployer,
		compensatedAmountFromHealthInsurance,
		dailyAllowance,
		totalSickDays,
		totalCompensationAmount,
	} = result

	const replacePoints = number => {
		return number.toString().replace(/\./g, ',')
	}

	return (
		<article className={styles.formResult}>
			<article className={styles.overview}>
				<section>
					<p>
						The employer compensates <br />
						<b>{compensatedDaysFromEmployer} days</b>
					</p>
					<p className={styles.resultSum}>
						{replacePoints(compensatedAmountFromEmployer)}€
					</p>
					<p className={styles.dailySum}>
						Daily allowance <br /> {replacePoints(dailyAllowance)} €
					</p>
				</section>
				<section>
					<p>
						Health Insurance compensates <br />
						<b>{compensatedDaysFromHealthInsurance} days</b>
					</p>
					<p className={styles.resultSum}>
						{replacePoints(compensatedAmountFromHealthInsurance)}€
					</p>
					<p className={styles.dailySum}>
						Daily allowance <br /> {replacePoints(dailyAllowance)} €
					</p>
				</section>
			</article>
			<section className={styles.totalAmount}>
				<p>Compensation total for {totalSickDays} days (net)</p>
				<p className={styles.totalSum}>
					{replacePoints(totalCompensationAmount)}€
				</p>
			</section>
		</article>
	)
}

export default FormResult
