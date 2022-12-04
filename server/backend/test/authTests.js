const chai = require("chai")
const chaiHttp = require("chai-http")
const server = require("../../index")
const bcrypt = require("bcryptjs")
const assert = chai.assert
chai.use(chaiHttp)


suite("register a User", ()=>{
    let hashedPass = bcrypt.hashSync("password", 10)
    let user1 = {
        firstName: "Test",
        lastName: "One",
        email: "test1E@mail.com",
        password: hashedPass
    }

    // test("should be able to register a user", (done)=>{
    //     chai.request(server)
    //     .post("/auth/register")
    //     .send(user1)
    //     .end((err, res)=>{
    //         assert.equal(res.status, 200)
    //         assert.isString(res.body.firstName)
    //         assert.isString(res.body._id)
    //         done()
    //     })
    // })

    test("Should get a message if email already in use", (done)=>{
        chai.request(server)
        .post("/auth/register")
        .send(user1)
        .end((err, res)=>{
            assert.equal(res.status, 200)
            assert.equal(res.body.message, "test1E@mail.com is already registered in our database.")
            done()
        })
    })
})

suite("login a user", ()=>{
    let loginUser = {
        email: "test1E@mail.com",
        password: "password",
    }
    let wrongPass = {
        email: "test1E@mail.com",
        password: "catsstink",
    }
    let wrongEmail = {
        email: "testY@mail.com",
        password: "password", 
    }
    test("should be able to log in a user", (done)=>{
        chai.request(server)
        .post("/auth/login")
        .send(loginUser)
        .end((err, res)=>{
            assert.equal(res.status, 200)
            assert.isNotEmpty(res.body.firstName)
            assert.isNotEmpty(res.body.lastName)
            assert.isNotEmpty(res.body.email)
            assert.isNotEmpty(res.body._id)
            done()
        })
    })
    test("should get an error - wrong password", (done)=>{
        chai.request(server)
        .post("/auth/login")
        .send(wrongPass)
        .end((err, res)=>{
            assert.equal(res.status, 200)
            assert.equal(res.body.message, "password or email do not match database")
            done()
        })
    })
    test("should get an error - wrong email", (done)=>{
        chai.request(server)
        .post("/auth/login")
        .send(wrongEmail)
        .end((err, res)=>{
            assert.equal(res.status, 200)
            assert.equal(res.body.message, "password or email do not match database")
            done()
        })
    })
})

suite("Update user", ()=>{
    let _id = "638b935f1c1ea42ac4589680"
    let updateFirst = {
        _id,
        firstName: "Updatedtest",
        lastName: "",
        email: "",
        password: "",
    }
    let updateLast = {
        _id,
        firstName: "",
        lastName: "Juan",
        email: "",
        password: "",
    }
    let updateEmailWrong = {
        _id,
        firstName: "",
        lastName: "",
        email: "test2E@mail.com",
        password: "",
    }
    let updateEmail = {
        _id,
        firstName: "",
        lastName: "",
        email: "testingupdate@mail.com",
        password: "",
    }
    let updatePass = {
        _id,
        firstName: "",
        lastName: "",
        email: "",
        password: bcrypt.hashSync("catsstink", 10)
    }
    let updateAll = {
        _id,
        firstName: "Test",
        lastName: "One",
        email: "test1E@mail.com",
        password: bcrypt.hashSync("password", 10) 
    }
    test("should be able to update a user-firstName", (done)=>{
        chai.request(server)
        .post("/auth/update")
        .send(updateFirst)
        .end((err, res)=>{
            assert.equal(res.status, 200)
            assert.equal(res.body.firstName, "Updatedtest")
            done()
        })
    })
    test("should be able to update a user-lastName", (done)=>{
        chai.request(server)
        .post("/auth/update")
        .send(updateLast)
        .end((err, res)=>{
            console.log(res.body)
            assert.equal(res.status, 200)
            assert.equal(res.body.lastName, "Juan")
            done()
        })
    })
    test("should get an error if try and update to already existing email", (done)=>{
        chai.request(server)
        .post("/auth/update")
        .send(updateEmailWrong)
        .end((err, res)=>{
            assert.equal(res.status, 200)
            assert.equal(res.body.message, "test2E@mail.com is already in use.")
            done()
        })
    })
    test("should be able to update a user-email", (done)=>{
        chai.request(server)
        .post("/auth/update")
        .send(updateEmail)
        .end((err, res)=>{
            assert.equal(res.status, 200)
            assert.equal(res.body.email, "testingupdate@mail.com")
            done()
        })
    })
    test("should be able to update a user-password", (done)=>{
        chai.request(server)
        .post("/auth/update")
        .send(updatePass)
        .end((err, res)=>{
            assert.equal(res.status, 200)
            assert.equal(res.body.email, "testingupdate@mail.com")
            done()
        })
    })
    test("should be able to update ALL fields", (done)=>{
        chai.request(server)
        .post("/auth/update")
        .send(updateAll)
        .end((err, res)=>{
            assert.equal(res.status, 200)
            assert.equal(res.body.firstName,"Test")
            assert.equal(res.body.lastName, "One")
            assert.equal(res.body.email, "test1E@mail.com")
            done()
        })
    })
})