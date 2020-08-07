import got from 'got'
import { NowRequest, NowResponse } from '@vercel/node'
import dayjs from 'dayjs'

export default ({ query: { x64 } }: NowRequest, { send }: NowResponse) => {
    got(
        `https://update.code.visualstudio.com/latest/win32-${
            x64 ? 'x64-' : ''
        }archive/insider`
    ).on('response', async (response) => {
        const { pathname } = new URL(response.redirectUrls[0])
        const [, , commit, filename] = pathname.split('/')
        const [, version] = filename.match(/([\d.]+)-insider/)

        const {
            author: { date },
        } = await got(
            `https://api.github.com/repos/microsoft/vscode/git/commits/${commit}`
        ).json()

        send(`${version}-${dayjs(date).format('YYYYMMDDHHss')} ${commit}`)
    })
}
