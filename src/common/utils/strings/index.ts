import { compose, head, tail, toLower, toUpper } from 'ramda';
import { v4 } from 'uuid';

/**
 * ### Метод преобразования первого символа строки в верхний регистр
 *
 * @example
 * const str = 'тестовая строка';
 * const newStr = toCapitalize(str); // Тестовая строка
 *
 * @param {string} str - Преобразуемая строка
 *
 * @return {string} Строка с преобразованными первым символом
 */
export const toCapitalize = compose(
  ({ firstLetter, tailString }) =>
    `${toUpper(firstLetter)}${toLower(tailString)}`,
  (_: string) => ({ firstLetter: head(_), tailString: tail(_) }),
);

/**
 * ### Метод генерации guid
 *
 * @returns {string} guid
 */
export const uuid4 = (): string => v4().split('-').join('');

/**
 * ### Метод переводит массив байт в base64
 *
 * @param {Array<number>} arrayBytes - Массив байт
 *
 * @returns {string} - Строка в base64
 */
export const base64FromArray = (arrayBytes: number[]): string =>
  String.fromCharCode.apply(null, arrayBytes);
