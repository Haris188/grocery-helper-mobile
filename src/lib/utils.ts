import axios from "axios";

export const serverUrl = 'http://10.0.2.2:4000'

export async function serverRequest(method:string, path:string, data:Object | null = null) {
    const result = await axios({
        method,
        url: `${serverUrl}${path}`,
        data
    })
        .catch(async (e) => {
            console.log(e)
        })

    return result?.data
}
