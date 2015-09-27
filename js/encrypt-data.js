//
// To run: node encrypt-data.js <passphrase>
// Pre- and post-conditions:
// - Decrypted data file exists in same folder as this file and is named "data.decrypted.json"
// - Encrypted data file will be placed in same folder as this file and will be named "data.encrypted.js"
//
var fs = require('fs'),
	CryptoJS = require('./aes.js');

// "Constants"
var DECRYPTED_DATA_FILE_NAME="data.decrypted.json",
	ENCRYPTED_DATA_FILE_NAME="data.encrypted.json";

if (process.argv.length < 3) {
	console.error("Usage: node encrypt-data.js <passphrase>");
	process.exit(1);
}
var passphrase = process.argv[2];

fs.readFile(DECRYPTED_DATA_FILE_NAME, "utf8", function(err, data) {
	if (err) {
		console.error(err);
		process.exit(2);
	}
	var encrypted = CryptoJS.AES.encrypt(data, passphrase).toString();
	fs.writeFile(ENCRYPTED_DATA_FILE_NAME, encrypted, "utf8", function(err) {
		if (err) {
			console.error(err);
			process.exit(3);
		}
	})
});
