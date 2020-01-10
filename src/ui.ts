// Import Figma styles
import './libs/figma-ds/figma-plugin-ds.min.css'
import './libs/figma-ds/figma-plugin-ds.min.js'

import './ui.css'

// Receive all the text nodes of the selected frame from the plugin.
onmessage = (event) => {
  let pluginMessage: string[][] = event.data.pluginMessage,
      table: HTMLTableElement = document.createElement('table'),
      container: HTMLElement = document.querySelector('.plugin__container');

  // Attach the table to the container.
  container.append(table);

  // Build the table.
  // TODO: Probably best to refactor this into either Vue or React.
  pluginMessage.forEach(list => {
    let tr: HTMLTableRowElement = document.createElement('tr');
    table.append(tr);

    // Map the list of strings into a list of HTMLTableCellElements.
    list.map(text => {
      let td: HTMLTableCellElement = document.createElement('td');
      td.append(document.createTextNode(text));
      td.setAttribute('contenteditable', 'true');
      td.onclick = copyContent;

      return td;
    }).forEach(cell => {
      tr.append(cell);
    });
  });
}

// From https://stackoverflow.com/a/6150060
function copyContent(event: MouseEvent) {
  let range: Range = document.createRange();
  range.selectNodeContents(this);
  
  let sel: Selection = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);

  document.execCommand('copy');

  // Tell the plugin about it.
  parent.postMessage({pluginMessage: {type: 'notification', message: 'Copied Text'}}, '*');
}