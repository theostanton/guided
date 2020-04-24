import { dateString, isValid, plusDays } from './dates'

describe('plusDays', () => {
    it('Should return same result when adding 0 days', () => {
        const input = '2020-08-01'
        const output = plusDays(input, 0)
        expect(output).toBe(input)
    })

    it('Should return next days date when adding 1 day', () => {
        const input = '2020-08-01'
        const output = plusDays(input, 1)
        expect(output).toBe('2020-08-02')
    })

    it('Should return following month when adding 1 day onto last day', () => {
        const input = '2020-08-31'
        const output = plusDays(input, 1)
        expect(output).toBe('2020-09-01')
    })

    it('Should return following year when adding 1 day onto last day', () => {
        const input = '2020-12-31'
        const output = plusDays(input, 1)
        expect(output).toBe('2021-01-01')
    })

    it('Should return yesterdays date when adding -1 day', () => {
        const input = '2020-08-01'
        const output = plusDays(input, -1)
        expect(output).toBe('2020-07-31')
    })
})

describe('dateString', () => {
    it('Should handle single digits', () => {
        const date = new Date(2020, 0, 1)
        const str = dateString(date)
        expect(str).toBe('2020-01-01')
    })
    it('Should handle double digits', () => {
        const date = new Date(2020, 11, 30)
        const str = dateString(date)
        expect(str).toBe('2020-12-30')
    })
    it('Should handle December', () => {
        const date = new Date(2020, 11, 1)
        const str = dateString(date)
        expect(str).toBe('2020-12-01')
    })
    it('Should handle last day of month', () => {
        const date = new Date(2020, 0, 31)
        const str = dateString(date)
        expect(str).toBe('2020-01-31')
    })
})

describe('isValid', () => {
    it.each`
        dateString       | valid
        ${'1901-01-01'}  | ${true}
        ${'2020-04-20'}  | ${true}
        ${'2020-12-31'}  | ${true}
        ${'2020-04-10'}  | ${true}
        ${'2020-04-40'}  | ${false}
        ${' 2020-12-31'} | ${false}
        ${'2020-12-31 '} | ${false}
        ${'2020-12-32'}  | ${false}
        ${'2020-13-31'}  | ${false}
        ${'2020-1-31'}   | ${false}
        ${'2020-01-1'}   | ${false}
        ${'20-01-1'}     | ${false}
        ${'2020-01/01'}  | ${false}
        ${'2020-t-01'}   | ${false}
        ${'2020-*-01'}   | ${false}
        ${'2020-*-01'}   | ${false}
    `("should return $valid for '$dateString'", ({ dateString, valid }) => {
        const result = isValid(dateString)
        expect(result).toEqual(valid)
    })
})
