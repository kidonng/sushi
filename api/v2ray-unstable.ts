import got from 'got'
import { NowRequest, NowResponse } from '@vercel/node'
import dayjs from 'dayjs'

export default async (req: NowRequest, { send }: NowResponse) => {
    const source = await got(
        'https://github.com/v2fly/v2ray-core/raw/master/core.go'
    ).text()
    const [, version] = source.match(/"([\d.]+)"/)

    const {
        sha,
        commit: {
            author: { date },
        },
    } = await got(
        'https://api.github.com/repos/v2fly/v2ray-core/commits/master',
        { searchParams: { per_page: 1 } }
    ).json()

    send(`${sha} ${version}-${dayjs(date).format('YYYYMMDDHHss')}`)
}
