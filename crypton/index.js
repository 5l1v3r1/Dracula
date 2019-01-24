const encryptAsync = require('./hood/async_file_encrypt');
const encryptSync = require('./hood/sync_file_encrypt');
const encryptQAsync = require('./hood/async_multi_encrypt');
const encryptQSync = require('./hood/sync_multi_encrypt');
const decryptAsync = require('./hood/async_file_decrypt');
const decryptSync = require('./hood/sync_file_decrypt');
const decryptQSync = require('./hood/sync_multi_decrypt');
const decryptQAsync = require('./hood/async_multi_decrypt');



module.exports = {encryptAsync, encryptSync, encryptQAsync, encryptQSync, decryptAsync, decryptSync, decryptQAsync, decryptQSync}
