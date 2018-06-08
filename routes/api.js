const express = require('express');
const router = express.Router();

const message = 'Hello world from IBM Cloud !';
const jobRoleBOSS = 'Big boss';
const jobRoleDA = 'Developer Advocate';
const ibm = 'IBM';
const ibmCloud = `${ibm} Cloud`;
const businessUnit = `${ibm} Digital Business Group`;
const spokenLanguagesDefault = ['English', 'Slovak'];

const alexandra = {
	courtesyTitle: 'Ms.',
	name: 'Alexandra Nicolae',
	nationality: 'Romanian',
	age: '26',
	preferedColor: 'pink',
	interests: ['cloud computing', 'drum & bass', 'dancing'],
	disabilities: ['flour - free diet', 'smoking'],
	spokenLanguages: [...spokenLanguagesDefault, 'French', 'German', 'Romanian'],
	contact: '+421-904-751-741',
	position: `${jobRoleBOSS} @ ${ibmCloud}`,
	businessUnit,
	message,
};
const daniel = {
	courtesyTitle: 'Mr.',
	name: 'Daniel Daucik',
	nationality: 'Slovak',
	age: '25',
	preferedColor: 'cardinal red',
	interests: ['cloud computing', 'hip-hop', 'blockchain'],
	disabilities: ['honest', 'smoking'],
	spokenLanguages: [...spokenLanguagesDefault, 'Dutch'],
	contact: '+421-918-188-043',
	position: `${jobRoleDA} @ ${ibmCloud}`,
	businessUnit,
	message,
};
const tomas = {
	courtesyTitle: 'Mr.',
	name: 'Tomas Kramaric',
	nationality: 'Slovak',
	age: '8',
	preferedColor: 'black',
	interests: ['cloud computing', 'coding', 'music', 'macro & deep sky photo', 'growing cactuses'],
	disabilities: ['honest', 'wine drinker'],
	spokenLanguages: spokenLanguagesDefault,
	contact: '+421-910-807-592',
	position: `${jobRoleDA} @ ${ibmCloud}`,
	businessUnit,
	message,
};
const lukas = {
	courtesyTitle: 'Mr.',
	name: 'Lukas Skrabak',
	nationality: 'Slovak',
	age: '15',
	preferedColor: 'purple',
	interests: ['cloud computing', 'brutal coding', 'gaming', 'driving car'],
	disabilities: ['The Flash', 'glasses'],
	spokenLanguages: spokenLanguagesDefault,
	contact: '+421-917-800-588',
	position: `${jobRoleDA} @ ${ibmCloud}`,
	businessUnit,
	message,
};

router.get('/hello/alexandra', async (req, res) => {
	return res.json(alexandra);
}).get('/hello/daniel', async (req, res) => {
	return res.json(daniel);
}).get('/hello/lukas', async (req, res) => {
	return res.json(lukas);
}).get('/hello/tomas', async (req, res) => {
	return res.json(tomas);
}).get('/hello/deg', async (req, res) => {
	return res.json([alexandra, daniel, lukas, tomas]);
});

module.exports = router;
