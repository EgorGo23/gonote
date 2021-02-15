import { toCapitalize, uuid4 } from './index';

describe('toCapitalize - Метод преобразования первого символа строки в верхний регистр', () => {
  test('Простое преобразование входящей строки', () => {
    const testStr1 = 'test string';
    const testStr2 = 'TEST STRING';

    const result = 'Test string';

    expect(toCapitalize(testStr1)).toEqual(result);
    expect(toCapitalize(testStr2)).toEqual(result);
  });

  test('Преобразования со спец. символами', () => {
    const testStr1 = '#Test string';

    expect(toCapitalize(testStr1)).toEqual('#test string');
  });
});

describe('uuid4 - Метод генерации guid', () => {
  let guid: string;

  beforeEach(() => {
    guid = uuid4();
  });

  test('Сгенерированный guid не должен содержать символа "-"', () => {
    // eslint-disable-next-line
    const expected = [expect.stringMatching(/\-/)];
    expect([guid]).not.toEqual(expect.arrayContaining(expected));
  });

  test('Guid должен состоять из 32 символов', () => {
    const expected = [expect.stringMatching(/([\dA-Za-z]{32})/)];

    expect([guid]).toEqual(expect.arrayContaining(expected));
  });
});
