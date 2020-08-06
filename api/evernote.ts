import got from 'got'
import { NowRequest, NowResponse } from '@vercel/node'

export default (req: NowRequest, { send }: NowResponse) => {
    got('https://evernote.com/download/get.php?file=Win').on(
        'response',
        (response) => {
            const [, version] = response.redirectUrls[0].match(
                /Evernote_([\d.]+).exe/
            )

            send(version)
        }
    )
}
