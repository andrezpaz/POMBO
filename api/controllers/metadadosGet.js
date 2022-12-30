module.exports = app => {
    const controller = {};

    controller.listNamesMetadados = async (req, res, next) => {
        const namesBD = app.data.namesMetadados;
        let data = await namesBD;
        res.status(200).json(data);
    }
    return controller;
}

