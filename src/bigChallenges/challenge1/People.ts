export async function getPeople(page = 1) {
    try {
        const response = await fetch(
            `https://swapi.dev/api/people/?page=${page}`
        );
        if (!response.ok) return _handleError(response.status);
        const data = await response.json();
        return data;
    } catch (err:any) {
        throw new Error(err);
    }
}

export async function getCharacter(id = 1) {
    try {
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);
        const data = await response.json();
        return data;
    } catch (err:any) {
        throw new Error(err);
    }
}

export async function searchCharacter(name:string) {
    try {
        const response = await fetch(
            `http://swapi.dev/api/people/?search=${name}`
        );
        const data = await response.json();
        return data;
    } catch (err:any) {
        throw new Error(err);
    }
}

function _handleError(status:number) {
    if (status === 404) {
        throw new Error("The resource you requested was not found.");
    }

    if (status === 500) {
        throw new Error("There was a server error.");
    }
}
