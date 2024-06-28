const ReadLearnPage = () => {
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">O Comando SELECT em SQL</h2>
            <p className="mb-4">
                O comando <strong>SELECT</strong> em SQL é utilizado para consultar dados em um banco de dados. Com este comando, você pode selecionar dados de uma ou mais tabelas, especificando quais colunas deseja recuperar.
            </p>
            <p className="mb-4">
                A sintaxe básica para selecionar dados de uma tabela é a seguinte:
            </p>
            <pre className="bg-gray-200 p-4 rounded mb-4 overflow-x-auto">
                <code>
                    SELECT coluna1, coluna2, ...
                    FROM nome_da_tabela
                    WHERE condição;
                </code>
            </pre>
            <p className="mb-4">
                Por exemplo, para selecionar o nome e o email de todos os clientes na tabela <em>clientes</em> onde a cidade é 'São Paulo', você pode usar o seguinte comando:
            </p>
            <pre className="bg-gray-200 p-4 rounded mb-4 overflow-x-auto">
                <code>
                    SELECT nome, email
                    FROM clientes
                    WHERE cidade = 'São Paulo';
                </code>
            </pre>
            <p>
                Neste exemplo, as colunas <em>nome</em> e <em>email</em> são recuperadas da tabela <em>clientes</em> para todos os registros onde a coluna <em>cidade</em> é igual a 'São Paulo'. A cláusula <em>WHERE</em> é usada para filtrar os resultados da consulta.
            </p>
        </div>

    )
}

export default ReadLearnPage;