import { URL, URLSearchParams } from 'url'

import { 
    SQUAREUP_API_URL, 
    SQUAREUP_SANDBOX_API_URL, 
    SQUAREUP_ACCESS_TOKEN, 
    SQUAREUP_SANDBOX_ACCESS_TOKEN 
} from '$env/static/private'

export async function GET ({ url }) {

    const limit = url.searchParams.get('limit') || 10
    var url = new URL(`${ SQUAREUP_SANDBOX_API_URL }/catalog/list`)
    let opt = { types: 'ITEM' }
    url.search = new URLSearchParams(opt).toString();
    const option = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ SQUAREUP_SANDBOX_ACCESS_TOKEN }`
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
        return new Response(JSON.stringify(payload), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ data: error }), { status: 500 })
    }

}