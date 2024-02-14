import conn from './conn.js';

// login do usuário
async function logar (nick, senha) {
    const sql = 'SELECT * FROM Treinador WHERE nick = ? and senha = ?';

    const [consulta] = await conn.execute(sql, [nick, senha]);

    return consulta;
}

// Verifica se ja existe um nick cadastrado no banco
async function nickExiste (nick) {
    const sql = 'SELECT * FROM Treinador WHERE nick = ?';

    const [consulta] = await conn.execute(sql, [nick, ]);

    return consulta;
} 

async function cadConta (nick, senha) {
    const sql = 'INSERT INTO Treinador VALUES (default, ?, ?)';

    const [insercao] = await conn.execute(sql, [nick, senha]);

    return insercao.insertId;
}

async function cadItensDoTreinador (idTreinador, potion, superpotion, hyperpotion, maxpotion, pokedolar) {
    const sql = 'INSERT INTO Inventario VALUES (default, ?, ?, ?, ?, ?, ?)';

    const [insercao] = await conn.execute(sql, [parseInt(idTreinador), potion, superpotion, hyperpotion, maxpotion, pokedolar]);

    return insercao;
}

async function cadPokemonDoTreinado (nome, nivel, vida, atk, defesa, velocidade, vida_original, idTreinador) {
    const sql = 'INSERT INTO Pokemon VALUES (default, ?, ?, ?, ?, ?, ?, ?, ?)';

    const [insercao] = await conn.execute(sql, [nome, nivel, vida, atk, defesa, velocidade, vida_original, idTreinador]);

    return insercao;
}

async function pegarItensDoBanco (id) {
    const sql = 'SELECT potion, superpotion, hyperpotion, maxpotion, pokedolar FROM Inventario WHERE fk_idTreinador = ?';
    
    const [consulta] = await conn.execute(sql, [id, ]);

    return consulta[0];
}

async function pegarPokemonDoBanco (id) {
    const sql = 'SELECT nome_pokemon, nivel, vida, atk, def, velocidade, vida_original FROM Pokemon WHERE fk_idTreinador = ?';
    
    const [consulta] = await conn.execute(sql, [id, ]);

    return consulta[0];
}
 

export const treinadorModel = {
    logar,
    nickExiste,
    cadConta,
    cadItensDoTreinador,
    cadPokemonDoTreinado,
    pegarItensDoBanco,
    pegarPokemonDoBanco
};