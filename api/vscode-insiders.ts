import { ky, dayjs, ServerRequest } from '../deps.ts'

export default (req: ServerRequest) => {
    const searchParams = new URLSearchParams(
        req.url.substring(req.url.indexOf('?'))
    )

    ky.get(
        `https://update.code.visualstudio.com/latest/win32-${
            searchParams.has('x64') ? 'x64-' : ''
        }archive/insider`
    ).then(async (res) => {
        const { pathname } = new URL(res.url)
        const [, , commit, filename] = pathname.split('/')
        const [, version] = filename.match(/([\d.]+)-insider/)!

        const {
            commit: {
                author: { date },
            },
        } = await ky
            .get(
                `https://api.github.com/repos/microsoft/vscode/commits/${commit}`
            )
            .json()

        req.respond({
            body: `${version}-${dayjs(date).format('YYYYMMDDHHss')} ${commit}`,
        })
    })
}
