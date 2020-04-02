
import { parseData } from './formHandler';

describe('parse data', () => {
    test('parsing', () => {
        expect(parseData({text: 'hello'})).toEqual({text: 'hello'});
      });
});