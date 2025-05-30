'use server'

import { redirect } from 'next/navigation'
import { createClient } from '../utils/supabase/server'

export async function login(data) {
	const supabase = await createClient()

	const { error } = await supabase.auth.signInWithPassword({
		email: data.email.toLowerCase(),
		password: data.password,
	})

	if (error) {
		return { error: 'Niepoprawne dane logowania' }
	}

	redirect('/panel')
}

export async function logout() {
	const supabase = await createClient()

	const { error } = await supabase.auth.signOut()
	if (error) throw new Error(error.message)

	redirect('/')
}

export async function getUserAccount() {
	const supabase = await createClient()

	const { data, error } = await supabase.auth.getUser()

	if (error) {
		throw new Error(error.message)
	}

	return data.user
}

export async function updatePassword(updateData) {
	const supabase = await createClient()

	const { error } = await supabase.auth.updateUser({ password: updateData.password })

	if (error) {
		return { error: 'Wystąpił problem podczas zmiany hasła' }
	}
}
