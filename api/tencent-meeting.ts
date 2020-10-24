import { ky, ServerRequest } from '../deps.ts'

export default async (req: ServerRequest) => {
    const { url, headers } = req
    const { searchParams } = new URL(
        url,
        `${headers.get('x-forwarded-proto')}://${headers.get(
            'x-forwarded-host'
        )}`
    )

    const {
        data: [{ md5, url: _url, version }],
    } = await ky
        .post(
            'https://meeting.tencent.com/wemeet-webapi/v2/config/query-download-info',
            { json: [{ instance: 'windows', type: '0300000000' }] }
        )
        .json()

    req.respond({
        body: searchParams.has('hash') ? md5 : `${version} ${_url}#/dl.7z`,
    })
}
