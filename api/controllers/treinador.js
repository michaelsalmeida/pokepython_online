import { treinadorModel } from "../models/treinador.js";
import { erroPadrao } from "../services/tratamentos.js";



async function login (req, res) {
    const { nick, senha } = req.body;

    try {
        const verificar = await treinadorModel.logar(nick, senha);
    
        console.log(verificar);

    } catch (err) {
        erroPadrao(res, err)
    }
}


export const treinadorController = {
    login
}