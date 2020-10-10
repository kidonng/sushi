# 🍣 Sushi

A tasty and inclusive [Scoop](https://scoop-docs.now.sh/) bucket, providing various applications.

Spot an error? Find a place which can be improved? Or your favorite application isn't included? Feel free to [submit an issue](https://github.com/kidonng/sushi/issues/new) or make a pull request! **Make sure to read the [contributing guide](CONTRIBUTING.md) first.**

## Usage

```powershell
scoop bucket add sushi https://github.com/kidonng/sushi
# The bucket name can be omitted most of the time
scoop install sushi/<app>
```

## Manifests

The lists are sorted alphabetically.

### Featured

-   **evernote**: Note Taking App - Organize Your Notes with Evernote
-   **listary-beta**: A revolutionary search utility
-   **microsoft-edge**: The new Microsoft Edge browser
-   **openhashtab**: A shell extension for conveniently calculating and checking file hashes from file properties
-   **proxychains**: Windows and Cygwin port of proxychains, based on MinHook and DLL Injection
-   **tencent-meeting**: Video conferencing app by Tencent

### All manifests

`#` Require administrator rights (`scoop install sudo`)

`*` Non portable (may store data outside of Scoop directory)

<details>
<summary><strong>Development</strong></summary>

-   [cf-tool](https://github.com/xalanq/cf-tool) `*`
-   [cpeditor `*` / cpeditor-beta](https://github.com/cpeditor/cpeditor)
-   [dvm](https://github.com/justjavac/dvm)
-   [vscode-insiders `*` / vscode-insiders-portable](https://code.visualstudio.com/insiders/)

    Can be updated via Scoop, unlike `extras/vscode-insiders` and `extras/vscode-insiders-portable`.

</details>

<details>
<summary><strong>Fonts</strong></summary>

Fonts do **not** need administrator rights to **install**, but they are **needed** to **uninstall**.

-   [cascadia-code-pl](https://github.com/microsoft/cascadia-code)

    Powerline version only, which is different from `nerd-fonts/Cascadia-Code`. Windows Terminal only bundles normal version.

-   [jetbrains-mono](https://github.com/JetBrains/JetBrainsMono)

    Variable format only, which is different from `nerd-fonts/JetBrains-Mono`.

-   [source-han-sans-truetype](https://github.com/be5invis/source-han-sans-ttf)
-   [source-han-serif-truetype](https://github.com/Pal3love/Source-Han-TrueType)

</details>

<details>
<summary><strong><a href="https://qv2ray.net/">Qv2ray</a></strong></summary>

-   [qv2ray-beta](https://github.com/Qv2ray/Qv2ray)
-   [qv2ray-plugin-command / qv2ray-plugin-command-beta](https://github.com/Qv2ray/QvPlugin-Command)
-   [qv2ray-plugin-naiveproxy / qv2ray-plugin-naiveproxy-beta](https://github.com/Qv2ray/QvPlugin-NaiveProxy)
-   [qv2ray-plugin-ss / qv2ray-plugin-ss-beta](https://github.com/Qv2ray/QvPlugin-SS)
-   [qv2ray-plugin-ssr / qv2ray-plugin-ssr-beta](https://github.com/Qv2ray/QvPlugin-SSR)
-   [qv2ray-plugin-trojan / qv2ray-plugin-trojan-beta](https://github.com/Qv2ray/QvPlugin-Trojan)
-   [qv2ray-plugin-trojan-go / qv2ray-plugin-trojan-go-beta](https://github.com/Qv2ray/QvPlugin-Trojan-Go)

</details>

<details>
<summary><strong><a href="https://www.v2fly.org/">V2Ray</a></strong></summary>

-   [v2ray-beta](https://github.com/v2fly/v2ray-core)
-   [v2ray-domain-list-community](https://github.com/v2ray/domain-list-community)
-   [v2ray-geoip](https://github.com/v2ray/geoip)
-   [v2ray-rules-dat](https://github.com/Loyalsoldier/v2ray-rules-dat)
-   [v2ray-unstable](https://github.com/v2fly/V2FlyBleedingEdgeBinary)
-   [v2ray-vless](https://github.com/rprx/v2ray-vless)

</details>

<details>
<summary><strong>Proxies</strong></summary>

-   [clash](https://github.com/Dreamacro/clash)
-   [mellow](https://github.com/mellow-io/mellow) `#` `*`
-   [naivesharp](https://github.com/KevinZonda/NaiveSharp)
-   [proxifier-beta](https://www.proxifier.com/beta/)
-   [proxychains](https://github.com/shunf4/proxychains-windows)
-   [trojan-client-slim](https://github.com/KevinZonda/trojan-client-slim)
-   [trojan-go](https://p4gefau1t.github.io/trojan-go/)
-   [trojan-qt5](https://github.com/Trojan-Qt5/Trojan-Qt5)
-   [v2ray-desktop](https://github.com/Dr-Incognito/V2Ray-Desktop) `*`

</details>

<details>
<summary><strong>Miscellaneous</strong></summary>

-   [dotnet-desktop-runtime](https://dotnet.microsoft.com/)

    "Portable version", which is different from `extras/windowsdesktop-runtime`. Copied from [`dorado/dotnet-desktop-runtime`](https://github.com/chawyehsu/dorado/blob/master/bucket/dotnet-desktop-runtime.json).

-   [evernote](https://evernote.com/) `*`
-   [firefox-tete009 * / firefox-tete009-portable](http://www1.plala.or.jp/tete009/en-US/software.html#FIREFOX)

    Portable mode may interfere with other applications, such as MacType's font substitution feature.

-   [fontloadersub](https://github.com/yzwduck/FontLoaderSub)
-   [lavfilters](https://github.com/Nevcairiel/LAVFilters) `#`

    Based on [`dorado/lavfilters`](https://github.com/chawyehsu/dorado/blob/master/experiment/lavfilters.json).

-   [listary-beta](https://www.listary.com/beta) `#` `*`

    Had been [renamed](https://github.com/kidonng/sushi/commit/986f8d81625e5a1a5a33ec8bf81cb7b25a543b48) to `listary-beta-np` but was [reverted](https://github.com/kidonng/sushi/commit/b33d21a6c83c44c765fcd6bc8dab9cba820038d4).

-   [microsoft-edge / microsoft-edge-beta / microsoft-edge-dev / microsoft-edge-canary](https://www.microsoft.com/edge) `*`

    Can be updated via Scoop, unlike `nonportable/microsoft-edge-beta-np` and `nonportable/microsoft-edge-dev-np`.

-   [nali](https://github.com/zu1k/nali) `*`
-   [obsidian](https://obsidian.md/) `*`
-   [openhashtab](https://github.com/namazso/OpenHashTab) `#`
-   [pandownload](https://pandownload.com/)

    Copied from [`dorado/pandownload`](https://github.com/chawyehsu/dorado/blob/master/bucket/pandownload.json).

-   [qtpass](https://github.com/IJHack/QtPass)
-   [sandboxie-plus](https://github.com/sandboxie-plus/Sandboxie)
-   [tencent-meeting](https://meeting.tencent.com/) `*`
-   [varpanel](http://implbits.com/products/varpanel/)
-   [wechat](https://pc.weixin.qq.com/) `*`
-   [wnr](https://github.com/RoderickQiu/wnr) `*`
-   [youtube-dl-wpf](https://github.com/database64128/youtube-dl-wpf)

</details>

<details>
<summary><strong>Deprecated</strong></summary>

These manifests have been removed from this bucket because there are better/maintained alternatives in other buckets.

-   [android-clt](https://github.com/kidonng/sushi/commit/c90dba491d08ac4b088474513a79381ef33085cd): available in `main` bucket
-   [fluent-reader](https://github.com/kidonng/sushi/commit/7d89dfbce165118692bc16e15aecea3cf8e19481): available in `extras` bucket
-   [naiveproxy](https://github.com/kidonng/sushi/commit/45e3dfb98febf44c3fbd51461d7ba989e4102b7b): available in `main` bucket
-   [officetoolplus-beta](https://github.com/kidonng/sushi/commit/bf3060c3a5c67678c41f0fa6ca7edeae46a53043): available in [@chawyehsu's bucket](https://github.com/chawyehsu/dorado)
-   [scoop-completion](https://github.com/kidonng/sushi/commit/e80f84ed601b592d6508323716013457c9dad625): available in [@dodorz's bucket](https://github.com/dodorz/scoop-bucket)
-   [wechatdevtools-32bit](https://github.com/kidonng/sushi/commit/84a1b116472bfb224f4e960696500957b10c44d1): available in [@chawyehsu's bucket](https://github.com/chawyehsu/dorado) as `wechatdevtools`

</details>
