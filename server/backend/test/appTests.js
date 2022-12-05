const chai = require("chai")
const chaiHttp = require("chai-http")
const server = require("../../index")
const assert = chai.assert
chai.use(chaiHttp)


suite("Get a user", ()=>{
    test("can get user", (done)=>{
        chai.request(server)
        .post("/app/user")
        .send({ _id: "638b935f1c1ea42ac4589680"})
        .end((err, res)=>{
            assert.equal(res.status, 200)
            assert.equal(res.body.firstName,"Test")
            assert.equal(res.body.lastName, "One")
            assert.equal(res.body.email, "test1E@mail.com")
            done()
        })
    })
})