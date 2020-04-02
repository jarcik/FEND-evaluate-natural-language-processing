
import { checkForUserText } from './textChecker';

describe('Check user input', () => {
    test('text', () => {
        expect(checkForUserText('hello there')).toEqual(true);
      });
      test('empty', () => {
          expect(checkForUserText('', false)).toEqual(false);
        });
});