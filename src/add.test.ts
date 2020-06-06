import { add } from './add';

describe('Calculator', () => {
  test('Add two numbers', () => {
    expect(add(4, 6)).toEqual(10);
  });
});

export {};
