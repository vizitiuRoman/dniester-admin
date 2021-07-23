import { Staff } from './staff.model';

describe('User', () => {
    it('should create an instance', () => {
        expect(new Staff()).toBeTruthy();
    });
});
