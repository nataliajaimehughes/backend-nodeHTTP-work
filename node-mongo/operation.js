exports.insertDocument = (db, document, collection) => {
const coll = db.collection(collection);
    return coll.insertOne(document, (err, result) => {
});
};

exports.findDocuments = (db, collection) => {
const coll = db.collection(collection);
    return coll.find().toArray((err, docs) => {
});
};

exports.removeDocument = (db, document, collection) => {
const coll = db.collection(collection);
    return coll.deleteOne(document, (err, result) => {
});
};

exports.updateDocument = (db, document, update, collection) => {
const coll = db.collection(collection);
    return coll.updateOne(document, { $set: update }, null, (err, result) => {
});
};