const fs = require('fs');

module.exports.getAll = (req, res) => {
    fs.readFile('data.json', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading data file');
        }
        const { limit } = req.query;
        const users = JSON.parse(data)
        if (limit) {
            users.length = limit
        }
        res.send(users);
    });
}

module.exports.randomUser = (req, res) => {
    fs.readFile('data.json', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading data file');
        }
        const users = JSON.parse(data);
        const randomNumber = Math.floor(Math.random() * users.length) + 1;
        res.send(users[randomNumber]);
    });
}

module.exports.save = (req, res) => {
    const data = req.body;
    const { Id, name, gender, contact, address, photoUrl } = data;

    if (!Id || !name || !gender || !contact || !address || !photoUrl) {
        return res.status(500).send('Provide all the information');
    }

    const users = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    users.push(data);
    fs.writeFile('data.json', JSON.stringify(users), 'utf8', (err) => {
        if (err) {
            return res.status(500).send('Error writing data file');
        }
        res.send('Data written successfully');
    });
}

module.exports.delete = (req, res) => {
    const id = req.params.id;

    fs.readFile('data.json', (err, data) => {
        const users = JSON.parse(data);
        // find the index of the users data with the specified id
        const index = users.findIndex(obj => obj.Id === id);

        // remove and update the users
        if (index !== -1) {
            users.splice(index, 1);
            fs.writeFileSync('data.json', JSON.stringify(users));
            res.status(204).end()
        } else {
            res.status(404).send('Data not found by id')
        }
    })
}