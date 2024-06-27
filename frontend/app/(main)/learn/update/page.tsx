const UpdateLearnPage = () => {
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">O Comando UPDATE em SQL</h2>
            <p className="mb-4">
                O comando <strong>UPDATE</strong> em SQL é utilizado para modificar os dados existentes em uma tabela. Com este comando, você pode atualizar os valores de uma ou mais colunas para as linhas que correspondem a uma condição específica.
            </p>
            <p className="mb-4">
                A sintaxe básica para atualizar dados em uma tabela é a seguinte:
            </p>
            <pre className="bg-gray-200 p-4 rounded mb-4 overflow-x-auto">
                <code>
                    UPDATE nome_da_tabela
                    SET coluna1 = valor1,
                    coluna2 = valor2,
                    ...
                    WHERE condição;
                </code>
            </pre>
            <p className="mb-4">
                Por exemplo, para atualizar o nome e o email de um cliente na tabela <em>clientes</em> onde o <em>id</em> é igual a 1, você pode usar o seguinte comando:
            </p>
            <pre className="bg-gray-200 p-4 rounded mb-4 overflow-x-auto">
                <code>
                    UPDATE clientes
                    SET nome = 'Novo Nome',
                    email = 'novoemail@example.com'
                    WHERE id = 1;
                </code>
            </pre>
            <p>
                Neste exemplo, as colunas <em>nome</em> e <em>email</em> são atualizadas para o cliente cujo <em>id</em> é igual a 1. É importante incluir a cláusula <em>WHERE</em> para especificar quais linhas devem ser atualizadas, caso contrário, todas as linhas na tabela serão modificadas.
            </p>
        </div>
    )
}

export default UpdateLearnPage;