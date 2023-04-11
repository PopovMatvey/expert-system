// Request on server
// url - url request
// method - http method
// data - json object (requested object)
export async function request(parUrl: string, parMethod = 'GET', parData = null) {
    try {
        let response: Response;
        const httpObject: RequestInit = {
            method: parMethod, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'content-type': 'application/json',
                'status': '200',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(parData), // body data type must match "Content-Type" header
        }

        response = await fetch(parUrl, httpObject);

        return await response.status;
    } catch (e: any) {
        console.warn("Error:", e.message);
    }
}