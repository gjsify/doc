const c=`<div class="accordion">
  <div class="accordion-item" rv-each-item="items">
    <div class="accordion-header">
      <button type="button" class="accordion-button collapsed" rv-on-click="toggle | args item %item%" rv-aria-expanded="item.show" rv-class-collapsed="item.show | not">
        <span rv-html="item.title"></span> <bs5-icon class="ms-auto" rv-show="collapseIconSrc" rv-src="collapseIconSrc" rv-size="collapseIconSize" rv-direction="item.iconDirection"></bs5-icon>
      </button>
    </div>
    <div class="accordion-collapse collapse" rv-data-index="%item%">
      <div class="accordion-body" rv-template="item.content"></div>
    </div>
  </div>
</div>
`;export{c as default};
//# sourceMappingURL=bs5-accordion.component-cad06286.chunk.js.map
