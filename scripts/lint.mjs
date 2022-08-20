#!/usr/bin/env zx

let changedMarkdownFiles = await $`echo $MARKDOWN_FILES`;

console.log("changedMarkdownFiles", changedMarkdownFiles);

// const STANDARD_WORD_MAP = {
//   frontend: "front-end",
//   프론트엔드: "프런트엔드",
// };
