import { writable } from 'svelte/store'
import Cookies from 'js-cookie'

const theme = writable('system')

const productID = writable(Cookies.get('product-id') || '')
productID.subscribe(val => Cookies.set('product-id', val))

export { theme, productID }
