/**
 * Check if value is an `object`.
 * @param value - Any value can be checked.
 */
const isObject = (
  value: any,
): value is object => value && typeof value === 'object';

export default isObject;
