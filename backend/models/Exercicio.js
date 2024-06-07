import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

async function openDb() {
    return open({
        filename: './tmp/database.db',
        driver: sqlite3.Database
    });
}

export async function createExercicio({ id_licao, pergunta, resposta }) {
    const db = await openDb();
    const result = await db.run(
        'INSERT INTO exercicios (id_licao, pergunta, resposta) VALUES (?, ?, ?)',
        [id_licao, pergunta, resposta]
    );
    await db.close();
    return result;
}

export async function getExercicioById(id) {
    const db = await openDb();
    const exercicio = await db.get('SELECT * FROM exercicios WHERE id = ?', [id]);
    await db.close();
    return exercicio;
}
