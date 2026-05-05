import emailjs from '@emailjs/browser'

export type ContactPayload = {
  name: string
  email: string
  phone: string
  message: string
}

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const isConfigured = Boolean(
  serviceId && templateId && publicKey && serviceId !== 'mock',
)

/**
 * Envia o formulário via EmailJS quando as variáveis de ambiente estão definidas;
 * caso contrário simula envio (adequado a sites estáticos em desenvolvimento).
 */
export async function sendContactForm(data: ContactPayload): Promise<void> {
  if (!isConfigured) {
    await new Promise((r) => setTimeout(r, 900))
    return
  }

  await emailjs.send(
    serviceId!,
    templateId!,
    {
      from_name: data.name,
      reply_to: data.email,
      phone: data.phone,
      message: data.message,
    },
    { publicKey: publicKey! },
  )
}
