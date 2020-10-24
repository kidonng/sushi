import { ky, dayjs, ServerRequest } from '../deps.ts'

export default async (req: ServerRequest) => {
    const source = await ky
        .get('https://github.com/v2fly/v2ray-core/raw/master/core.go')
        .text()
    const [, version] = source.match(/"([\d.]+)"/)!

    const {
        sha,
        commit: {
            author: { date },
        },
    } = await ky
        .get('https://api.github.com/repos/v2fly/v2ray-core/commits/master', {
            searchParams: { per_page: 1 },
        })
        .json()

    req.respond({
        body: `${sha} ${version}-${dayjs(date).format('YYYYMMDDHHss')}`,
    })
}
