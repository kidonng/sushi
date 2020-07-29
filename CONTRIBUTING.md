# Contributing

Suggestions and pull requests are highly welcome! Please write the manifests in [recommended format](https://github.com/Ash258/Scoop-Ash258/blob/master/.github/CONTRIBUTING.md#how-to-write-manifests) for easy maintenance.

## Criteria

Manifests will accepted if it meets the following requirements:

- It doesn't already exists in [Scoop Directory](https://rasa.github.io/scoop-directory/by-apps).
- It exists in Scoop Directory, but its info (name, version...) is outdated or inaccurate.
- It exists in Scoop Directory, but it is a nightly version.

## Submitting to known buckets

We suggest you always submit the requests/manifests to the [known buckets](https://github.com/lukesampson/scoop/blob/master/buckets.json) as well. However, they may be rejected or take forever to be approved, which is why personal buckets exist.

Please note, if you want to submit existing manifests from this bucket to the known buckets, make sure to leave a reference to this bucket.

## Non-portable apps

Non-portable apps in this bucket won't have the `-np` suffix you may expect in other buckets such as [`nonportable`](https://github.com/TheRandomLabs/scoop-nonportable). This is intended because most of the time these apps won't have portable version, and marking them as non-portable in the name is futile. Please do not request this kind of name change.

However, if an app does have portable version which is not available/enabled in this bucket, you are welcome to submit a change request.

## To open source maintainers

Are you a open source project maintainer? Do you want to provide a easy way to deliver your applications for your Windows users? We are willing to help you distribute your works and dealing with potential problems! Just [create an issue](https://github.com/kidonng/sushi/issues/new) and we will contact you for the details.
