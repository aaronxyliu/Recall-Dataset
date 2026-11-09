var o = {
    transitionDuration: "{transition.duration}"
  },
  r = {
    borderWidth: "0",
    background: "{content.background}",
    borderColor: "{content.border.color}"
  },
  t = {
    borderWidth: "2px 0 0 0",
    borderColor: "transparent",
    hoverBorderColor: "transparent",
    activeBorderColor: "{primary.color}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.color}",
    padding: "1rem 1.25rem",
    fontWeight: "700",
    margin: "0",
    gap: "0.5rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "inset {focus.ring.shadow}"
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
      },
      tab: {
        background: "{surface.50}",
        hoverBackground: "{surface.100}",
        activeBackground: "{surface.0}"
      }
    },
    dark: {
      navButton: {
        shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
      },
      tab: {
        background: "{surface.800}",
        hoverBackground: "{surface.700}",
        activeBackground: "{surface.900}"
      }
    }
  },
  s = {
    root: o,
    tablist: r,
    tab: t,
    tabpanel: n,
    navButton: c,
    activeBar: e,
    colorScheme: a
  };
export { e as activeBar, a as colorScheme, s as default, c as navButton, o as root, t as tab, r as tablist, n as tabpanel };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbGFyYS90YWJzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgVGFic0Rlc2lnblRva2VucywgVGFic1Rva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL3RhYnMnO1xuXG5leHBvcnQgY29uc3Qgcm9vdDogVGFic1Rva2VuU2VjdGlvbnMuUm9vdCA9IHtcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246ICd7dHJhbnNpdGlvbi5kdXJhdGlvbn0nXG59O1xuXG5leHBvcnQgY29uc3QgdGFibGlzdDogVGFic1Rva2VuU2VjdGlvbnMuVGFibGlzdCA9IHtcbiAgICBib3JkZXJXaWR0aDogJzAnLFxuICAgIGJhY2tncm91bmQ6ICd7Y29udGVudC5iYWNrZ3JvdW5kfScsXG4gICAgYm9yZGVyQ29sb3I6ICd7Y29udGVudC5ib3JkZXIuY29sb3J9J1xufTtcblxuZXhwb3J0IGNvbnN0IHRhYjogVGFic1Rva2VuU2VjdGlvbnMuVGFiID0ge1xuICAgIGJvcmRlcldpZHRoOiAnMnB4IDAgMCAwJyxcbiAgICBib3JkZXJDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICBob3ZlckJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIGFjdGl2ZUJvcmRlckNvbG9yOiAne3ByaW1hcnkuY29sb3J9JyxcbiAgICBjb2xvcjogJ3t0ZXh0Lm11dGVkLmNvbG9yfScsXG4gICAgaG92ZXJDb2xvcjogJ3t0ZXh0LmNvbG9yfScsXG4gICAgYWN0aXZlQ29sb3I6ICd7cHJpbWFyeS5jb2xvcn0nLFxuICAgIHBhZGRpbmc6ICcxcmVtIDEuMjVyZW0nLFxuICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxuICAgIG1hcmdpbjogJzAnLFxuICAgIGdhcDogJzAuNXJlbScsXG4gICAgZm9jdXNSaW5nOiB7XG4gICAgICAgIHdpZHRoOiAne2ZvY3VzLnJpbmcud2lkdGh9JyxcbiAgICAgICAgc3R5bGU6ICd7Zm9jdXMucmluZy5zdHlsZX0nLFxuICAgICAgICBjb2xvcjogJ3tmb2N1cy5yaW5nLmNvbG9yfScsXG4gICAgICAgIG9mZnNldDogJ3tmb2N1cy5yaW5nLm9mZnNldH0nLFxuICAgICAgICBzaGFkb3c6ICdpbnNldCB7Zm9jdXMucmluZy5zaGFkb3d9J1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0YWJwYW5lbDogVGFic1Rva2VuU2VjdGlvbnMuVGFicGFuZWwgPSB7XG4gICAgYmFja2dyb3VuZDogJ3tjb250ZW50LmJhY2tncm91bmR9JyxcbiAgICBjb2xvcjogJ3tjb250ZW50LmNvbG9yfScsXG4gICAgcGFkZGluZzogJzAuODc1cmVtIDEuMTI1cmVtIDEuMTI1cmVtIDEuMTI1cmVtJyxcbiAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgd2lkdGg6ICd7Zm9jdXMucmluZy53aWR0aH0nLFxuICAgICAgICBzdHlsZTogJ3tmb2N1cy5yaW5nLnN0eWxlfScsXG4gICAgICAgIGNvbG9yOiAne2ZvY3VzLnJpbmcuY29sb3J9JyxcbiAgICAgICAgb2Zmc2V0OiAne2ZvY3VzLnJpbmcub2Zmc2V0fScsXG4gICAgICAgIHNoYWRvdzogJ2luc2V0IHtmb2N1cy5yaW5nLnNoYWRvd30nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG5hdkJ1dHRvbjogVGFic1Rva2VuU2VjdGlvbnMuTmF2QnV0dG9uID0ge1xuICAgIGJhY2tncm91bmQ6ICd7Y29udGVudC5iYWNrZ3JvdW5kfScsXG4gICAgY29sb3I6ICd7dGV4dC5tdXRlZC5jb2xvcn0nLFxuICAgIGhvdmVyQ29sb3I6ICd7dGV4dC5jb2xvcn0nLFxuICAgIHdpZHRoOiAnMi41cmVtJyxcbiAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgd2lkdGg6ICd7Zm9jdXMucmluZy53aWR0aH0nLFxuICAgICAgICBzdHlsZTogJ3tmb2N1cy5yaW5nLnN0eWxlfScsXG4gICAgICAgIGNvbG9yOiAne2ZvY3VzLnJpbmcuY29sb3J9JyxcbiAgICAgICAgb2Zmc2V0OiAne2ZvY3VzLnJpbmcub2Zmc2V0fScsXG4gICAgICAgIHNoYWRvdzogJ2luc2V0IHtmb2N1cy5yaW5nLnNoYWRvd30nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGFjdGl2ZUJhcjogVGFic1Rva2VuU2VjdGlvbnMuQWN0aXZlQmFyID0ge1xuICAgIGhlaWdodDogJzAnLFxuICAgIGJvdHRvbTogJzAnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCdcbn07XG5cbmV4cG9ydCBjb25zdCBjb2xvclNjaGVtZTogVGFic1Rva2VuU2VjdGlvbnMuQ29sb3JTY2hlbWUgPSB7XG4gICAgbGlnaHQ6IHtcbiAgICAgICAgbmF2QnV0dG9uOiB7XG4gICAgICAgICAgICBzaGFkb3c6ICcwcHggMHB4IDEwcHggNTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiknXG4gICAgICAgIH0sXG4gICAgICAgIHRhYjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjUwfScsXG4gICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS4xMDB9JyxcbiAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c3VyZmFjZS4wfSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGFyazoge1xuICAgICAgICBuYXZCdXR0b246IHtcbiAgICAgICAgICAgIHNoYWRvdzogJzBweCAwcHggMTBweCA1MHB4IGNvbG9yLW1peChpbiBzcmdiLCB7Y29udGVudC5iYWNrZ3JvdW5kfSwgdHJhbnNwYXJlbnQgNTAlKSdcbiAgICAgICAgfSxcbiAgICAgICAgdGFiOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuODAwfScsXG4gICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS43MDB9JyxcbiAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c3VyZmFjZS45MDB9J1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJvb3QsXG4gICAgdGFibGlzdCxcbiAgICB0YWIsXG4gICAgdGFicGFuZWwsXG4gICAgbmF2QnV0dG9uLFxuICAgIGFjdGl2ZUJhcixcbiAgICBjb2xvclNjaGVtZVxufSBzYXRpc2ZpZXMgVGFic0Rlc2lnblRva2VucztcbiJdLCJtYXBwaW5ncyI6IiIsImlnbm9yZUxpc3QiOltdfQ==