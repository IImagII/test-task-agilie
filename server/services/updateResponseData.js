import fs from 'fs'


export const updateResponseData = (key, filePath, value, res) => {
	fs.readFile(filePath, (err, data) => {
		if (err) {
			console.error(err);
			res.status(500).send('Server Error');
		} else {
			const contents = data.toString() || '{}';
			const json = JSON.parse(contents);
			json[key] = value;
			fs.writeFile(filePath, JSON.stringify(json), err => {
				if (err) {
					console.error(err);
					res.status(500).send('Server Error');
				} else {
					res.status(200).send('Success');
				}
			});
		}
	});
};