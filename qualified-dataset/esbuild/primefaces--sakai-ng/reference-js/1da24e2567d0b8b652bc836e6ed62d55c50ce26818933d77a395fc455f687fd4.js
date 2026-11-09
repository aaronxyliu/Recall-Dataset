var o = {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}"
  },
  r = {
    borderRadius: "{border.radius.sm}"
  },
  d = {
    light: {
      chip: {
        focusBackground: "{surface.200}",
        color: "{surface.800}"
      }
    },
    dark: {
      chip: {
        focusBackground: "{surface.700}",
        color: "{surface.0}"
      }
    }
  },
  f = {
    root: o,
    chip: r,
    colorScheme: d
  };
export { r as chip, d as colorScheme, f as default, o as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvYXVyYS9pbnB1dGNoaXBzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgSW5wdXRDaGlwc0Rlc2lnblRva2VucywgSW5wdXRDaGlwc1Rva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL2lucHV0Y2hpcHMnO1xuXG5leHBvcnQgY29uc3Qgcm9vdDogSW5wdXRDaGlwc1Rva2VuU2VjdGlvbnMuUm9vdCA9IHtcbiAgICBiYWNrZ3JvdW5kOiAne2Zvcm0uZmllbGQuYmFja2dyb3VuZH0nLFxuICAgIGRpc2FibGVkQmFja2dyb3VuZDogJ3tmb3JtLmZpZWxkLmRpc2FibGVkLmJhY2tncm91bmR9JyxcbiAgICBmaWxsZWRCYWNrZ3JvdW5kOiAne2Zvcm0uZmllbGQuZmlsbGVkLmJhY2tncm91bmR9JyxcbiAgICBmaWxsZWRGb2N1c0JhY2tncm91bmQ6ICd7Zm9ybS5maWVsZC5maWxsZWQuZm9jdXMuYmFja2dyb3VuZH0nLFxuICAgIGJvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuYm9yZGVyLmNvbG9yfScsXG4gICAgaG92ZXJCb3JkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmhvdmVyLmJvcmRlci5jb2xvcn0nLFxuICAgIGZvY3VzQm9yZGVyQ29sb3I6ICd7Zm9ybS5maWVsZC5mb2N1cy5ib3JkZXIuY29sb3J9JyxcbiAgICBpbnZhbGlkQm9yZGVyQ29sb3I6ICd7Zm9ybS5maWVsZC5pbnZhbGlkLmJvcmRlci5jb2xvcn0nLFxuICAgIGNvbG9yOiAne2Zvcm0uZmllbGQuY29sb3J9JyxcbiAgICBkaXNhYmxlZENvbG9yOiAne2Zvcm0uZmllbGQuZGlzYWJsZWQuY29sb3J9JyxcbiAgICBwbGFjZWhvbGRlckNvbG9yOiAne2Zvcm0uZmllbGQucGxhY2Vob2xkZXIuY29sb3J9JyxcbiAgICBzaGFkb3c6ICd7Zm9ybS5maWVsZC5zaGFkb3d9JyxcbiAgICBwYWRkaW5nWDogJ3tmb3JtLmZpZWxkLnBhZGRpbmcueH0nLFxuICAgIHBhZGRpbmdZOiAne2Zvcm0uZmllbGQucGFkZGluZy55fScsXG4gICAgYm9yZGVyUmFkaXVzOiAne2Zvcm0uZmllbGQuYm9yZGVyLnJhZGl1c30nLFxuICAgIGZvY3VzUmluZzoge1xuICAgICAgICB3aWR0aDogJ3tmb3JtLmZpZWxkLmZvY3VzLnJpbmcud2lkdGh9JyxcbiAgICAgICAgc3R5bGU6ICd7Zm9ybS5maWVsZC5mb2N1cy5yaW5nLnN0eWxlfScsXG4gICAgICAgIGNvbG9yOiAne2Zvcm0uZmllbGQuZm9jdXMucmluZy5jb2xvcn0nLFxuICAgICAgICBvZmZzZXQ6ICd7Zm9ybS5maWVsZC5mb2N1cy5yaW5nLm9mZnNldH0nLFxuICAgICAgICBzaGFkb3c6ICd7Zm9ybS5maWVsZC5mb2N1cy5yaW5nLnNoYWRvd30nXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246ICd7Zm9ybS5maWVsZC50cmFuc2l0aW9uLmR1cmF0aW9ufSdcbn07XG5cbmV4cG9ydCBjb25zdCBjaGlwOiBJbnB1dENoaXBzVG9rZW5TZWN0aW9ucy5DaGlwID0ge1xuICAgIGJvcmRlclJhZGl1czogJ3tib3JkZXIucmFkaXVzLnNtfSdcbn07XG5cbmV4cG9ydCBjb25zdCBjb2xvclNjaGVtZTogSW5wdXRDaGlwc1Rva2VuU2VjdGlvbnMuQ29sb3JTY2hlbWUgPSB7XG4gICAgbGlnaHQ6IHtcbiAgICAgICAgY2hpcDoge1xuICAgICAgICAgICAgZm9jdXNCYWNrZ3JvdW5kOiAne3N1cmZhY2UuMjAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjgwMH0nXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhcms6IHtcbiAgICAgICAgY2hpcDoge1xuICAgICAgICAgICAgZm9jdXNCYWNrZ3JvdW5kOiAne3N1cmZhY2UuNzAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjB9J1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJvb3QsXG4gICAgY2hpcCxcbiAgICBjb2xvclNjaGVtZVxufSBzYXRpc2ZpZXMgSW5wdXRDaGlwc0Rlc2lnblRva2VucztcbiJdLCJtYXBwaW5ncyI6IiIsImlnbm9yZUxpc3QiOltdfQ==