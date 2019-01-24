const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const decryptSync = require('./sync_file_decrypt')

async function caller({ file, password }, err_file_callback, done_file_callback) {
    let promise = decryptSync({ file: file, password: password });
    await promise
        .then((filename) => { done_file_callback(filename) })
        .catch((err) => { err_file_callback(err) })
}

async function main({ files, password }, err_file_callback, start_file_callback, done_file_callback, succ_all_callback) {
    let queue = files;
    for (i = 0; i < queue.length; i++) {
        start_file_callback(queue[i]);
        await caller({ file: queue[i], password: password }, err_file_callback, done_file_callback);
    }
    succ_all_callback()
} 

module.exports = main;