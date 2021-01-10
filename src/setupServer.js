import { rest } from 'msw';
import { setupServer } from 'msw/node'

const server = setupServer(rest.get('https://jsonplaceholder.typicode.com/todos/1', (req,res,ctx) => {
  return rest(ctx.status(200), ctx.json({
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }));
}));

beforeEach(() => server.listen());
beforeAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest };