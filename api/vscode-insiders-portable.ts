import got from 'got'
import { NowRequest, NowResponse } from '@vercel/node'

export default ({ query: { x64 } }: NowRequest, { send }: NowResponse) => {
    got(
        `https://update.code.visualstudio.com/latest/win32-${
            x64 ? 'x64-' : ''
        }archive/insider`
    ).on('response', (response) => {
        const { pathname } = new URL(response.redirectUrls[0])
        const split = pathname.split('/')
        const version = split[3].match(/([\d.]+)-insider/)[1]
        const commit = split[2]

        send(`${version} ${commit}`)
    })
}
