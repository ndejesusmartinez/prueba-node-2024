import request from "supertest"
import app from "../../app.js"
import { expect } from "chai"

describe("Test listado de hangares", function () {
  it("GET /api/hangar Listado de usuarios con token válido", function (done) {
    this.timeout(10000)
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzAzNWU2NjRiZDZjNmJiMGI5N2RjYyIsImVtYWlsIjoiYmVqdWNhcGFpbnRlcm5ldEBob3RtYWlsLmNvbSIsImlhdCI6MTczNjEwNDQ3OCwiZXhwIjoxNzM2MTA4MDc4fQ.IMeBEiq8w954EzroGy3NKZJ26B33ITYIfSW4PGtsCo4"
    request(app)
      .get("/api/hangar")
      .set("Authorization", token)
      .then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.be.an("array")
        done()
      })
      .catch((err) => done(err))
  })
})

describe("Test listado de hangares", function () {
    it("GET /api/hangar Listado de usuarios con token invalido", function (done) {
      this.timeout(10000)
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzAzNWU2NjRiZDZjNmJiMGI5N2RjYyIsImVtYWlsIjoiYmVqdWNhcGFpbnRlcm5ldEBob3RtYWlsLmNvbSIsImlhdCI6MTczNjEwNDQ3OCwiZXhwIjoxNzM2MTA4MDc4fQ.IMeBEiq8w954EzroGy3NKZJ26B33ITYIfSW4PGtsCo5"
      request(app)
        .get("/api/hangar")
        .set("Authorization", token)
        .then((response) => {
          expect(response.status).to.equal(401)
          expect(response.body).to.be.an("object")
          done()
        })
        .catch((err) => done(err))
    })
  })