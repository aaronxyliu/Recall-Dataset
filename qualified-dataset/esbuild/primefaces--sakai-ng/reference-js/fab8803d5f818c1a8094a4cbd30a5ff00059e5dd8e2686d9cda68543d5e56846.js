var o = {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    gap: "0.5rem",
    verticalOrientation: {
      padding: "{navigation.list.padding}",
      gap: "{navigation.list.gap}"
    },
    horizontalOrientation: {
      padding: "0.5rem 0.75rem",
      gap: "0.5rem"
    },
    transitionDuration: "{transition.duration}"
  },
  n = {
    borderRadius: "{content.border.radius}",
    padding: "{navigation.item.padding}"
  },
  i = {
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
    padding: "0",
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    shadow: "{overlay.navigation.shadow}",
    gap: "0.5rem"
  },
  r = {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}"
  },
  t = {
    padding: "{navigation.submenu.label.padding}",
    fontWeight: "{navigation.submenu.label.font.weight}",
    background: "{navigation.submenu.label.background}",
    color: "{navigation.submenu.label.color}"
  },
  e = {
    size: "{navigation.submenu.icon.size}",
    color: "{navigation.submenu.icon.color}",
    focusColor: "{navigation.submenu.icon.focus.color}",
    activeColor: "{navigation.submenu.icon.active.color}"
  },
  c = {
    borderColor: "{content.border.color}"
  },
  d = {
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
  g = {
    root: o,
    baseItem: n,
    item: i,
    overlay: a,
    submenu: r,
    submenuLabel: t,
    submenuIcon: e,
    separator: c,
    mobileButton: d
  };
export { n as baseItem, g as default, i as item, d as mobileButton, a as overlay, o as root, c as separator, r as submenu, e as submenuIcon, t as submenuLabel };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvYXVyYS9tZWdhbWVudS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE1lZ2FNZW51RGVzaWduVG9rZW5zLCBNZWdhTWVudVRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL21lZ2FtZW51JztcblxuZXhwb3J0IGNvbnN0IHJvb3Q6IE1lZ2FNZW51VG9rZW5TZWN0aW9ucy5Sb290ID0ge1xuICAgIGJhY2tncm91bmQ6ICd7Y29udGVudC5iYWNrZ3JvdW5kfScsXG4gICAgYm9yZGVyQ29sb3I6ICd7Y29udGVudC5ib3JkZXIuY29sb3J9JyxcbiAgICBib3JkZXJSYWRpdXM6ICd7Y29udGVudC5ib3JkZXIucmFkaXVzfScsXG4gICAgY29sb3I6ICd7Y29udGVudC5jb2xvcn0nLFxuICAgIGdhcDogJzAuNXJlbScsXG4gICAgdmVydGljYWxPcmllbnRhdGlvbjoge1xuICAgICAgICBwYWRkaW5nOiAne25hdmlnYXRpb24ubGlzdC5wYWRkaW5nfScsXG4gICAgICAgIGdhcDogJ3tuYXZpZ2F0aW9uLmxpc3QuZ2FwfSdcbiAgICB9LFxuICAgIGhvcml6b250YWxPcmllbnRhdGlvbjoge1xuICAgICAgICBwYWRkaW5nOiAnMC41cmVtIDAuNzVyZW0nLFxuICAgICAgICBnYXA6ICcwLjVyZW0nXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246ICd7dHJhbnNpdGlvbi5kdXJhdGlvbn0nXG59O1xuXG5leHBvcnQgY29uc3QgYmFzZUl0ZW06IE1lZ2FNZW51VG9rZW5TZWN0aW9ucy5CYXNlSXRlbSA9IHtcbiAgICBib3JkZXJSYWRpdXM6ICd7Y29udGVudC5ib3JkZXIucmFkaXVzfScsXG4gICAgcGFkZGluZzogJ3tuYXZpZ2F0aW9uLml0ZW0ucGFkZGluZ30nXG59O1xuXG5leHBvcnQgY29uc3QgaXRlbTogTWVnYU1lbnVUb2tlblNlY3Rpb25zLkl0ZW0gPSB7XG4gICAgZm9jdXNCYWNrZ3JvdW5kOiAne25hdmlnYXRpb24uaXRlbS5mb2N1cy5iYWNrZ3JvdW5kfScsXG4gICAgYWN0aXZlQmFja2dyb3VuZDogJ3tuYXZpZ2F0aW9uLml0ZW0uYWN0aXZlLmJhY2tncm91bmR9JyxcbiAgICBjb2xvcjogJ3tuYXZpZ2F0aW9uLml0ZW0uY29sb3J9JyxcbiAgICBmb2N1c0NvbG9yOiAne25hdmlnYXRpb24uaXRlbS5mb2N1cy5jb2xvcn0nLFxuICAgIGFjdGl2ZUNvbG9yOiAne25hdmlnYXRpb24uaXRlbS5hY3RpdmUuY29sb3J9JyxcbiAgICBwYWRkaW5nOiAne25hdmlnYXRpb24uaXRlbS5wYWRkaW5nfScsXG4gICAgYm9yZGVyUmFkaXVzOiAne25hdmlnYXRpb24uaXRlbS5ib3JkZXIucmFkaXVzfScsXG4gICAgZ2FwOiAne25hdmlnYXRpb24uaXRlbS5nYXB9JyxcbiAgICBpY29uOiB7XG4gICAgICAgIGNvbG9yOiAne25hdmlnYXRpb24uaXRlbS5pY29uLmNvbG9yfScsXG4gICAgICAgIGZvY3VzQ29sb3I6ICd7bmF2aWdhdGlvbi5pdGVtLmljb24uZm9jdXMuY29sb3J9JyxcbiAgICAgICAgYWN0aXZlQ29sb3I6ICd7bmF2aWdhdGlvbi5pdGVtLmljb24uYWN0aXZlLmNvbG9yfSdcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3Qgb3ZlcmxheTogTWVnYU1lbnVUb2tlblNlY3Rpb25zLk92ZXJsYXkgPSB7XG4gICAgcGFkZGluZzogJzAnLFxuICAgIGJhY2tncm91bmQ6ICd7Y29udGVudC5iYWNrZ3JvdW5kfScsXG4gICAgYm9yZGVyQ29sb3I6ICd7Y29udGVudC5ib3JkZXIuY29sb3J9JyxcbiAgICBib3JkZXJSYWRpdXM6ICd7Y29udGVudC5ib3JkZXIucmFkaXVzfScsXG4gICAgY29sb3I6ICd7Y29udGVudC5jb2xvcn0nLFxuICAgIHNoYWRvdzogJ3tvdmVybGF5Lm5hdmlnYXRpb24uc2hhZG93fScsXG4gICAgZ2FwOiAnMC41cmVtJ1xufTtcblxuZXhwb3J0IGNvbnN0IHN1Ym1lbnU6IE1lZ2FNZW51VG9rZW5TZWN0aW9ucy5TdWJtZW51ID0ge1xuICAgIHBhZGRpbmc6ICd7bmF2aWdhdGlvbi5saXN0LnBhZGRpbmd9JyxcbiAgICBnYXA6ICd7bmF2aWdhdGlvbi5saXN0LmdhcH0nXG59O1xuXG5leHBvcnQgY29uc3Qgc3VibWVudUxhYmVsOiBNZWdhTWVudVRva2VuU2VjdGlvbnMuU3VibWVudUxhYmVsID0ge1xuICAgIHBhZGRpbmc6ICd7bmF2aWdhdGlvbi5zdWJtZW51LmxhYmVsLnBhZGRpbmd9JyxcbiAgICBmb250V2VpZ2h0OiAne25hdmlnYXRpb24uc3VibWVudS5sYWJlbC5mb250LndlaWdodH0nLFxuICAgIGJhY2tncm91bmQ6ICd7bmF2aWdhdGlvbi5zdWJtZW51LmxhYmVsLmJhY2tncm91bmR9JyxcbiAgICBjb2xvcjogJ3tuYXZpZ2F0aW9uLnN1Ym1lbnUubGFiZWwuY29sb3J9J1xufTtcblxuZXhwb3J0IGNvbnN0IHN1Ym1lbnVJY29uOiBNZWdhTWVudVRva2VuU2VjdGlvbnMuU3VibWVudUljb24gPSB7XG4gICAgc2l6ZTogJ3tuYXZpZ2F0aW9uLnN1Ym1lbnUuaWNvbi5zaXplfScsXG4gICAgY29sb3I6ICd7bmF2aWdhdGlvbi5zdWJtZW51Lmljb24uY29sb3J9JyxcbiAgICBmb2N1c0NvbG9yOiAne25hdmlnYXRpb24uc3VibWVudS5pY29uLmZvY3VzLmNvbG9yfScsXG4gICAgYWN0aXZlQ29sb3I6ICd7bmF2aWdhdGlvbi5zdWJtZW51Lmljb24uYWN0aXZlLmNvbG9yfSdcbn07XG5cbmV4cG9ydCBjb25zdCBzZXBhcmF0b3I6IE1lZ2FNZW51VG9rZW5TZWN0aW9ucy5TZXBhcmF0b3IgPSB7XG4gICAgYm9yZGVyQ29sb3I6ICd7Y29udGVudC5ib3JkZXIuY29sb3J9J1xufTtcblxuZXhwb3J0IGNvbnN0IG1vYmlsZUJ1dHRvbjogTWVnYU1lbnVUb2tlblNlY3Rpb25zLk1vYmlsZUJ1dHRvbiA9IHtcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIHNpemU6ICcxLjc1cmVtJyxcbiAgICBjb2xvcjogJ3t0ZXh0Lm11dGVkLmNvbG9yfScsXG4gICAgaG92ZXJDb2xvcjogJ3t0ZXh0LmhvdmVyLm11dGVkLmNvbG9yfScsXG4gICAgaG92ZXJCYWNrZ3JvdW5kOiAne2NvbnRlbnQuaG92ZXIuYmFja2dyb3VuZH0nLFxuICAgIGZvY3VzUmluZzoge1xuICAgICAgICB3aWR0aDogJ3tmb2N1cy5yaW5nLndpZHRofScsXG4gICAgICAgIHN0eWxlOiAne2ZvY3VzLnJpbmcuc3R5bGV9JyxcbiAgICAgICAgY29sb3I6ICd7Zm9jdXMucmluZy5jb2xvcn0nLFxuICAgICAgICBvZmZzZXQ6ICd7Zm9jdXMucmluZy5vZmZzZXR9JyxcbiAgICAgICAgc2hhZG93OiAne2ZvY3VzLnJpbmcuc2hhZG93fSdcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcm9vdCxcbiAgICBiYXNlSXRlbSxcbiAgICBpdGVtLFxuICAgIG92ZXJsYXksXG4gICAgc3VibWVudSxcbiAgICBzdWJtZW51TGFiZWwsXG4gICAgc3VibWVudUljb24sXG4gICAgc2VwYXJhdG9yLFxuICAgIG1vYmlsZUJ1dHRvblxufSBzYXRpc2ZpZXMgTWVnYU1lbnVEZXNpZ25Ub2tlbnM7XG4iXSwibWFwcGluZ3MiOiIiLCJpZ25vcmVMaXN0IjpbXX0=