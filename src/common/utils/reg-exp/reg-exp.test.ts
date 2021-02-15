import { createPasswordValidateRegExp } from './index';

describe('createPasswordValidateRegExp - генератор регулярных выражений для паролей', () => {
  const pattern = {
    numeric: '0-9',
    special: '!@#$%^&*',
    latin_lower: 'a-z',
    latin_upper: 'A-Z',
  };
  const min = '8';
  const max = '20';
  const password1 = '434dDsfdsfs$#';
  const password2 = 'djssa33912&^&';
  const password3 = 'bbfkdf#$#23-1';
  const password4 = 'bbfkdf#$#23A15945040359fhjdhfsdfhewuyrewoeirueriweur5';
  const password5 = 'bbfkA#$';
  const password6 = 'bb4Ed!@0';
  const regMatch = createPasswordValidateRegExp(pattern, min, max);
  const expected = [expect.stringMatching(regMatch)];

  test('Успешная проверка', () => {
    expect([password1]).toEqual(expect.arrayContaining(expected));
  });

  test('Нет всех нужных символов', () => {
    expect([password2]).not.toEqual(expect.arrayContaining(expected));
    expect([password3]).not.toEqual(expect.arrayContaining(expected));
  });

  test('Символов больше чем нужно', () => {
    expect([password4]).not.toEqual(expect.arrayContaining(expected));
  });

  test('Символов меньше чем нужно', () => {
    expect([password5]).not.toEqual(expect.arrayContaining(expected));
  });

  test('Проверка граничных условий', () => {
    expect(password6).toHaveLength(8);

    expect([password6]).toEqual(expect.arrayContaining(expected));
  });
});
