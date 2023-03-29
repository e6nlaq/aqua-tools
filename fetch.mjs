
// Aqua Tools
// fetch.mjs

import fetch from 'node-fetch'
import fs from 'fs'

function write(data) {
	fs.writeFileSync("./return.txt", data);
}

async function get(url, method = "GET", data = "") {

	// const urla = 'https://api.github.com/users/ekzemplaro'
	// const response = await fetch(urla)
	// const body = await response.text()

	// fs.writeFileSync("./return.txt", body);
	if (data == "") {
		if (method != "GET") {
			const response = await fetch(url, { method: method });
			const body = await response.text();

			write(body);
		}
		else {
			const response = await fetch(url);
			const body = await response.text();

			write(body);
		}
	} else {
		let js = JSON.parse(data);

		js["method"] = method;

		const response = await fetch(url, js);
		const body = await response.text();

		write(body);
	}
}

const args = process.argv;
let ans = "";

switch (args.length) {
	case 3:
		get(args[2], "GET", "");
		break;

	case 4:
		get(args[2], args[3], "");
		break;

	case 5:
		get(args[2], args[3], args[4]);
		break;
}