var o = {
    width: "1.25rem",
    height: "1.25rem",
    background: "{form.field.background}",
    checkedBackground: "{form.field.background}",
    checkedHoverBackground: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    checkedBorderColor: "{form.field.border.color}",
    checkedHoverBorderColor: "{form.field.hover.border.color}",
    checkedFocusBorderColor: "{form.field.focus.border.color}",
    checkedDisabledBorderColor: "{form.field.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    shadow: "{form.field.shadow}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      width: "1rem",
      height: "1rem"
    },
    lg: {
      width: "1.5rem",
      height: "1.5rem"
    }
  },
  r = {
    size: "0.75rem",
    checkedColor: "{primary.color}",
    checkedHoverColor: "{primary.color}",
    disabledColor: "{form.field.disabled.color}",
    sm: {
      size: "0.5rem"
    },
    lg: {
      size: "1rem"
    }
  },
  e = {
    root: o,
    icon: r
  };
export { e as default, r as icon, o as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbm9yYS9yYWRpb2J1dHRvbi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFJhZGlvQnV0dG9uRGVzaWduVG9rZW5zLCBSYWRpb0J1dHRvblRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL3JhZGlvYnV0dG9uJztcblxuZXhwb3J0IGNvbnN0IHJvb3Q6IFJhZGlvQnV0dG9uVG9rZW5TZWN0aW9ucy5Sb290ID0ge1xuICAgIHdpZHRoOiAnMS4yNXJlbScsXG4gICAgaGVpZ2h0OiAnMS4yNXJlbScsXG4gICAgYmFja2dyb3VuZDogJ3tmb3JtLmZpZWxkLmJhY2tncm91bmR9JyxcbiAgICBjaGVja2VkQmFja2dyb3VuZDogJ3tmb3JtLmZpZWxkLmJhY2tncm91bmR9JyxcbiAgICBjaGVja2VkSG92ZXJCYWNrZ3JvdW5kOiAne2Zvcm0uZmllbGQuYmFja2dyb3VuZH0nLFxuICAgIGRpc2FibGVkQmFja2dyb3VuZDogJ3tmb3JtLmZpZWxkLmRpc2FibGVkLmJhY2tncm91bmR9JyxcbiAgICBmaWxsZWRCYWNrZ3JvdW5kOiAne2Zvcm0uZmllbGQuZmlsbGVkLmJhY2tncm91bmR9JyxcbiAgICBib3JkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmJvcmRlci5jb2xvcn0nLFxuICAgIGhvdmVyQm9yZGVyQ29sb3I6ICd7Zm9ybS5maWVsZC5ob3Zlci5ib3JkZXIuY29sb3J9JyxcbiAgICBmb2N1c0JvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuZm9jdXMuYm9yZGVyLmNvbG9yfScsXG4gICAgY2hlY2tlZEJvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuYm9yZGVyLmNvbG9yfScsXG4gICAgY2hlY2tlZEhvdmVyQm9yZGVyQ29sb3I6ICd7Zm9ybS5maWVsZC5ob3Zlci5ib3JkZXIuY29sb3J9JyxcbiAgICBjaGVja2VkRm9jdXNCb3JkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmZvY3VzLmJvcmRlci5jb2xvcn0nLFxuICAgIGNoZWNrZWREaXNhYmxlZEJvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuYm9yZGVyLmNvbG9yfScsXG4gICAgaW52YWxpZEJvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuaW52YWxpZC5ib3JkZXIuY29sb3J9JyxcbiAgICBzaGFkb3c6ICd7Zm9ybS5maWVsZC5zaGFkb3d9JyxcbiAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgd2lkdGg6ICd7Zm9jdXMucmluZy53aWR0aH0nLFxuICAgICAgICBzdHlsZTogJ3tmb2N1cy5yaW5nLnN0eWxlfScsXG4gICAgICAgIGNvbG9yOiAne2ZvY3VzLnJpbmcuY29sb3J9JyxcbiAgICAgICAgb2Zmc2V0OiAne2ZvY3VzLnJpbmcub2Zmc2V0fScsXG4gICAgICAgIHNoYWRvdzogJ3tmb2N1cy5yaW5nLnNoYWRvd30nXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246ICd7Zm9ybS5maWVsZC50cmFuc2l0aW9uLmR1cmF0aW9ufScsXG4gICAgc206IHtcbiAgICAgICAgd2lkdGg6ICcxcmVtJyxcbiAgICAgICAgaGVpZ2h0OiAnMXJlbSdcbiAgICB9LFxuICAgIGxnOiB7XG4gICAgICAgIHdpZHRoOiAnMS41cmVtJyxcbiAgICAgICAgaGVpZ2h0OiAnMS41cmVtJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpY29uOiBSYWRpb0J1dHRvblRva2VuU2VjdGlvbnMuSWNvbiA9IHtcbiAgICBzaXplOiAnMC43NXJlbScsXG4gICAgY2hlY2tlZENvbG9yOiAne3ByaW1hcnkuY29sb3J9JyxcbiAgICBjaGVja2VkSG92ZXJDb2xvcjogJ3twcmltYXJ5LmNvbG9yfScsXG4gICAgZGlzYWJsZWRDb2xvcjogJ3tmb3JtLmZpZWxkLmRpc2FibGVkLmNvbG9yfScsXG4gICAgc206IHtcbiAgICAgICAgc2l6ZTogJzAuNXJlbSdcbiAgICB9LFxuICAgIGxnOiB7XG4gICAgICAgIHNpemU6ICcxcmVtJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByb290LFxuICAgIGljb25cbn0gc2F0aXNmaWVzIFJhZGlvQnV0dG9uRGVzaWduVG9rZW5zO1xuIl0sIm1hcHBpbmdzIjoiIiwiaWdub3JlTGlzdCI6W119