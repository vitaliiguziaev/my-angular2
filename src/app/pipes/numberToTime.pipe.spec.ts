import { NumberToTime } from './numberToTime.pipe';

describe('Pipe - numberToTime', () => {
    let numberToTimePipe: NumberToTime;

    beforeEach(() => {
        numberToTimePipe = new NumberToTime();
    });

    it('should 0 return as 0min', () => {
        let result = numberToTimePipe.transform(0);
        expect(result).toBe('0min');
    });

    it('should 32 return as 32min', () => {
        let result = numberToTimePipe.transform(32);
        expect(result).toBe('32min');
    });

    it('should 60 return as 1h 0min', () => {
        let result = numberToTimePipe.transform(60);
        expect(result).toBe('1h 0min');
    });

    it('should 75 return as 1h 15min', () => {
        let result = numberToTimePipe.transform(75);
        expect(result).toBe('1h 15min');
    });
});