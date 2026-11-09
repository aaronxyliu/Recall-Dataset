var o = {
    transitionDuration: "{transition.duration}"
  },
  r = {
    background: "{content.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    borderWidth: "1px 0 1px 0",
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
    fontWeight: "700"
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
  d = {
    background: "{content.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    padding: "0.75rem 1rem"
  },
  l = {
    fontWeight: "700"
  },
  i = {
    background: "{content.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem"
  },
  a = {
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
  h = {
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
  b = {
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0"
  },
  f = {
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0"
  },
  m = {
    light: {
      root: {
        borderColor: "{surface.300}"
      },
      bodyCell: {
        selectedBorderColor: "{primary.100}"
      }
    },
    dark: {
      root: {
        borderColor: "{surface.600}"
      },
      bodyCell: {
        selectedBorderColor: "{primary.900}"
      }
    }
  },
  k = {
    root: o,
    header: r,
    headerCell: e,
    columnTitle: t,
    row: c,
    bodyCell: n,
    footerCell: d,
    columnFooter: l,
    footer: i,
    columnResizer: a,
    resizeIndicator: g,
    sortIcon: s,
    loadingIcon: u,
    nodeToggleButton: h,
    paginatorTop: b,
    paginatorBottom: f,
    colorScheme: m
  };
export { n as bodyCell, m as colorScheme, l as columnFooter, a as columnResizer, t as columnTitle, k as default, i as footer, d as footerCell, r as header, e as headerCell, u as loadingIcon, h as nodeToggleButton, f as paginatorBottom, b as paginatorTop, g as resizeIndicator, o as root, c as row, s as sortIcon };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbm9yYS90cmVldGFibGUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBUcmVlVGFibGVEZXNpZ25Ub2tlbnMsIFRyZWVUYWJsZVRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL3RyZWV0YWJsZSc7XG5cbmV4cG9ydCBjb25zdCByb290OiBUcmVlVGFibGVUb2tlblNlY3Rpb25zLlJvb3QgPSB7XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAne3RyYW5zaXRpb24uZHVyYXRpb259J1xufTtcblxuZXhwb3J0IGNvbnN0IGhlYWRlcjogVHJlZVRhYmxlVG9rZW5TZWN0aW9ucy5IZWFkZXIgPSB7XG4gICAgYmFja2dyb3VuZDogJ3tjb250ZW50LmJhY2tncm91bmR9JyxcbiAgICBib3JkZXJDb2xvcjogJ3t0cmVldGFibGUuYm9yZGVyLmNvbG9yfScsXG4gICAgY29sb3I6ICd7Y29udGVudC5jb2xvcn0nLFxuICAgIGJvcmRlcldpZHRoOiAnMXB4IDAgMXB4IDAnLFxuICAgIHBhZGRpbmc6ICcwLjc1cmVtIDFyZW0nXG59O1xuXG5leHBvcnQgY29uc3QgaGVhZGVyQ2VsbDogVHJlZVRhYmxlVG9rZW5TZWN0aW9ucy5IZWFkZXJDZWxsID0ge1xuICAgIGJhY2tncm91bmQ6ICd7Y29udGVudC5iYWNrZ3JvdW5kfScsXG4gICAgaG92ZXJCYWNrZ3JvdW5kOiAne2NvbnRlbnQuaG92ZXIuYmFja2dyb3VuZH0nLFxuICAgIHNlbGVjdGVkQmFja2dyb3VuZDogJ3toaWdobGlnaHQuYmFja2dyb3VuZH0nLFxuICAgIGJvcmRlckNvbG9yOiAne3RyZWV0YWJsZS5ib3JkZXIuY29sb3J9JyxcbiAgICBjb2xvcjogJ3tjb250ZW50LmNvbG9yfScsXG4gICAgaG92ZXJDb2xvcjogJ3tjb250ZW50LmhvdmVyLmNvbG9yfScsXG4gICAgc2VsZWN0ZWRDb2xvcjogJ3toaWdobGlnaHQuY29sb3J9JyxcbiAgICBnYXA6ICcwLjVyZW0nLFxuICAgIHBhZGRpbmc6ICcwLjc1cmVtIDFyZW0nLFxuICAgIGZvY3VzUmluZzoge1xuICAgICAgICB3aWR0aDogJ3tmb2N1cy5yaW5nLndpZHRofScsXG4gICAgICAgIHN0eWxlOiAne2ZvY3VzLnJpbmcuc3R5bGV9JyxcbiAgICAgICAgY29sb3I6ICd7Zm9jdXMucmluZy5jb2xvcn0nLFxuICAgICAgICBvZmZzZXQ6ICctMXB4JyxcbiAgICAgICAgc2hhZG93OiAne2ZvY3VzLnJpbmcuc2hhZG93fSdcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgY29sdW1uVGl0bGU6IFRyZWVUYWJsZVRva2VuU2VjdGlvbnMuQ29sdW1uVGl0bGUgPSB7XG4gICAgZm9udFdlaWdodDogJzcwMCdcbn07XG5cbmV4cG9ydCBjb25zdCByb3c6IFRyZWVUYWJsZVRva2VuU2VjdGlvbnMuUm93ID0ge1xuICAgIGJhY2tncm91bmQ6ICd7Y29udGVudC5iYWNrZ3JvdW5kfScsXG4gICAgaG92ZXJCYWNrZ3JvdW5kOiAne2NvbnRlbnQuaG92ZXIuYmFja2dyb3VuZH0nLFxuICAgIHNlbGVjdGVkQmFja2dyb3VuZDogJ3toaWdobGlnaHQuYmFja2dyb3VuZH0nLFxuICAgIGNvbG9yOiAne2NvbnRlbnQuY29sb3J9JyxcbiAgICBob3ZlckNvbG9yOiAne2NvbnRlbnQuaG92ZXIuY29sb3J9JyxcbiAgICBzZWxlY3RlZENvbG9yOiAne2hpZ2hsaWdodC5jb2xvcn0nLFxuICAgIGZvY3VzUmluZzoge1xuICAgICAgICB3aWR0aDogJ3tmb2N1cy5yaW5nLndpZHRofScsXG4gICAgICAgIHN0eWxlOiAne2ZvY3VzLnJpbmcuc3R5bGV9JyxcbiAgICAgICAgY29sb3I6ICd7Zm9jdXMucmluZy5jb2xvcn0nLFxuICAgICAgICBvZmZzZXQ6ICctMXB4JyxcbiAgICAgICAgc2hhZG93OiAne2ZvY3VzLnJpbmcuc2hhZG93fSdcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgYm9keUNlbGw6IFRyZWVUYWJsZVRva2VuU2VjdGlvbnMuQm9keUNlbGwgPSB7XG4gICAgYm9yZGVyQ29sb3I6ICd7dHJlZXRhYmxlLmJvcmRlci5jb2xvcn0nLFxuICAgIHBhZGRpbmc6ICcwLjc1cmVtIDFyZW0nLFxuICAgIGdhcDogJzAuNXJlbSdcbn07XG5cbmV4cG9ydCBjb25zdCBmb290ZXJDZWxsOiBUcmVlVGFibGVUb2tlblNlY3Rpb25zLkZvb3RlckNlbGwgPSB7XG4gICAgYmFja2dyb3VuZDogJ3tjb250ZW50LmJhY2tncm91bmR9JyxcbiAgICBib3JkZXJDb2xvcjogJ3t0cmVldGFibGUuYm9yZGVyLmNvbG9yfScsXG4gICAgY29sb3I6ICd7Y29udGVudC5jb2xvcn0nLFxuICAgIHBhZGRpbmc6ICcwLjc1cmVtIDFyZW0nXG59O1xuXG5leHBvcnQgY29uc3QgY29sdW1uRm9vdGVyOiBUcmVlVGFibGVUb2tlblNlY3Rpb25zLkNvbHVtbkZvb3RlciA9IHtcbiAgICBmb250V2VpZ2h0OiAnNzAwJ1xufTtcblxuZXhwb3J0IGNvbnN0IGZvb3RlcjogVHJlZVRhYmxlVG9rZW5TZWN0aW9ucy5Gb290ZXIgPSB7XG4gICAgYmFja2dyb3VuZDogJ3tjb250ZW50LmJhY2tncm91bmR9JyxcbiAgICBib3JkZXJDb2xvcjogJ3t0cmVldGFibGUuYm9yZGVyLmNvbG9yfScsXG4gICAgY29sb3I6ICd7Y29udGVudC5jb2xvcn0nLFxuICAgIGJvcmRlcldpZHRoOiAnMCAwIDFweCAwJyxcbiAgICBwYWRkaW5nOiAnMC43NXJlbSAxcmVtJ1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbHVtblJlc2l6ZXI6IFRyZWVUYWJsZVRva2VuU2VjdGlvbnMuQ29sdW1uUmVzaXplciA9IHtcbiAgICB3aWR0aDogJzAuNXJlbSdcbn07XG5cbmV4cG9ydCBjb25zdCByZXNpemVJbmRpY2F0b3I6IFRyZWVUYWJsZVRva2VuU2VjdGlvbnMuUmVzaXplSW5kaWNhdG9yID0ge1xuICAgIHdpZHRoOiAnMXB4JyxcbiAgICBjb2xvcjogJ3twcmltYXJ5LmNvbG9yfSdcbn07XG5cbmV4cG9ydCBjb25zdCBzb3J0SWNvbjogVHJlZVRhYmxlVG9rZW5TZWN0aW9ucy5Tb3J0SWNvbiA9IHtcbiAgICBjb2xvcjogJ3t0ZXh0Lm11dGVkLmNvbG9yfScsXG4gICAgaG92ZXJDb2xvcjogJ3t0ZXh0LmhvdmVyLm11dGVkLmNvbG9yfScsXG4gICAgc2l6ZTogJzAuODc1cmVtJ1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJY29uOiBUcmVlVGFibGVUb2tlblNlY3Rpb25zLkxvYWRpbmdJY29uID0ge1xuICAgIHNpemU6ICcycmVtJ1xufTtcblxuZXhwb3J0IGNvbnN0IG5vZGVUb2dnbGVCdXR0b246IFRyZWVUYWJsZVRva2VuU2VjdGlvbnMuTm9kZVRvZ2dsZUJ1dHRvbiA9IHtcbiAgICBob3ZlckJhY2tncm91bmQ6ICd7Y29udGVudC5ob3Zlci5iYWNrZ3JvdW5kfScsXG4gICAgc2VsZWN0ZWRIb3ZlckJhY2tncm91bmQ6ICd7Y29udGVudC5iYWNrZ3JvdW5kfScsXG4gICAgY29sb3I6ICd7dGV4dC5tdXRlZC5jb2xvcn0nLFxuICAgIGhvdmVyQ29sb3I6ICd7dGV4dC5jb2xvcn0nLFxuICAgIHNlbGVjdGVkSG92ZXJDb2xvcjogJ3twcmltYXJ5LmNvbG9yfScsXG4gICAgc2l6ZTogJzEuNzVyZW0nLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgZm9jdXNSaW5nOiB7XG4gICAgICAgIHdpZHRoOiAne2ZvY3VzLnJpbmcud2lkdGh9JyxcbiAgICAgICAgc3R5bGU6ICd7Zm9jdXMucmluZy5zdHlsZX0nLFxuICAgICAgICBjb2xvcjogJ3tmb2N1cy5yaW5nLmNvbG9yfScsXG4gICAgICAgIG9mZnNldDogJ3tmb2N1cy5yaW5nLm9mZnNldH0nLFxuICAgICAgICBzaGFkb3c6ICd7Zm9jdXMucmluZy5zaGFkb3d9J1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBwYWdpbmF0b3JUb3A6IFRyZWVUYWJsZVRva2VuU2VjdGlvbnMuUGFnaW5hdG9yVG9wID0ge1xuICAgIGJvcmRlckNvbG9yOiAne2NvbnRlbnQuYm9yZGVyLmNvbG9yfScsXG4gICAgYm9yZGVyV2lkdGg6ICcwIDAgMXB4IDAnXG59O1xuXG5leHBvcnQgY29uc3QgcGFnaW5hdG9yQm90dG9tOiBUcmVlVGFibGVUb2tlblNlY3Rpb25zLlBhZ2luYXRvckJvdHRvbSA9IHtcbiAgICBib3JkZXJDb2xvcjogJ3tjb250ZW50LmJvcmRlci5jb2xvcn0nLFxuICAgIGJvcmRlcldpZHRoOiAnMCAwIDFweCAwJ1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbG9yU2NoZW1lOiBUcmVlVGFibGVUb2tlblNlY3Rpb25zLkNvbG9yU2NoZW1lID0ge1xuICAgIGxpZ2h0OiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3N1cmZhY2UuMzAwfSdcbiAgICAgICAgfSxcbiAgICAgICAgYm9keUNlbGw6IHtcbiAgICAgICAgICAgIHNlbGVjdGVkQm9yZGVyQ29sb3I6ICd7cHJpbWFyeS4xMDB9J1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXJrOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3N1cmZhY2UuNjAwfSdcbiAgICAgICAgfSxcbiAgICAgICAgYm9keUNlbGw6IHtcbiAgICAgICAgICAgIHNlbGVjdGVkQm9yZGVyQ29sb3I6ICd7cHJpbWFyeS45MDB9J1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJvb3QsXG4gICAgaGVhZGVyLFxuICAgIGhlYWRlckNlbGwsXG4gICAgY29sdW1uVGl0bGUsXG4gICAgcm93LFxuICAgIGJvZHlDZWxsLFxuICAgIGZvb3RlckNlbGwsXG4gICAgY29sdW1uRm9vdGVyLFxuICAgIGZvb3RlcixcbiAgICBjb2x1bW5SZXNpemVyLFxuICAgIHJlc2l6ZUluZGljYXRvcixcbiAgICBzb3J0SWNvbixcbiAgICBsb2FkaW5nSWNvbixcbiAgICBub2RlVG9nZ2xlQnV0dG9uLFxuICAgIHBhZ2luYXRvclRvcCxcbiAgICBwYWdpbmF0b3JCb3R0b20sXG4gICAgY29sb3JTY2hlbWVcbn0gc2F0aXNmaWVzIFRyZWVUYWJsZURlc2lnblRva2VucztcbiJdLCJtYXBwaW5ncyI6IiIsImlnbm9yZUxpc3QiOltdfQ==