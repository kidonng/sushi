import got from 'got'
import compareVersions from 'tiny-version-compare'
import { NowRequest, NowResponse } from '@vercel/node'

export default async (req: NowRequest, { send }: NowResponse) => {
    const { version: bucketVersion } = await got(
        'https://github.com/chawyehsu/dorado/raw/master/bucket/utools.json'
    ).json()

    const official = await got(
        'https://resource.u-tools.cn/currentversion/public.yml'
    ).text()
    const officialVersion = official.match(/uTools-([\w.-]+).exe/)[1]

    send(
        compareVersions(officialVersion, bucketVersion) > -1
            ? official
            : `uTools-${bucketVersion}.exe`
    )
}
