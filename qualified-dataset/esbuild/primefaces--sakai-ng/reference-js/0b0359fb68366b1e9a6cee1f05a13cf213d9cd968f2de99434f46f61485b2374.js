var o = {
    transitionDuration: "{transition.duration}"
  },
  r = {
    background: "{content.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem"
  },
  e = {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{highlight.color}",
    gap: "0.5rem",
    padding: "0.75rem 1rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  t = {
    fontWeight: "600"
  },
  c = {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{highlight.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  n = {
    borderColor: "{treetable.border.color}",
    padding: "0.75rem 1rem",
    gap: "0.5rem"
  },
  l = {
    background: "{content.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    padding: "0.75rem 1rem"
  },
  d = {
    fontWeight: "600"
  },
  a = {
    background: "{content.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem"
  },
  i = {
    width: "0.5rem"
  },
  g = {
    width: "1px",
    color: "{primary.color}"
  },
  s = {
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    size: "0.875rem"
  },
  u = {
    size: "2rem"
  },
  b = {
    hoverBackground: "{content.hover.background}",
    selectedHoverBackground: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    selectedHoverColor: "{primary.color}",
    size: "1.75rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  h = {
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0"
  },
  m = {
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0"
  },
  f = {
    light: {
      root: {
        borderColor: "{content.border.color}"
      },
      bodyCell: {
        selectedBorderColor: "{primary.100}"
      }
    },
    dark: {
      root: {
        borderColor: "{surface.800}"
      },
      bodyCell: {
        selectedBorderColor: "{primary.900}"
      }
    }
  },
  css = "\n    .p-treetable-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n",
  k = {
    root: o,
    header: r,
    headerCell: e,
    columnTitle: t,
    row: c,
    bodyCell: n,
    footerCell: l,
    columnFooter: d,
    footer: a,
    columnResizer: i,
    resizeIndicator: g,
    sortIcon: s,
    loadingIcon: u,
    nodeToggleButton: b,
    paginatorTop: h,
    paginatorBottom: m,
    colorScheme: f,
    css: css
  };
export { n as bodyCell, f as colorScheme, d as columnFooter, i as columnResizer, t as columnTitle, css, k as default, a as footer, l as footerCell, r as header, e as headerCell, u as loadingIcon, b as nodeToggleButton, m as paginatorBottom, h as paginatorTop, g as resizeIndicator, o as root, c as row, s as sortIcon };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvYXVyYS90cmVldGFibGUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBUcmVlVGFibGVEZXNpZ25Ub2tlbnMsIFRyZWVUYWJsZVRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL3RyZWV0YWJsZSc7XG5cbmV4cG9ydCBjb25zdCByb290OiBUcmVlVGFibGVUb2tlblNlY3Rpb25zLlJvb3QgPSB7XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAne3RyYW5zaXRpb24uZHVyYXRpb259J1xufTtcblxuZXhwb3J0IGNvbnN0IGhlYWRlcjogVHJlZVRhYmxlVG9rZW5TZWN0aW9ucy5IZWFkZXIgPSB7XG4gICAgYmFja2dyb3VuZDogJ3tjb250ZW50LmJhY2tncm91bmR9JyxcbiAgICBib3JkZXJDb2xvcjogJ3t0cmVldGFibGUuYm9yZGVyLmNvbG9yfScsXG4gICAgY29sb3I6ICd7Y29udGVudC5jb2xvcn0nLFxuICAgIGJvcmRlcldpZHRoOiAnMCAwIDFweCAwJyxcbiAgICBwYWRkaW5nOiAnMC43NXJlbSAxcmVtJ1xufTtcblxuZXhwb3J0IGNvbnN0IGhlYWRlckNlbGw6IFRyZWVUYWJsZVRva2VuU2VjdGlvbnMuSGVhZGVyQ2VsbCA9IHtcbiAgICBiYWNrZ3JvdW5kOiAne2NvbnRlbnQuYmFja2dyb3VuZH0nLFxuICAgIGhvdmVyQmFja2dyb3VuZDogJ3tjb250ZW50LmhvdmVyLmJhY2tncm91bmR9JyxcbiAgICBzZWxlY3RlZEJhY2tncm91bmQ6ICd7aGlnaGxpZ2h0LmJhY2tncm91bmR9JyxcbiAgICBib3JkZXJDb2xvcjogJ3t0cmVldGFibGUuYm9yZGVyLmNvbG9yfScsXG4gICAgY29sb3I6ICd7Y29udGVudC5jb2xvcn0nLFxuICAgIGhvdmVyQ29sb3I6ICd7Y29udGVudC5ob3Zlci5jb2xvcn0nLFxuICAgIHNlbGVjdGVkQ29sb3I6ICd7aGlnaGxpZ2h0LmNvbG9yfScsXG4gICAgZ2FwOiAnMC41cmVtJyxcbiAgICBwYWRkaW5nOiAnMC43NXJlbSAxcmVtJyxcbiAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgd2lkdGg6ICd7Zm9jdXMucmluZy53aWR0aH0nLFxuICAgICAgICBzdHlsZTogJ3tmb2N1cy5yaW5nLnN0eWxlfScsXG4gICAgICAgIGNvbG9yOiAne2ZvY3VzLnJpbmcuY29sb3J9JyxcbiAgICAgICAgb2Zmc2V0OiAnLTFweCcsXG4gICAgICAgIHNoYWRvdzogJ3tmb2N1cy5yaW5nLnNoYWRvd30nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNvbHVtblRpdGxlOiBUcmVlVGFibGVUb2tlblNlY3Rpb25zLkNvbHVtblRpdGxlID0ge1xuICAgIGZvbnRXZWlnaHQ6ICc2MDAnXG59O1xuXG5leHBvcnQgY29uc3Qgcm93OiBUcmVlVGFibGVUb2tlblNlY3Rpb25zLlJvdyA9IHtcbiAgICBiYWNrZ3JvdW5kOiAne2NvbnRlbnQuYmFja2dyb3VuZH0nLFxuICAgIGhvdmVyQmFja2dyb3VuZDogJ3tjb250ZW50LmhvdmVyLmJhY2tncm91bmR9JyxcbiAgICBzZWxlY3RlZEJhY2tncm91bmQ6ICd7aGlnaGxpZ2h0LmJhY2tncm91bmR9JyxcbiAgICBjb2xvcjogJ3tjb250ZW50LmNvbG9yfScsXG4gICAgaG92ZXJDb2xvcjogJ3tjb250ZW50LmhvdmVyLmNvbG9yfScsXG4gICAgc2VsZWN0ZWRDb2xvcjogJ3toaWdobGlnaHQuY29sb3J9JyxcbiAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgd2lkdGg6ICd7Zm9jdXMucmluZy53aWR0aH0nLFxuICAgICAgICBzdHlsZTogJ3tmb2N1cy5yaW5nLnN0eWxlfScsXG4gICAgICAgIGNvbG9yOiAne2ZvY3VzLnJpbmcuY29sb3J9JyxcbiAgICAgICAgb2Zmc2V0OiAnLTFweCcsXG4gICAgICAgIHNoYWRvdzogJ3tmb2N1cy5yaW5nLnNoYWRvd30nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGJvZHlDZWxsOiBUcmVlVGFibGVUb2tlblNlY3Rpb25zLkJvZHlDZWxsID0ge1xuICAgIGJvcmRlckNvbG9yOiAne3RyZWV0YWJsZS5ib3JkZXIuY29sb3J9JyxcbiAgICBwYWRkaW5nOiAnMC43NXJlbSAxcmVtJyxcbiAgICBnYXA6ICcwLjVyZW0nXG59O1xuXG5leHBvcnQgY29uc3QgZm9vdGVyQ2VsbDogVHJlZVRhYmxlVG9rZW5TZWN0aW9ucy5Gb290ZXJDZWxsID0ge1xuICAgIGJhY2tncm91bmQ6ICd7Y29udGVudC5iYWNrZ3JvdW5kfScsXG4gICAgYm9yZGVyQ29sb3I6ICd7dHJlZXRhYmxlLmJvcmRlci5jb2xvcn0nLFxuICAgIGNvbG9yOiAne2NvbnRlbnQuY29sb3J9JyxcbiAgICBwYWRkaW5nOiAnMC43NXJlbSAxcmVtJ1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbHVtbkZvb3RlcjogVHJlZVRhYmxlVG9rZW5TZWN0aW9ucy5Db2x1bW5Gb290ZXIgPSB7XG4gICAgZm9udFdlaWdodDogJzYwMCdcbn07XG5cbmV4cG9ydCBjb25zdCBmb290ZXI6IFRyZWVUYWJsZVRva2VuU2VjdGlvbnMuRm9vdGVyID0ge1xuICAgIGJhY2tncm91bmQ6ICd7Y29udGVudC5iYWNrZ3JvdW5kfScsXG4gICAgYm9yZGVyQ29sb3I6ICd7dHJlZXRhYmxlLmJvcmRlci5jb2xvcn0nLFxuICAgIGNvbG9yOiAne2NvbnRlbnQuY29sb3J9JyxcbiAgICBib3JkZXJXaWR0aDogJzAgMCAxcHggMCcsXG4gICAgcGFkZGluZzogJzAuNzVyZW0gMXJlbSdcbn07XG5cbmV4cG9ydCBjb25zdCBjb2x1bW5SZXNpemVyOiBUcmVlVGFibGVUb2tlblNlY3Rpb25zLkNvbHVtblJlc2l6ZXIgPSB7XG4gICAgd2lkdGg6ICcwLjVyZW0nXG59O1xuXG5leHBvcnQgY29uc3QgcmVzaXplSW5kaWNhdG9yOiBUcmVlVGFibGVUb2tlblNlY3Rpb25zLlJlc2l6ZUluZGljYXRvciA9IHtcbiAgICB3aWR0aDogJzFweCcsXG4gICAgY29sb3I6ICd7cHJpbWFyeS5jb2xvcn0nXG59O1xuXG5leHBvcnQgY29uc3Qgc29ydEljb246IFRyZWVUYWJsZVRva2VuU2VjdGlvbnMuU29ydEljb24gPSB7XG4gICAgY29sb3I6ICd7dGV4dC5tdXRlZC5jb2xvcn0nLFxuICAgIGhvdmVyQ29sb3I6ICd7dGV4dC5ob3Zlci5tdXRlZC5jb2xvcn0nLFxuICAgIHNpemU6ICcwLjg3NXJlbSdcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSWNvbjogVHJlZVRhYmxlVG9rZW5TZWN0aW9ucy5Mb2FkaW5nSWNvbiA9IHtcbiAgICBzaXplOiAnMnJlbSdcbn07XG5cbmV4cG9ydCBjb25zdCBub2RlVG9nZ2xlQnV0dG9uOiBUcmVlVGFibGVUb2tlblNlY3Rpb25zLk5vZGVUb2dnbGVCdXR0b24gPSB7XG4gICAgaG92ZXJCYWNrZ3JvdW5kOiAne2NvbnRlbnQuaG92ZXIuYmFja2dyb3VuZH0nLFxuICAgIHNlbGVjdGVkSG92ZXJCYWNrZ3JvdW5kOiAne2NvbnRlbnQuYmFja2dyb3VuZH0nLFxuICAgIGNvbG9yOiAne3RleHQubXV0ZWQuY29sb3J9JyxcbiAgICBob3ZlckNvbG9yOiAne3RleHQuY29sb3J9JyxcbiAgICBzZWxlY3RlZEhvdmVyQ29sb3I6ICd7cHJpbWFyeS5jb2xvcn0nLFxuICAgIHNpemU6ICcxLjc1cmVtJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIGZvY3VzUmluZzoge1xuICAgICAgICB3aWR0aDogJ3tmb2N1cy5yaW5nLndpZHRofScsXG4gICAgICAgIHN0eWxlOiAne2ZvY3VzLnJpbmcuc3R5bGV9JyxcbiAgICAgICAgY29sb3I6ICd7Zm9jdXMucmluZy5jb2xvcn0nLFxuICAgICAgICBvZmZzZXQ6ICd7Zm9jdXMucmluZy5vZmZzZXR9JyxcbiAgICAgICAgc2hhZG93OiAne2ZvY3VzLnJpbmcuc2hhZG93fSdcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgcGFnaW5hdG9yVG9wOiBUcmVlVGFibGVUb2tlblNlY3Rpb25zLlBhZ2luYXRvclRvcCA9IHtcbiAgICBib3JkZXJDb2xvcjogJ3tjb250ZW50LmJvcmRlci5jb2xvcn0nLFxuICAgIGJvcmRlcldpZHRoOiAnMCAwIDFweCAwJ1xufTtcblxuZXhwb3J0IGNvbnN0IHBhZ2luYXRvckJvdHRvbTogVHJlZVRhYmxlVG9rZW5TZWN0aW9ucy5QYWdpbmF0b3JCb3R0b20gPSB7XG4gICAgYm9yZGVyQ29sb3I6ICd7Y29udGVudC5ib3JkZXIuY29sb3J9JyxcbiAgICBib3JkZXJXaWR0aDogJzAgMCAxcHggMCdcbn07XG5cbmV4cG9ydCBjb25zdCBjb2xvclNjaGVtZTogVHJlZVRhYmxlVG9rZW5TZWN0aW9ucy5Db2xvclNjaGVtZSA9IHtcbiAgICBsaWdodDoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tjb250ZW50LmJvcmRlci5jb2xvcn0nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHlDZWxsOiB7XG4gICAgICAgICAgICBzZWxlY3RlZEJvcmRlckNvbG9yOiAne3ByaW1hcnkuMTAwfSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGFyazoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tzdXJmYWNlLjgwMH0nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHlDZWxsOiB7XG4gICAgICAgICAgICBzZWxlY3RlZEJvcmRlckNvbG9yOiAne3ByaW1hcnkuOTAwfSdcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjc3M6IFRyZWVUYWJsZVRva2VuU2VjdGlvbnMuQ1NTID0gLypjc3MqLyBgXG4gICAgLnAtdHJlZXRhYmxlLW1hc2sucC1vdmVybGF5LW1hc2sge1xuICAgICAgICAtLXB4LW1hc2stYmFja2dyb3VuZDogbGlnaHQtZGFyayhyZ2JhKDI1NSwyNTUsMjU1LDAuNSkscmdiYSgwLDAsMCwwLjMpKTtcbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcm9vdCxcbiAgICBoZWFkZXIsXG4gICAgaGVhZGVyQ2VsbCxcbiAgICBjb2x1bW5UaXRsZSxcbiAgICByb3csXG4gICAgYm9keUNlbGwsXG4gICAgZm9vdGVyQ2VsbCxcbiAgICBjb2x1bW5Gb290ZXIsXG4gICAgZm9vdGVyLFxuICAgIGNvbHVtblJlc2l6ZXIsXG4gICAgcmVzaXplSW5kaWNhdG9yLFxuICAgIHNvcnRJY29uLFxuICAgIGxvYWRpbmdJY29uLFxuICAgIG5vZGVUb2dnbGVCdXR0b24sXG4gICAgcGFnaW5hdG9yVG9wLFxuICAgIHBhZ2luYXRvckJvdHRvbSxcbiAgICBjb2xvclNjaGVtZSxcbiAgICBjc3Ncbn0gc2F0aXNmaWVzIFRyZWVUYWJsZURlc2lnblRva2VucztcbiJdLCJtYXBwaW5ncyI6IiIsImlnbm9yZUxpc3QiOltdfQ==