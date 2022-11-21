import { 
    SQUAREUP_API_URL, 
    SQUAREUP_SANDBOX_API_URL, 
    SQUAREUP_ACCESS_TOKEN, 
    SQUAREUP_SANDBOX_ACCESS_TOKEN 
} from '$env/static/private'

export async function GET ({ params }) {

    var url = `${ SQUAREUP_API_URL }/catalog/object/${params.id}?include_related_objects=true`
    const option = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ SQUAREUP_ACCESS_TOKEN }`
        }
    }

    try {
        const response = await fetch(url, option)
        let resJSON = await response.json()

        if(resJSON.object){
            const { item_data } = resJSON.object

            const variation_objs = {}
            variation_objs.catalog_object_ids = item_data.variations.map(variation => variation.id)
            
            const { variations_stock, total_stock } = await getProductStock(variation_objs)
            item_data.variations_stock = variations_stock
            item_data.total_stock = total_stock
        }
        return new Response(JSON.stringify(resJSON), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ data: error }), { status: 500 })
    }

}

const getProductStock = async (variation_objs) => {
    var url = `${ SQUAREUP_API_URL }/inventory/counts/batch-retrieve`
    const option = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${ SQUAREUP_ACCESS_TOKEN }`
        },
        body: JSON.stringify(variation_objs)
    }
    try {
        const response = await fetch(url, option)
        let res = await response.json()
        let total_stock = 0
        const items = {}
        items.variations_stock = res.counts
        for (var i = 0; i < res.counts.length; i++) {
            total_stock = total_stock + parseInt(res.counts[i].quantity);
        }
        items.total_stock = total_stock
        return items
    } catch (error) {
        return error
    }
}