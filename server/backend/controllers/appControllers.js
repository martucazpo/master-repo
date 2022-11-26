

module.exports = {
    uponLanding: (req, res)=>{
        res.sendFile(process.cwd() + "/public/index.html")
    }
}