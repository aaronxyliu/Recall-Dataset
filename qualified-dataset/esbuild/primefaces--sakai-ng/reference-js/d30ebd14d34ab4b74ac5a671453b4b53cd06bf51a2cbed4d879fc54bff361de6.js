var o = {
    transitionDuration: "{transition.duration}"
  },
  r = {
    borderWidth: "0 0 1px 0",
    background: "{content.background}",
    borderColor: "{content.border.color}"
  },
  t = {
    background: "transparent",
    hoverBackground: "transparent",
    activeBackground: "transparent",
    borderWidth: "0 0 1px 0",
    borderColor: "{content.border.color}",
    hoverBorderColor: "{content.border.color}",
    activeBorderColor: "{primary.color}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.color}",
    padding: "1rem 1.125rem",
    fontWeight: "600",
    margin: "0 0 -1px 0",
    gap: "0.5rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
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
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  e = {
    height: "1px",
    bottom: "-1px",
    background: "{primary.color}"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvYXVyYS90YWJzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgVGFic0Rlc2lnblRva2VucywgVGFic1Rva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL3RhYnMnO1xuXG5leHBvcnQgY29uc3Qgcm9vdDogVGFic1Rva2VuU2VjdGlvbnMuUm9vdCA9IHtcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246ICd7dHJhbnNpdGlvbi5kdXJhdGlvbn0nXG59O1xuXG5leHBvcnQgY29uc3QgdGFibGlzdDogVGFic1Rva2VuU2VjdGlvbnMuVGFibGlzdCA9IHtcbiAgICBib3JkZXJXaWR0aDogJzAgMCAxcHggMCcsXG4gICAgYmFja2dyb3VuZDogJ3tjb250ZW50LmJhY2tncm91bmR9JyxcbiAgICBib3JkZXJDb2xvcjogJ3tjb250ZW50LmJvcmRlci5jb2xvcn0nXG59O1xuXG5leHBvcnQgY29uc3QgdGFiOiBUYWJzVG9rZW5TZWN0aW9ucy5UYWIgPSB7XG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBob3ZlckJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgYWN0aXZlQmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBib3JkZXJXaWR0aDogJzAgMCAxcHggMCcsXG4gICAgYm9yZGVyQ29sb3I6ICd7Y29udGVudC5ib3JkZXIuY29sb3J9JyxcbiAgICBob3ZlckJvcmRlckNvbG9yOiAne2NvbnRlbnQuYm9yZGVyLmNvbG9yfScsXG4gICAgYWN0aXZlQm9yZGVyQ29sb3I6ICd7cHJpbWFyeS5jb2xvcn0nLFxuICAgIGNvbG9yOiAne3RleHQubXV0ZWQuY29sb3J9JyxcbiAgICBob3ZlckNvbG9yOiAne3RleHQuY29sb3J9JyxcbiAgICBhY3RpdmVDb2xvcjogJ3twcmltYXJ5LmNvbG9yfScsXG4gICAgcGFkZGluZzogJzFyZW0gMS4xMjVyZW0nLFxuICAgIGZvbnRXZWlnaHQ6ICc2MDAnLFxuICAgIG1hcmdpbjogJzAgMCAtMXB4IDAnLFxuICAgIGdhcDogJzAuNXJlbScsXG4gICAgZm9jdXNSaW5nOiB7XG4gICAgICAgIHdpZHRoOiAne2ZvY3VzLnJpbmcud2lkdGh9JyxcbiAgICAgICAgc3R5bGU6ICd7Zm9jdXMucmluZy5zdHlsZX0nLFxuICAgICAgICBjb2xvcjogJ3tmb2N1cy5yaW5nLmNvbG9yfScsXG4gICAgICAgIG9mZnNldDogJy0xcHgnLFxuICAgICAgICBzaGFkb3c6ICd7Zm9jdXMucmluZy5zaGFkb3d9J1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0YWJwYW5lbDogVGFic1Rva2VuU2VjdGlvbnMuVGFicGFuZWwgPSB7XG4gICAgYmFja2dyb3VuZDogJ3tjb250ZW50LmJhY2tncm91bmR9JyxcbiAgICBjb2xvcjogJ3tjb250ZW50LmNvbG9yfScsXG4gICAgcGFkZGluZzogJzAuODc1cmVtIDEuMTI1cmVtIDEuMTI1cmVtIDEuMTI1cmVtJyxcbiAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgd2lkdGg6ICd7Zm9jdXMucmluZy53aWR0aH0nLFxuICAgICAgICBzdHlsZTogJ3tmb2N1cy5yaW5nLnN0eWxlfScsXG4gICAgICAgIGNvbG9yOiAne2ZvY3VzLnJpbmcuY29sb3J9JyxcbiAgICAgICAgb2Zmc2V0OiAne2ZvY3VzLnJpbmcub2Zmc2V0fScsXG4gICAgICAgIHNoYWRvdzogJ2luc2V0IHtmb2N1cy5yaW5nLnNoYWRvd30nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG5hdkJ1dHRvbjogVGFic1Rva2VuU2VjdGlvbnMuTmF2QnV0dG9uID0ge1xuICAgIGJhY2tncm91bmQ6ICd7Y29udGVudC5iYWNrZ3JvdW5kfScsXG4gICAgY29sb3I6ICd7dGV4dC5tdXRlZC5jb2xvcn0nLFxuICAgIGhvdmVyQ29sb3I6ICd7dGV4dC5jb2xvcn0nLFxuICAgIHdpZHRoOiAnMi41cmVtJyxcbiAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgd2lkdGg6ICd7Zm9jdXMucmluZy53aWR0aH0nLFxuICAgICAgICBzdHlsZTogJ3tmb2N1cy5yaW5nLnN0eWxlfScsXG4gICAgICAgIGNvbG9yOiAne2ZvY3VzLnJpbmcuY29sb3J9JyxcbiAgICAgICAgb2Zmc2V0OiAnLTFweCcsXG4gICAgICAgIHNoYWRvdzogJ3tmb2N1cy5yaW5nLnNoYWRvd30nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGFjdGl2ZUJhcjogVGFic1Rva2VuU2VjdGlvbnMuQWN0aXZlQmFyID0ge1xuICAgIGhlaWdodDogJzFweCcsXG4gICAgYm90dG9tOiAnLTFweCcsXG4gICAgYmFja2dyb3VuZDogJ3twcmltYXJ5LmNvbG9yfSdcbn07XG5cbmV4cG9ydCBjb25zdCBjb2xvclNjaGVtZTogVGFic1Rva2VuU2VjdGlvbnMuQ29sb3JTY2hlbWUgPSB7XG4gICAgbGlnaHQ6IHtcbiAgICAgICAgbmF2QnV0dG9uOiB7XG4gICAgICAgICAgICBzaGFkb3c6ICcwcHggMHB4IDEwcHggNTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiknXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhcms6IHtcbiAgICAgICAgbmF2QnV0dG9uOiB7XG4gICAgICAgICAgICBzaGFkb3c6ICcwcHggMHB4IDEwcHggNTBweCBjb2xvci1taXgoaW4gc3JnYiwge2NvbnRlbnQuYmFja2dyb3VuZH0sIHRyYW5zcGFyZW50IDUwJSknXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcm9vdCxcbiAgICB0YWJsaXN0LFxuICAgIHRhYixcbiAgICB0YWJwYW5lbCxcbiAgICBuYXZCdXR0b24sXG4gICAgYWN0aXZlQmFyLFxuICAgIGNvbG9yU2NoZW1lXG59IHNhdGlzZmllcyBUYWJzRGVzaWduVG9rZW5zO1xuIl0sIm1hcHBpbmdzIjoiIiwiaWdub3JlTGlzdCI6W119