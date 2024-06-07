import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

async function openDb() {
    return open({
        filename: './tmp/database.db',
        driver: sqlite3.Database
    });
}

export async function createUsuario({ nome_usuario, email, senha }) {
    const db = await openDb();
    const result = await db.run(
        'INSERT INTO usuarios (nome_usuario, email, senha) VALUES (?, ?, ?)',
        [nome_usuario, email, senha]
    );
    await db.close();
    return result;
}

export async function getUsuarioById(id) {
    const db = await openDb();
    const usuario = await db.get('SELECT * FROM usuarios WHERE id = ?', [id]);
    await db.close();
    return usuario;
}
