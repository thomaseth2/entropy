const { Firestore } = require('@google-cloud/firestore');
const db = new Firestore();

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        const text = req.body.text;
        await db.collection('texts').add({ text: text });
        res.status(200).send("Note Added");
    } else {
        res.status(405).send("Method Not Allowed");
    }
};
