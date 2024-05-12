const { Firestore } = require('@google-cloud/firestore');
const db = new Firestore();

module.exports = async (req, res) => {
    if (req.method === 'GET') {
        let snapshot = await db.collection('texts').get();
        let texts = [];
        snapshot.forEach(doc => {
            texts.push(doc.data().text);
        });
        res.status(200).json(texts);
    } else {
        res.status(405).send("Method Not Allowed");
    }
};
