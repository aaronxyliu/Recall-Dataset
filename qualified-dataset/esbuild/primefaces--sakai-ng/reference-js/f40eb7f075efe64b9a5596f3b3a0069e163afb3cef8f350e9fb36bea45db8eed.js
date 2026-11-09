var o = {
    transitionDuration: "{transition.duration}"
  },
  r = {
    borderColor: "{treetable.border.color}",
    borderWidth: "1px 0 1px 0",
    padding: "0.75rem 1rem"
  },
  e = {
    selectedBackground: "{highlight.background}",
    borderColor: "{treetable.border.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{highlight.color}",
    gap: "0.5rem",
    padding: "0.75rem 1rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "inset {focus.ring.shadow}"
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
    hoverColor: "{sr.hover.color}",
    selectedColor: "{highlight.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "inset {focus.ring.shadow}"
    }
  },
  l = {
    borderColor: "{treetable.border.color}",
    padding: "0.75rem 1rem",
    gap: "0.5rem"
  },
  d = {
    borderColor: "{treetable.border.color}",
    padding: "0.75rem 1rem"
  },
  n = {
    fontWeight: "700"
  },
  a = {
    borderColor: "{treetable.border.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem"
  },
  i = {
    width: "0.5rem"
  },
  s = {
    width: "1px",
    color: "{primary.color}"
  },
  g = {
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
  f = {
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0"
  },
  b = {
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0"
  },
  m = {
    light: {
      root: {
        borderColor: "{content.border.color}"
      },
      header: {
        background: "{surface.50}",
        color: "{text.color}"
      },
      headerCell: {
        background: "{surface.50}",
        hoverBackground: "{surface.100}",
        color: "{text.color}"
      },
      footer: {
        background: "{surface.50}",
        color: "{text.color}"
      },
      footerCell: {
        background: "{surface.50}",
        color: "{text.color}"
      },
      bodyCell: {
        selectedBorderColor: "{primary.100}"
      }
    },
    dark: {
      root: {
        borderColor: "{surface.800}"
      },
      header: {
        background: "{surface.800}",
        color: "{text.color}"
      },
      headerCell: {
        background: "{surface.800}",
        hoverBackground: "{surface.700}",
        color: "{text.color}"
      },
      footer: {
        background: "{surface.800}",
        color: "{text.color}"
      },
      footerCell: {
        background: "{surface.800}",
        color: "{text.color}"
      },
      bodyCell: {
        selectedBorderColor: "{primary.900}"
      }
    }
  },
  C = {
    root: o,
    header: r,
    headerCell: e,
    columnTitle: t,
    row: c,
    bodyCell: l,
    footerCell: d,
    columnFooter: n,
    footer: a,
    columnResizer: i,
    resizeIndicator: s,
    sortIcon: g,
    loadingIcon: u,
    nodeToggleButton: h,
    paginatorTop: f,
    paginatorBottom: b,
    colorScheme: m
  };
export { l as bodyCell, m as colorScheme, n as columnFooter, i as columnResizer, t as columnTitle, C as default, a as footer, d as footerCell, r as header, e as headerCell, u as loadingIcon, h as nodeToggleButton, b as paginatorBottom, f as paginatorTop, s as resizeIndicator, o as root, c as row, g as sortIcon };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbGFyYS90cmVldGFibGUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBUcmVlVGFibGVEZXNpZ25Ub2tlbnMsIFRyZWVUYWJsZVRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL3RyZWV0YWJsZSc7XG5cbmV4cG9ydCBjb25zdCByb290OiBUcmVlVGFibGVUb2tlblNlY3Rpb25zLlJvb3QgPSB7XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAne3RyYW5zaXRpb24uZHVyYXRpb259J1xufTtcblxuZXhwb3J0IGNvbnN0IGhlYWRlcjogVHJlZVRhYmxlVG9rZW5TZWN0aW9ucy5IZWFkZXIgPSB7XG4gICAgYm9yZGVyQ29sb3I6ICd7dHJlZXRhYmxlLmJvcmRlci5jb2xvcn0nLFxuICAgIGJvcmRlcldpZHRoOiAnMXB4IDAgMXB4IDAnLFxuICAgIHBhZGRpbmc6ICcwLjc1cmVtIDFyZW0nXG59O1xuXG5leHBvcnQgY29uc3QgaGVhZGVyQ2VsbDogVHJlZVRhYmxlVG9rZW5TZWN0aW9ucy5IZWFkZXJDZWxsID0ge1xuICAgIHNlbGVjdGVkQmFja2dyb3VuZDogJ3toaWdobGlnaHQuYmFja2dyb3VuZH0nLFxuICAgIGJvcmRlckNvbG9yOiAne3RyZWV0YWJsZS5ib3JkZXIuY29sb3J9JyxcbiAgICBob3ZlckNvbG9yOiAne2NvbnRlbnQuaG92ZXIuY29sb3J9JyxcbiAgICBzZWxlY3RlZENvbG9yOiAne2hpZ2hsaWdodC5jb2xvcn0nLFxuICAgIGdhcDogJzAuNXJlbScsXG4gICAgcGFkZGluZzogJzAuNzVyZW0gMXJlbScsXG4gICAgZm9jdXNSaW5nOiB7XG4gICAgICAgIHdpZHRoOiAne2ZvY3VzLnJpbmcud2lkdGh9JyxcbiAgICAgICAgc3R5bGU6ICd7Zm9jdXMucmluZy5zdHlsZX0nLFxuICAgICAgICBjb2xvcjogJ3tmb2N1cy5yaW5nLmNvbG9yfScsXG4gICAgICAgIG9mZnNldDogJ3tmb2N1cy5yaW5nLm9mZnNldH0nLFxuICAgICAgICBzaGFkb3c6ICdpbnNldCB7Zm9jdXMucmluZy5zaGFkb3d9J1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjb2x1bW5UaXRsZTogVHJlZVRhYmxlVG9rZW5TZWN0aW9ucy5Db2x1bW5UaXRsZSA9IHtcbiAgICBmb250V2VpZ2h0OiAnNzAwJ1xufTtcblxuZXhwb3J0IGNvbnN0IHJvdzogVHJlZVRhYmxlVG9rZW5TZWN0aW9ucy5Sb3cgPSB7XG4gICAgYmFja2dyb3VuZDogJ3tjb250ZW50LmJhY2tncm91bmR9JyxcbiAgICBob3ZlckJhY2tncm91bmQ6ICd7Y29udGVudC5ob3Zlci5iYWNrZ3JvdW5kfScsXG4gICAgc2VsZWN0ZWRCYWNrZ3JvdW5kOiAne2hpZ2hsaWdodC5iYWNrZ3JvdW5kfScsXG4gICAgY29sb3I6ICd7Y29udGVudC5jb2xvcn0nLFxuICAgIGhvdmVyQ29sb3I6ICd7c3IuaG92ZXIuY29sb3J9JyxcbiAgICBzZWxlY3RlZENvbG9yOiAne2hpZ2hsaWdodC5jb2xvcn0nLFxuICAgIGZvY3VzUmluZzoge1xuICAgICAgICB3aWR0aDogJ3tmb2N1cy5yaW5nLndpZHRofScsXG4gICAgICAgIHN0eWxlOiAne2ZvY3VzLnJpbmcuc3R5bGV9JyxcbiAgICAgICAgY29sb3I6ICd7Zm9jdXMucmluZy5jb2xvcn0nLFxuICAgICAgICBvZmZzZXQ6ICd7Zm9jdXMucmluZy5vZmZzZXR9JyxcbiAgICAgICAgc2hhZG93OiAnaW5zZXQge2ZvY3VzLnJpbmcuc2hhZG93fSdcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgYm9keUNlbGw6IFRyZWVUYWJsZVRva2VuU2VjdGlvbnMuQm9keUNlbGwgPSB7XG4gICAgYm9yZGVyQ29sb3I6ICd7dHJlZXRhYmxlLmJvcmRlci5jb2xvcn0nLFxuICAgIHBhZGRpbmc6ICcwLjc1cmVtIDFyZW0nLFxuICAgIGdhcDogJzAuNXJlbSdcbn07XG5cbmV4cG9ydCBjb25zdCBmb290ZXJDZWxsOiBUcmVlVGFibGVUb2tlblNlY3Rpb25zLkZvb3RlckNlbGwgPSB7XG4gICAgYm9yZGVyQ29sb3I6ICd7dHJlZXRhYmxlLmJvcmRlci5jb2xvcn0nLFxuICAgIHBhZGRpbmc6ICcwLjc1cmVtIDFyZW0nXG59O1xuXG5leHBvcnQgY29uc3QgY29sdW1uRm9vdGVyOiBUcmVlVGFibGVUb2tlblNlY3Rpb25zLkNvbHVtbkZvb3RlciA9IHtcbiAgICBmb250V2VpZ2h0OiAnNzAwJ1xufTtcblxuZXhwb3J0IGNvbnN0IGZvb3RlcjogVHJlZVRhYmxlVG9rZW5TZWN0aW9ucy5Gb290ZXIgPSB7XG4gICAgYm9yZGVyQ29sb3I6ICd7dHJlZXRhYmxlLmJvcmRlci5jb2xvcn0nLFxuICAgIGJvcmRlcldpZHRoOiAnMCAwIDFweCAwJyxcbiAgICBwYWRkaW5nOiAnMC43NXJlbSAxcmVtJ1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbHVtblJlc2l6ZXI6IFRyZWVUYWJsZVRva2VuU2VjdGlvbnMuQ29sdW1uUmVzaXplciA9IHtcbiAgICB3aWR0aDogJzAuNXJlbSdcbn07XG5cbmV4cG9ydCBjb25zdCByZXNpemVJbmRpY2F0b3I6IFRyZWVUYWJsZVRva2VuU2VjdGlvbnMuUmVzaXplSW5kaWNhdG9yID0ge1xuICAgIHdpZHRoOiAnMXB4JyxcbiAgICBjb2xvcjogJ3twcmltYXJ5LmNvbG9yfSdcbn07XG5cbmV4cG9ydCBjb25zdCBzb3J0SWNvbjogVHJlZVRhYmxlVG9rZW5TZWN0aW9ucy5Tb3J0SWNvbiA9IHtcbiAgICBjb2xvcjogJ3t0ZXh0Lm11dGVkLmNvbG9yfScsXG4gICAgaG92ZXJDb2xvcjogJ3t0ZXh0LmhvdmVyLm11dGVkLmNvbG9yfScsXG4gICAgc2l6ZTogJzAuODc1cmVtJ1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJY29uOiBUcmVlVGFibGVUb2tlblNlY3Rpb25zLkxvYWRpbmdJY29uID0ge1xuICAgIHNpemU6ICcycmVtJ1xufTtcblxuZXhwb3J0IGNvbnN0IG5vZGVUb2dnbGVCdXR0b246IFRyZWVUYWJsZVRva2VuU2VjdGlvbnMuTm9kZVRvZ2dsZUJ1dHRvbiA9IHtcbiAgICBob3ZlckJhY2tncm91bmQ6ICd7Y29udGVudC5ob3Zlci5iYWNrZ3JvdW5kfScsXG4gICAgc2VsZWN0ZWRIb3ZlckJhY2tncm91bmQ6ICd7Y29udGVudC5iYWNrZ3JvdW5kfScsXG4gICAgY29sb3I6ICd7dGV4dC5tdXRlZC5jb2xvcn0nLFxuICAgIGhvdmVyQ29sb3I6ICd7dGV4dC5jb2xvcn0nLFxuICAgIHNlbGVjdGVkSG92ZXJDb2xvcjogJ3twcmltYXJ5LmNvbG9yfScsXG4gICAgc2l6ZTogJzEuNzVyZW0nLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgZm9jdXNSaW5nOiB7XG4gICAgICAgIHdpZHRoOiAne2ZvY3VzLnJpbmcud2lkdGh9JyxcbiAgICAgICAgc3R5bGU6ICd7Zm9jdXMucmluZy5zdHlsZX0nLFxuICAgICAgICBjb2xvcjogJ3tmb2N1cy5yaW5nLmNvbG9yfScsXG4gICAgICAgIG9mZnNldDogJ3tmb2N1cy5yaW5nLm9mZnNldH0nLFxuICAgICAgICBzaGFkb3c6ICd7Zm9jdXMucmluZy5zaGFkb3d9J1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBwYWdpbmF0b3JUb3A6IFRyZWVUYWJsZVRva2VuU2VjdGlvbnMuUGFnaW5hdG9yVG9wID0ge1xuICAgIGJvcmRlckNvbG9yOiAne2NvbnRlbnQuYm9yZGVyLmNvbG9yfScsXG4gICAgYm9yZGVyV2lkdGg6ICcwIDAgMXB4IDAnXG59O1xuXG5leHBvcnQgY29uc3QgcGFnaW5hdG9yQm90dG9tOiBUcmVlVGFibGVUb2tlblNlY3Rpb25zLlBhZ2luYXRvckJvdHRvbSA9IHtcbiAgICBib3JkZXJDb2xvcjogJ3tjb250ZW50LmJvcmRlci5jb2xvcn0nLFxuICAgIGJvcmRlcldpZHRoOiAnMCAwIDFweCAwJ1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbG9yU2NoZW1lOiBUcmVlVGFibGVUb2tlblNlY3Rpb25zLkNvbG9yU2NoZW1lID0ge1xuICAgIGxpZ2h0OiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne2NvbnRlbnQuYm9yZGVyLmNvbG9yfSdcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuNTB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3RleHQuY29sb3J9J1xuICAgICAgICB9LFxuICAgICAgICBoZWFkZXJDZWxsOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuNTB9JyxcbiAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tzdXJmYWNlLjEwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7dGV4dC5jb2xvcn0nXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjUwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3t0ZXh0LmNvbG9yfSdcbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyQ2VsbDoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjUwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3t0ZXh0LmNvbG9yfSdcbiAgICAgICAgfSxcbiAgICAgICAgYm9keUNlbGw6IHtcbiAgICAgICAgICAgIHNlbGVjdGVkQm9yZGVyQ29sb3I6ICd7cHJpbWFyeS4xMDB9J1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXJrOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3N1cmZhY2UuODAwfSdcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuODAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3t0ZXh0LmNvbG9yfSdcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyQ2VsbDoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjgwMH0nLFxuICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3N1cmZhY2UuNzAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3t0ZXh0LmNvbG9yfSdcbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuODAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3t0ZXh0LmNvbG9yfSdcbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyQ2VsbDoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjgwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7dGV4dC5jb2xvcn0nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHlDZWxsOiB7XG4gICAgICAgICAgICBzZWxlY3RlZEJvcmRlckNvbG9yOiAne3ByaW1hcnkuOTAwfSdcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByb290LFxuICAgIGhlYWRlcixcbiAgICBoZWFkZXJDZWxsLFxuICAgIGNvbHVtblRpdGxlLFxuICAgIHJvdyxcbiAgICBib2R5Q2VsbCxcbiAgICBmb290ZXJDZWxsLFxuICAgIGNvbHVtbkZvb3RlcixcbiAgICBmb290ZXIsXG4gICAgY29sdW1uUmVzaXplcixcbiAgICByZXNpemVJbmRpY2F0b3IsXG4gICAgc29ydEljb24sXG4gICAgbG9hZGluZ0ljb24sXG4gICAgbm9kZVRvZ2dsZUJ1dHRvbixcbiAgICBwYWdpbmF0b3JUb3AsXG4gICAgcGFnaW5hdG9yQm90dG9tLFxuICAgIGNvbG9yU2NoZW1lXG59IHNhdGlzZmllcyBUcmVlVGFibGVEZXNpZ25Ub2tlbnM7XG4iXSwibWFwcGluZ3MiOiIiLCJpZ25vcmVMaXN0IjpbXX0=