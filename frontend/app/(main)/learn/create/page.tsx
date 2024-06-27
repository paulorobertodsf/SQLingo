const CreateLearnPage = () => {
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">O Comando CREATE em SQL</h2>
            <p className="mb-4">
                O comando <strong>CREATE</strong> em SQL é utilizado para criar objetos no banco de dados, como tabelas, índices, visualizações, e esquemas. O uso mais comum do comando CREATE é para criar uma tabela.
                Ao criar uma tabela, você define os nomes das colunas e os tipos de dados que cada coluna pode armazenar.
            </p>
            <p className="mb-4">
                A sintaxe básica para criar uma tabela é a seguinte:
            </p>
            <pre className="bg-gray-200 p-4 rounded mb-4 overflow-x-auto">
                <code>
                    CREATE TABLE nome_da_tabela (
                    coluna1 tipo_de_dado,
                    coluna2 tipo_de_dado,
                    coluna3 tipo_de_dado,
                    ...
                    );
                </code>
            </pre>
            <p className="mb-4">
                Por exemplo, para criar uma tabela chamada <em>clientes</em> com as colunas <em>id</em>, <em>nome</em>, e <em>email</em>, você pode usar o seguinte comando:
            </p>
            <pre className="bg-gray-200 p-4 rounded mb-4 overflow-x-auto">
                <code>
                    CREATE TABLE clientes (
                    id INT PRIMARY KEY,
                    nome VARCHAR(100),
                    email VARCHAR(100)
                    );
                </code>
            </pre>
            <p>
                Neste exemplo, a coluna <em>id</em> é definida como do tipo inteiro (<em>INT</em>) e é a chave primária da tabela. As colunas <em>nome</em> e <em>email</em> são definidas como strings de texto de até 100 caracteres (<em>VARCHAR(100)</em>).
            </p>
        </div>
    )
}

export default CreateLearnPage;