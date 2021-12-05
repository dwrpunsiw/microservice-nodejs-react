import request from "supertest";
import { app } from "../../app";

it("returns a 201 on successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "wisnuprsj@gmail.com",
      password: "P@ssword123",
    })
    .expect(201);
});

it("returns a 400 with an invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "wisnuprsj",
      password: "P@ssword123",
    })
    .expect(400);
});

it("returns a 400 with an invalid password", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "wisnuprsj@gmail.com",
      password: "P",
    })
    .expect(400);
});

it("returns a 400 with missing email and password", async () => {
  return request(app).post("/api/users/signup").send({}).expect(400);
});

it("disallows duplicate emails", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "wisnuprsj@gmail.com",
      password: "P@ssword123",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signup")
    .send({
      email: "wisnuprsj@gmail.com",
      password: "P@ssword123",
    })
    .expect(400);
});

it("sets a cookie after successful signup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "wisnuprsj@gmail.com",
      password: "P@ssword123",
    })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});

it("sign in to an existing users", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "wisnuprsj@gmail.com",
      password: "P@ssword123",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({
      email: "wisnuprsj@gmail.com",
      password: "P@ssword123",
    })
    .expect(200);
});

it("sign in with invalid credentials", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "wisnuprsj@gmail.com",
      password: "P@ssword123",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({
      email: "wisnuprsj@gmail.com",
      password: "hanukkah",
    })
    .expect(400);
});

it("sign in with valid credentials returns a cookie", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "wisnuprsj@gmail.com",
      password: "P@ssword123",
    })
    .expect(201);

  const res = await request(app)
    .post("/api/users/signin")
    .send({
      email: "wisnuprsj@gmail.com",
      password: "P@ssword123",
    })
    .expect(200);

  expect(res.get("Set-Cookie")).toBeDefined();
});
