const express = require("express");
const app = express();

const { faker } = require("@faker-js/faker");

// localhost:5555/fake/users
// req로 숫자를 받아서, 그 수 만큰 사용자 정보를 생성해주는 api

app.get("/fake/users", function (req, res) {
  res.status(200).json({
    email: faker.internet.email(),
    password: faker.internet.password(),
    fullName: faker.person.fullName(),
    contact: faker.phone.number(),
  });
});

app.listen(5555);
