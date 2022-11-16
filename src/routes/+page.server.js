import { 
    SQUAREUP_API_URL, 
    SQUAREUP_SANDBOX_API_URL, 
    SQUAREUP_ACCESS_TOKEN, 
    SQUAREUP_SANDBOX_ACCESS_TOKEN 
} from '$env/static/private'

import db from '$lib/db'

export async function load ({ url, params }) {
    try {
      const categories = await db.collection('categories').find().toArray()
      const products = await getProducts()
      return {
          status: 200,
          categories: categories.map(items => items.category_data),
          products: products
      }
    } catch (error) {
        return error
    }
}

const getProducts = async (limit=8) => {
    var url = `${ SQUAREUP_API_URL }/catalog/list?types=ITEM`
    const option = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ SQUAREUP_ACCESS_TOKEN }`
        }
    }

    try {
        const response = await fetch(url, option)
        let resJSON = await response.json()
        let payload = {}
        if(resJSON.objects){
            payload.objects = resJSON.objects.slice(0, limit)
        }else{
            payload = resJSON
        }
        return payload
    } catch (error) {
        console.log(error)
    }
}