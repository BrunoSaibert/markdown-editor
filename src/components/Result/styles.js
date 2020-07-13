import styled from 'styled-components';

export const Container = styled.div`
  border-left: 1px solid #ccc;
  padding: 16px;
`;

export const Result = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
  color: #24292e;

  /* Clearfix on the markdown body */
  &::before {
    display: table;
    content: '';
  }

  &::after {
    display: table;
    clear: both;
    content: '';
  }

  > *:first-child {
    margin-top: 0 !important;
  }

  > *:last-child {
    margin-bottom: 0 !important;
  }

  a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  .absent {
    color: #cb2431;
  }

  .anchor {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
    line-height: 1;

    &:focus {
      outline: none;
    }
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  table,
  pre,
  details {
    margin-top: 0;
    margin-bottom: 16px;
  }

  hr {
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: #e1e4e8;
    border: 0;
  }

  blockquote {
    padding: 0 1em;
    margin-left: 0;
    margin-right: 0;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;

    > :first-child {
      margin-top: 0;
    }

    > :last-child {
      margin-bottom: 0;
    }
  }

  kbd {
    display: inline-block;
    padding: 3px 5px;
    font-size: 11px;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: solid 1px #c6cbd1;
    border-bottom-color: #959da5;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #959da5;
  }

  /* headings */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;

    .octicon-link {
      color: #1b1f23;
      vertical-align: middle;
      visibility: hidden;
    }

    &:hover .anchor {
      text-decoration: none;

      .octicon-link {
        visibility: visible;
      }
    }

    tt,
    code {
      font-size: inherit;
    }
  }

  h1 {
    padding-bottom: 0.3em;
    font-size: 2em;
    border-bottom: 1px solid #eaecef;
  }

  h2 {
    padding-bottom: 0.3em;
    font-size: 1.5em;
    border-bottom: 1px solid #eaecef;
  }

  h3 {
    font-size: 1.25em;
  }

  h4 {
    font-size: 1em;
  }

  h5 {
    font-size: 0.875em;
  }

  h6 {
    font-size: 0.85em;
    color: #6a737d;
  }

  /* link */
  a {
    color: #0366d6;
    text-decoration: none;

    &:hover,
    &:active {
      text-decoration: underline;
    }
  }

  /* lists */
  ul,
  ol {
    padding-left: 2em;

    &.no-list {
      padding: 0;
      list-style-type: none;
    }
  }

  ul ul,
  ul ol,
  ol ol,
  ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  li {
    word-wrap: break-all;
  }

  li > p {
    margin-top: 16px;
  }

  li + li {
    margin-top: 0.25em;
  }

  dl {
    padding: 0;

    dt {
      padding: 0;
      margin-top: 16px;
      font-size: 1em;
      font-style: italic;
      font-weight: 600;
    }

    dd {
      padding: 0 16px;
      margin-bottom: 16px;
    }
  }

  /* inputs */
  [type='checkbox'] {
    appearance: checkbox;
  }

  [type='radio'] {
    appearance: radio;
  }

  /* tables */
  table {
    display: block;
    width: 100%;
    overflow: auto;
    border-collapse: collapse;

    th {
      font-weight: 600;
    }

    th,
    td {
      padding: 6px 13px;
      border: 1px solid #dfe2e5;
    }

    tr {
      background-color: #fff;
      border-top: 1px solid #c6cbd1;

      &:nth-child(2n) {
        background-color: #f6f8fa;
      }
    }

    img {
      background-color: transparent;
    }
  }

  /* images */
  img {
    max-width: 100%;
    box-sizing: content-box;
    background-color: #fff;

    &[align='right'] {
      padding-left: 20px;
    }

    &[align='left'] {
      padding-right: 20px;
    }
  }

  .emoji {
    max-width: none;
    vertical-align: text-top;
    background-color: transparent;
  }

  /* Gollum Image Tags */

  /* Framed */
  span.frame {
    display: block;
    overflow: hidden;

    > span {
      display: block;
      float: left;
      width: auto;
      padding: 7px;
      margin: 13px 0 0;
      overflow: hidden;
      border: 1px solid #dfe2e5;
    }

    span img {
      display: block;
      float: left;
    }

    span span {
      display: block;
      padding: 5px 0 0;
      clear: both;
      color: #24292e;
    }
  }

  span.align-center {
    display: block;
    overflow: hidden;
    clear: both;

    > span {
      display: block;
      margin: 13px auto 0;
      overflow: hidden;
      text-align: center;
    }

    span img {
      margin: 0 auto;
      text-align: center;
    }
  }

  span.align-right {
    display: block;
    overflow: hidden;
    clear: both;

    > span {
      display: block;
      margin: 13px 0 0;
      overflow: hidden;
      text-align: right;
    }

    span img {
      margin: 0;
      text-align: right;
    }
  }

  span.float-left {
    display: block;
    float: left;
    margin-right: 13px;
    overflow: hidden;

    span {
      margin: 13px 0 0;
    }
  }

  span.float-right {
    display: block;
    float: right;
    margin-left: 13px;
    overflow: hidden;

    > span {
      display: block;
      margin: 13px auto 0;
      overflow: hidden;
      text-align: right;
    }
  }

  /* codes */
  code,
  tt {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(#1b1f23, 0.05);
    border-radius: 3px;

    br {
      display: none;
    }
  }

  code,
  pre,
  tt {
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  }

  del code {
    text-decoration: inherit;
  }

  pre {
    word-wrap: normal;

    > code {
      padding: 0;
      margin: 0;
      font-size: 100%;
      word-break: normal;
      white-space: pre;
      background: transparent;
      border: 0;
    }
  }

  .highlight {
    margin-bottom: 16px;

    pre {
      margin-bottom: 0;
      word-break: normal;
    }
  }

  .highlight pre,
  pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 3px;
  }

  pre code,
  pre tt {
    display: inline;
    max-width: 100%;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
  }

  /* syntax */
  .pl-c /* comment, punctuation.definition.comment, string.comment */ {
    color: #6a737d;
  }

  .pl-c1 /* constant, entity.name.constant, variable.other.constant, variable.language, support, meta.property-name, support.constant, support.variable, meta.module-reference, markup.raw, meta.diff.header, meta.output */,
  .pl-s .pl-v /* string variable */ {
    color: #005cc5;
  }

  .pl-e /* entity */,
  .pl-en /* entity.name */ {
    color: #6f42c1;
  }

  .pl-smi /* variable.parameter.function, storage.modifier.package, storage.modifier.import, storage.type.java, variable.other */,
  .pl-s .pl-s1 /* string source */ {
    color: #24292e;
  }

  .pl-ent /* entity.name.tag, markup.quote */ {
    color: #22863a;
  }

  .pl-k /* keyword, storage, storage.type */ {
    color: #d73a49;
  }

  .pl-s /* string */,
  .pl-pds /* punctuation.definition.string, source.regexp, string.regexp.character-class */,
  .pl-s .pl-pse .pl-s1 /* string punctuation.section.embedded source */,
  .pl-sr /* string.regexp */,
  .pl-sr .pl-cce /* string.regexp constant.character.escape */,
  .pl-sr .pl-sre /* string.regexp source.ruby.embedded */,
  .pl-sr .pl-sra /* string.regexp string.regexp.arbitrary-repitition */ {
    color: #032f62;
  }

  .pl-v /* variable */,
  .pl-smw /* sublimelinter.mark.warning */ {
    color: #e36209;
  }

  .pl-bu /* invalid.broken, invalid.deprecated, invalid.unimplemented, message.error, brackethighlighter.unmatched, sublimelinter.mark.error */ {
    color: #b31d28;
  }

  .pl-ii /* invalid.illegal */ {
    color: #fafbfc;
    background-color: #b31d28;
  }

  .pl-c2 /* carriage-return */ {
    color: #fafbfc;
    background-color: #d73a49;
  }

  .pl-c2::before /* carriage-return */ {
    content: '^M';
  }

  .pl-sr .pl-cce /* string.regexp constant.character.escape */ {
    font-weight: bold;
    color: #22863a;
  }

  .pl-ml /* markup.list */ {
    color: #735c0f;
  }

  .pl-mh /* markup.heading */,
  .pl-mh .pl-en /* markup.heading entity.name */,
  .pl-ms /* meta.separator */ {
    font-weight: bold;
    color: #005cc5;
  }

  .pl-mi /* markup.italic */ {
    font-style: italic;
    color: #24292e;
  }

  .pl-mb /* markup.bold */ {
    font-weight: bold;
    color: #24292e;
  }

  .pl-md /* markup.deleted, meta.diff.header.from-file, punctuation.definition.deleted */ {
    color: #b31d28;
    background-color: #ffeef0;
  }

  .pl-mi1 /* markup.inserted, meta.diff.header.to-file, punctuation.definition.inserted */ {
    color: #22863a;
    background-color: #f0fff4;
  }

  .pl-mc /* markup.changed, punctuation.definition.changed */ {
    color: #e36209;
    background-color: #ffebda;
  }

  .pl-mi2 /* markup.ignored, markup.untracked */ {
    color: #f6f8fa;
    background-color: #005cc5;
  }

  .pl-mdr /* meta.diff.range */ {
    font-weight: bold;
    color: #6f42c1;
  }

  .pl-ba /* brackethighlighter.tag, brackethighlighter.curly, brackethighlighter.round, brackethighlighter.square, brackethighlighter.angle, brackethighlighter.quote */ {
    color: #586069;
  }

  .pl-sg /* sublimelinter.gutter-mark */ {
    color: #959da5;
  }

  .pl-corl /* constant.other.reference.link, string.other.link */ {
    text-decoration: underline;
    color: #032f62;
  }

  /* blob-csv */
  .csv-data {
    td,
    th {
      padding: 5px;
      overflow: hidden;
      font-size: 12px;
      line-height: 1;
      text-align: left;
      white-space: nowrap;
    }

    .blob-num {
      padding: 10px 8px 9px;
      text-align: right;
      background: #fff;
      border: 0;
    }

    tr {
      border-top: 0;
    }

    th {
      font-weight: 600;
      background: #f6f8fa;
      border-top: 0;
    }
  }
`;
