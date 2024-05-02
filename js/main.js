'use strict'
import {getFilmes, postFilme, selectNameFilmes, getFilmeId} from "./filmes.js"

console.table(await getFilmes())


const search = new URLSearchParams(window.location.search).get('search')
const searchBar = document.getElementById('searchBar')
const container = document.getElementById('container')

const searchButton = document.getElementById('searchButton')
searchButton.addEventListener('click', pesquisar)
async function pesquisar(){
    const pesquisaFilme = await selectNameFilmes(searchBar.value)
    const listaFilmes = pesquisaFilme.filmes
    apagarListaFilmes()

    listaFilmes.forEach(element => {
        console.log(element);
        criarCard(element)
    });
}

searchBar.addEventListener('keypress', (event)=>{
    if(event.key === "Enter"){
        pesquisar()
    }
})
function apagarListaFilmes(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}



function criarCard (filme){
    container.classList.add('gap-8')
    const card = document.createElement('div')
    card.classList.add('flex')
    card.classList.add('flex-col')
    card.classList.add('text-[#fafafa]')
    card.classList.add('justify-center')
    card.classList.add('cursor-pointer')
    const titulo = document.createElement('h2')
    titulo.classList.add('bg-[#09090b]')
    titulo.classList.add('text-center')
    titulo.classList.add('mr-1')
    titulo.classList.add('w-64')
    titulo.classList.add('border-b-10')
    titulo.classList.add('border-x-4')
    titulo.classList.add('border-[#fafafa]')
    const texto = document.createElement('p')
    texto.textContent = filme.sinopse
    texto.classList.add('w-72')
    const preco = document.createElement('p')
    preco.textContent = filme.valor_unitario
    const capa = document.createElement('img')
    capa.src = filme.foto_capa
    capa.classList.add('max-h-[360px]', 'min-h-[360px]')
    capa.classList.add('w-64')
    capa.classList.add('border-t-4')
    capa.classList.add('border-x-4')
  
    const dataLancamento = document.createElement('p')
    dataLancamento.textContent = filme.data_lancamento
    card.append(capa, titulo)
    container.appendChild(card)
    card.addEventListener('click',()=> {
        window.location.href='../sobre.html?id='+filme.id_filme
    })
}

async function preencherContainer(){
    const container = document.querySelector('body')

    const filmes = await getFilmes()

    filmes.forEach(filme => {
        criarCard(filme)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const deleteButton = document.getElementById('deleteButton');
    deleteButton.addEventListener('click', async () => {
        try {
            await deleteFilme(id);
            window.location.href = './dashboard.html';
        } catch (error) {
            console.error('Erro ao excluir filme:', error);
        }
    });
});


preencherContainer()
