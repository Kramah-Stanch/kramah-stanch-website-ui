'use server'

import { Resend } from 'resend'
import { z } from 'zod'

const contactFormSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    company: z.string().optional(),
    message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
})

export async function submitContactForm(prevState: unknown, formData: FormData) {
    const validatedFields = contactFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        message: formData.get('message'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to submit contact form.',
        }
    }

    const { name, email, company, message } = validatedFields.data
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
        console.log('⚠️ RESEND_API_KEY is missing. simulate email sending.')
        console.log('--------------------------------------------------')
        console.log(`From: ${name} <${email}>`)
        console.log(`Company: ${company || 'N/A'}`)
        console.log(`Message: ${message}`)
        console.log('--------------------------------------------------')

        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        return {
            success: true,
            message: 'Message sent successfully (Simulated mode: API Key missing).',
        }
    }

    const resend = new Resend(apiKey)

    try {
        const { error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // Use a verified domain in production
            to: ['delivered@resend.dev'], // Send to the owner email, or dynamic based on env
            subject: `New Contact Form Submission from ${name}`,
            replyTo: email,
            text: `
Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}

Message:
${message}
      `,
        })

        if (error) {
            console.error('Resend Error:', error)
            return {
                message: 'Failed to send email. Please try again later.',
                error: error.message
            }
        }

        return {
            success: true,
            message: 'Message sent successfully!',
        }
    } catch (error) {
        console.error('Submission Error:', error)
        return {
            message: 'An unexpected error occurred. Please try again later.',
        }
    }
}
