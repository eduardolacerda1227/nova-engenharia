/** Número internacional sem símbolos: +55 61 8412-0485 */
const WHATSAPP_E164 = '556184120485'

const defaultMessage = encodeURIComponent(
  'Olá! Vim pelo site da Nova Engenharia e gostaria de conversar.',
)

export const whatsappUrl = `https://wa.me/${WHATSAPP_E164}?text=${defaultMessage}`
