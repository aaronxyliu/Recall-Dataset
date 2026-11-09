var o = {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    padding: "0.75rem 1.125rem 1.125rem 1.125rem",
    transitionDuration: "{transition.duration}"
  },
  r = {
    borderRadius: "{content.border.radius}",
    borderWidth: "1px",
    borderColor: "{content.border.color}",
    padding: "0.625rem 0.875rem",
    gap: "0.5rem",
    fontWeight: "700",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  e = {
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}"
  },
  t = {
    padding: "0"
  },
  c = {
    light: {
      legend: {
        background: "{surface.50}",
        hoverBackground: "{surface.100}",
        color: "{text.color}",
        hoverColor: "{text.hover.color}"
      }
    },
    dark: {
      legend: {
        background: "{surface.800}",
        hoverBackground: "{surface.700}",
        color: "{text.color}",
        hoverColor: "{text.hover.color}"
      }
    }
  },
  n = {
    root: o,
    legend: r,
    toggleIcon: e,
    content: t,
    colorScheme: c
  };
export { c as colorScheme, t as content, n as default, r as legend, o as root, e as toggleIcon };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbGFyYS9maWVsZHNldC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZpZWxkc2V0RGVzaWduVG9rZW5zLCBGaWVsZHNldFRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL2ZpZWxkc2V0JztcblxuZXhwb3J0IGNvbnN0IHJvb3Q6IEZpZWxkc2V0VG9rZW5TZWN0aW9ucy5Sb290ID0ge1xuICAgIGJhY2tncm91bmQ6ICd7Y29udGVudC5iYWNrZ3JvdW5kfScsXG4gICAgYm9yZGVyQ29sb3I6ICd7Y29udGVudC5ib3JkZXIuY29sb3J9JyxcbiAgICBib3JkZXJSYWRpdXM6ICd7Y29udGVudC5ib3JkZXIucmFkaXVzfScsXG4gICAgY29sb3I6ICd7Y29udGVudC5jb2xvcn0nLFxuICAgIHBhZGRpbmc6ICcwLjc1cmVtIDEuMTI1cmVtIDEuMTI1cmVtIDEuMTI1cmVtJyxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246ICd7dHJhbnNpdGlvbi5kdXJhdGlvbn0nXG59O1xuXG5leHBvcnQgY29uc3QgbGVnZW5kOiBGaWVsZHNldFRva2VuU2VjdGlvbnMuTGVnZW5kID0ge1xuICAgIGJvcmRlclJhZGl1czogJ3tjb250ZW50LmJvcmRlci5yYWRpdXN9JyxcbiAgICBib3JkZXJXaWR0aDogJzFweCcsXG4gICAgYm9yZGVyQ29sb3I6ICd7Y29udGVudC5ib3JkZXIuY29sb3J9JyxcbiAgICBwYWRkaW5nOiAnMC42MjVyZW0gMC44NzVyZW0nLFxuICAgIGdhcDogJzAuNXJlbScsXG4gICAgZm9udFdlaWdodDogJzcwMCcsXG4gICAgZm9jdXNSaW5nOiB7XG4gICAgICAgIHdpZHRoOiAne2ZvY3VzLnJpbmcud2lkdGh9JyxcbiAgICAgICAgc3R5bGU6ICd7Zm9jdXMucmluZy5zdHlsZX0nLFxuICAgICAgICBjb2xvcjogJ3tmb2N1cy5yaW5nLmNvbG9yfScsXG4gICAgICAgIG9mZnNldDogJ3tmb2N1cy5yaW5nLm9mZnNldH0nLFxuICAgICAgICBzaGFkb3c6ICd7Zm9jdXMucmluZy5zaGFkb3d9J1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVJY29uOiBGaWVsZHNldFRva2VuU2VjdGlvbnMuVG9nZ2xlSWNvbiA9IHtcbiAgICBjb2xvcjogJ3t0ZXh0Lm11dGVkLmNvbG9yfScsXG4gICAgaG92ZXJDb2xvcjogJ3t0ZXh0LmhvdmVyLm11dGVkLmNvbG9yfSdcbn07XG5cbmV4cG9ydCBjb25zdCBjb250ZW50OiBGaWVsZHNldFRva2VuU2VjdGlvbnMuQ29udGVudCA9IHtcbiAgICBwYWRkaW5nOiAnMCdcbn07XG5cbmV4cG9ydCBjb25zdCBjb2xvclNjaGVtZTogRmllbGRzZXRUb2tlblNlY3Rpb25zLkNvbG9yU2NoZW1lID0ge1xuICAgIGxpZ2h0OiB7XG4gICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjUwfScsXG4gICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS4xMDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3RleHQuY29sb3J9JyxcbiAgICAgICAgICAgIGhvdmVyQ29sb3I6ICd7dGV4dC5ob3Zlci5jb2xvcn0nXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhcms6IHtcbiAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuODAwfScsXG4gICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS43MDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3RleHQuY29sb3J9JyxcbiAgICAgICAgICAgIGhvdmVyQ29sb3I6ICd7dGV4dC5ob3Zlci5jb2xvcn0nXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcm9vdCxcbiAgICBsZWdlbmQsXG4gICAgdG9nZ2xlSWNvbixcbiAgICBjb250ZW50LFxuICAgIGNvbG9yU2NoZW1lXG59IHNhdGlzZmllcyBGaWVsZHNldERlc2lnblRva2VucztcbiJdLCJtYXBwaW5ncyI6IiIsImlnbm9yZUxpc3QiOltdfQ==