import { renderHook } from '@testing-library/react-hooks'
import useFetch from './useFetch';

const DATA_MOCK = {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
};

test('should return default values', () => {
    const { result } = renderHook(() => useFetch('https://jsonplaceholder.typicode.com/todos/1'));
    const { data, loading, error } = result.current;

    expect(loading).toBeTruthy();
    expect(data).toBeNull();
    expect(error).toBeNull();
});

test('should return data', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://jsonplaceholder.typicode.com/todos/1'));
    
    await waitForNextUpdate();

    expect(result.current.data).toBeTruthy();
    expect(result.current.data).toMatchObject(DATA_MOCK);
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeNull();
});

test('should return error message', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://foobar.typicode.com/todos/1'));
    
    expect(result.current.error).toBe(null);

    await waitForNextUpdate();

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeTruthy();

    console.log(result.current);
});