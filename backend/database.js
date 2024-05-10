import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

sqlite3.verbose()

open({
    filename: '/tmp/database.db',
    driver: sqlite3.Database
  }).then((db) => {
    db.exec('create table exercicios (id integer primary key, questao text not null, id_resposta number not null)')
  })