export const preview = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://github.com/Joltheim), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:



![react-logo](data:image/jpeg;base64,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)
`;
