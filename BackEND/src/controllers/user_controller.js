
const test = (req, res) => {
    console.log(req.body);
    res.status(200).json({_id: "1"});
}

module.exports = {
    test,
}