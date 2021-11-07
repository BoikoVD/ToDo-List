const express = require('express');
const app = express();
const server = require('http').Server(app);

const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '/build')));

let dataBase = [];

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '..', '/build/index.html'));
});
app.post('/login', (req, res) => {
	const { userName } = req.body;
	let user = getUser(userName, dataBase);
	if (dataBase.length === 0 || user === null) {
		let newUser = {
			name: userName,
			tasks: [],
		}
		dataBase.push(newUser);
		res.json(newUser);
	} else {
		res.json(user);
	}
});
app.post('/addtask', (req, res) => {
	const { userName, task } = req.body;
	for (let data of dataBase) {
		if (data.name === userName) {
			data.tasks.unshift(task);
			res.json(data.tasks);
		}
	}
});
app.post('/deletetask', (req, res) => {
	const { userName, task } = req.body;
	for (let data of dataBase) {
		if (data.name === userName) {
			for (let dataTask of data.tasks) {
				if (dataTask.taskName === task.taskName && dataTask.taskDescription === task.taskDescription) {
					data.tasks.splice(data.tasks.indexOf(dataTask), 1);
				}
			}
			res.json(data.tasks);
		}
	}
});
app.post('/checktask', (req, res) => {
	const { userName, tasks } = req.body;
	for (let data of dataBase) {
		if (data.name === userName) {
			data.tasks = [...tasks];
		}
	}
	res.send();
});

server.listen(process.env.PORT || 9999, (error) => {
	if (error) {
		throw Error(error);
	}
	console.log('Server has been started');
});

function getUser(userName, dataBase) {
	for (let user of dataBase) {
		if (userName === user.name) {
			return user;
		}
	}
	return null;
}