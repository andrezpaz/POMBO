module.exports =  app => {

    const connectionOracle = require('../controllers/queryOracle')

        let sql = `SELECT DISTINCT(rhpessoas.nome) nome, 
                          rhcontratos.contrato idContrato, 
                          rhcontratos.situacao, 
                          rhcontratos.cargo idCargo, 
                          rhcargos.descricaooficial descricaoCargo,
                          rhcontratos.setor idSetor,
                          rhsetores.descricao40 descricaoSetor
                     FROM rhcontratos, rhpessoas, rhcargos, rhsetores
                    WHERE rhcontratos.pessoa   = rhpessoas.pessoa
                      AND rhcontratos.cargo    = rhcargos.cargo
                      AND rhcontratos.setor    = rhsetores.setor
                      AND rhcontratos.situacao in (1,2)`
       
        let data =  connectionOracle.queryMetadados(sql)
       return data

}