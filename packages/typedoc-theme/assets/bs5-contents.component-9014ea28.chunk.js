const l=`<ul class="list-unstyled list-contents list-contents-level-1">
  <li class="nav-item nav-item-level-1" rv-each-anachor="anchors">
    <a class="nav-link p-0" rv-href="anachor.href" rv-html="anachor.title" rv-scroll-to-on-click="anachor.href" rv-data-scroll-element="scrollElement" rv-data-offset="scrollOffset"></a>
    
    <ul rv-if="anachor.childs | size | gt 0" class="list-unstyled list-contents list-contents-level-2" >
      <li class="nav-item nav-item-level-2" rv-each-child="anachor.childs">
        <a class="nav-link p-0" rv-href="child.href" rv-html="child.title" rv-scroll-to-on-click="child.href" rv-data-scroll-element="scrollElement" rv-data-offset="scrollOffset"></a>
      
        <ul rv-if="child.childs | size | gt 0" class="list-unstyled list-contents list-contents-level-3" >
          <li class="nav-item nav-item-level-3" rv-each-childchild="child.childs">
            <a class="nav-link p-0" rv-href="childchild.href" rv-html="childchild.title" rv-scroll-to-on-click="childchild.href" rv-data-scroll-element="scrollElement" rv-data-offset="scrollOffset"></a>
          
            <ul rv-if="childchild.childs | size | gt 0" class="list-unstyled list-contents list-contents-level-4" >
              <li class="nav-item nav-item-level-4" rv-each-childchildchild="childchild.childs">
                <a class="nav-link p-0" rv-href="childchildchild.href" rv-html="childchildchild.title" rv-scroll-to-on-click="childchildchild.href" rv-data-scroll-element="scrollElement" rv-data-offset="scrollOffset"></a>
              
                <ul rv-if="childchildchild.childs | size | gt 0" class="list-unstyled list-contents list-contents-level-5" >
                  <li class="nav-item nav-item-level-5" rv-each-childchildchildchild="childchildchild.childs">
                    <a class="nav-link p-0" rv-href="childchildchildchild.href" rv-html="childchildchildchild.title" rv-scroll-to-on-click="childchildchildchild.href" rv-data-scroll-element="scrollElement" rv-data-offset="scrollOffset"></a>
                  
                    <ul rv-if="childchildchildchild.childs | size | gt 0" class="list-unstyled list-contents list-contents-level-6" >
                      <li class="nav-item nav-item-level-6" rv-each-childchildchildchildchild="childchildchildchild.childs">
                        <a class="nav-link p-0" rv-href="childchildchildchildchild.href" rv-html="childchildchildchildchild.title" rv-scroll-to-on-click="childchildchildchildchild.href" rv-data-scroll-element="scrollElement" rv-data-offset="scrollOffset"></a>
                      </li>
                    </ul>
                  
                  </li>
                </ul>
              
              </li>
            </ul>
          
          </li>
        </ul>

      </li>
    </ul>
  </li>
</ul>`;export{l as default};
//# sourceMappingURL=bs5-contents.component-9014ea28.chunk.js.map
