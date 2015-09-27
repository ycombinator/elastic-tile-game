//
// To run: node decrypt-data.js <passphrase>
// Pre- and post-conditions:
// - Encrypted data file exists in same folder as this file and is named "data.encrypted.js"
// - Decrypted data file will be placed in same folder as this file and will be named "data.decrypted.js"
//
var fs = require('fs'),
	CryptoJS = require('./aes.js');

// "Constants"
var DECRYPTED_DATA_FILE_NAME="data.decrypted.json",
	ENCRYPTED_DATA_FILE_NAME="data.encrypted.json";

if (process.argv.length < 3) {
	console.error("Usage: node decrypt-data.js <passphrase>");
	process.exit(1);
}
var passphrase = process.argv[2];

fs.readFile(ENCRYPTED_DATA_FILE_NAME, "utf8", function(err, data) {
	if (err) {
		console.error(err);
		process.exit(2);
	}
			var decrypted = CryptoJS.AES.decrypt(data, passphrase).toString(CryptoJS.enc.Utf8);
	fs.writeFile(DECRYPTED_DATA_FILE_NAME, decrypted, "utf8", function(err) {
		if (err) {
			console.error(err);
			process.exit(3);
		}
	})
});
