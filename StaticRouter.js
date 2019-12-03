module.exports = (app, express) => {
    app.use(express.static(process.cwd() + "/Static"));
    app.get("/", (req, res) => {
        res.sendFile(process.cwd() + "/index.html")
    });
}