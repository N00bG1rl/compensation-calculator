import { useState } from 'react'

import FormContent from './form-content/FormContent'
import FormResult from './form-result/FormResult'

import styles from './Form.module.css'

const initialFormState = {
	income: '',
	sickDays: '',
}

const initialResultState = {
	compensatedDaysFromEmployer: 0,
	compensatedDaysFromHealthInsurance: 0,
	compensatedAmountFromEmployer: 0,
	compensatedAmountFromHealthInsurance: 0,
	dailyAllowance: 0,
	totalSickDays: 0,
	totalCompensationAmount: 0,
}

function Form() {
	const [formInputFields, setFormInputFields] = useState(initialFormState)
	const [calculatedResult, setCalculatedResult] = useState(initialResultState)
	const [isTuberculosis, setIsTuberculosis] = useState(false)

	const sanitizeInput = input => {
		return input.replace(/\D/g, '')
	}

	const { income, sickDays } = formInputFields
	const sanitizedIncome = sanitizeInput(income)
	const sanitizedSickDays = sanitizeInput(sickDays)
	const maxInsuranceDays = 182
	const maxInsuranceDaysWithTuberculosis = 240
	const compensatedByEmployer = 8
	const notCoveredDays = 3
	const maxDaysFromEmployer = 5
	const daysInMonth = 30
	const compensationRate = 0.7
	const taxAmount = 0.2

	const handleTuberculosisCheckboxChange = () => {
		setIsTuberculosis(!isTuberculosis)
	}

	const handleFormChange = event => {
		setFormInputFields({
			...formInputFields,
			[event.currentTarget.name]: event.currentTarget.value,
		})
	}

	const averageDailyAmount = () => {
		const monthlyCompensationAmountWithTaxes =
			sanitizedIncome * compensationRate
		const monthlyIncomeTaxAmount =
			monthlyCompensationAmountWithTaxes * taxAmount
		const monthlyCompensationAmount =
			monthlyCompensationAmountWithTaxes - monthlyIncomeTaxAmount
		const dailyAvgCompensation = monthlyCompensationAmount / daysInMonth

		return dailyAvgCompensation.toFixed(2)
	}

	const compensationAmount = (amountPerDay, days) => {
		return (amountPerDay * days).toFixed(2)
	}

	const totalCompensationAmount = (employerAmount, healthInsuranceAmount) => {
		return (
			parseFloat(employerAmount) + parseFloat(healthInsuranceAmount)
		).toFixed(2)
	}

	const checkFormInputsValidity = () => {
		if (!sanitizedIncome || !sanitizedSickDays) {
			return false
		}

		return true
	}

	const handleFormSubmit = event => {
		event.preventDefault()

		const isFormInputsValid = checkFormInputsValidity()

		let dailyCompensation = 0
		let daysFromEmployer = 0
		let daysFromHealthInsurance = 0

		if (sanitizedSickDays <= notCoveredDays) {
			dailyCompensation = 0
		} else {
			dailyCompensation = averageDailyAmount()
		}

		if (isFormInputsValid) {
			if (sanitizedSickDays <= compensatedByEmployer) {
				daysFromEmployer = sanitizedSickDays - notCoveredDays
			} else {
				daysFromEmployer = maxDaysFromEmployer

				if (sanitizedSickDays > maxInsuranceDays && !isTuberculosis) {
					daysFromHealthInsurance = maxInsuranceDays - compensatedByEmployer
				} else if (sanitizedSickDays > maxInsuranceDaysWithTuberculosis) {
					daysFromHealthInsurance =
						maxInsuranceDaysWithTuberculosis - compensatedByEmployer
				} else {
					daysFromHealthInsurance = sanitizedSickDays - compensatedByEmployer
				}
			}

			const fromEmployer = compensationAmount(
				dailyCompensation,
				daysFromEmployer
			)

			const fromHealthInsurance = compensationAmount(
				dailyCompensation,
				daysFromHealthInsurance
			)

			const totalCompensation = totalCompensationAmount(
				fromEmployer,
				fromHealthInsurance
			)

			setCalculatedResult({
				compensatedDaysFromEmployer: daysFromEmployer,
				compensatedDaysFromHealthInsurance: daysFromHealthInsurance,
				compensatedAmountFromEmployer: fromEmployer,
				compensatedAmountFromHealthInsurance: fromHealthInsurance,
				dailyAllowance: dailyCompensation,
				totalSickDays: sanitizedSickDays,
				totalCompensationAmount: totalCompensation,
			})
		}
	}

	return (
		<section className={styles.formWrapper}>
			<FormContent
				onFormChange={handleFormChange}
				onCheckboxClick={handleTuberculosisCheckboxChange}
				onFormSubmit={handleFormSubmit}
				isCheckboxChecked={isTuberculosis}
			/>
			<FormResult result={calculatedResult} />
		</section>
	)
}

export default Form
