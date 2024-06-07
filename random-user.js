const express = require("express");
const app = express();

const { faker } = require("@faker-js/faker");

// localhost:5555/fake/users
// req로 숫자를 받아서, 그 수 만큰 사용자 정보를 생성해주는 api

app.get("/fake/users/", function (req, res) {
  const { num } = req.query;

  let index = 1;
  let users = [];
  while (index <= num) {
    //
    users.push({
      email: faker.internet.email(),
      password: faker.internet.password(),
      fullName: faker.person.fullName(),
      contact: faker.phone.number(),
    });
    index++;
  }
  res.status(200).json(users);
});

app.listen(5555);
