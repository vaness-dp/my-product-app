'use client'

import React from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

interface IFormField {
	label: string
	registration: UseFormRegisterReturn
	error?: FieldError
	isTextArea?: boolean
}

export function FormField({
	label,
	registration,
	error,
	isTextArea = false
}: IFormField) {
	return (
		<div className="mb-4">
			<label className="mb-1 block">{label}</label>
			{isTextArea ? (
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
