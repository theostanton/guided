import { actions } from '../index'

xdescribe('Populate temperatures', () => {
    it('runs', async () => {
        await actions.load_temperatures()
    })
})
