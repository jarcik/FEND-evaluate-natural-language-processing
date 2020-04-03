
import { handleSubmit } from './formHandler';

describe('handleSubmit', () => {
    test('hadnle if there is a function', () => {
        expect(typeof handleSubmit).toBe('function');
    });
});