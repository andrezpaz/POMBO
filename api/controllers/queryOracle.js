
async function queryMetadados(query) {
    const connectionOracle = require('./connectionOracle')
    let connection;
    try {
        connection = await connectionOracle();
        const result = await connection.execute(
            query,
        [],
    );
    return result.rows;
    } catch (err) {
        console.log(err);
    } finally {
        if(connection) {
            try {
                await connection.close();
            } catch (err) {
            console.log(err);
            }
        }
    }
}
exports.queryMetadados = queryMetadados;
