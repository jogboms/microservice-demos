const json = data => JSON.stringify(data);

module.exports = (req, res) => {
    res.end(
        json({
            title: "Welcome to Micro"
        })
    );
};
