const l=`<ul class="list-unstyled list-scrollspy list-scrollspy-level-1">
  <li class="nav-item nav-item-level-1" rv-each-anachor="anchors" rv-bs5-scrollspy-active="anachor.href" rv-data-offset="offset" rv-data-offset-bottom="offsetBottom">
    <a class="nav-link" rv-href="anachor.href" rv-html="anachor.title" rv-scroll-to-on-click="anachor.href" rv-data-offset="scrollOffset"></a>
    
    <ul rv-if="anachor.childs | size | gt 0" class="list-unstyled list-scrollspy list-scrollspy-level-2" >
      <li class="nav-item nav-item-level-2" rv-each-child="anachor.childs" rv-bs5-scrollspy-active="child.href" rv-data-offset="offset" rv-data-offset-bottom="offsetBottom">
        <a class="nav-link" rv-href="child.href" rv-html="child.title" rv-scroll-to-on-click="child.href" rv-data-offset="scrollOffset"></a>
      
        <ul rv-if="child.childs | size | gt 0" class="list-unstyled list-scrollspy list-scrollspy-level-3" >
          <li class="nav-item nav-item-level-3" rv-each-childchild="child.childs" rv-bs5-scrollspy-active="childchild.href" rv-data-offset="offset" rv-data-offset-bottom="offsetBottom">
            <a class="nav-link p-0" rv-href="childchild.href" rv-html="childchild.title" rv-scroll-to-on-click="childchild.href" rv-data-scroll-element="scrollElement" rv-data-offset="scrollOffset"></a>
          
            <ul rv-if="childchild.childs | size | gt 0" class="list-unstyled list-scrollspy list-scrollspy-level-4" >
              <li class="nav-item nav-item-level-4" rv-each-childchildchild="childchild.childs" rv-bs5-scrollspy-active="childchildchild.href" rv-data-offset="offset" rv-data-offset-bottom="offsetBottom">
                <a class="nav-link p-0" rv-href="childchildchild.href" rv-html="childchildchild.title" rv-scroll-to-on-click="childchildchild.href" rv-data-scroll-element="scrollElement" rv-data-offset="scrollOffset"></a>
              
                <ul rv-if="childchildchild.childs | size | gt 0" class="list-unstyled list-scrollspy list-scrollspy-level-5" >
                  <li class="nav-item nav-item-level-5" rv-each-childchildchildchild="childchildchild.childs" rv-bs5-scrollspy-active="childchildchildchild.href" rv-data-offset="offset" rv-data-offset-bottom="offsetBottom">
                    <a class="nav-link p-0" rv-href="childchildchildchild.href" rv-html="childchildchildchild.title" rv-scroll-to-on-click="childchildchildchild.href" rv-data-scroll-element="scrollElement" rv-data-offset="scrollOffset"></a>
                  
                    <ul rv-if="childchildchildchild.childs | size | gt 0" class="list-unstyled list-scrollspy list-scrollspy-level-6" >
                      <li class="nav-item nav-item-level-6" rv-each-childchildchildchildchild="childchildchildchild.childs" rv-bs5-scrollspy-active="childchildchildchildchild.href" rv-data-offset="offset" rv-data-offset-bottom="offsetBottom">
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
//# sourceMappingURL=bs5-scrollspy.component-1b82c9f2.chunk.js.map
