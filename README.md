# 🍣 Sushi

Sushi is a tasty [Scoop](https://scoop-docs.now.sh/) bucket, striving to provide up-to-date and accurate manifests, even for nightly applications.

## Usage

```powershell
scoop bucket add sushi https://github.com/kidonng/sushi
# Recommended, but the bucket name can be omitted most of the time
scoop install sushi/<app>
```

## Manifests

If you favorite applications aren't included, feel free to [submit an issue](https://github.com/kidonng/sushi/issues/new) or make a pull request! Make sure to read the [contributing guide](CONTRIBUTING.md) first.

### Featured

-   **android-clt**: The official Android command line tools
-   **listary-beta**: A revolutionary search utility
-   **microsoft-edge**: The new Microsoft Edge browser
-   **openhashtab**: A shell extension for conveniently calculating and checking file hashes from file properties
-   **proxychains**: Windows and Cygwin port of proxychains, based on MinHook and DLL Injection
-   **tencent-meeting**: Video conferencing app by Tencent

---

\# Require administrator rights (`scoop install sudo`)

\* Non portable (store data outside of Scoop directory)

<details>
<summary><strong>Development</strong></summary>

-   [android-clt](https://developer.android.com/studio#command-tools)

    Prefer this over `extras/android-sdk` as the latter is no longer updating.

-   [cf-tool](https://github.com/xalanq/cf-tool) \*
-   [cpeditor \* / cpeditor-beta](https://github.com/cpeditor/cpeditor)
-   [vscode-insiders \* / vscode-insiders-portable](https://code.visualstudio.com/insiders/)

    Can be updated via Scoop, unlike `extras/vscode-insiders` and `extras/vscode-insiders-portable`

</details>

<details>
<summary><strong>Fonts</strong></summary>

Fonts do **not** need administrator rights to **install**, but they are **needed** to **uninstall**.

-   [cascadia-code-pl](https://github.com/microsoft/cascadia-code)

    Powerline version only, which is different from `nerd-fonts/Cascadia-Code`. Windows Terminal only bundles normal version.

-   [jetbrains-mono](https://github.com/JetBrains/JetBrainsMono)

    Variable format only, which is different from `nerd-fonts/JetBrains-Mono`

-   [source-han-sans-truetype](https://github.com/be5invis/source-han-sans-ttf)
-   [source-han-serif-truetype](https://github.com/Pal3love/Source-Han-TrueType)

</details>

<details>
<summary><strong><a href="https://qv2ray.github.io/">Qv2ray</a></strong></summary>

-   [qv2ray-beta](https://github.com/Qv2ray/Qv2ray)
-   [qv2ray-plugin-command / qv2ray-plugin-command-beta](https://github.com/Qv2ray/QvPlugin-Command)
-   [qv2ray-plugin-naiveproxy](https://github.com/Qv2ray/QvPlugin-NaiveProxy)
-   [qv2ray-plugin-ss](https://github.com/Qv2ray/QvPlugin-SS)
-   [qv2ray-plugin-ssr / qv2ray-plugin-ssr-beta](https://github.com/Qv2ray/QvPlugin-SSR)
-   [qv2ray-plugin-trojan / qv2ray-plugin-trojan-beta](https://github.com/Qv2ray/QvPlugin-Trojan)
-   [qv2ray-plugin-trojan-go](https://github.com/Qv2ray/QvPlugin-Trojan-Go)

</details>

<details>
<summary><strong><a href="https://www.v2fly.org/">V2Ray</a> Rulesets</strong></summary>

-   [v2ray-domain-list-community](https://github.com/v2ray/domain-list-community)
-   [v2ray-geoip](https://github.com/v2ray/geoip)
-   [v2ray-rules-dat](https://github.com/Loyalsoldier/v2ray-rules-dat)

</details>

<details>
<summary><strong>Proxies</strong></summary>

-   [naivesharp](https://github.com/KevinZonda/NaiveSharp)
-   [proxychains](https://github.com/shunf4/proxychains-windows)
-   [trojan-client-slim](https://github.com/KevinZonda/trojan-client-slim)
-   [trojan-go](https://p4gefau1t.github.io/trojan-go/)
-   [trojan-qt5](https://github.com/Trojan-Qt5/Trojan-Qt5)
-   [v2ray-desktop](https://github.com/Dr-Incognito/V2Ray-Desktop) \*
-   [v2ray-vless](https://github.com/rprx/v2ray-vless)

</details>

<details>
<summary><strong>Miscellaneous</strong></summary>

-   [dotnet-desktop-runtime](https://dotnet.microsoft.com/)

    "Portable version", which is different from `extras/windowsdesktop-runtime`. Copied from [`dorado/dotnet-desktop-runtime`](https://github.com/chawyehsu/dorado/blob/master/bucket/dotnet-desktop-runtime.json).

-   [evernote](https://evernote.com/) \*
-   [fontloadersub](https://github.com/yzwduck/FontLoaderSub)
-   [listary-beta](https://www.listary.com/beta) # \*

    Had been [renamed](https://github.com/kidonng/sushi/commit/fad0bfefc4fda844c43a66d15a2af60a539df14b) to `listary-beta-np` but was [reverted](https://github.com/kidonng/sushi/commit/0addc8aa2fd8b9f389a3a96f952d878148466d70).

-   [microsoft-edge / microsoft-edge-beta / microsoft-edge-dev / microsoft-edge-canary](https://www.microsoft.com/edge) \*

    Can be updated via Scoop, unlike `nonportable/microsoft-edge-beta-np` and `nonportable/microsoft-edge-dev-np`

-   [obsidian](https://obsidian.md/) \*
-   [officetoolplus-beta](https://otp.landian.vip/)
-   [openhashtab](https://github.com/namazso/OpenHashTab) #
-   [qtpass](https://github.com/IJHack/QtPass)
-   [sandboxie-plus](https://github.com/sandboxie-plus/Sandboxie)
-   [tencent-meeting](https://meeting.tencent.com/) \*
-   [varpanel](http://implbits.com/products/varpanel/)
-   [wechat](https://pc.weixin.qq.com/) \*
-   [wnr](https://github.com/RoderickQiu/wnr) \*
-   [youtube-dl-wpf](https://github.com/database64128/youtube-dl-wpf)

</details>

<details>
<summary><strong>Deprecated</strong></summary>

-   [fluent-reader](https://github.com/kidonng/sushi/commit/5c2c1adbfa27969bda530c2a3123da970320d702): Available in `extras`
-   [naiveproxy](https://github.com/kidonng/sushi/commit/64a31947c2b5c7bfca9107af56cfc62078cbec61): Available in `main`
-   [scoop-completion](https://github.com/kidonng/sushi/commit/dfa918bc25e7e168ecdc7817f5b0171042368e73): Available in [`Ash258`](https://github.com/Ash258/Scoop-Ash258)

</details>
