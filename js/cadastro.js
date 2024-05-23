import { postFilme } from "./filmes.js";


document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.getElementById('titulo');
    const sinopse = document.getElementById('sinopse');
    const duracao = document.getElementById('duracao');
    const dataLancamento = document.getElementById('lancamento');
    const dataRelancamento = document.getElementById('relancamento');
    const valor = document.getElementById('valor');
    const poster = document.getElementById('poster');
    const cadastrar = document.getElementById('cadastrar');

    cadastrar.addEventListener('click', async (event) => {
        event.preventDefault(); // Impede o envio do formulário para recarregar a página

        const tituloInput = titulo.value;
        const sinopseInput = sinopse.value;
        const duracaoInput = duracao.value;
        const dataLancamentoInput = dataLancamento.value;
        const dataRelancamentoInput = dataRelancamento.value;
        const valorInput = valor.value;
        const capaInput = poster.src;
        const insert = {
            nome: tituloInput,
            sinopse: sinopseInput,
            duracao: duracaoInput,
            data_lancamento: dataLancamentoInput,
            data_relancamento: dataRelancamentoInput,
            valor_unitario: valorInput,
            foto_capa: capaInput,
        };

        try {
            
            const sucesso = await postFilme(insert);
            if (sucesso) {
                alert('Filme adicionado com sucesso!');
                console.log(insert);
                window.location.href = './dashbord.html'; 
            } else {
                throw new Error('Erro ao adicionar filme');
            }
        } catch (error) {
            console.error('Erro ao adicionar filme:', error);
            alert('Erro ao adicionar filme. Verifique o console para mais detalhes.');
        }
    });

    link.addEventListener('keyup', () => {
        poster.src = link.value;
    });
});
