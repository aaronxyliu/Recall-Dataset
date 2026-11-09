var o = {
    width: "1.25rem",
    height: "1.25rem",
    background: "{form.field.background}",
    checkedBackground: "{primary.color}",
    checkedHoverBackground: "{primary.hover.color}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.border.color}",
    checkedBorderColor: "{primary.color}",
    checkedHoverBorderColor: "{primary.hover.color}",
    checkedFocusBorderColor: "{primary.color}",
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
    checkedColor: "{primary.contrast.color}",
    checkedHoverColor: "{primary.contrast.color}",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvYXVyYS9yYWRpb2J1dHRvbi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFJhZGlvQnV0dG9uRGVzaWduVG9rZW5zLCBSYWRpb0J1dHRvblRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL3JhZGlvYnV0dG9uJztcblxuZXhwb3J0IGNvbnN0IHJvb3Q6IFJhZGlvQnV0dG9uVG9rZW5TZWN0aW9ucy5Sb290ID0ge1xuICAgIHdpZHRoOiAnMS4yNXJlbScsXG4gICAgaGVpZ2h0OiAnMS4yNXJlbScsXG4gICAgYmFja2dyb3VuZDogJ3tmb3JtLmZpZWxkLmJhY2tncm91bmR9JyxcbiAgICBjaGVja2VkQmFja2dyb3VuZDogJ3twcmltYXJ5LmNvbG9yfScsXG4gICAgY2hlY2tlZEhvdmVyQmFja2dyb3VuZDogJ3twcmltYXJ5LmhvdmVyLmNvbG9yfScsXG4gICAgZGlzYWJsZWRCYWNrZ3JvdW5kOiAne2Zvcm0uZmllbGQuZGlzYWJsZWQuYmFja2dyb3VuZH0nLFxuICAgIGZpbGxlZEJhY2tncm91bmQ6ICd7Zm9ybS5maWVsZC5maWxsZWQuYmFja2dyb3VuZH0nLFxuICAgIGJvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuYm9yZGVyLmNvbG9yfScsXG4gICAgaG92ZXJCb3JkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmhvdmVyLmJvcmRlci5jb2xvcn0nLFxuICAgIGZvY3VzQm9yZGVyQ29sb3I6ICd7Zm9ybS5maWVsZC5ib3JkZXIuY29sb3J9JyxcbiAgICBjaGVja2VkQm9yZGVyQ29sb3I6ICd7cHJpbWFyeS5jb2xvcn0nLFxuICAgIGNoZWNrZWRIb3ZlckJvcmRlckNvbG9yOiAne3ByaW1hcnkuaG92ZXIuY29sb3J9JyxcbiAgICBjaGVja2VkRm9jdXNCb3JkZXJDb2xvcjogJ3twcmltYXJ5LmNvbG9yfScsXG4gICAgY2hlY2tlZERpc2FibGVkQm9yZGVyQ29sb3I6ICd7Zm9ybS5maWVsZC5ib3JkZXIuY29sb3J9JyxcbiAgICBpbnZhbGlkQm9yZGVyQ29sb3I6ICd7Zm9ybS5maWVsZC5pbnZhbGlkLmJvcmRlci5jb2xvcn0nLFxuICAgIHNoYWRvdzogJ3tmb3JtLmZpZWxkLnNoYWRvd30nLFxuICAgIGZvY3VzUmluZzoge1xuICAgICAgICB3aWR0aDogJ3tmb2N1cy5yaW5nLndpZHRofScsXG4gICAgICAgIHN0eWxlOiAne2ZvY3VzLnJpbmcuc3R5bGV9JyxcbiAgICAgICAgY29sb3I6ICd7Zm9jdXMucmluZy5jb2xvcn0nLFxuICAgICAgICBvZmZzZXQ6ICd7Zm9jdXMucmluZy5vZmZzZXR9JyxcbiAgICAgICAgc2hhZG93OiAne2ZvY3VzLnJpbmcuc2hhZG93fSdcbiAgICB9LFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJ3tmb3JtLmZpZWxkLnRyYW5zaXRpb24uZHVyYXRpb259JyxcbiAgICBzbToge1xuICAgICAgICB3aWR0aDogJzFyZW0nLFxuICAgICAgICBoZWlnaHQ6ICcxcmVtJ1xuICAgIH0sXG4gICAgbGc6IHtcbiAgICAgICAgd2lkdGg6ICcxLjVyZW0nLFxuICAgICAgICBoZWlnaHQ6ICcxLjVyZW0nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGljb246IFJhZGlvQnV0dG9uVG9rZW5TZWN0aW9ucy5JY29uID0ge1xuICAgIHNpemU6ICcwLjc1cmVtJyxcbiAgICBjaGVja2VkQ29sb3I6ICd7cHJpbWFyeS5jb250cmFzdC5jb2xvcn0nLFxuICAgIGNoZWNrZWRIb3ZlckNvbG9yOiAne3ByaW1hcnkuY29udHJhc3QuY29sb3J9JyxcbiAgICBkaXNhYmxlZENvbG9yOiAne2Zvcm0uZmllbGQuZGlzYWJsZWQuY29sb3J9JyxcbiAgICBzbToge1xuICAgICAgICBzaXplOiAnMC41cmVtJ1xuICAgIH0sXG4gICAgbGc6IHtcbiAgICAgICAgc2l6ZTogJzFyZW0nXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJvb3QsXG4gICAgaWNvblxufSBzYXRpc2ZpZXMgUmFkaW9CdXR0b25EZXNpZ25Ub2tlbnM7XG4iXSwibWFwcGluZ3MiOiIiLCJpZ25vcmVMaXN0IjpbXX0=