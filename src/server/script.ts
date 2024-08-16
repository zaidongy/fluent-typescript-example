import { gs } from '@servicenow/glide'

export function showStateUpdate(current:any, previous:any) {
    const currentState = current.getValue('state')
    const previousState = previous.getValue('state')

    gs.addInfoMessage('Hello from Typescript!')
    gs.addInfoMessage(`state updated from "${previousState}" to "${currentState}"`)
}