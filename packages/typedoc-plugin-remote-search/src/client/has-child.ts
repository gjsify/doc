/**
 * Calls el.hasChildNodes but ignores empty strings, the default hasChildNodes would return true on `<div> </div>`.
 * Very useful to check within a component if the component has set child elements to load or overwrite the component template
 * @param el
 */
export const hasChild = (el: HTMLUnknownElement) => {
  if (!el.hasChildNodes()) {
    return false;
  }
  const childNodes = el.childNodes;
  if (childNodes.length === 1 && childNodes[0].nodeType === 3) {
    if (!childNodes[0].nodeValue || childNodes[0].nodeValue?.trim() === "") {
      return false;
    }
  }
  return true;
};
