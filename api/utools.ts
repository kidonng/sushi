import { ky, compareVersions, ServerRequest } from '../deps.ts'

export default async (req: ServerRequest) => {
    const { version: bucketVersion } = await ky
        .get(
            'https://github.com/chawyehsu/dorado/raw/master/bucket/utools.json'
        )
        .json()

    const official = await ky
        .get('https://resource.u-tools.cn/currentversion/public.yml')
        .text()
    const officialVersion = official.match(/uTools-([\w.-]+).exe/)![1]

    req.respond({
        body:
            compareVersions(officialVersion, bucketVersion) > -1
                ? official
                : `uTools-${bucketVersion}.exe`,
    })
}
