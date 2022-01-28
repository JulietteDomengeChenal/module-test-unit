import {numberInWords} from "../src/numberInWords";

test('should return the number in Words', () => {
    expect(numberInWords(0)).toBe('zéro');
    expect(numberInWords(7)).toBe('sept');

    expect(numberInWords(13)).toBe('treize');
    expect(numberInWords(42)).toBe('quarante-deux');
    expect(numberInWords(70)).toBe('soixante-dix');
    expect(numberInWords(94)).toBe('quatre-vingt-quatorze');

    expect(numberInWords(129)).toBe('cent-vingt-neuf');
    expect(numberInWords(684)).toBe('six cent-quatre-vingt-quatre');

    expect(numberInWords(1451)).toBe('mille quatre cent-cinquante-et-un');
    expect(numberInWords(3963)).toBe('trois mille neuf cent-soixante-trois');
    expect(numberInWords(8001)).toBe('huit mille un');

    expect(numberInWords(431594267)).toBe('quatre cent-trente-et-un millions cinq cent-quatre-vingt-quatorze mille deux cent-soixante-sept');
    expect(numberInWords(400594267)).toBe('quatre cent millions cinq cent-quatre-vingt-quatorze mille deux cent-soixante-sept');
    expect(numberInWords(72196514832)).toBe('soixante-douze milliards cent-quatre-vingt-seize millions cinq cent-quatorze mille huit cent-trente-deux');

});