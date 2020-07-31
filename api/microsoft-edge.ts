import got from 'got'
import { NowRequest, NowResponse } from '@vercel/node'

export default async (req: NowRequest, { json }: NowResponse) => {
    const data = await got.post('https://api.shuax.com/v2/edge').json()

    json(data)
}
