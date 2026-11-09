var o = {
    transitionDuration: "{transition.duration}"
  },
  r = {
    borderWidth: "0 0 1px 0",
    background: "{content.background}",
    borderColor: "{content.border.color}"
  },
  t = {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    activeBackground: "{primary.color}",
    borderWidth: "0",
    borderColor: "transparent",
    hoverBorderColor: "transparent",
    activeBorderColor: "transparent",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.contrast.color}",
    padding: "1rem 1.25rem",
    fontWeight: "700",
    margin: "0",
    gap: "0.5rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-2px",
      shadow: "{focus.ring.shadow}"
    }
  },
  n = {
    background: "{content.background}",
    color: "{content.color}",
    padding: "0.875rem 1.125rem 1.125rem 1.125rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "inset {focus.ring.shadow}"
    }
  },
  c = {
    background: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    width: "2.5rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "inset {focus.ring.shadow}"
    }
  },
  e = {
    height: "0",
    bottom: "0",
    background: "transparent"
  },
  a = {
    light: {
      navButton: {
        shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
      }
    },
    dark: {
      navButton: {
        shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
      }
    }
  },
  i = {
    root: o,
    tablist: r,
    tab: t,
    tabpanel: n,
    navButton: c,
    activeBar: e,
    colorScheme: a
  };
