import { 
    SQUAREUP_API_URL, 
    SQUAREUP_SANDBOX_API_URL, 
    SQUAREUP_ACCESS_TOKEN, 
    SQUAREUP_SANDBOX_ACCESS_TOKEN 
} from '$env/static/private'

export async function GET ({ url }) {

    const limit = url.searchParams.get('limit') || 10
    const categoryID = url.searchParams.get('cat')
    
    const option = {
        headers: {
            'Authorization': `Bearer ${ SQUAREUP_ACCESS_TOKEN }`
        }
    }

    if(categoryID){
        var url = `${ SQUAREUP_API_URL }/catalog/search-catalog-items`
        const categoryIds = {}
        categoryIds.category_ids = [categoryID]
        categoryIds.limit = parseInt(limit)
        option.method = 'POST'
        option.body = JSON.stringify(categoryIds)
    }else{
        var url = `${ SQUAREUP_API_URL }/catalog/list?types=ITEM`
        option.method = 'GET'
    }
    

    try {
        const response = await fetch(url, option)
        let resJSON = await response.json()
        let payload = {}

        if(resJSON.objects){
            payload.objects = await Promise.all(resJSON.objects.slice(0, limit).map(async item => {
                item.img_url = await getFeaturedImage(item)
                return item
            }))
        }else if(resJSON.items){
            payload.objects = await Promise.all(resJSON.items.map(async item => {
                item.img_url = await getFeaturedImage(item)
                return item
            }))
        }

        return new Response(JSON.stringify(payload), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ data: error }), { status: 500 })
    }
}

const getFeaturedImage = async item => {
    var img_url;
    if (item.item_data && item.item_data.image_ids.length) {
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