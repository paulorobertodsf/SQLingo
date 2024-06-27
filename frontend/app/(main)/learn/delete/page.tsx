const DeleteLearnPage = () => {
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">O Comando DELETE em SQL</h2>
            <p className="mb-4">
                O comando <strong>DELETE</strong> em SQL é utilizado para remover registros de uma tabela. Você pode especificar quais registros deseja deletar usando a cláusula <em>WHERE</em>. Caso a cláusula <em>WHERE</em> não seja especificada, todos os registros da tabela serão removidos.
            </p>
            <p className="mb-4">
                A sintaxe básica para deletar registros de uma tabela é a seguinte:
            </p>
            <pre className="bg-gray-200 p-4 rounded mb-4 overflow-x-auto">
                <code>
                    DELETE FROM nome_da_tabela
                    WHERE condição;
                </code>
            </pre>
            <p className="mb-4">
                Por exemplo, para deletar todos os clientes na tabela <em>clientes</em> onde a cidade é 'Rio de Janeiro', você pode usar o seguinte comando:
            </p>
            <pre className="bg-gray-200 p-4 rounded mb-4 overflow-x-auto">
                <code>
                    DELETE FROM clientes
                    WHERE cidade = 'Rio de Janeiro';
                </code>
            </pre>
            <p>
                Neste exemplo, todos os registros da tabela <em>clientes</em> onde a coluna <em>cidade</em> é igual a 'Rio de Janeiro' serão removidos. É importante usar a cláusula <em>WHERE</em> para especificar quais registros devem ser deletados, pois, caso contrário, todos os registros da tabela serão removidos.
            </p>
        </div>
    )
}

export default DeleteLearnPage;