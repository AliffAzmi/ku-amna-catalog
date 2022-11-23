import { writable } from 'svelte/store'
import Cookies from 'js-cookie'

const theme = writable('system')

const productID = writable(Cookies.get('product-id') || '')
productID.subscribe(val => Cookies.set('product-id', val))

const categoryID = writable(Cookies.get('category-id') || '')
categoryID.subscribe(val => Cookies.set('category-id', val))

export { theme, productID, categoryID }
