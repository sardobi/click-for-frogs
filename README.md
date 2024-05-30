# Frogges

Recreates Tumblr's [Click for frogs][frogs] feature as best I can as a Firefox
extension.

## Installation

Get it from [FireFox Addons][addons-page].

## Development

To develop changes to this extension:
- Clone this repository
- Go to [`about:debugging`][about-debugging] in Firefox
- Follow [these instructions][extensions-testing] to load your locally checked out code

The extension is packaged for publishing using the [`web-ext` tool][web-ext]:

```sh
web-ext build
```

This outputs a `.zip` file that can be [uploaded to the Firefox Addons page][publish].

(These are mainly notes to myself - I don't expect to get or handle contributions really, but if the mood strikes you, feel free to fork and PR.)


[about-debugging]: about:debugging
[addons-page]: https://addons.mozilla.org/en-GB/firefox/addon/click-for-frogs/
[extensions-testing]: https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#extensions
[frogs]: https://www.tumblr.com/prideplus/722085154728869888/hello-fine-funky-little-friends-sadly-we-had?source=share
[publish]: https://extensionworkshop.com/documentation/publish/submitting-an-add-on/
[web-ext]: https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/
