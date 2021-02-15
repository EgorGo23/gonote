import { getByKey } from './index';

describe('getByKey - метод возвращает значение из HashMap или значение по умолчанию', () => {
  const hashMap = {
    name: 'Anton',
    lastName: 'Golomazov',
    age: 31,
    skills: ['js', 'css', 'html', 'php'],
  };

  test('Простое получение значения по ключу', () => {
    const getName = getByKey(hashMap, null);
    const skills = getByKey(hashMap, [])('skills');
    const age = getByKey(hashMap, [])('age');

    expect(getName('name')).toBe(hashMap.name);
    expect(skills).toEqual(hashMap.skills);
    expect(age).toBe(hashMap.age);
  });

  test('Возвращение значения по умолчанию', () => {
    // @ts-ignore
    const job = getByKey(hashMap, '')('job');

    expect(job).toBe('');
  });

  test('Проверка наличия значения в возвращаемом значении', () => {
    const skills = getByKey(hashMap, [])('skills');

    expect(skills).toContain('js');
  });
});
