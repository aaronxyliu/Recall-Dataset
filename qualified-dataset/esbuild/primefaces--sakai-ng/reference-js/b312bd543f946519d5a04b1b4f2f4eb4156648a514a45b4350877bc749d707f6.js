var o = {
    gutter: "0.75rem",
    transitionDuration: "{transition.duration}"
  },
  r = {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    selectedColor: "{highlight.color}",
    hoverColor: "{content.hover.color}",
    padding: "0.75rem 1rem",
    toggleablePadding: "0.75rem 1rem 1.25rem 1rem",
    borderRadius: "{content.border.radius}"
  },
  e = {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    borderColor: "{content.border.color}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    size: "1.5rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  t = {
    color: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    height: "24px"
  },
  n = {
    root: o,
    node: r,
    nodeToggleButton: e,
    connector: t
  };
export { t as connector, n as default, r as node, e as nodeToggleButton, o as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvYXVyYS9vcmdhbml6YXRpb25jaGFydC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE9yZ2FuaXphdGlvbkNoYXJ0RGVzaWduVG9rZW5zLCBPcmdhbml6YXRpb25DaGFydFRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL29yZ2FuaXphdGlvbmNoYXJ0JztcblxuZXhwb3J0IGNvbnN0IHJvb3Q6IE9yZ2FuaXphdGlvbkNoYXJ0VG9rZW5TZWN0aW9ucy5Sb290ID0ge1xuICAgIGd1dHRlcjogJzAuNzVyZW0nLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJ3t0cmFuc2l0aW9uLmR1cmF0aW9ufSdcbn07XG5cbmV4cG9ydCBjb25zdCBub2RlOiBPcmdhbml6YXRpb25DaGFydFRva2VuU2VjdGlvbnMuTm9kZSA9IHtcbiAgICBiYWNrZ3JvdW5kOiAne2NvbnRlbnQuYmFja2dyb3VuZH0nLFxuICAgIGhvdmVyQmFja2dyb3VuZDogJ3tjb250ZW50LmhvdmVyLmJhY2tncm91bmR9JyxcbiAgICBzZWxlY3RlZEJhY2tncm91bmQ6ICd7aGlnaGxpZ2h0LmJhY2tncm91bmR9JyxcbiAgICBib3JkZXJDb2xvcjogJ3tjb250ZW50LmJvcmRlci5jb2xvcn0nLFxuICAgIGNvbG9yOiAne2NvbnRlbnQuY29sb3J9JyxcbiAgICBzZWxlY3RlZENvbG9yOiAne2hpZ2hsaWdodC5jb2xvcn0nLFxuICAgIGhvdmVyQ29sb3I6ICd7Y29udGVudC5ob3Zlci5jb2xvcn0nLFxuICAgIHBhZGRpbmc6ICcwLjc1cmVtIDFyZW0nLFxuICAgIHRvZ2dsZWFibGVQYWRkaW5nOiAnMC43NXJlbSAxcmVtIDEuMjVyZW0gMXJlbScsXG4gICAgYm9yZGVyUmFkaXVzOiAne2NvbnRlbnQuYm9yZGVyLnJhZGl1c30nXG59O1xuXG5leHBvcnQgY29uc3Qgbm9kZVRvZ2dsZUJ1dHRvbjogT3JnYW5pemF0aW9uQ2hhcnRUb2tlblNlY3Rpb25zLk5vZGVUb2dnbGVCdXR0b24gPSB7XG4gICAgYmFja2dyb3VuZDogJ3tjb250ZW50LmJhY2tncm91bmR9JyxcbiAgICBob3ZlckJhY2tncm91bmQ6ICd7Y29udGVudC5ob3Zlci5iYWNrZ3JvdW5kfScsXG4gICAgYm9yZGVyQ29sb3I6ICd7Y29udGVudC5ib3JkZXIuY29sb3J9JyxcbiAgICBjb2xvcjogJ3t0ZXh0Lm11dGVkLmNvbG9yfScsXG4gICAgaG92ZXJDb2xvcjogJ3t0ZXh0LmNvbG9yfScsXG4gICAgc2l6ZTogJzEuNXJlbScsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgd2lkdGg6ICd7Zm9jdXMucmluZy53aWR0aH0nLFxuICAgICAgICBzdHlsZTogJ3tmb2N1cy5yaW5nLnN0eWxlfScsXG4gICAgICAgIGNvbG9yOiAne2ZvY3VzLnJpbmcuY29sb3J9JyxcbiAgICAgICAgb2Zmc2V0OiAne2ZvY3VzLnJpbmcub2Zmc2V0fScsXG4gICAgICAgIHNoYWRvdzogJ3tmb2N1cy5yaW5nLnNoYWRvd30nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RvcjogT3JnYW5pemF0aW9uQ2hhcnRUb2tlblNlY3Rpb25zLkNvbm5lY3RvciA9IHtcbiAgICBjb2xvcjogJ3tjb250ZW50LmJvcmRlci5jb2xvcn0nLFxuICAgIGJvcmRlclJhZGl1czogJ3tjb250ZW50LmJvcmRlci5yYWRpdXN9JyxcbiAgICBoZWlnaHQ6ICcyNHB4J1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJvb3QsXG4gICAgbm9kZSxcbiAgICBub2RlVG9nZ2xlQnV0dG9uLFxuICAgIGNvbm5lY3RvclxufSBzYXRpc2ZpZXMgT3JnYW5pemF0aW9uQ2hhcnREZXNpZ25Ub2tlbnM7XG4iXSwibWFwcGluZ3MiOiIiLCJpZ25vcmVMaXN0IjpbXX0=