import { NumberToTime } from './numberToTime.pipe';

describe('Pipe - numberToTime', () => {
    let numberToTimePipe: NumberToTime;

    beforeEach(() => {
        numberToTimePipe = new NumberToTime();
    });

        let result = numberToTimePipe.transform(0);
        expect(result).toBe('0min');
    });

        let result = numberToTimePipe.transform(32);
        expect(result).toBe('32min');
    });

        let result = numberToTimePipe.transform(60);
        expect(result).toBe('1h 0min');
    });

        let result = numberToTimePipe.transform(75);
        expect(result).toBe('1h 15min');
    });
});
