# Contributing

Suggestions and pull requests are highly welcome! Please write the manifests in [recommended format](https://github.com/Ash258/Scoop-Ash258/blob/master/.github/CONTRIBUTING.md#how-to-write-manifests) for easy maintenance.

## Criteria

Manifests may be accepted if it meets the following requirements:

- It doesn't already exists in [Scoop Directory](https://rasa.github.io/scoop-directory/by-apps).
- It exists in Scoop Directory, but its info (version, installer...) is outdated or can be improved.
- It exists in Scoop Directory, but it is a nightly version which can be versioned.

## Submitting to known buckets

If you want to submit a manifest, we suggest you submit it to the [known buckets](https://github.com/lukesampson/scoop/blob/master/buckets.json) as well. However, it may be rejected (possibly because it requires administrator rights) or take too long to be approved, which is why this buckets exist.

Most of the manifests in this bucket won't be submitted to known buckets, however we welcome you do so, but please make sure to attribute this bucket.

## Non-portable apps

Non-portable apps in this bucket won't have the `-np` suffix you may expect in other buckets such as [`nonportable`](https://github.com/TheRandomLabs/scoop-nonportable). This is intended because these apps seldom have portable version, and marking them as non-portable in the name is futile and may lead to confusion.

However, if an app does have portable version/mode which is not available/enabled in this bucket, you are welcome to request a change.

## To open source maintainers

Are you a open source project maintainer? Do you want to provide a easy way to deliver your applications for your Windows users? We are willing to help you! Just [create an issue](https://github.com/kidonng/sushi/issues/new) so we can discuss the details.
