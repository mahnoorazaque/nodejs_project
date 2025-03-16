const request = require("supertest");
const app = require("../src/app");

test("Jest is working", () => {
    expect(true).toBe(true);
  });
  
describe("Task API Endpoints", () => {
  it("should return an empty array initially", async () => {
    const res = await request(app).get("/api/tasks");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
  });

  it("should add a new task", async () => {
    const res = await request(app)
      .post("/api/tasks")
      .send({ title: "New Task" });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("title", "New Task");
  });

  it("should return 400 if title is missing", async () => {
    const res = await request(app).post("/api/tasks").send({});
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error", "Title is required");
  });

  it("should delete a task", async () => {
    const res1 = await request(app).post("/api/tasks").send({ title: "Task to Delete" });
    const taskId = res1.body.id;

    const res2 = await request(app).delete(`/api/tasks/${taskId}`);
    expect(res2.statusCode).toEqual(200);
    expect(res2.body).toHaveProperty("message", "Task deleted");
  });

  it("should return 404 when deleting a non-existent task", async () => {
    const res = await request(app).delete("/api/tasks/999");
    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty("error", "Task not found");
  });
});
