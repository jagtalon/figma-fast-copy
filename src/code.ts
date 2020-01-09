async function loadFont(node) {
  // console.log(node.fontName);
  await figma.loadFontAsync(node.fontName);
}

// Show plugin UI.
figma.showUI(__html__);
figma.ui.resize(450, 290);

// Fetch all the text in the selected frame.
// [<Name of the object>, <Text contents>]
let selection: ReadonlyArray<SceneNode> = figma.currentPage.selection;
let textFound: Array<Array<string>> = [];

selection.forEach(selected => {
  let textNodes = (selected as any).findAll(node => node.type === "TEXT");
  textNodes.forEach(node => { 
    textFound.push([node.name, node.characters]);
  });
});

// Send the text that we got from the frame to the UI.
figma.ui.postMessage(textFound);

figma.ui.onmessage = msg => {
 if(msg.type === 'notification') {
   figma.notify(msg.message, {timeout: 2});
 }
}