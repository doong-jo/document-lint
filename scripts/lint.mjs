#!/usr/bin/env zx

await $`echo $MARKDOWN_FILES`;
const changedMarkdownFiles = (await $`$MARKDOWN_FILES`).split(" ");

console.log("changedMarkdownFiles", changedMarkdownFiles);

// const STANDARD_WORD_MAP = {
//   frontend: "front-end",
//   프론트엔드: "프런트엔드",
// };
