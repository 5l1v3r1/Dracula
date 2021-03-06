const crypto = require('crypto')
const fs = require('fs')
const path = require('path')
const zlib = require('zlib')



const AppendInitVect = require('./appendInitVect')

function encrypt({ file, password }, error_callback, done_callback) {
    const initVect = crypto.randomBytes(16);
    // Generate a cipher key from the password.
    const CIPHER_KEY = crypto.createHash('sha256').update(password).digest();;
    const readStream = fs.createReadStream(file);
    const gzip = zlib.createGzip();
    const cipher = crypto.createCipheriv('aes-256-cbc', CIPHER_KEY, initVect);
    const appendInitVect = new AppendInitVect(initVect);
    // Create a write stream with a different file extension.
    const writeStream = fs.createWriteStream(path.join(file + ".dnc"));
    readStream
      .pipe(gzip)
      .pipe(cipher)
      .pipe(appendInitVect)
      .pipe(writeStream);

    readStream.on('error', ()=>{error_callback('Readstream error.')});
    //readStream.on('error', error_callback('readStream error!'))
    readStream.on('end', ()=>{done_callback(file)});
}


//encrypt({file:path.resolve('D:\\downloads\\XD_Set-Up.exe'), password:'123'}, function(err){console.log(err)}, function(fn){console.log(fn)})
module.exports = encrypt;
