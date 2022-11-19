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
        const payload = Promise.all(resJSON.objects.map(async items => {
            items.img_url = await getFeaturedImage(items)
            return items
        }))
        return payload
    } catch (error) {
        console.log(error)
    }
}

const getFeaturedImage = async item => {
    var img_url;
    if (item.item_data.image_ids && item.item_data.image_ids.length) {
        var endpoint = `${ SQUAREUP_API_URL }/catalog/object/${item.item_data.image_ids[0]}`
        const option = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${ SQUAREUP_ACCESS_TOKEN }`
            }
        }
        const response = await fetch(endpoint, option)
        let data = await response.json()
        img_url =
            data?.object?.image_data?.url ||
            'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80';
    } else {
        img_url =
            'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80';
    }
    return img_url
}