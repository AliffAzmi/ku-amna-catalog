import { 
    SQUAREUP_API_URL, 
    SQUAREUP_SANDBOX_API_URL, 
    SQUAREUP_ACCESS_TOKEN, 
    SQUAREUP_SANDBOX_ACCESS_TOKEN 
} from '$env/static/private'

export async function POST ({ request, response }) {
    try {
        var url = `${ SQUAREUP_API_URL }/catalog/list?types=CATEGORY`
        const option = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${ SQUAREUP_ACCESS_TOKEN }`
            }
        }
        const response = await fetch(url, option)
        const categories = await response.json()
        return new Response(JSON.stringify({ data: categories?.objects || [] }), {
            status: 200
        })
    } catch (error) {
        return error
    }   
}