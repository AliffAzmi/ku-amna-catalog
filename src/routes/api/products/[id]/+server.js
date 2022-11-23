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

            let productVariations = {}
            if(item_data.item_options){
                let options_objs = {}
                options_objs.object_ids = item_data.item_options.map(option => option.item_option_id)
                productVariations = await getProductVariations(options_objs, item_data.variations)
            }
            const { variations_stock, total_stock } = await getProductStock(variation_objs)
            item_data.sizes = productVariations.sizes || []
            item_data.colors = productVariations.colors || []
            item_data.variations_stock = variations_stock || []
            item_data.total_stock = total_stock || 0
        }
        return new Response(JSON.stringify(resJSON), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ data: error }), { status: 500 })
    }

}

const getProductVariations = async (options, variations) => {

    var url = `${ SQUAREUP_API_URL }/catalog/batch-retrieve`
    const option = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${ SQUAREUP_ACCESS_TOKEN }`
        },
        body: JSON.stringify(options)
    }

    try {
        const response = await fetch(url, option)
        let res = await response.json()

        const data_options = {}
        const item_option_data = {}
        let sizes = []
        let colors = []
        if(res.objects){
            res.objects.map(opt => item_option_data[opt.item_option_data.name] = opt.item_option_data.values)

            const options_value_ids = variations.map(v => v.item_variation_data.item_option_values.map(iov => iov.item_option_value_id)) // random variations id (colors, sizes, etc...)
            options_value_ids.map(arr => {
                arr.map(id => sizes.push(item_option_data.Sizes.find(s => s.id === id)))
                arr.map(id => colors.push(item_option_data.Color.find(s => s.id === id)))
            })
            const sizes_data = [...new Set(sizes.filter(s => s !== undefined))]
            const colors_data = [...new Set(colors.filter(c => c !== undefined))]
            data_options.sizes = sizes_data || []
            data_options.colors = colors_data || []
        }
        return data_options

    } catch (error) {
        return error
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