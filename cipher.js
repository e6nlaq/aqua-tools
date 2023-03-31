
// Aqua Tools
// cipher.js

const crypto = require('crypto');
const fs = require('fs');

function write(data) {
	fs.writeFileSync("./return.txt", data);
}

const args = process.argv;

// 暗号化するときの設定とか色々
let data = args[2], pass = args[3], algorithm = "aes-256-cbc", size = 32, output = "hex", salt = "AQUA_SCRIPT_LANG";
const output_type = ["ascii", "base64", "base64url", "binary", "hex", "latin1", "ucs-2", "ucs2", "utf8", "utf-8", "utf16le"];

// 暗号化するときのオプションを受け取る
// 上から
// アルゴリズム
// 出力形式
// salt
switch (args.length) {
	case 7:
		algorithm = args[6];
		if (!algorithm in crypto.getCiphers()) {
			algorithm = "aes-256-cbc";
		}

	case 6:
		output = args[5];
		if (!output in output_type) {
			output = "hex";
		}

	case 5:
		salt = args[4];

		break;

}

const key = crypto.scryptSync(pass, salt, size);
const iv = crypto.randomBytes(16);

console.log(iv.toLocaleString());

const cipher = crypto.createCipheriv(algorithm, key, iv);

let out = cipher.update(data, 'utf8', output);
out += cipher.final(output);
console.log(out);
