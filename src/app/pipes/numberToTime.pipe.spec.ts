import { NumberToTime } from './numberToTime.pipe';

describe('Pipe - numberToTime', () => {
    let numberToTimePipe: NumberToTime;

    beforeEach(() => {
        numberToTimePipe = new NumberToTime();
    });

    it('transform 0 as 0min', () => {
        let result = numberToTimePipe.transform(0);
        expect(result).toBe('0min');
    });

    it('transform 32 as 32min', () => {
        let result = numberToTimePipe.transform(32);
        expect(result).toBe('32min');
    });

    it('transform 60 as 1h 0min', () => {
        let result = numberToTimePipe.transform(60);
        expect(result).toBe('1h 0min');
    });

    it('transform 75 as 1h 15min', () => {
        let result = numberToTimePipe.transform(75);
        expect(result).toBe('1h 15min');
    });
});