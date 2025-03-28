'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { FormField } from '@/components/products/edit-product/FormField'

export interface IEditProductFormData {
	title: string
	description: string
	image: string
}

interface IProductForm {
	defaultValues: IEditProductFormData
	onSubmitAction: SubmitHandler<IEditProductFormData>
}

export function ProductForm({ defaultValues, onSubmitAction }: IProductForm) {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IEditProductFormData>({
		defaultValues
	})

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
				textarea
			/>
			<FormField
				label="Image URL"
				registration={register('image', { required: 'Required field' })}
				error={errors.image}
			/>
			<button
				type="submit"
				className="rounded bg-blue-500 px-4 py-2 text-white"
			>
				Save changes
			</button>
		</form>
	)
}
