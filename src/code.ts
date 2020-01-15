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
let textFound: Array<any> = [];

selection.forEach(selected => {
  let textNodes = (selected as any).findAll(node => node.type === "TEXT");
  textNodes.forEach(node => { 
    textFound.push({
      name: node.name, 
      characters: node.characters,
      id: node.id
    });
  });
});

// Zoom into your selection.
figma.viewport.scrollAndZoomIntoView(selection);

// Send the text that we got from the frame to the UI.
figma.ui.postMessage(textFound);

figma.ui.onmessage = msg => {
  // Show a notification that the text has been copied.
  if(msg.type === 'notification') {
    figma.notify(msg.message, {timeout: 2});
  }

  // Zoom in to the text node.
  if(msg.type === 'zoom-in') {
    let textNode: BaseNode = figma.getNodeById(msg.message);
    figma.viewport.scrollAndZoomIntoView([textNode]);
    figma.currentPage.selection = [textNode] as SceneNode[];
  }
}