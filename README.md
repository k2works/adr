ADR - Architecture Decision Records（軽量なアーキテクチャ決定記録ツール）
===

[ADR - Architecture Decision Records（轻量级架构决策记录工具）](https://github.com/phodal/adr)日本語対応版

Inspired by [https://github.com/npryce/adr-tools](https://github.com/npryce/adr-tools), but supported Windows.

ADR Blogpost: [Documenting Architecture Decisions](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

A good material about [Architecture decision record](https://github.com/joelparkerhenderson/architecture_decision_record)

中文翻译：[架构决策记录](https://www.phodal.com/blog/documenting-architecture-decisions/)


**機能特性**
- Windows, GNU/Linux, Mac OSをサポート
- Markdown 目次生成
- プロジェクトマネージャーやビジネスアナリストなど開発者ではない人向けのレポート生成：HTML, CSV, JSON
- adr-toolsと互換性あり
- 多言語対応：英語（English）、中国語（中文）、ブラジルポルトガル語（pt-br）、標準イタリア語（it-IT）、日本語（ja）
- ステータス履歴
- ステータス検索
- 改良されたリスト表示
- adr-toolsと互換性あり
  [本プロジェクトのアーキテクチャ決定記録を見る](/docs/adr)
  **Features**
- Supported Windows, GNU/Linux, Mac OS
- **report for PM, BA**: html, csv, json
- Support Markdown and Asciidoc
- generate markdown and asciidoc toc（see in [docs/adr](/docs/adr) ）
- **i18n**: English (en), 中文(zh-cn), Brazilian Portuguese (pt-br), Standard Italian (it-IT), Farsi (fa), French (fr), Japanese (ja)
- status logs
- status query
- better list view
- compatible adr-tools
- custom templates: add a `template.md` (or `template.adoc`, `template.asciidoc`) file in the save path
## HTML Reporter Example
- [ADR Example](https://phodal.github.io/adr/examples/export-1.html)
- [ADR Tools Example](https://phodal.github.io/adr/examples/export-3.html)
- [会分期 Example](https://phodal.github.io/adr/examples/export-2.html)
- [Arachne Framework Example](https://phodal.github.io/adr/examples/export-4.html)
  Screenshots
---
### ADR List
![List Examples](docs/list-example.png)
### ADR Reporter
![Reporter Examples](docs/reporter-example.png)
## Install
1. install
```bash
npm install -g adr
```
2. init
```bash
adr init <language>
```
e.x: ``adr init en``
### new
```bash
adr new <decision>
```
e.x: ``adr new "create project"``. It will open the new file with your config [editor](#config)
### list
```bash
adr list
```
result:

```
╔══════════════════════════════════════╤══════════════╤═══════════════════╗
║ 決定                                    │ 最終更新日   │ 最終状態            ║
╟──────────────────────────────────────┼──────────────┼───────────────────╢
║ 1. 完全な単体テストを書く                 │ 2017-11-26   │ 2017-11-26 完了     ║
╟──────────────────────────────────────┼──────────────┼───────────────────╢
║ 2. 目次生成の追加                       │ 2017-11-26   │ 2017-11-25 完了     ║
╟──────────────────────────────────────┼──────────────┼───────────────────╢
║ 3. 図形生成機能                         │ 2017-11-26   │ 2017-11-24 完了     ║
╟──────────────────────────────────────┼──────────────┼───────────────────╢
║ 4. オンライン図形生成                   │ 2017-11-26   │ 2017-11-22 提案     ║
╚══════════════════════════════════════╧══════════════╧═══════════════════╝╝
```

### generate toc

```bash
adr generate toc
```

results:

```markdown
# アーキテクチャ決定記録
* [1. 完全な単体テストを書く](001-完全な単体テストを書く.md)
* [2. 目次生成の追加](002-目次生成の追加.md)
* [3. 図形生成](003-図形生成.md))
```

### generate graph

```sh
adr generate graph
```

results:

```
digraph {
  node [shape=plaintext];
  _1 [label="1.完全な単体テストを書く"; URL="001-完全な単体テストを書く.md"]
  _2 [label="2.目次生成の追加"; URL="002-目次生成の追加.md"]
  _1 -> _2 [style="dotted"];
  _3 [label="3.図形生成"; URL="003-図形生成.md"]
  _2 -> _3 [style="dotted"];
}
```

### update filename by title

```bash
adr update
```

### decisions change logs

```bash
adr logs <index>
```

e.x. ``adr logs 9``

```
╔════════════╤══════╗
║  -         │  -   ║
╟────────────┼──────╢
║ 2017-11-23 │ 提案  ║
╟────────────┼──────╢
║ 2017-11-24 │ 承認  ║
╚════════════╧══════╝
```

### export adr

support: json, csv, html, markdown

```bash
adr export <type>
```

e.x. ``adr export csv``

```
インデックス, 決定, 最終更新日, 最終状態
1, 完全な単体テストを書く, 2017-11-26, 2017-11-26 完了
2, 目次生成の追加, 2017-11-26, 2017-11-25 完了
3, 図形生成機能, 2017-11-26, 2017-11-24 完了
```

### search adr

```bash
adr search <keyword>
```

e.x. ``adr search 测试``

```
╔══════════════════════╤══════════════════╗
║ 決定                 │ 最終状態         ║
╟──────────────────────┼──────────────────╢
║ 19. e2e テストの追加 │ 2017-11-28 提案  ║
╟──────────────────────┼──────────────────╢
║ 1. 完全な単体テストを書く │ 2017-11-26 完了 ║
╚══════════════════════╧══════════════════╝╝
```

Config
---

current:

- **language**, language
- **path**, save path
- **digits**, the index length, e.x. digits:3 001-index.md
- **prefix**, the prefix of files, e.x. adr-0001
- **editor**, the editor to open file, e.x. code, [more information](https://github.com/lahmatiy/open-in-editor#editor), and you can also use the editor by setting the program path, such as `/System/Applications/TextEdit.app/Contents/MacOS/TextEdit`
- **force_nfc**, whether to normalize the names of files generated by `adr` commands in NFC (Normalization Form Canonical Composition) format, e.x. `true`
- **extension**, the document extension/format you want to used. `md` for Markdown (default value) or`adoc` for asciidoc

example config:

```json
{
  "path":"doc/adr/",
  "language":"ja",
  "prefix": "",
  "digits": 4,
  "editor": "code",
  "force_nfc": true,
  "extension": "md"
}
```

License
---

[![Phodal's Idea](http://brand.phodal.com/shields/idea-small.svg)](http://ideas.phodal.com/)

@ 2017~2021 A [Phodal Huang](https://www.phodal.com)'s [Idea](http://github.com/phodal/ideas).  This code is distributed under the MIT license. See `LICENSE` in this directory.
