const fs = require('fs');

module.exports.getAll = (req, res) => {
    fs.readFile('data/user-data.json', (err, data) => {
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
    fs.readFile('data/user-data.json', (err, data) => {
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

    const users = JSON.parse(fs.readFileSync('data/user-data.json', 'utf8'));
    users.push(data);
    fs.writeFile('data/user-data.json', JSON.stringify(users), 'utf8', (err) => {
        if (err) {
            return res.status(500).send('Error writing data file');
        }
        res.send('Data written successfully');
    });
}

module.exports.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const { name, gender, contact, address, photoUrl } = data;

    fs.readFile('data/user-data.json', (err, data) => {
        const users = JSON.parse(data);

        // find the index of the users data with the specified id
        const index = users.findIndex(obj => obj.Id === id);

        // remove and update the users
        if (index === -1) {
            res.status(404).send('Id not found')
        }
        users.forEach(user => {
            if (user.Id === id) {
                if (name) {
                    user.name = name; // update name property of object with id
                }
                if (gender) {
                    user.gender = gender; // update gender property of object with id
                }
                if (contact) {
                    user.contact = contact; // update contact property of object with id
                }
                if (address) {
                    user.address = address; // update address property of object with id
                }
                if (photoUrl) {
                    user.photoUrl = photoUrl; // update photoUrl property of object with id
                }
            }
        });
        fs.writeFileSync('data/user-data.json', JSON.stringify(users));
        res.status(204).send('Update successfully');
    })
}

module.exports.bulkUpdate = (req, res) => {
    res.send('This api is underconstruction...')
}

module.exports.delete = (req, res) => {
    const id = req.params.id;

    fs.readFile('data/user-data.json', (err, data) => {
        const users = JSON.parse(data);
        // find the index of the users data with the specified id
        const index = users.findIndex(obj => obj.Id === id);

        // remove and update the users
        if (index !== -1) {
            users.splice(index, 1);
            fs.writeFileSync('data/user-data.json', JSON.stringify(users));
            res.status(204).end()
        } else {
            res.status(404).send('Data not found by id')
        }
    })
}