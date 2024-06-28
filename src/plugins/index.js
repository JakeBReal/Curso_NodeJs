const { getage} = require('../plugins/get-age.plugin');
const { getId } = require('../plugins/get-id.plugin');

const {http} = require('../plugins/HTTP-client.plugin');

const buildlloger = require('../plugins/logger.plugin');
module.exports ={
    getage,
    getId,
    http,
    buildlloger,
}