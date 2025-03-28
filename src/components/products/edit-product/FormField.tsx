'use client'

import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

interface IFormField {
	label: string
	error?: FieldError
	registration: UseFormRegisterReturn
	textarea?: boolean
}

export function FormField({
	label,
	error,
	registration,
	textarea
}: IFormField) {
	return (
		<div className="mb-4">
			<label className="mb-1 block">{label}</label>
			{textarea ? (
				<textarea
					{...registration}
					className="w-full rounded border p-2"
				/>
			) : (
				<input
					{...registration}
					className="w-full rounded border p-2"
				/>
			)}
			{error && <p className="text-sm text-red-500">{error.message}</p>}
		</div>
	)
}