export { e as activeBar, a as colorScheme, i as default, c as navButton, o as root, t as tab, r as tablist, n as tabpanel };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbm9yYS90YWJzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgVGFic0Rlc2lnblRva2VucywgVGFic1Rva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL3RhYnMnO1xuXG5leHBvcnQgY29uc3Qgcm9vdDogVGFic1Rva2VuU2VjdGlvbnMuUm9vdCA9IHtcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246ICd7dHJhbnNpdGlvbi5kdXJhdGlvbn0nXG59O1xuXG5leHBvcnQgY29uc3QgdGFibGlzdDogVGFic1Rva2VuU2VjdGlvbnMuVGFibGlzdCA9IHtcbiAgICBib3JkZXJXaWR0aDogJzAgMCAxcHggMCcsXG4gICAgYmFja2dyb3VuZDogJ3tjb250ZW50LmJhY2tncm91bmR9JyxcbiAgICBib3JkZXJDb2xvcjogJ3tjb250ZW50LmJvcmRlci5jb2xvcn0nXG59O1xuXG5leHBvcnQgY29uc3QgdGFiOiBUYWJzVG9rZW5TZWN0aW9ucy5UYWIgPSB7XG4gICAgYmFja2dyb3VuZDogJ3tjb250ZW50LmJhY2tncm91bmR9JyxcbiAgICBob3ZlckJhY2tncm91bmQ6ICd7Y29udGVudC5ob3Zlci5iYWNrZ3JvdW5kfScsXG4gICAgYWN0aXZlQmFja2dyb3VuZDogJ3twcmltYXJ5LmNvbG9yfScsXG4gICAgYm9yZGVyV2lkdGg6ICcwJyxcbiAgICBib3JkZXJDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICBob3ZlckJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIGFjdGl2ZUJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIGNvbG9yOiAne3RleHQubXV0ZWQuY29sb3J9JyxcbiAgICBob3ZlckNvbG9yOiAne3RleHQuY29sb3J9JyxcbiAgICBhY3RpdmVDb2xvcjogJ3twcmltYXJ5LmNvbnRyYXN0LmNvbG9yfScsXG4gICAgcGFkZGluZzogJzFyZW0gMS4yNXJlbScsXG4gICAgZm9udFdlaWdodDogJzcwMCcsXG4gICAgbWFyZ2luOiAnMCcsXG4gICAgZ2FwOiAnMC41cmVtJyxcbiAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgd2lkdGg6ICd7Zm9jdXMucmluZy53aWR0aH0nLFxuICAgICAgICBzdHlsZTogJ3tmb2N1cy5yaW5nLnN0eWxlfScsXG4gICAgICAgIGNvbG9yOiAne2ZvY3VzLnJpbmcuY29sb3J9JyxcbiAgICAgICAgb2Zmc2V0OiAnLTJweCcsXG4gICAgICAgIHNoYWRvdzogJ3tmb2N1cy5yaW5nLnNoYWRvd30nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRhYnBhbmVsOiBUYWJzVG9rZW5TZWN0aW9ucy5UYWJwYW5lbCA9IHtcbiAgICBiYWNrZ3JvdW5kOiAne2NvbnRlbnQuYmFja2dyb3VuZH0nLFxuICAgIGNvbG9yOiAne2NvbnRlbnQuY29sb3J9JyxcbiAgICBwYWRkaW5nOiAnMC44NzVyZW0gMS4xMjVyZW0gMS4xMjVyZW0gMS4xMjVyZW0nLFxuICAgIGZvY3VzUmluZzoge1xuICAgICAgICB3aWR0aDogJ3tmb2N1cy5yaW5nLndpZHRofScsXG4gICAgICAgIHN0eWxlOiAne2ZvY3VzLnJpbmcuc3R5bGV9JyxcbiAgICAgICAgY29sb3I6ICd7Zm9jdXMucmluZy5jb2xvcn0nLFxuICAgICAgICBvZmZzZXQ6ICd7Zm9jdXMucmluZy5vZmZzZXR9JyxcbiAgICAgICAgc2hhZG93OiAnaW5zZXQge2ZvY3VzLnJpbmcuc2hhZG93fSdcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgbmF2QnV0dG9uOiBUYWJzVG9rZW5TZWN0aW9ucy5OYXZCdXR0b24gPSB7XG4gICAgYmFja2dyb3VuZDogJ3tjb250ZW50LmJhY2tncm91bmR9JyxcbiAgICBjb2xvcjogJ3t0ZXh0Lm11dGVkLmNvbG9yfScsXG4gICAgaG92ZXJDb2xvcjogJ3t0ZXh0LmNvbG9yfScsXG4gICAgd2lkdGg6ICcyLjVyZW0nLFxuICAgIGZvY3VzUmluZzoge1xuICAgICAgICB3aWR0aDogJ3tmb2N1cy5yaW5nLndpZHRofScsXG4gICAgICAgIHN0eWxlOiAne2ZvY3VzLnJpbmcuc3R5bGV9JyxcbiAgICAgICAgY29sb3I6ICd7Zm9jdXMucmluZy5jb2xvcn0nLFxuICAgICAgICBvZmZzZXQ6ICd7Zm9jdXMucmluZy5vZmZzZXR9JyxcbiAgICAgICAgc2hhZG93OiAnaW5zZXQge2ZvY3VzLnJpbmcuc2hhZG93fSdcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aXZlQmFyOiBUYWJzVG9rZW5TZWN0aW9ucy5BY3RpdmVCYXIgPSB7XG4gICAgaGVpZ2h0OiAnMCcsXG4gICAgYm90dG9tOiAnMCcsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50J1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbG9yU2NoZW1lOiBUYWJzVG9rZW5TZWN0aW9ucy5Db2xvclNjaGVtZSA9IHtcbiAgICBsaWdodDoge1xuICAgICAgICBuYXZCdXR0b246IHtcbiAgICAgICAgICAgIHNoYWRvdzogJzBweCAwcHggMTBweCA1MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGFyazoge1xuICAgICAgICBuYXZCdXR0b246IHtcbiAgICAgICAgICAgIHNoYWRvdzogJzBweCAwcHggMTBweCA1MHB4IGNvbG9yLW1peChpbiBzcmdiLCB7Y29udGVudC5iYWNrZ3JvdW5kfSwgdHJhbnNwYXJlbnQgNTAlKSdcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByb290LFxuICAgIHRhYmxpc3QsXG4gICAgdGFiLFxuICAgIHRhYnBhbmVsLFxuICAgIG5hdkJ1dHRvbixcbiAgICBhY3RpdmVCYXIsXG4gICAgY29sb3JTY2hlbWVcbn0gc2F0aXNmaWVzIFRhYnNEZXNpZ25Ub2tlbnM7XG4iXSwibWFwcGluZ3MiOiIiLCJpZ25vcmVMaXN0IjpbXX0=