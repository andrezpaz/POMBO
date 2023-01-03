module.exports =  app => {

    const connectionOracle = require('../controllers/queryOracle')

        let sql = `SELECT DISTINCT(rhpessoas.nome) nome, 
                          rhcontratos.contrato idContrato, 
                          rhcontratos.situacao, 
                          rhcontratos.cargo idCargo, 
                          rhcargos.descricaooficial descricaoCargo,
                          rhcontratos.setor idSetor,
                          rhsetores.descricao40 descricaoSetor,
                          rhcentroscusto2.centrocusto2 idCentroCusto,
                          rhcentroscusto2.descricao40 descricaoCentroCusto 
                     FROM rhcontratos, rhpessoas, rhcargos, rhsetores, rhcentroscusto2
                    WHERE rhcontratos.pessoa        = rhpessoas.pessoa
                      AND rhcontratos.cargo         = rhcargos.cargo
                      AND rhcontratos.setor         = rhsetores.setor
                      AND rhcontratos.centrocusto2  = rhcentroscusto2.centrocusto2
                      AND rhcontratos.situacao in (1,2)`
       
        let data =  connectionOracle.queryMetadados(sql)
       return data

}