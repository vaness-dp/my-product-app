'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { FormField } from '@/components/products/create-product/FormField'

import { IFormData } from '@/hooks/useCreateProduct'

interface IProductForm {
	onSubmitAction: SubmitHandler<IFormData>
}

export function ProductForm({ onSubmitAction }: IProductForm) {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IFormData>({ defaultValues: {} as IFormData })

	return (
		<form
			onSubmit={handleSubmit(onSubmitAction)}
			className="max-w-lg space-y-4"
		>
			<FormField
				label="Name"
				registration={register('title', { required: 'Required field' })}
				error={errors.title}
			/>
			<FormField
				label="Description"
				registration={register('description', {
					required: 'Required field',
					minLength: { value: 10, message: 'Minimum 10 characters' }
				})}
				error={errors.description}
				isTextArea={true}
			/>
			<FormField
				label="Image URL"
				registration={register('image', { required: 'Required field' })}
				error={errors.image}
			/>
			<button
				type="submit"
				className="rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-2000 hover:bg-blue-800"
			>
				Create
			</button>
		</form>
	)
}
