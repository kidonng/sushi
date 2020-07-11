import got from 'got'
import { NowRequest, NowResponse } from '@vercel/node'

export default async (
    { query: { hash } }: NowRequest,
    { send }: NowResponse
) => {
    const {
        data: [{ md5, url, version }],
    } = await got
        .post(
            'https://meeting.tencent.com/wemeet-webapi/v2/config/query-download-info',
            { json: [{ instance: 'windows', type: '0300000000' }] }
        )
        .json()

    send(hash ? md5 : `${version} ${url}`)
}
