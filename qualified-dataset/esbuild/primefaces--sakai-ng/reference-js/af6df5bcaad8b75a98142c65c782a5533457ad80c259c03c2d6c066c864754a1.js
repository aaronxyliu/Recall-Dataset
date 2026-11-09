var o = {
    borderColor: "transparent",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    gap: "0.5rem",
    padding: "0.75rem 1rem",
    transitionDuration: "{transition.duration}"
  },
  r = {
    borderRadius: "{content.border.radius}",
    padding: "0.75rem 1rem"
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
  n = {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}",
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.navigation.shadow}",
    mobileIndent: "1.25rem",
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
  e = {
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
  c = {
    root: o,
    baseItem: r,
    item: i,
    submenu: n,
    separator: a,
    mobileButton: t,
    colorScheme: e
  };
export { r as baseItem, e as colorScheme, c as default, i as item, t as mobileButton, o as root, a as separator, n as submenu };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbGFyYS9tZW51YmFyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTWVudWJhckRlc2lnblRva2VucywgTWVudWJhclRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL21lbnViYXInO1xuXG5leHBvcnQgY29uc3Qgcm9vdDogTWVudWJhclRva2VuU2VjdGlvbnMuUm9vdCA9IHtcbiAgICBib3JkZXJDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICBib3JkZXJSYWRpdXM6ICd7Y29udGVudC5ib3JkZXIucmFkaXVzfScsXG4gICAgY29sb3I6ICd7Y29udGVudC5jb2xvcn0nLFxuICAgIGdhcDogJzAuNXJlbScsXG4gICAgcGFkZGluZzogJzAuNzVyZW0gMXJlbScsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAne3RyYW5zaXRpb24uZHVyYXRpb259J1xufTtcblxuZXhwb3J0IGNvbnN0IGJhc2VJdGVtOiBNZW51YmFyVG9rZW5TZWN0aW9ucy5CYXNlSXRlbSA9IHtcbiAgICBib3JkZXJSYWRpdXM6ICd7Y29udGVudC5ib3JkZXIucmFkaXVzfScsXG4gICAgcGFkZGluZzogJzAuNzVyZW0gMXJlbSdcbn07XG5cbmV4cG9ydCBjb25zdCBpdGVtOiBNZW51YmFyVG9rZW5TZWN0aW9ucy5JdGVtID0ge1xuICAgIGZvY3VzQmFja2dyb3VuZDogJ3tuYXZpZ2F0aW9uLml0ZW0uZm9jdXMuYmFja2dyb3VuZH0nLFxuICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7bmF2aWdhdGlvbi5pdGVtLmFjdGl2ZS5iYWNrZ3JvdW5kfScsXG4gICAgY29sb3I6ICd7bmF2aWdhdGlvbi5pdGVtLmNvbG9yfScsXG4gICAgZm9jdXNDb2xvcjogJ3tuYXZpZ2F0aW9uLml0ZW0uZm9jdXMuY29sb3J9JyxcbiAgICBhY3RpdmVDb2xvcjogJ3tuYXZpZ2F0aW9uLml0ZW0uYWN0aXZlLmNvbG9yfScsXG4gICAgcGFkZGluZzogJ3tuYXZpZ2F0aW9uLml0ZW0ucGFkZGluZ30nLFxuICAgIGJvcmRlclJhZGl1czogJ3tuYXZpZ2F0aW9uLml0ZW0uYm9yZGVyLnJhZGl1c30nLFxuICAgIGdhcDogJ3tuYXZpZ2F0aW9uLml0ZW0uZ2FwfScsXG4gICAgaWNvbjoge1xuICAgICAgICBjb2xvcjogJ3tuYXZpZ2F0aW9uLml0ZW0uaWNvbi5jb2xvcn0nLFxuICAgICAgICBmb2N1c0NvbG9yOiAne25hdmlnYXRpb24uaXRlbS5pY29uLmZvY3VzLmNvbG9yfScsXG4gICAgICAgIGFjdGl2ZUNvbG9yOiAne25hdmlnYXRpb24uaXRlbS5pY29uLmFjdGl2ZS5jb2xvcn0nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHN1Ym1lbnU6IE1lbnViYXJUb2tlblNlY3Rpb25zLlN1Ym1lbnUgPSB7XG4gICAgcGFkZGluZzogJ3tuYXZpZ2F0aW9uLmxpc3QucGFkZGluZ30nLFxuICAgIGdhcDogJ3tuYXZpZ2F0aW9uLmxpc3QuZ2FwfScsXG4gICAgYmFja2dyb3VuZDogJ3tjb250ZW50LmJhY2tncm91bmR9JyxcbiAgICBib3JkZXJDb2xvcjogJ3tjb250ZW50LmJvcmRlci5jb2xvcn0nLFxuICAgIGJvcmRlclJhZGl1czogJ3tjb250ZW50LmJvcmRlci5yYWRpdXN9JyxcbiAgICBzaGFkb3c6ICd7b3ZlcmxheS5uYXZpZ2F0aW9uLnNoYWRvd30nLFxuICAgIG1vYmlsZUluZGVudDogJzEuMjVyZW0nLFxuICAgIGljb246IHtcbiAgICAgICAgc2l6ZTogJ3tuYXZpZ2F0aW9uLnN1Ym1lbnUuaWNvbi5zaXplfScsXG4gICAgICAgIGNvbG9yOiAne25hdmlnYXRpb24uc3VibWVudS5pY29uLmNvbG9yfScsXG4gICAgICAgIGZvY3VzQ29sb3I6ICd7bmF2aWdhdGlvbi5zdWJtZW51Lmljb24uZm9jdXMuY29sb3J9JyxcbiAgICAgICAgYWN0aXZlQ29sb3I6ICd7bmF2aWdhdGlvbi5zdWJtZW51Lmljb24uYWN0aXZlLmNvbG9yfSdcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2VwYXJhdG9yOiBNZW51YmFyVG9rZW5TZWN0aW9ucy5TZXBhcmF0b3IgPSB7XG4gICAgYm9yZGVyQ29sb3I6ICd7Y29udGVudC5ib3JkZXIuY29sb3J9J1xufTtcblxuZXhwb3J0IGNvbnN0IG1vYmlsZUJ1dHRvbjogTWVudWJhclRva2VuU2VjdGlvbnMuTW9iaWxlQnV0dG9uID0ge1xuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgc2l6ZTogJzJyZW0nLFxuICAgIGNvbG9yOiAne3RleHQubXV0ZWQuY29sb3J9JyxcbiAgICBob3ZlckNvbG9yOiAne3RleHQuaG92ZXIubXV0ZWQuY29sb3J9JyxcbiAgICBob3ZlckJhY2tncm91bmQ6ICd7Y29udGVudC5ob3Zlci5iYWNrZ3JvdW5kfScsXG4gICAgZm9jdXNSaW5nOiB7XG4gICAgICAgIHdpZHRoOiAne2ZvY3VzLnJpbmcud2lkdGh9JyxcbiAgICAgICAgc3R5bGU6ICd7Zm9jdXMucmluZy5zdHlsZX0nLFxuICAgICAgICBjb2xvcjogJ3tmb2N1cy5yaW5nLmNvbG9yfScsXG4gICAgICAgIG9mZnNldDogJ3tmb2N1cy5yaW5nLm9mZnNldH0nLFxuICAgICAgICBzaGFkb3c6ICd7Zm9jdXMucmluZy5zaGFkb3d9J1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjb2xvclNjaGVtZTogTWVudWJhclRva2VuU2VjdGlvbnMuQ29sb3JTY2hlbWUgPSB7XG4gICAgbGlnaHQ6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjUwfSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGFyazoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuODAwfSdcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByb290LFxuICAgIGJhc2VJdGVtLFxuICAgIGl0ZW0sXG4gICAgc3VibWVudSxcbiAgICBzZXBhcmF0b3IsXG4gICAgbW9iaWxlQnV0dG9uLFxuICAgIGNvbG9yU2NoZW1lXG59IHNhdGlzZmllcyBNZW51YmFyRGVzaWduVG9rZW5zO1xuIl0sIm1hcHBpbmdzIjoiIiwiaWdub3JlTGlzdCI6W119