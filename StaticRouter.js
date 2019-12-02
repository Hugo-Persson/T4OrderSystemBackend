module.exports = (app, express) => {
    app.use(express.static("static"))
    app.get("/", (req, res) => {
        res.sendFile(__dirname + "/index.html")
    });
}