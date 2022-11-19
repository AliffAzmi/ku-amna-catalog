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
        return new Response(JSON.stringify(resJSON), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ data: error }), { status: 500 })
    }

}