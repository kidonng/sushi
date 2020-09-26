import got from 'got'
import { NowRequest, NowResponse } from '@vercel/node'
import dayjs from 'dayjs'

export default async (req: NowRequest, { send }: NowResponse) => {
    const [
        { tag_name, published_at },
    ] = await got(
        'https://api.github.com/repos/v2fly/V2FlyBleedingEdgeBinary/releases',
        { searchParams: { per_page: 1 } }
    ).json()

    send(`${tag_name} ${dayjs(published_at).format('YYYYMMDDHHss')}`)
}
