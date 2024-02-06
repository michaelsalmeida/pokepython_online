export async function erroPadrao(res, error) {
    console.error(error);
    // console.error(error.stack);

    if (error.message == "jwt malformed") {
        // No caso do jwt ter sido enviado errado
        res.status(400).json({status: 'error', msg: 'Por favor, envie um jwt valido!'});

    } else if (error.message == "jwt expired") {
        // No caso do cookie estiver incorreto
        res.status(400).json({ status: 'error', msg: 'JWT expirado, faça login novamente' })

    }   else if (error.mensagem != undefined) {
        // No caso do cookie estiver incorreto
        res.status(400).json({ status: 'error', msg: error.mensagem })

    } else {
        res.status(500).json({ status : 'error' , msg : "Ocorreu alguma falha no servidor!"})
    }
}