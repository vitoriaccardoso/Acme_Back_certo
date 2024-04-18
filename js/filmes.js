
export async function getFilmes() {
    const url = 'http://localhost:8080/v2/acmefilmes/filmes';
    const response = await fetch(url);
    const data = await response.json();
    return data.filmes;
}

export async function getFilmeId(id) {
    const url = `http://localhost:8080/v2/acmefilmes/filme/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.filme[0];
}

export async function postFilme(filme) {
    const url = 'http://localhost:8080/v2/acmefilmes/filme';
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(filme)
    };
    const response = await fetch(url, options);
    return response.ok;
}

export async function putFilme(filme) {
    const url = `http://localhost:8080/v2/acmefilmes/filme/${filme.id}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(filme)
    };
    const response = await fetch(url, options);
    return response.ok;
}

export async function deleteFilme(id){
    try{
        await fetch(`http://localhost:8080/v2/acmeFilmes/filme/${id}`,{
            method: 'DELETE'
        })
        console.log("Filme excluído com sucesso")
    } catch (error){
        console.error('Erro ao excluir filme: ',error);
    }
}

export async function selectNameFilmes(name) {
    const url = `http://localhost:8080/v2/acmefilmes/filmes?nome=${name}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.filmes;
}