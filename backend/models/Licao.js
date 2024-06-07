import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

async function openDb() {
    return open({
        filename: './tmp/database.db',
        driver: sqlite3.Database
    });
}

export async function createLicao({ titulo, descricao }) {
    const db = await openDb();
    const result = await db.run(
        'INSERT INTO licoes (titulo, descricao) VALUES (?, ?)',
        [titulo, descricao]
    );
    await db.close();
    return result;
}

export async function getLicaoById(id) {
    const db = await openDb();
    const licao = await db.get('SELECT * FROM licoes WHERE id = ?', [id]);
    await db.close();
    return licao;
}
