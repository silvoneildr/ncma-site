export default class Helper {
  static cleanHtmlCssWhiteSpaceFromString(html) {
    let output;

    const stringStripper = /(\n|\r| class=(")?Mso[a-zA-Z]+(")?)/g;
    output = html.replace(stringStripper, '');

    const commentSripper = new RegExp('<!--(.*?)-->', 'g');
    output = output.replace(commentSripper, '');

    const tagStripper = new RegExp('<(/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>', 'gi');
    output = output.replace(tagStripper, '');

    const badTags = ['style', 'script', 'applet', 'embed', 'noframes', 'noscript'];
    for (let i = 0; i < badTags.length; i++) {
      const tagStripper = new RegExp('<' + badTags[i] + '.*?' + badTags[i] + '(.*?)>', 'gi');
      output = output.replace(tagStripper, '');
    }

    const badAttributes = ['style', 'start'];
    for (let i = 0; i < badAttributes.length; i++) {
      const attributeStripper = new RegExp(' ' + badAttributes[i] + '="(.*?)"', 'gi');
      output = output.replace(attributeStripper, '');
    }

    output = `<p>${output}</p>`;
    output = $(output).text().replace(/\s+/g, '');

    return output;
  }
}
