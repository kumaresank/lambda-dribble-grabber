'use strict'
const assert = require('assert')

const grabber = require('../grabber')

describe('test handler',() => {

    let expectedResults = {
        'https://dribbble.com/shots/3133085-A-simple-Contact-Page': {
            name: 'A simple Contact Page',
            tags: ['contact','faq','landing','mail','phone','ui','ux','website'],
            colors: ['FFFFFF','FBC456','707590','D7D4DB','AAC8D3','F9C9A8','EF7640']
        }
    }

    it('should grab single url', () => {
        let url = Object.keys(expectedResults)[0]
        return grabber.getColors([url])
            .then((colors) => {
                assert.equal(colors.length, 1)
                let firstColor = colors[0]

                assert.ok(firstColor.url, 'should contain url')

                let expectedResult = expectedResults[firstColor.url]
                assert.equal(firstColor.colors, expectedColors)
                assert.deepEqual(firstColor.colors, expectedColors)
            })
    })
})