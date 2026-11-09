var o = {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    gap: "0.5rem",
    padding: "0.5rem 0.75rem",
    transitionDuration: "{transition.duration}"
  },
  i = {
    borderRadius: "{content.border.radius}",
    padding: "{navigation.item.padding}"
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
  r = {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}",
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.navigation.shadow}",
    mobileIndent: "1rem",
    icon: {
      size: "{navigation.submenu.icon.size}",
      color: "{navigation.submenu.icon.color}",
      focusColor: "{navigation.submenu.icon.focus.color}",
      activeColor: "{navigation.submenu.icon.active.color}"
    }
  },
  a = {
    borderColor: "{content.border.color}"
  },
  t = {
    borderRadius: "50%",
    size: "1.75rem",
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    hoverBackground: "{content.hover.background}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  e = {
    root: o,
    baseItem: i,
    item: n,
    submenu: r,
    separator: a,
    mobileButton: t
  };
export { i as baseItem, e as default, n as item, t as mobileButton, o as root, a as separator, r as submenu };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbm9yYS9tZW51YmFyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTWVudWJhckRlc2lnblRva2VucywgTWVudWJhclRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL21lbnViYXInO1xuXG5leHBvcnQgY29uc3Qgcm9vdDogTWVudWJhclRva2VuU2VjdGlvbnMuUm9vdCA9IHtcbiAgICBiYWNrZ3JvdW5kOiAne2NvbnRlbnQuYmFja2dyb3VuZH0nLFxuICAgIGJvcmRlckNvbG9yOiAne2NvbnRlbnQuYm9yZGVyLmNvbG9yfScsXG4gICAgYm9yZGVyUmFkaXVzOiAne2NvbnRlbnQuYm9yZGVyLnJhZGl1c30nLFxuICAgIGNvbG9yOiAne2NvbnRlbnQuY29sb3J9JyxcbiAgICBnYXA6ICcwLjVyZW0nLFxuICAgIHBhZGRpbmc6ICcwLjVyZW0gMC43NXJlbScsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAne3RyYW5zaXRpb24uZHVyYXRpb259J1xufTtcblxuZXhwb3J0IGNvbnN0IGJhc2VJdGVtOiBNZW51YmFyVG9rZW5TZWN0aW9ucy5CYXNlSXRlbSA9IHtcbiAgICBib3JkZXJSYWRpdXM6ICd7Y29udGVudC5ib3JkZXIucmFkaXVzfScsXG4gICAgcGFkZGluZzogJ3tuYXZpZ2F0aW9uLml0ZW0ucGFkZGluZ30nXG59O1xuXG5leHBvcnQgY29uc3QgaXRlbTogTWVudWJhclRva2VuU2VjdGlvbnMuSXRlbSA9IHtcbiAgICBmb2N1c0JhY2tncm91bmQ6ICd7bmF2aWdhdGlvbi5pdGVtLmZvY3VzLmJhY2tncm91bmR9JyxcbiAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne25hdmlnYXRpb24uaXRlbS5hY3RpdmUuYmFja2dyb3VuZH0nLFxuICAgIGNvbG9yOiAne25hdmlnYXRpb24uaXRlbS5jb2xvcn0nLFxuICAgIGZvY3VzQ29sb3I6ICd7bmF2aWdhdGlvbi5pdGVtLmZvY3VzLmNvbG9yfScsXG4gICAgYWN0aXZlQ29sb3I6ICd7bmF2aWdhdGlvbi5pdGVtLmFjdGl2ZS5jb2xvcn0nLFxuICAgIHBhZGRpbmc6ICd7bmF2aWdhdGlvbi5pdGVtLnBhZGRpbmd9JyxcbiAgICBib3JkZXJSYWRpdXM6ICd7bmF2aWdhdGlvbi5pdGVtLmJvcmRlci5yYWRpdXN9JyxcbiAgICBnYXA6ICd7bmF2aWdhdGlvbi5pdGVtLmdhcH0nLFxuICAgIGljb246IHtcbiAgICAgICAgY29sb3I6ICd7bmF2aWdhdGlvbi5pdGVtLmljb24uY29sb3J9JyxcbiAgICAgICAgZm9jdXNDb2xvcjogJ3tuYXZpZ2F0aW9uLml0ZW0uaWNvbi5mb2N1cy5jb2xvcn0nLFxuICAgICAgICBhY3RpdmVDb2xvcjogJ3tuYXZpZ2F0aW9uLml0ZW0uaWNvbi5hY3RpdmUuY29sb3J9J1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzdWJtZW51OiBNZW51YmFyVG9rZW5TZWN0aW9ucy5TdWJtZW51ID0ge1xuICAgIHBhZGRpbmc6ICd7bmF2aWdhdGlvbi5saXN0LnBhZGRpbmd9JyxcbiAgICBnYXA6ICd7bmF2aWdhdGlvbi5saXN0LmdhcH0nLFxuICAgIGJhY2tncm91bmQ6ICd7Y29udGVudC5iYWNrZ3JvdW5kfScsXG4gICAgYm9yZGVyQ29sb3I6ICd7Y29udGVudC5ib3JkZXIuY29sb3J9JyxcbiAgICBib3JkZXJSYWRpdXM6ICd7Y29udGVudC5ib3JkZXIucmFkaXVzfScsXG4gICAgc2hhZG93OiAne292ZXJsYXkubmF2aWdhdGlvbi5zaGFkb3d9JyxcbiAgICBtb2JpbGVJbmRlbnQ6ICcxcmVtJyxcbiAgICBpY29uOiB7XG4gICAgICAgIHNpemU6ICd7bmF2aWdhdGlvbi5zdWJtZW51Lmljb24uc2l6ZX0nLFxuICAgICAgICBjb2xvcjogJ3tuYXZpZ2F0aW9uLnN1Ym1lbnUuaWNvbi5jb2xvcn0nLFxuICAgICAgICBmb2N1c0NvbG9yOiAne25hdmlnYXRpb24uc3VibWVudS5pY29uLmZvY3VzLmNvbG9yfScsXG4gICAgICAgIGFjdGl2ZUNvbG9yOiAne25hdmlnYXRpb24uc3VibWVudS5pY29uLmFjdGl2ZS5jb2xvcn0nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHNlcGFyYXRvcjogTWVudWJhclRva2VuU2VjdGlvbnMuU2VwYXJhdG9yID0ge1xuICAgIGJvcmRlckNvbG9yOiAne2NvbnRlbnQuYm9yZGVyLmNvbG9yfSdcbn07XG5cbmV4cG9ydCBjb25zdCBtb2JpbGVCdXR0b246IE1lbnViYXJUb2tlblNlY3Rpb25zLk1vYmlsZUJ1dHRvbiA9IHtcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIHNpemU6ICcxLjc1cmVtJyxcbiAgICBjb2xvcjogJ3t0ZXh0Lm11dGVkLmNvbG9yfScsXG4gICAgaG92ZXJDb2xvcjogJ3t0ZXh0LmhvdmVyLm11dGVkLmNvbG9yfScsXG4gICAgaG92ZXJCYWNrZ3JvdW5kOiAne2NvbnRlbnQuaG92ZXIuYmFja2dyb3VuZH0nLFxuICAgIGZvY3VzUmluZzoge1xuICAgICAgICB3aWR0aDogJ3tmb2N1cy5yaW5nLndpZHRofScsXG4gICAgICAgIHN0eWxlOiAne2ZvY3VzLnJpbmcuc3R5bGV9JyxcbiAgICAgICAgY29sb3I6ICd7Zm9jdXMucmluZy5jb2xvcn0nLFxuICAgICAgICBvZmZzZXQ6ICd7Zm9jdXMucmluZy5vZmZzZXR9JyxcbiAgICAgICAgc2hhZG93OiAne2ZvY3VzLnJpbmcuc2hhZG93fSdcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcm9vdCxcbiAgICBiYXNlSXRlbSxcbiAgICBpdGVtLFxuICAgIHN1Ym1lbnUsXG4gICAgc2VwYXJhdG9yLFxuICAgIG1vYmlsZUJ1dHRvblxufSBzYXRpc2ZpZXMgTWVudWJhckRlc2lnblRva2VucztcbiJdLCJtYXBwaW5ncyI6IiIsImlnbm9yZUxpc3QiOltdfQ==