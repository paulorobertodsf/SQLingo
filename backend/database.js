import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

async function criarBanco() {
    try {
        // Abre o banco de dados (ou cria se não existir)
        const db = await open({
            filename: './tmp/database.db',
            driver: sqlite3.Database
        });

        // Cria as tabelas
        await db.exec(`
            CREATE TABLE IF NOT EXISTS usuarios (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome_usuario TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                senha TEXT NOT NULL,
                data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS licoes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titulo TEXT NOT NULL,
                descricao TEXT,
                data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS exercicios (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_licao INTEGER,
                pergunta TEXT NOT NULL,
                resposta TEXT NOT NULL,
                FOREIGN KEY (id_licao) REFERENCES licoes(id)
            );
        `);

        console.log('Tabelas criadas com sucesso.');
        
        // Fecha o banco de dados
        await db.close();
        console.log('Fechado o banco de dados SQLite.');
    } catch (err) {
        console.error('Erro ao configurar o banco de dados:', err);
    }
}