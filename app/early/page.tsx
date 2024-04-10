'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

const formSchema = z.object({
    email: z
        .string({ invalid_type_error: 'Recheck the email' })
        .email({ message: 'Enter a valid email' }),
})

// still wip
function ProfileForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values.email),
            })
            if (response.ok) {
                // handle success
                toast.success('Registration Successful')
                console.log('Email sent successfully')
            } else {
                // handle error
                console.error('Error sending email')
            }
        } catch (error) {
            console.error('Error sending email:', error)
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="example@gmail.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                {"You'll receive a conformation email"}
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
export default ProfileForm
