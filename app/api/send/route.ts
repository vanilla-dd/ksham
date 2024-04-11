import { EmailTemplate } from '../../../components/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'Ksham <onboarding@resend.dev>',
            text: 'Early Signup',
            to: ['uppercase.lowercase.num@gmail.com'],
            subject: 'Welcome',
            react: EmailTemplate({ firstName: 'John' }),
        })

        return Response.json(data)
    } catch (error) {
        return Response.json({ error })
    }
}
