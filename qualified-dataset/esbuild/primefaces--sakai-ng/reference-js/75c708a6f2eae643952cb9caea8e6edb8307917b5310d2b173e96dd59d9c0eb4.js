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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbGFyYS90aWVyZWRtZW51L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgVGllcmVkTWVudURlc2lnblRva2VucywgVGllcmVkTWVudVRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL3RpZXJlZG1lbnUnO1xuXG5leHBvcnQgY29uc3Qgcm9vdDogVGllcmVkTWVudVRva2VuU2VjdGlvbnMuUm9vdCA9IHtcbiAgICBiYWNrZ3JvdW5kOiAne2NvbnRlbnQuYmFja2dyb3VuZH0nLFxuICAgIGJvcmRlckNvbG9yOiAne2NvbnRlbnQuYm9yZGVyLmNvbG9yfScsXG4gICAgY29sb3I6ICd7Y29udGVudC5jb2xvcn0nLFxuICAgIGJvcmRlclJhZGl1czogJ3tjb250ZW50LmJvcmRlci5yYWRpdXN9JyxcbiAgICBzaGFkb3c6ICd7b3ZlcmxheS5uYXZpZ2F0aW9uLnNoYWRvd30nLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJ3t0cmFuc2l0aW9uLmR1cmF0aW9ufSdcbn07XG5cbmV4cG9ydCBjb25zdCBsaXN0OiBUaWVyZWRNZW51VG9rZW5TZWN0aW9ucy5MaXN0ID0ge1xuICAgIHBhZGRpbmc6ICd7bmF2aWdhdGlvbi5saXN0LnBhZGRpbmd9JyxcbiAgICBnYXA6ICd7bmF2aWdhdGlvbi5saXN0LmdhcH0nXG59O1xuXG5leHBvcnQgY29uc3QgaXRlbTogVGllcmVkTWVudVRva2VuU2VjdGlvbnMuSXRlbSA9IHtcbiAgICBmb2N1c0JhY2tncm91bmQ6ICd7bmF2aWdhdGlvbi5pdGVtLmZvY3VzLmJhY2tncm91bmR9JyxcbiAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne25hdmlnYXRpb24uaXRlbS5hY3RpdmUuYmFja2dyb3VuZH0nLFxuICAgIGNvbG9yOiAne25hdmlnYXRpb24uaXRlbS5jb2xvcn0nLFxuICAgIGZvY3VzQ29sb3I6ICd7bmF2aWdhdGlvbi5pdGVtLmZvY3VzLmNvbG9yfScsXG4gICAgYWN0aXZlQ29sb3I6ICd7bmF2aWdhdGlvbi5pdGVtLmFjdGl2ZS5jb2xvcn0nLFxuICAgIHBhZGRpbmc6ICd7bmF2aWdhdGlvbi5pdGVtLnBhZGRpbmd9JyxcbiAgICBib3JkZXJSYWRpdXM6ICd7bmF2aWdhdGlvbi5pdGVtLmJvcmRlci5yYWRpdXN9JyxcbiAgICBnYXA6ICd7bmF2aWdhdGlvbi5pdGVtLmdhcH0nLFxuICAgIGljb246IHtcbiAgICAgICAgY29sb3I6ICd7bmF2aWdhdGlvbi5pdGVtLmljb24uY29sb3J9JyxcbiAgICAgICAgZm9jdXNDb2xvcjogJ3tuYXZpZ2F0aW9uLml0ZW0uaWNvbi5mb2N1cy5jb2xvcn0nLFxuICAgICAgICBhY3RpdmVDb2xvcjogJ3tuYXZpZ2F0aW9uLml0ZW0uaWNvbi5hY3RpdmUuY29sb3J9J1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzdWJtZW51OiBUaWVyZWRNZW51VG9rZW5TZWN0aW9ucy5TdWJtZW51ID0ge1xuICAgIG1vYmlsZUluZGVudDogJzEuMjVyZW0nXG59O1xuXG5leHBvcnQgY29uc3Qgc3VibWVudUljb246IFRpZXJlZE1lbnVUb2tlblNlY3Rpb25zLlN1Ym1lbnVJY29uID0ge1xuICAgIHNpemU6ICd7bmF2aWdhdGlvbi5zdWJtZW51Lmljb24uc2l6ZX0nLFxuICAgIGNvbG9yOiAne25hdmlnYXRpb24uc3VibWVudS5pY29uLmNvbG9yfScsXG4gICAgZm9jdXNDb2xvcjogJ3tuYXZpZ2F0aW9uLnN1Ym1lbnUuaWNvbi5mb2N1cy5jb2xvcn0nLFxuICAgIGFjdGl2ZUNvbG9yOiAne25hdmlnYXRpb24uc3VibWVudS5pY29uLmFjdGl2ZS5jb2xvcn0nXG59O1xuXG5leHBvcnQgY29uc3Qgc2VwYXJhdG9yOiBUaWVyZWRNZW51VG9rZW5TZWN0aW9ucy5TZXBhcmF0b3IgPSB7XG4gICAgYm9yZGVyQ29sb3I6ICd7Y29udGVudC5ib3JkZXIuY29sb3J9J1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJvb3QsXG4gICAgbGlzdCxcbiAgICBpdGVtLFxuICAgIHN1Ym1lbnUsXG4gICAgc3VibWVudUljb24sXG4gICAgc2VwYXJhdG9yXG59IHNhdGlzZmllcyBUaWVyZWRNZW51RGVzaWduVG9rZW5zO1xuIl0sIm1hcHBpbmdzIjoiIiwiaWdub3JlTGlzdCI6W119