module.exports = [
    {
        type: 'Only text',
        test: 'Test',
        expectedResult: 'Test'
    },
    {
        type: 'Alphanumeric text',
        test: 'Test123456',
        expectedResult: 'Test123456'
    },
    {
        type: 'Limit of characters amount',
        test: 'Test with 30 characters 123456',
        expectedResult: 'Test with 30 characters 123456'
    },
    {
        type: 'Over limit of characters amount',
        test: 'Test with 30 characters 12345678910',
        expectedResult: 'Test with 30 characters 123456'
    }
]