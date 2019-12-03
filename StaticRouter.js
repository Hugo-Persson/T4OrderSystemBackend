module.exports = (app, express) => {
    app.use(express.static(process.cwd() + "/static"));
    app.get("/", (req, res) => {
        res.sendFile(process.cwd() + "/index.html")
    });
}