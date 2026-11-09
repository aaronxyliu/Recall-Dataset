var o = {
    background: "{content.background}",
    color: "{content.color}",
    padding: "1rem",
    gap: "2px",
    indent: "1rem",
    transitionDuration: "{transition.duration}"
  },
  r = {
    padding: "0.25rem 0.5rem",
    borderRadius: "{content.border.radius}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    color: "{text.color}",
    hoverColor: "{text.hover.color}",
    selectedColor: "{highlight.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    },
    gap: "0.25rem"
  },
  e = {
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    selectedColor: "{highlight.color}"
  },
  t = {
    borderRadius: "50%",
    size: "1.75rem",
    hoverBackground: "{content.hover.background}",
    selectedHoverBackground: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    selectedHoverColor: "{primary.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  n = {
    size: "2rem"
  },
  c = {
    margin: "0 0 0.5rem 0"
  },
  css = "\n    .p-tree-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n",
  d = {
    root: o,
    node: r,
    nodeIcon: e,
    nodeToggleButton: t,
    loadingIcon: n,
    filter: c,
    css: css
  };
export { css, d as default, c as filter, n as loadingIcon, r as node, e as nodeIcon, t as nodeToggleButton, o as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvYXVyYS90cmVlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgVHJlZURlc2lnblRva2VucywgVHJlZVRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL3RyZWUnO1xuXG5leHBvcnQgY29uc3Qgcm9vdDogVHJlZVRva2VuU2VjdGlvbnMuUm9vdCA9IHtcbiAgICBiYWNrZ3JvdW5kOiAne2NvbnRlbnQuYmFja2dyb3VuZH0nLFxuICAgIGNvbG9yOiAne2NvbnRlbnQuY29sb3J9JyxcbiAgICBwYWRkaW5nOiAnMXJlbScsXG4gICAgZ2FwOiAnMnB4JyxcbiAgICBpbmRlbnQ6ICcxcmVtJyxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246ICd7dHJhbnNpdGlvbi5kdXJhdGlvbn0nXG59O1xuXG5leHBvcnQgY29uc3Qgbm9kZTogVHJlZVRva2VuU2VjdGlvbnMuTm9kZSA9IHtcbiAgICBwYWRkaW5nOiAnMC4yNXJlbSAwLjVyZW0nLFxuICAgIGJvcmRlclJhZGl1czogJ3tjb250ZW50LmJvcmRlci5yYWRpdXN9JyxcbiAgICBob3ZlckJhY2tncm91bmQ6ICd7Y29udGVudC5ob3Zlci5iYWNrZ3JvdW5kfScsXG4gICAgc2VsZWN0ZWRCYWNrZ3JvdW5kOiAne2hpZ2hsaWdodC5iYWNrZ3JvdW5kfScsXG4gICAgY29sb3I6ICd7dGV4dC5jb2xvcn0nLFxuICAgIGhvdmVyQ29sb3I6ICd7dGV4dC5ob3Zlci5jb2xvcn0nLFxuICAgIHNlbGVjdGVkQ29sb3I6ICd7aGlnaGxpZ2h0LmNvbG9yfScsXG4gICAgZm9jdXNSaW5nOiB7XG4gICAgICAgIHdpZHRoOiAne2ZvY3VzLnJpbmcud2lkdGh9JyxcbiAgICAgICAgc3R5bGU6ICd7Zm9jdXMucmluZy5zdHlsZX0nLFxuICAgICAgICBjb2xvcjogJ3tmb2N1cy5yaW5nLmNvbG9yfScsXG4gICAgICAgIG9mZnNldDogJy0xcHgnLFxuICAgICAgICBzaGFkb3c6ICd7Zm9jdXMucmluZy5zaGFkb3d9J1xuICAgIH0sXG4gICAgZ2FwOiAnMC4yNXJlbSdcbn07XG5cbmV4cG9ydCBjb25zdCBub2RlSWNvbjogVHJlZVRva2VuU2VjdGlvbnMuTm9kZUljb24gPSB7XG4gICAgY29sb3I6ICd7dGV4dC5tdXRlZC5jb2xvcn0nLFxuICAgIGhvdmVyQ29sb3I6ICd7dGV4dC5ob3Zlci5tdXRlZC5jb2xvcn0nLFxuICAgIHNlbGVjdGVkQ29sb3I6ICd7aGlnaGxpZ2h0LmNvbG9yfSdcbn07XG5cbmV4cG9ydCBjb25zdCBub2RlVG9nZ2xlQnV0dG9uOiBUcmVlVG9rZW5TZWN0aW9ucy5Ob2RlVG9nZ2xlQnV0dG9uID0ge1xuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgc2l6ZTogJzEuNzVyZW0nLFxuICAgIGhvdmVyQmFja2dyb3VuZDogJ3tjb250ZW50LmhvdmVyLmJhY2tncm91bmR9JyxcbiAgICBzZWxlY3RlZEhvdmVyQmFja2dyb3VuZDogJ3tjb250ZW50LmJhY2tncm91bmR9JyxcbiAgICBjb2xvcjogJ3t0ZXh0Lm11dGVkLmNvbG9yfScsXG4gICAgaG92ZXJDb2xvcjogJ3t0ZXh0LmhvdmVyLm11dGVkLmNvbG9yfScsXG4gICAgc2VsZWN0ZWRIb3ZlckNvbG9yOiAne3ByaW1hcnkuY29sb3J9JyxcbiAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgd2lkdGg6ICd7Zm9jdXMucmluZy53aWR0aH0nLFxuICAgICAgICBzdHlsZTogJ3tmb2N1cy5yaW5nLnN0eWxlfScsXG4gICAgICAgIGNvbG9yOiAne2ZvY3VzLnJpbmcuY29sb3J9JyxcbiAgICAgICAgb2Zmc2V0OiAne2ZvY3VzLnJpbmcub2Zmc2V0fScsXG4gICAgICAgIHNoYWRvdzogJ3tmb2N1cy5yaW5nLnNoYWRvd30nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJY29uOiBUcmVlVG9rZW5TZWN0aW9ucy5Mb2FkaW5nSWNvbiA9IHtcbiAgICBzaXplOiAnMnJlbSdcbn07XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXI6IFRyZWVUb2tlblNlY3Rpb25zLkZpbHRlciA9IHtcbiAgICBtYXJnaW46ICcwIDAgMC41cmVtIDAnXG59O1xuXG5leHBvcnQgY29uc3QgY3NzOiBUcmVlVG9rZW5TZWN0aW9ucy5DU1MgPSAvKmNzcyovIGBcbiAgICAucC10cmVlLW1hc2sucC1vdmVybGF5LW1hc2sge1xuICAgICAgICAtLXB4LW1hc2stYmFja2dyb3VuZDogbGlnaHQtZGFyayhyZ2JhKDI1NSwyNTUsMjU1LDAuNSkscmdiYSgwLDAsMCwwLjMpKTtcbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcm9vdCxcbiAgICBub2RlLFxuICAgIG5vZGVJY29uLFxuICAgIG5vZGVUb2dnbGVCdXR0b24sXG4gICAgbG9hZGluZ0ljb24sXG4gICAgZmlsdGVyLFxuICAgIGNzc1xufSBzYXRpc2ZpZXMgVHJlZURlc2lnblRva2VucztcbiJdLCJtYXBwaW5ncyI6IiIsImlnbm9yZUxpc3QiOltdfQ==