import { getDataFromApi } from "../promise";

describe('Probar Async/Await CURSO', () => {
  test('Realizar una petición a una API', async () => {
    const api = 'https://rickandmortyapi.com/api/character/';
    const getRick = 'https://rickandmortyapi.com/api/character/1';
    await getDataFromApi(api).then( data => {
      expect(data.results.length).toBeGreaterThan(0);
    });
    await getDataFromApi(getRick).then(data => {
      expect(data.name).toEqual('Rick Sanchez');
    });
  });
  test('Probar Async/Await curso con error', async () => {
    const apiError = "http://httpstat.us/404";
    const peticion = getDataFromApi(apiError);
    await expect(peticion).rejects.toEqual(Error('Request failed with status code 404'));
  });
  test('Probar Async/Await reject', async () => {
    const apiError = "http://httpstat.us/404";
    const peticion = getDataFromApi(apiError);
    await expect(Promise.resolve('Hola')).resolves.toBe('Hola');
    await expect(Promise.reject('Error')).rejects.toBe('Error');
  });
});


/* Async/Await no es necesario incluir el then, los siguientes son ejemplos
conforme a la documentación */

describe('Probar Async/Await DOC', () => {
  test('Realizar una petición a una API', async () => {
    const api = 'https://rickandmortyapi.com/api/character/';
    const data = await getDataFromApi(api);
    expect(data.results.length).toBeGreaterThan(0);
  });
});

// Este es el ejemplo de la documentación
describe('Probar Async/Await try/catch', () => {
  function fetchDataPromise() {
    return new Promise(resolve => {
      setTimeout( () => {
        resolve("peanut butter")
      }, 100);
    });
  }
  function fetchDataPromiseError() {
    return new Promise((resolve, reject) => {
      setTimeout( () => {
        reject("error")
      }, 100);
    });
  }
  
  test('the data is peanut butter', async () => {
    const data = await fetchDataPromise();
    expect(data).toBe("peanut butter");
  });
  
  test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await fetchDataPromiseError();
    } catch (e) {
      expect(e).toMatch("error");
    }
  });
});

