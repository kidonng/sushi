import got from 'got'
import { NowRequest, NowResponse } from '@vercel/node'
import dayjs from 'dayjs'

export default async (req: NowRequest, { send }: NowResponse) => {
    const source = await got(
        'https://github.com/v2fly/v2ray-core/raw/master/core.go'
    ).text()
    const [, version] = source.match(/"([\d.]+)"/)

    const [
        { tag_name, published_at },
    ] = await got(
        'https://api.github.com/repos/v2fly/V2FlyBleedingEdgeBinary/releases',
        { searchParams: { per_page: 1 } }
    ).json()

    send(`${tag_name} ${version}-${dayjs(published_at).format('YYYYMMDDHHss')}`)
}
