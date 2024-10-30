// NOTE: Test includes code generated by ChatGPT

const { conversion } = require('../script.js');

document.getElementById = jest.fn();

const mockElements = () => {
    const number = { value: '1987' };
    const octBtn = { checked: false };
    const hexBtn = { checked: false };
    const resultDiv = { style: { display: 'none' } };
    const resultMessage = { innerText: '' };
    const result = { innerText: '' };

    document.getElementById.mockImplementation((id) => {
        switch (id) {
            case 'number': return number;
            case 'octBtn': return octBtn;
            case 'hexBtn': return hexBtn;
            case 'resultDiv': return resultDiv;
            case 'resultMessage': return resultMessage;
            case 'result': return result;
            default: return null;
        }
    });

    return { number, octBtn, hexBtn, resultDiv, resultMessage, result };
};

describe('conversion function', () => {
    let elements;

    beforeEach(() => {
        elements = mockElements();
        global.event = { preventDefault: jest.fn() };
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('converts number to octal and updates the DOM', () => {
        elements.octBtn.checked = true; // Set octal button as checked
        conversion();

        expect(elements.resultMessage.innerText).toBe('1987 converted to octal is:');
        expect(elements.result.innerText).toBe('3703'); // 1987 in octal
        expect(elements.resultDiv.style.display).toBe('block');
    });

    test('converts number to hexadecimal and updates the DOM', () => {
        elements.hexBtn.checked = true; // Set hex button as checked
        conversion();

        expect(elements.resultMessage.innerText).toBe('1987 converted to hexadecimal is:');
        expect(elements.result.innerText).toBe('7C3'); // 1987 in hexadecimal
        expect(elements.resultDiv.style.display).toBe('block');
    });

    /*
    Since the radio button to select conversion to to octal is 
    checked by default, it is impossible for both buttons to be 
    un-checked at the same time.

    -W.A.
    */
})