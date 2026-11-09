var o = {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.navigation.shadow}",
    transitionDuration: "{transition.duration}"
  },
  i = {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}"
  },
  n = {
    focusBackground: "{navigation.item.focus.background}",
    activeBackground: "{navigation.item.active.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    activeColor: "{navigation.item.active.color}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}",
      activeColor: "{navigation.item.icon.active.color}"
    }
  },
  a = {
    mobileIndent: "1.25rem"
  },
  t = {
    size: "{navigation.submenu.icon.size}",
    color: "{navigation.submenu.icon.color}",
    focusColor: "{navigation.submenu.icon.focus.color}",
    activeColor: "{navigation.submenu.icon.active.color}"
  },
  r = {
    borderColor: "{content.border.color}"
  },
  c = {
    root: o,
    list: i,
    item: n,
    submenu: a,
    submenuIcon: t,
    separator: r
  };
export { c as default, n as item, i as list, o as root, r as separator, a as submenu, t as submenuIcon };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbGFyYS9jb250ZXh0bWVudS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IENvbnRleHRNZW51RGVzaWduVG9rZW5zLCBDb250ZXh0TWVudVRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL2NvbnRleHRtZW51JztcblxuZXhwb3J0IGNvbnN0IHJvb3Q6IENvbnRleHRNZW51VG9rZW5TZWN0aW9ucy5Sb290ID0ge1xuICAgIGJhY2tncm91bmQ6ICd7Y29udGVudC5iYWNrZ3JvdW5kfScsXG4gICAgYm9yZGVyQ29sb3I6ICd7Y29udGVudC5ib3JkZXIuY29sb3J9JyxcbiAgICBjb2xvcjogJ3tjb250ZW50LmNvbG9yfScsXG4gICAgYm9yZGVyUmFkaXVzOiAne2NvbnRlbnQuYm9yZGVyLnJhZGl1c30nLFxuICAgIHNoYWRvdzogJ3tvdmVybGF5Lm5hdmlnYXRpb24uc2hhZG93fScsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAne3RyYW5zaXRpb24uZHVyYXRpb259J1xufTtcblxuZXhwb3J0IGNvbnN0IGxpc3Q6IENvbnRleHRNZW51VG9rZW5TZWN0aW9ucy5MaXN0ID0ge1xuICAgIHBhZGRpbmc6ICd7bmF2aWdhdGlvbi5saXN0LnBhZGRpbmd9JyxcbiAgICBnYXA6ICd7bmF2aWdhdGlvbi5saXN0LmdhcH0nXG59O1xuXG5leHBvcnQgY29uc3QgaXRlbTogQ29udGV4dE1lbnVUb2tlblNlY3Rpb25zLkl0ZW0gPSB7XG4gICAgZm9jdXNCYWNrZ3JvdW5kOiAne25hdmlnYXRpb24uaXRlbS5mb2N1cy5iYWNrZ3JvdW5kfScsXG4gICAgYWN0aXZlQmFja2dyb3VuZDogJ3tuYXZpZ2F0aW9uLml0ZW0uYWN0aXZlLmJhY2tncm91bmR9JyxcbiAgICBjb2xvcjogJ3tuYXZpZ2F0aW9uLml0ZW0uY29sb3J9JyxcbiAgICBmb2N1c0NvbG9yOiAne25hdmlnYXRpb24uaXRlbS5mb2N1cy5jb2xvcn0nLFxuICAgIGFjdGl2ZUNvbG9yOiAne25hdmlnYXRpb24uaXRlbS5hY3RpdmUuY29sb3J9JyxcbiAgICBwYWRkaW5nOiAne25hdmlnYXRpb24uaXRlbS5wYWRkaW5nfScsXG4gICAgYm9yZGVyUmFkaXVzOiAne25hdmlnYXRpb24uaXRlbS5ib3JkZXIucmFkaXVzfScsXG4gICAgZ2FwOiAne25hdmlnYXRpb24uaXRlbS5nYXB9JyxcbiAgICBpY29uOiB7XG4gICAgICAgIGNvbG9yOiAne25hdmlnYXRpb24uaXRlbS5pY29uLmNvbG9yfScsXG4gICAgICAgIGZvY3VzQ29sb3I6ICd7bmF2aWdhdGlvbi5pdGVtLmljb24uZm9jdXMuY29sb3J9JyxcbiAgICAgICAgYWN0aXZlQ29sb3I6ICd7bmF2aWdhdGlvbi5pdGVtLmljb24uYWN0aXZlLmNvbG9yfSdcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc3VibWVudTogQ29udGV4dE1lbnVUb2tlblNlY3Rpb25zLlN1Ym1lbnUgPSB7XG4gICAgbW9iaWxlSW5kZW50OiAnMS4yNXJlbSdcbn07XG5cbmV4cG9ydCBjb25zdCBzdWJtZW51SWNvbjogQ29udGV4dE1lbnVUb2tlblNlY3Rpb25zLlN1Ym1lbnVJY29uID0ge1xuICAgIHNpemU6ICd7bmF2aWdhdGlvbi5zdWJtZW51Lmljb24uc2l6ZX0nLFxuICAgIGNvbG9yOiAne25hdmlnYXRpb24uc3VibWVudS5pY29uLmNvbG9yfScsXG4gICAgZm9jdXNDb2xvcjogJ3tuYXZpZ2F0aW9uLnN1Ym1lbnUuaWNvbi5mb2N1cy5jb2xvcn0nLFxuICAgIGFjdGl2ZUNvbG9yOiAne25hdmlnYXRpb24uc3VibWVudS5pY29uLmFjdGl2ZS5jb2xvcn0nXG59O1xuXG5leHBvcnQgY29uc3Qgc2VwYXJhdG9yOiBDb250ZXh0TWVudVRva2VuU2VjdGlvbnMuU2VwYXJhdG9yID0ge1xuICAgIGJvcmRlckNvbG9yOiAne2NvbnRlbnQuYm9yZGVyLmNvbG9yfSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByb290LFxuICAgIGxpc3QsXG4gICAgaXRlbSxcbiAgICBzdWJtZW51LFxuICAgIHN1Ym1lbnVJY29uLFxuICAgIHNlcGFyYXRvclxufSBzYXRpc2ZpZXMgQ29udGV4dE1lbnVEZXNpZ25Ub2tlbnM7XG4iXSwibWFwcGluZ3MiOiIiLCJpZ25vcmVMaXN0IjpbXX0=