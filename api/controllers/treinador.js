import { treinadorModel } from "../models/treinador.js";
import { erroPadrao } from "../services/tratamentos.js";



async function login (req, res) {
    const { nick, senha } = req.body;

    try {
        const dados = await treinadorModel.logar(nick, senha);
    
        console.log(dados);

        res.status(200).json({ status : 'success', msg : 'Login realizado com sucesso', dados})

    } catch (err) {
        erroPadrao(res, err)
    }
}

async function cadastroTreinador (req, res) {
    const { treinador, itensTreinador, pokemon }  = req.body;

    try {
        const id = await treinadorModel.cadConta(treinador[0], treinador[1]);

        const respostaItens = await treinadorModel.cadItensDoTreinador(id, itensTreinador[0], itensTreinador[1], itensTreinador[2], itensTreinador[3], itensTreinador[4]);

        const respostaPokemon = await treinadorModel.cadPokemonDoTreinado(pokemon[0], pokemon[1], pokemon[2], pokemon[3], pokemon[4], pokemon[5], pokemon[6], id);

        res.status(200).json({ status : 'success' , msg : 'Cadastro realizado com sucesso'});

    } catch (err) {
        erroPadrao(res, err)
    }
}

async function recuperarItens (req, res) {
    const { id } = req.body;

    try {
        const itens = await treinadorModel.pegarItensDoBanco(id);

        res.status(200).json( itens );

    } catch (err) {
        erroPadrao(res, err)
    }

}

async function recuperarPokemon (req, res) {
    const { id } = req.body;

    try {
        const itens = await treinadorModel.pegarPokemonDoBanco(id);

        res.status(200).json( itens );

    } catch (err) {
        erroPadrao(res, err)
    }

}

export const treinadorController = {
    login,
    cadastroTreinador,
    recuperarItens,
    recuperarPokemon
}