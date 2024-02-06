import conn from './conn.js';

async function logar (nick, senha) {
    const sql = 'SELECT * FROM Login WHERE nick = ?';

    const [consulta] = await conn.execute(sql, [nick, ]);

    return consulta;
}



export const treinadorModel = {
    logar
};