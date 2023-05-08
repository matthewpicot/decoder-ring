// Write your tests here!
const expect = require('chai').expect;
const { substitution } = require('../src/substitution');

describe('substitution', () =>{
    it('The input can include spaces, letters, and special characters when encoding', () =>{
        let actual = substitution('gkt%x eqc%', 'qwer%opasdfghjklzxcvb&tyui', false);
        expect(actual).to.equal('lower case');
    });

    it('Spaces kept when decoding', () =>{
        let actual = substitution('gkt%x eqc%', 'qwer%opasdfghjklzxcvb&tyui', false);
        expect(actual).to.equal('lower case');
    });

    it('Spaces are maintained throughout when encoding', () =>{
        let actual = substitution('lower case', 'qwer%opasdfghjklzxcvb&tyui');
        expect(actual).to.equal('gkt%x eqc%');
    });

    it('Capital letters are ignored', () =>{
        let actual = substitution('NO CAPITALS', 'qwer%opasdfghjklzxcvb&tyui');
        expect(actual).to.equal('jk eqlsvqgc');
    });

    it('Alphabet parameter must be a string of exactly 26 characters, including special characters, and must all be unique', () =>{
        let actual = substitution('zipo', 'abcdefghijklmn&pqrstuvw^-*');
        expect(actual).to.equal('*ip&');
    });

    it('Returns false if alphabet is longer or shorter than 26 characters', () =>{
        let bigger = substitution('anything', 'abcdefghijklmn!pqrstuvw@#$%^&');
        let less = substitution('anything', 'abcdeuvw!@#$%^');
        expect(bigger).to.be.false;
        expect(less).to.be.false;
    });

    it('Returns false if alphabet is null', () =>{
        let actual = substitution('anything', '');
        expect(actual).to.be.false;
    });
});