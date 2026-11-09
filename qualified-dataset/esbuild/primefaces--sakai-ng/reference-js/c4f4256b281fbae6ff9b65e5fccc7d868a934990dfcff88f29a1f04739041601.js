var o = {
    borderColor: "transparent",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    gap: "0.5rem",
    verticalOrientation: {
      padding: "{navigation.list.padding}",
      gap: "{navigation.list.gap}"
    },
    horizontalOrientation: {
      padding: "0.75rem 1rem",
      gap: "0.5rem"
    },
    transitionDuration: "{transition.duration}"
  },
  n = {
    borderRadius: "{content.border.radius}",
    padding: "0.75rem 1rem"
  },
  a = {
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
  i = {
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
    size: "2rem",
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
    light: {
      root: {
        background: "{surface.50}"
      }
    },
    dark: {
      root: {
        background: "{surface.800}"
      }
    }
  },
  u = {
    root: o,
    baseItem: n,
    item: a,
    overlay: i,
    submenu: r,
    submenuLabel: t,
    submenuIcon: e,
    separator: c,
    mobileButton: d,
    colorScheme: g
  };
export { n as baseItem, g as colorScheme, u as default, a as item, d as mobileButton, i as overlay, o as root, c as separator, r as submenu, e as submenuIcon, t as submenuLabel };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbGFyYS9tZWdhbWVudS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE1lZ2FNZW51RGVzaWduVG9rZW5zLCBNZWdhTWVudVRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL21lZ2FtZW51JztcblxuZXhwb3J0IGNvbnN0IHJvb3Q6IE1lZ2FNZW51VG9rZW5TZWN0aW9ucy5Sb290ID0ge1xuICAgIGJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIGJvcmRlclJhZGl1czogJ3tjb250ZW50LmJvcmRlci5yYWRpdXN9JyxcbiAgICBjb2xvcjogJ3tjb250ZW50LmNvbG9yfScsXG4gICAgZ2FwOiAnMC41cmVtJyxcbiAgICB2ZXJ0aWNhbE9yaWVudGF0aW9uOiB7XG4gICAgICAgIHBhZGRpbmc6ICd7bmF2aWdhdGlvbi5saXN0LnBhZGRpbmd9JyxcbiAgICAgICAgZ2FwOiAne25hdmlnYXRpb24ubGlzdC5nYXB9J1xuICAgIH0sXG4gICAgaG9yaXpvbnRhbE9yaWVudGF0aW9uOiB7XG4gICAgICAgIHBhZGRpbmc6ICcwLjc1cmVtIDFyZW0nLFxuICAgICAgICBnYXA6ICcwLjVyZW0nXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246ICd7dHJhbnNpdGlvbi5kdXJhdGlvbn0nXG59O1xuXG5leHBvcnQgY29uc3QgYmFzZUl0ZW06IE1lZ2FNZW51VG9rZW5TZWN0aW9ucy5CYXNlSXRlbSA9IHtcbiAgICBib3JkZXJSYWRpdXM6ICd7Y29udGVudC5ib3JkZXIucmFkaXVzfScsXG4gICAgcGFkZGluZzogJzAuNzVyZW0gMXJlbSdcbn07XG5cbmV4cG9ydCBjb25zdCBpdGVtOiBNZWdhTWVudVRva2VuU2VjdGlvbnMuSXRlbSA9IHtcbiAgICBmb2N1c0JhY2tncm91bmQ6ICd7bmF2aWdhdGlvbi5pdGVtLmZvY3VzLmJhY2tncm91bmR9JyxcbiAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne25hdmlnYXRpb24uaXRlbS5hY3RpdmUuYmFja2dyb3VuZH0nLFxuICAgIGNvbG9yOiAne25hdmlnYXRpb24uaXRlbS5jb2xvcn0nLFxuICAgIGZvY3VzQ29sb3I6ICd7bmF2aWdhdGlvbi5pdGVtLmZvY3VzLmNvbG9yfScsXG4gICAgYWN0aXZlQ29sb3I6ICd7bmF2aWdhdGlvbi5pdGVtLmFjdGl2ZS5jb2xvcn0nLFxuICAgIHBhZGRpbmc6ICd7bmF2aWdhdGlvbi5pdGVtLnBhZGRpbmd9JyxcbiAgICBib3JkZXJSYWRpdXM6ICd7bmF2aWdhdGlvbi5pdGVtLmJvcmRlci5yYWRpdXN9JyxcbiAgICBnYXA6ICd7bmF2aWdhdGlvbi5pdGVtLmdhcH0nLFxuICAgIGljb246IHtcbiAgICAgICAgY29sb3I6ICd7bmF2aWdhdGlvbi5pdGVtLmljb24uY29sb3J9JyxcbiAgICAgICAgZm9jdXNDb2xvcjogJ3tuYXZpZ2F0aW9uLml0ZW0uaWNvbi5mb2N1cy5jb2xvcn0nLFxuICAgICAgICBhY3RpdmVDb2xvcjogJ3tuYXZpZ2F0aW9uLml0ZW0uaWNvbi5hY3RpdmUuY29sb3J9J1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBvdmVybGF5OiBNZWdhTWVudVRva2VuU2VjdGlvbnMuT3ZlcmxheSA9IHtcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgYmFja2dyb3VuZDogJ3tjb250ZW50LmJhY2tncm91bmR9JyxcbiAgICBib3JkZXJDb2xvcjogJ3tjb250ZW50LmJvcmRlci5jb2xvcn0nLFxuICAgIGJvcmRlclJhZGl1czogJ3tjb250ZW50LmJvcmRlci5yYWRpdXN9JyxcbiAgICBjb2xvcjogJ3tjb250ZW50LmNvbG9yfScsXG4gICAgc2hhZG93OiAne292ZXJsYXkubmF2aWdhdGlvbi5zaGFkb3d9JyxcbiAgICBnYXA6ICcwLjVyZW0nXG59O1xuXG5leHBvcnQgY29uc3Qgc3VibWVudTogTWVnYU1lbnVUb2tlblNlY3Rpb25zLlN1Ym1lbnUgPSB7XG4gICAgcGFkZGluZzogJ3tuYXZpZ2F0aW9uLmxpc3QucGFkZGluZ30nLFxuICAgIGdhcDogJ3tuYXZpZ2F0aW9uLmxpc3QuZ2FwfSdcbn07XG5cbmV4cG9ydCBjb25zdCBzdWJtZW51TGFiZWw6IE1lZ2FNZW51VG9rZW5TZWN0aW9ucy5TdWJtZW51TGFiZWwgPSB7XG4gICAgcGFkZGluZzogJ3tuYXZpZ2F0aW9uLnN1Ym1lbnUubGFiZWwucGFkZGluZ30nLFxuICAgIGZvbnRXZWlnaHQ6ICd7bmF2aWdhdGlvbi5zdWJtZW51LmxhYmVsLmZvbnQud2VpZ2h0fScsXG4gICAgYmFja2dyb3VuZDogJ3tuYXZpZ2F0aW9uLnN1Ym1lbnUubGFiZWwuYmFja2dyb3VuZH0nLFxuICAgIGNvbG9yOiAne25hdmlnYXRpb24uc3VibWVudS5sYWJlbC5jb2xvcn0nXG59O1xuXG5leHBvcnQgY29uc3Qgc3VibWVudUljb246IE1lZ2FNZW51VG9rZW5TZWN0aW9ucy5TdWJtZW51SWNvbiA9IHtcbiAgICBzaXplOiAne25hdmlnYXRpb24uc3VibWVudS5pY29uLnNpemV9JyxcbiAgICBjb2xvcjogJ3tuYXZpZ2F0aW9uLnN1Ym1lbnUuaWNvbi5jb2xvcn0nLFxuICAgIGZvY3VzQ29sb3I6ICd7bmF2aWdhdGlvbi5zdWJtZW51Lmljb24uZm9jdXMuY29sb3J9JyxcbiAgICBhY3RpdmVDb2xvcjogJ3tuYXZpZ2F0aW9uLnN1Ym1lbnUuaWNvbi5hY3RpdmUuY29sb3J9J1xufTtcblxuZXhwb3J0IGNvbnN0IHNlcGFyYXRvcjogTWVnYU1lbnVUb2tlblNlY3Rpb25zLlNlcGFyYXRvciA9IHtcbiAgICBib3JkZXJDb2xvcjogJ3tjb250ZW50LmJvcmRlci5jb2xvcn0nXG59O1xuXG5leHBvcnQgY29uc3QgbW9iaWxlQnV0dG9uOiBNZWdhTWVudVRva2VuU2VjdGlvbnMuTW9iaWxlQnV0dG9uID0ge1xuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgc2l6ZTogJzJyZW0nLFxuICAgIGNvbG9yOiAne3RleHQubXV0ZWQuY29sb3J9JyxcbiAgICBob3ZlckNvbG9yOiAne3RleHQuaG92ZXIubXV0ZWQuY29sb3J9JyxcbiAgICBob3ZlckJhY2tncm91bmQ6ICd7Y29udGVudC5ob3Zlci5iYWNrZ3JvdW5kfScsXG4gICAgZm9jdXNSaW5nOiB7XG4gICAgICAgIHdpZHRoOiAne2ZvY3VzLnJpbmcud2lkdGh9JyxcbiAgICAgICAgc3R5bGU6ICd7Zm9jdXMucmluZy5zdHlsZX0nLFxuICAgICAgICBjb2xvcjogJ3tmb2N1cy5yaW5nLmNvbG9yfScsXG4gICAgICAgIG9mZnNldDogJ3tmb2N1cy5yaW5nLm9mZnNldH0nLFxuICAgICAgICBzaGFkb3c6ICd7Zm9jdXMucmluZy5zaGFkb3d9J1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjb2xvclNjaGVtZTogTWVnYU1lbnVUb2tlblNlY3Rpb25zLkNvbG9yU2NoZW1lID0ge1xuICAgIGxpZ2h0OiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7c3VyZmFjZS41MH0nXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhcms6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjgwMH0nXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcm9vdCxcbiAgICBiYXNlSXRlbSxcbiAgICBpdGVtLFxuICAgIG92ZXJsYXksXG4gICAgc3VibWVudSxcbiAgICBzdWJtZW51TGFiZWwsXG4gICAgc3VibWVudUljb24sXG4gICAgc2VwYXJhdG9yLFxuICAgIG1vYmlsZUJ1dHRvbixcbiAgICBjb2xvclNjaGVtZVxufSBzYXRpc2ZpZXMgTWVnYU1lbnVEZXNpZ25Ub2tlbnM7XG4iXSwibWFwcGluZ3MiOiIiLCJpZ25vcmVMaXN0IjpbXX0=