import request from "supertest"
import app from "../../../app.js"
import { expect } from "chai"

describe("Test token de acceso", function () {
  it("POST /api/token token de acceso", function (done) {
    this.timeout(10000)
    const data = {
      email: "bejucapainternet@hotmail.com",
      password: "123456789",
    }
    request(app)
      .post("/api/token")
      .send(data)
      .then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.be.an("object")
        done()
      })
      .catch((err) => done(err))
  })
})

describe("Test token de acceso", function () {
    it("POST /api/token token de acceso con credenciales invalidas", function (done) {
      this.timeout(10000)
      const data = {
        email: "bejucapainternet@hotmail.com.co",
        password: "123456789",
      }
      request(app)
        .post("/api/token")
        .send(data)
        .then((response) => {
          expect(response.status).to.equal(403)
          expect(response.body).to.be.an("object")
          done()
        })
        .catch((err) => done(err))
    })
  })