import { renderHook } from '@testing-library/react-hooks';
import { server, rest } from '../../setupServer';
import useFetch from './useFetch';

const DATA_MOCK = {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
};


describe('useFetch', () => {

  test('should return data', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useFetch('https://jsonplaceholder.typicode.com/todos/1'));
      await waitForNextUpdate();

      expect(result.current.data).not.toBeNull(); 
      expect(result.current.data).toMatchObject(DATA_MOCK);
      expect(result.current.loading).toBeFalsy();
      expect(result.current.error).toBeNull();
  });

  test('should return loading state', () => {
      const { result } = renderHook(() => useFetch('https://jsonplaceholder.typicode.com/todos/1'));
      const { loading } = result.current
      expect(loading).toBeTruthy();
  });

  test('should fail on wrong api parameter', async () => {
      server.use(rest.get('https://jsonplaceholder.typicode.com/todos/e', (req,res,ctx) => {
        return rest(ctx.status(404), ctx.json({}));
      }));
      const { result, waitForNextUpdate } = renderHook(() => useFetch('https://jsonplaceholder.typicode.com/todos/e'));
      
      await waitForNextUpdate();
      
      const { data, error, loading } = result.current;
      
      expect(data).toMatchObject({});
      expect(loading).toBeFalsy();
      expect(error).toBeNull();
  });
});