import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

sqlite3.verbose()

open({
    filename: './tmp/database.db',
    driver: sqlite3.Database
  }).then((db) => {
    //db.exec('create table exercicios (id integer primary key, questao text not null, id_resposta number not null)') // sem resposta
    //db.run('insert into exercicios values (1, "o que é sql?", 0)') // executa com resposta e promisse
    db.get('select * from exercicios'). then((resp)=>{ // pega uma linha, db.all pega o array completo
      console.log(resp)
    })
    db.all('select * from exercicios'). then((resp)=>{ // pega uma linha, db.all pega o array completo
      console.log(resp)
    })
  })