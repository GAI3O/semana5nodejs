import request from "supertest";
import { app } from "../src/app";

// GET
describe("Lista de Usuarios", () => {
  test("METHOD GET", async () => {
    const result = await request(app).get("/user");

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

// POST
describe("Creacion de usuario", () => {
  test("METHOD POST", async () => {
    const body = {
      name: "Gabriel Herrera",
      email: "gabrielh@gmail.com",
      phone_number: "987654321",
    };

    const result = await request(app).post("/user/store").send(body);

    expect(result.status).toBe(201);
    expect(result.ok).toBe(true);
  });
});

// PUT
describe("Actualización de usuario", () => {
  test("METHOD PUT", async () => {
    const idUserTest = 1 
    const body = {
      name: "Gabriel Herrera",
      email: "gabrielh@gmail.com",
      phone_number: "99999999",
    };
    const result = await request(app).put("/user/update/"+String(idUserTest)).send(body);

    expect(result.status).toBe(201);
    expect(result.ok).toBe(true);
  });
});

//DELETE
describe("Eliminación de usuario", () => {
  test("METHOD DELETE", async () => {
    const idUserTest = 1 
    const result = await request(app).delete("/user/delete/"+String(idUserTest));

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});
