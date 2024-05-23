
export async function getAtores() {
    const url = 'http://localhost:8080/v3/acmefilmes/atores';
    const response = await fetch(url);
    const data = await response.json();
    return data.ator;
}

export async function getAtoresId(id_ator) {
    const url = `http://localhost:8080/v3/acmefilmes/atores/${id_ator}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.ator[0];
}

export async function postAtor(ator) {
    const url = 'http://localhost:8080/v3/acmefilmes/atores';
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(ator)
    };
    const response = await fetch(url, options);
    return response.ok;
}

export async function putAtor(ator) {
    const url = `http://localhost:8080/v3/acmefilmes/atores/${ator.id_ator}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(ator)
    };
    const response = await fetch(url, options);
    return response.ok;
}

export async function deleteFilme(id_ator){
    try{
        await fetch(`http://localhost:8080/v3/acmeFilmes/atores/${id_ator}`,{
            method: 'DELETE'
        })
        console.log("ator excluído com sucesso")
    } catch (error){
        console.error('Erro ao excluir ator: ',error);
    }
}

