var o = {
    width: "1.5rem",
    height: "1.5rem",
    background: "{form.field.background}",
    checkedBackground: "{primary.color}",
    checkedHoverBackground: "{primary.hover.color}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    checkedBorderColor: "{primary.color}",
    checkedHoverBorderColor: "{primary.hover.color}",
    checkedFocusBorderColor: "{primary.color}",
    checkedDisabledBorderColor: "{form.field.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    shadow: "{form.field.shadow}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      width: "1.25rem",
      height: "1.25rem"
    },
    lg: {
      width: "1.75rem",
      height: "1.75rem"
    }
  },
  r = {
    size: "1rem",
    checkedColor: "{primary.contrast.color}",
    checkedHoverColor: "{primary.contrast.color}",
    disabledColor: "{form.field.disabled.color}",
    sm: {
      size: "0.75rem"
    },
    lg: {
      size: "1.25rem"
    }
  },
  e = {
    root: o,
    icon: r
  };
export { e as default, r as icon, o as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbGFyYS9yYWRpb2J1dHRvbi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFJhZGlvQnV0dG9uRGVzaWduVG9rZW5zLCBSYWRpb0J1dHRvblRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL3JhZGlvYnV0dG9uJztcblxuZXhwb3J0IGNvbnN0IHJvb3Q6IFJhZGlvQnV0dG9uVG9rZW5TZWN0aW9ucy5Sb290ID0ge1xuICAgIHdpZHRoOiAnMS41cmVtJyxcbiAgICBoZWlnaHQ6ICcxLjVyZW0nLFxuICAgIGJhY2tncm91bmQ6ICd7Zm9ybS5maWVsZC5iYWNrZ3JvdW5kfScsXG4gICAgY2hlY2tlZEJhY2tncm91bmQ6ICd7cHJpbWFyeS5jb2xvcn0nLFxuICAgIGNoZWNrZWRIb3ZlckJhY2tncm91bmQ6ICd7cHJpbWFyeS5ob3Zlci5jb2xvcn0nLFxuICAgIGRpc2FibGVkQmFja2dyb3VuZDogJ3tmb3JtLmZpZWxkLmRpc2FibGVkLmJhY2tncm91bmR9JyxcbiAgICBmaWxsZWRCYWNrZ3JvdW5kOiAne2Zvcm0uZmllbGQuZmlsbGVkLmJhY2tncm91bmR9JyxcbiAgICBib3JkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmJvcmRlci5jb2xvcn0nLFxuICAgIGhvdmVyQm9yZGVyQ29sb3I6ICd7Zm9ybS5maWVsZC5ob3Zlci5ib3JkZXIuY29sb3J9JyxcbiAgICBmb2N1c0JvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuZm9jdXMuYm9yZGVyLmNvbG9yfScsXG4gICAgY2hlY2tlZEJvcmRlckNvbG9yOiAne3ByaW1hcnkuY29sb3J9JyxcbiAgICBjaGVja2VkSG92ZXJCb3JkZXJDb2xvcjogJ3twcmltYXJ5LmhvdmVyLmNvbG9yfScsXG4gICAgY2hlY2tlZEZvY3VzQm9yZGVyQ29sb3I6ICd7cHJpbWFyeS5jb2xvcn0nLFxuICAgIGNoZWNrZWREaXNhYmxlZEJvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuYm9yZGVyLmNvbG9yfScsXG4gICAgaW52YWxpZEJvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuaW52YWxpZC5ib3JkZXIuY29sb3J9JyxcbiAgICBzaGFkb3c6ICd7Zm9ybS5maWVsZC5zaGFkb3d9JyxcbiAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgd2lkdGg6ICd7Zm9ybS5maWVsZC5mb2N1cy5yaW5nLndpZHRofScsXG4gICAgICAgIHN0eWxlOiAne2Zvcm0uZmllbGQuZm9jdXMucmluZy5zdHlsZX0nLFxuICAgICAgICBjb2xvcjogJ3tmb3JtLmZpZWxkLmZvY3VzLnJpbmcuY29sb3J9JyxcbiAgICAgICAgb2Zmc2V0OiAne2Zvcm0uZmllbGQuZm9jdXMucmluZy5vZmZzZXR9JyxcbiAgICAgICAgc2hhZG93OiAne2Zvcm0uZmllbGQuZm9jdXMucmluZy5zaGFkb3d9J1xuICAgIH0sXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAne2Zvcm0uZmllbGQudHJhbnNpdGlvbi5kdXJhdGlvbn0nLFxuICAgIHNtOiB7XG4gICAgICAgIHdpZHRoOiAnMS4yNXJlbScsXG4gICAgICAgIGhlaWdodDogJzEuMjVyZW0nXG4gICAgfSxcbiAgICBsZzoge1xuICAgICAgICB3aWR0aDogJzEuNzVyZW0nLFxuICAgICAgICBoZWlnaHQ6ICcxLjc1cmVtJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpY29uOiBSYWRpb0J1dHRvblRva2VuU2VjdGlvbnMuSWNvbiA9IHtcbiAgICBzaXplOiAnMXJlbScsXG4gICAgY2hlY2tlZENvbG9yOiAne3ByaW1hcnkuY29udHJhc3QuY29sb3J9JyxcbiAgICBjaGVja2VkSG92ZXJDb2xvcjogJ3twcmltYXJ5LmNvbnRyYXN0LmNvbG9yfScsXG4gICAgZGlzYWJsZWRDb2xvcjogJ3tmb3JtLmZpZWxkLmRpc2FibGVkLmNvbG9yfScsXG4gICAgc206IHtcbiAgICAgICAgc2l6ZTogJzAuNzVyZW0nXG4gICAgfSxcbiAgICBsZzoge1xuICAgICAgICBzaXplOiAnMS4yNXJlbSdcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcm9vdCxcbiAgICBpY29uXG59IHNhdGlzZmllcyBSYWRpb0J1dHRvbkRlc2lnblRva2VucztcbiJdLCJtYXBwaW5ncyI6IiIsImlnbm9yZUxpc3QiOltdfQ==