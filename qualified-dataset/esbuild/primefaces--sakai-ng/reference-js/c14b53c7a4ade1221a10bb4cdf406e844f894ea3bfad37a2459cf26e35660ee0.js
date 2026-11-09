var o = {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    padding: "0.75rem 1.125rem 1.125rem 1.125rem",
    transitionDuration: "{transition.duration}"
  },
  r = {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    borderRadius: "{content.border.radius}",
    borderWidth: "1px",
    borderColor: "{content.border.color}",
    padding: "0.5rem 0.75rem",
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
  n = {
    root: o,
    legend: r,
    toggleIcon: e,
    content: t
  };
export { t as content, n as default, r as legend, o as root, e as toggleIcon };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbm9yYS9maWVsZHNldC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZpZWxkc2V0RGVzaWduVG9rZW5zLCBGaWVsZHNldFRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL2ZpZWxkc2V0JztcblxuZXhwb3J0IGNvbnN0IHJvb3Q6IEZpZWxkc2V0VG9rZW5TZWN0aW9ucy5Sb290ID0ge1xuICAgIGJhY2tncm91bmQ6ICd7Y29udGVudC5iYWNrZ3JvdW5kfScsXG4gICAgYm9yZGVyQ29sb3I6ICd7Y29udGVudC5ib3JkZXIuY29sb3J9JyxcbiAgICBib3JkZXJSYWRpdXM6ICd7Y29udGVudC5ib3JkZXIucmFkaXVzfScsXG4gICAgY29sb3I6ICd7Y29udGVudC5jb2xvcn0nLFxuICAgIHBhZGRpbmc6ICcwLjc1cmVtIDEuMTI1cmVtIDEuMTI1cmVtIDEuMTI1cmVtJyxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246ICd7dHJhbnNpdGlvbi5kdXJhdGlvbn0nXG59O1xuXG5leHBvcnQgY29uc3QgbGVnZW5kOiBGaWVsZHNldFRva2VuU2VjdGlvbnMuTGVnZW5kID0ge1xuICAgIGJhY2tncm91bmQ6ICd7Y29udGVudC5iYWNrZ3JvdW5kfScsXG4gICAgaG92ZXJCYWNrZ3JvdW5kOiAne2NvbnRlbnQuaG92ZXIuYmFja2dyb3VuZH0nLFxuICAgIGNvbG9yOiAne2NvbnRlbnQuY29sb3J9JyxcbiAgICBob3ZlckNvbG9yOiAne2NvbnRlbnQuaG92ZXIuY29sb3J9JyxcbiAgICBib3JkZXJSYWRpdXM6ICd7Y29udGVudC5ib3JkZXIucmFkaXVzfScsXG4gICAgYm9yZGVyV2lkdGg6ICcxcHgnLFxuICAgIGJvcmRlckNvbG9yOiAne2NvbnRlbnQuYm9yZGVyLmNvbG9yfScsXG4gICAgcGFkZGluZzogJzAuNXJlbSAwLjc1cmVtJyxcbiAgICBnYXA6ICcwLjVyZW0nLFxuICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxuICAgIGZvY3VzUmluZzoge1xuICAgICAgICB3aWR0aDogJ3tmb2N1cy5yaW5nLndpZHRofScsXG4gICAgICAgIHN0eWxlOiAne2ZvY3VzLnJpbmcuc3R5bGV9JyxcbiAgICAgICAgY29sb3I6ICd7Zm9jdXMucmluZy5jb2xvcn0nLFxuICAgICAgICBvZmZzZXQ6ICd7Zm9jdXMucmluZy5vZmZzZXR9JyxcbiAgICAgICAgc2hhZG93OiAne2ZvY3VzLnJpbmcuc2hhZG93fSdcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlSWNvbjogRmllbGRzZXRUb2tlblNlY3Rpb25zLlRvZ2dsZUljb24gPSB7XG4gICAgY29sb3I6ICd7dGV4dC5tdXRlZC5jb2xvcn0nLFxuICAgIGhvdmVyQ29sb3I6ICd7dGV4dC5ob3Zlci5tdXRlZC5jb2xvcn0nXG59O1xuXG5leHBvcnQgY29uc3QgY29udGVudDogRmllbGRzZXRUb2tlblNlY3Rpb25zLkNvbnRlbnQgPSB7XG4gICAgcGFkZGluZzogJzAnXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcm9vdCxcbiAgICBsZWdlbmQsXG4gICAgdG9nZ2xlSWNvbixcbiAgICBjb250ZW50XG59IHNhdGlzZmllcyBGaWVsZHNldERlc2lnblRva2VucztcbiJdLCJtYXBwaW5ncyI6IiIsImlnbm9yZUxpc3QiOltdfQ==