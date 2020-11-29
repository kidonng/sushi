import { ky, ServerRequest } from '../deps.ts'

export default async (req: ServerRequest) => {
    const source = await ky
        .get('https://github.com/v2fly/v2ray-core/raw/master/core.go')
        .text()
    const [, version] = source.match(/"([\d.]+)"/)!

    const [{
        tag_name,
    }] = await ky
        .get(
            'https://api.github.com/repos/v2fly/V2FlyBleedingEdgeBinary/releases',
            { searchParams: { per_page: 1 } }
        )
        .json()

    req.respond({
        body: `${version}-${tag_name}`,
    })
}
