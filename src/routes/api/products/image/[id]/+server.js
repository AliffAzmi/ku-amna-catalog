// import { URL, URLSearchParams } from 'url'

import { 
    SQUAREUP_API_URL, 
    SQUAREUP_SANDBOX_API_URL, 
    SQUAREUP_ACCESS_TOKEN, 
    SQUAREUP_SANDBOX_ACCESS_TOKEN 
} from '$env/static/private'

export async function GET ({ params }) {

    const { id } = params
    var endpoint = `${ SQUAREUP_API_URL }/catalog/object/${id}`
    const option = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ SQUAREUP_ACCESS_TOKEN }`
        }
    }
    try {
        const response = await fetch(endpoint, option)
        let payload = await response.json()
        return new Response(JSON.stringify(payload), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ data: error }), { status: 500 })
    }

}