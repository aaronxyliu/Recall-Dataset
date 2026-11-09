var o = {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.navigation.shadow}",
    transitionDuration: "{transition.duration}"
  },
  n = {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}"
  },
  a = {
    focusBackground: "{navigation.item.focus.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}"
    }
  },
  i = {
    padding: "{navigation.submenu.label.padding}",
    fontWeight: "{navigation.submenu.label.font.weight}",
    background: "{navigation.submenu.label.background}",
    color: "{navigation.submenu.label.color}"
  },
  t = {
    borderColor: "{content.border.color}"
  },
  r = {
    root: o,
    list: n,
    item: a,
    submenuLabel: i,
    separator: t
  };
export { r as default, a as item, n as list, o as root, t as separator, i as submenuLabel };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvYXVyYS9tZW51L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTWVudURlc2lnblRva2VucywgTWVudVRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL21lbnUnO1xuXG5leHBvcnQgY29uc3Qgcm9vdDogTWVudVRva2VuU2VjdGlvbnMuUm9vdCA9IHtcbiAgICBiYWNrZ3JvdW5kOiAne2NvbnRlbnQuYmFja2dyb3VuZH0nLFxuICAgIGJvcmRlckNvbG9yOiAne2NvbnRlbnQuYm9yZGVyLmNvbG9yfScsXG4gICAgY29sb3I6ICd7Y29udGVudC5jb2xvcn0nLFxuICAgIGJvcmRlclJhZGl1czogJ3tjb250ZW50LmJvcmRlci5yYWRpdXN9JyxcbiAgICBzaGFkb3c6ICd7b3ZlcmxheS5uYXZpZ2F0aW9uLnNoYWRvd30nLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJ3t0cmFuc2l0aW9uLmR1cmF0aW9ufSdcbn07XG5cbmV4cG9ydCBjb25zdCBsaXN0OiBNZW51VG9rZW5TZWN0aW9ucy5MaXN0ID0ge1xuICAgIHBhZGRpbmc6ICd7bmF2aWdhdGlvbi5saXN0LnBhZGRpbmd9JyxcbiAgICBnYXA6ICd7bmF2aWdhdGlvbi5saXN0LmdhcH0nXG59O1xuXG5leHBvcnQgY29uc3QgaXRlbTogTWVudVRva2VuU2VjdGlvbnMuSXRlbSA9IHtcbiAgICBmb2N1c0JhY2tncm91bmQ6ICd7bmF2aWdhdGlvbi5pdGVtLmZvY3VzLmJhY2tncm91bmR9JyxcbiAgICBjb2xvcjogJ3tuYXZpZ2F0aW9uLml0ZW0uY29sb3J9JyxcbiAgICBmb2N1c0NvbG9yOiAne25hdmlnYXRpb24uaXRlbS5mb2N1cy5jb2xvcn0nLFxuICAgIHBhZGRpbmc6ICd7bmF2aWdhdGlvbi5pdGVtLnBhZGRpbmd9JyxcbiAgICBib3JkZXJSYWRpdXM6ICd7bmF2aWdhdGlvbi5pdGVtLmJvcmRlci5yYWRpdXN9JyxcbiAgICBnYXA6ICd7bmF2aWdhdGlvbi5pdGVtLmdhcH0nLFxuICAgIGljb246IHtcbiAgICAgICAgY29sb3I6ICd7bmF2aWdhdGlvbi5pdGVtLmljb24uY29sb3J9JyxcbiAgICAgICAgZm9jdXNDb2xvcjogJ3tuYXZpZ2F0aW9uLml0ZW0uaWNvbi5mb2N1cy5jb2xvcn0nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHN1Ym1lbnVMYWJlbDogTWVudVRva2VuU2VjdGlvbnMuU3VibWVudUxhYmVsID0ge1xuICAgIHBhZGRpbmc6ICd7bmF2aWdhdGlvbi5zdWJtZW51LmxhYmVsLnBhZGRpbmd9JyxcbiAgICBmb250V2VpZ2h0OiAne25hdmlnYXRpb24uc3VibWVudS5sYWJlbC5mb250LndlaWdodH0nLFxuICAgIGJhY2tncm91bmQ6ICd7bmF2aWdhdGlvbi5zdWJtZW51LmxhYmVsLmJhY2tncm91bmR9JyxcbiAgICBjb2xvcjogJ3tuYXZpZ2F0aW9uLnN1Ym1lbnUubGFiZWwuY29sb3J9J1xufTtcblxuZXhwb3J0IGNvbnN0IHNlcGFyYXRvcjogTWVudVRva2VuU2VjdGlvbnMuU2VwYXJhdG9yID0ge1xuICAgIGJvcmRlckNvbG9yOiAne2NvbnRlbnQuYm9yZGVyLmNvbG9yfSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByb290LFxuICAgIGxpc3QsXG4gICAgaXRlbSxcbiAgICBzdWJtZW51TGFiZWwsXG4gICAgc2VwYXJhdG9yXG59IHNhdGlzZmllcyBNZW51RGVzaWduVG9rZW5zO1xuIl0sIm1hcHBpbmdzIjoiIiwiaWdub3JlTGlzdCI6W119