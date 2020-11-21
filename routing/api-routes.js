var notesData = require("../data/notes.js");

module.exports = function (app) {

app.get('/api/notes', function (req, res) {
    res.json(notesData);
})

app.post('/api/notes', function (req, res) {
    notesData.push(req.body);
    res.json(true);
})

}