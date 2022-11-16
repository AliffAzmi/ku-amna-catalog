import { 
    SQUAREUP_API_URL, 
    SQUAREUP_SANDBOX_API_URL, 
    SQUAREUP_ACCESS_TOKEN, 
    SQUAREUP_SANDBOX_ACCESS_TOKEN 
} from '$env/static/private'

export async function load ({ url, params }) {
    try {
      const categories = await getPayload('CATEGORY')
      const products = await getPayload('ITEM', 8)
      return {
          status: 200,
          categories: categories,
          products: products
      }
    } catch (error) {
        return error
    }
}

const getPayload = async (type, limit=8) => {
    var url = `${ SQUAREUP_API_URL }/catalog/list?types=${type}`
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
            payload = resJSON.objects.slice(0, limit).map(item => {
                if(item.type === 'CATEGORY'){
                    item.img_url = `${item.category_data.name.split(' ').join('_').toLowerCase()}_cat_cover.png`
                } else {
                    item = item
                }
                return item
            })
        }else{
            payload = resJSON
        }
        return payload
    } catch (error) {
        console.log(error)
    }
}