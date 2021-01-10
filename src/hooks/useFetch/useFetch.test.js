import { renderHook } from '@testing-library/react-hooks'
import useFetch from './useFetch';

const DATA_MOCK = {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
};

global.fetch = jest.fn().mockReturnValue(Promise.resolve({
  json: () => Promise.resolve({
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  })
}))

describe('useFetch', () => {
  // beforeAll(() => {
  //   global.fetch = jest.fn().mockImplementation(() =>
  //   Promise.resolve({
  //     json: () => Promise.resolve({
  //       "userId": 1,
  //       "id": 1,
  //       "title": "delectus aut autem",
  //       "completed": false
  //     }),
  //   }))
  // });

  afterAll(() => {    
    global.fetch.mockClear();
  });

  test('should return data', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://jsonplaceholder.typicode.com/todos/1'));
    await waitForNextUpdate();

    console.log(result.current);
    // console.log
    // {
    //   data: null,
    //   loading: false,
    //   error: TypeError: Cannot read property 'json' of undefined
    //       at getData (/Users/kkowalczuk/Documents/Moje/RTL/random-components-practice/src/hooks/useFetch/useFetch.js:13:37)
    // }
    // expect(result.current.data).toBeTruthy();  // problem
    expect(result.current.data).toMatchObject(DATA_MOCK);
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeNull();
});
});