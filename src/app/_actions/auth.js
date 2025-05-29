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
