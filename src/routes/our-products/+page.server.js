import { 
    SQUAREUP_API_URL,
    SQUAREUP_ACCESS_TOKEN
} from '$env/static/private'

export async function load ({ url, params }) {
    try {
      const products = await getProducts()
      return {
          status: 200,
          products: products
      }
    } catch (error) {
        return error
    }
}

const getProducts = async (limit=100) => {
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