import got from 'got'
import { NowRequest, NowResponse } from '@vercel/node'

export default (req: NowRequest, { send }: NowResponse) => {
    got('https://evernote.com/download/get.php?file=Win').on(
        'response',
        (response) => {
            const [url] = response.redirectUrls
            const version = url.match(/Evernote-([\d.]+)/)[1]

            send(`${version} ${url}`)
        }
    )
}
