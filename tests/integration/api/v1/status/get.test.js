test("Get to /api/v1/status should return 200", async () => {
  console.log(process.env.POSTGRES_PASSWORD);
  console.log(process.env.NEXT_PUBLIC_API_URL);
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});

test("Acessa a variável de ambiente", () => {
  expect(process.env.NEXT_PUBLIC_API_URL).toBeDefined();
});
