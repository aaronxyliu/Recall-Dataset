var o = {
    padding: "{form.field.padding.y} {form.field.padding.x}",
    borderRadius: "{content.border.radius}",
    gap: "0.5rem"
  },
  r = {
    fontWeight: "700"
  },
  e = {
    size: "1rem"
  },
  d = {
    light: {
      info: {
        background: "{blue.800}",
        borderColor: "{blue.800}",
        color: "{blue.50}",
        shadow: "none"
      },
      success: {
        background: "{green.800}",
        borderColor: "{green.800}",
        color: "{green.50}",
        shadow: "none"
      },
      warn: {
        background: "{yellow.600}",
        borderColor: "{yellow.600}",
        color: "{yellow.50}",
        shadow: "none"
      },
      error: {
        background: "{red.800}",
        borderColor: "{red.800}",
        color: "{red.50}",
        shadow: "none"
      },
      secondary: {
        background: "{surface.200}",
        borderColor: "{surface.200}",
        color: "{surface.700}",
        shadow: "none"
      },
      contrast: {
        background: "{surface.900}",
        borderColor: "{surface.900}",
        color: "{surface.50}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
      }
    },
    dark: {
      info: {
        background: "{blue.200}",
        borderColor: "{blue.200}",
        color: "{blue.950}",
        shadow: "none"
      },
      success: {
        background: "{green.200}",
        borderColor: "{green.200}",
        color: "{green.950}",
        shadow: "none"
      },
      warn: {
        background: "{yellow.200}",
        borderColor: "{yellow.200}",
        color: "{yellow.950}",
        shadow: "none"
      },
      error: {
        background: "{red.200}",
        borderColor: "{red.200}",
        color: "{red.950}",
        shadow: "none"
      },
      secondary: {
        background: "{surface.700}",
        borderColor: "{surface.700}",
        color: "{surface.200}",
        shadow: "none"
      },
      contrast: {
        background: "{surface.0}",
        borderColor: "{surface.0}",
        color: "{surface.950}",
        shadow: "none"
      }
    }
  },
  n = {
    root: o,
    text: r,
    icon: e,
    colorScheme: d
  };
export { d as colorScheme, n as default, e as icon, o as root, r as text };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbm9yYS9pbmxpbmVtZXNzYWdlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgSW5saW5lTWVzc2FnZURlc2lnblRva2VucywgSW5saW5lTWVzc2FnZVRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL2lubGluZW1lc3NhZ2UnO1xuXG5leHBvcnQgY29uc3Qgcm9vdDogSW5saW5lTWVzc2FnZVRva2VuU2VjdGlvbnMuUm9vdCA9IHtcbiAgICBwYWRkaW5nOiAne2Zvcm0uZmllbGQucGFkZGluZy55fSB7Zm9ybS5maWVsZC5wYWRkaW5nLnh9JyxcbiAgICBib3JkZXJSYWRpdXM6ICd7Y29udGVudC5ib3JkZXIucmFkaXVzfScsXG4gICAgZ2FwOiAnMC41cmVtJ1xufTtcblxuZXhwb3J0IGNvbnN0IHRleHQ6IElubGluZU1lc3NhZ2VUb2tlblNlY3Rpb25zLlRleHQgPSB7XG4gICAgZm9udFdlaWdodDogJzcwMCdcbn07XG5cbmV4cG9ydCBjb25zdCBpY29uOiBJbmxpbmVNZXNzYWdlVG9rZW5TZWN0aW9ucy5JY29uID0ge1xuICAgIHNpemU6ICcxcmVtJ1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbG9yU2NoZW1lOiBJbmxpbmVNZXNzYWdlVG9rZW5TZWN0aW9ucy5Db2xvclNjaGVtZSA9IHtcbiAgICBsaWdodDoge1xuICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne2JsdWUuODAwfScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tibHVlLjgwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7Ymx1ZS41MH0nLFxuICAgICAgICAgICAgc2hhZG93OiAnbm9uZSdcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tncmVlbi44MDB9JyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne2dyZWVuLjgwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7Z3JlZW4uNTB9JyxcbiAgICAgICAgICAgIHNoYWRvdzogJ25vbmUnXG4gICAgICAgIH0sXG4gICAgICAgIHdhcm46IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7eWVsbG93LjYwMH0nLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7eWVsbG93LjYwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7eWVsbG93LjUwfScsXG4gICAgICAgICAgICBzaGFkb3c6ICdub25lJ1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tyZWQuODAwfScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tyZWQuODAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tyZWQuNTB9JyxcbiAgICAgICAgICAgIHNoYWRvdzogJ25vbmUnXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjIwMH0nLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c3VyZmFjZS4yMDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuNzAwfScsXG4gICAgICAgICAgICBzaGFkb3c6ICdub25lJ1xuICAgICAgICB9LFxuICAgICAgICBjb250cmFzdDoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjkwMH0nLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c3VyZmFjZS45MDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuNTB9JyxcbiAgICAgICAgICAgIHNoYWRvdzogJzBweCA0cHggOHB4IDBweCBjb2xvci1taXgoaW4gc3JnYiwge3N1cmZhY2UuOTUwfSwgdHJhbnNwYXJlbnQgOTYlKSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGFyazoge1xuICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne2JsdWUuMjAwfScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tibHVlLjIwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7Ymx1ZS45NTB9JyxcbiAgICAgICAgICAgIHNoYWRvdzogJ25vbmUnXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7Z3JlZW4uMjAwfScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tncmVlbi4yMDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne2dyZWVuLjk1MH0nLFxuICAgICAgICAgICAgc2hhZG93OiAnbm9uZSdcbiAgICAgICAgfSxcbiAgICAgICAgd2Fybjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3t5ZWxsb3cuMjAwfScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3t5ZWxsb3cuMjAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3t5ZWxsb3cuOTUwfScsXG4gICAgICAgICAgICBzaGFkb3c6ICdub25lJ1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tyZWQuMjAwfScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tyZWQuMjAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tyZWQuOTUwfScsXG4gICAgICAgICAgICBzaGFkb3c6ICdub25lJ1xuICAgICAgICB9LFxuICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7c3VyZmFjZS43MDB9JyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3N1cmZhY2UuNzAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjIwMH0nLFxuICAgICAgICAgICAgc2hhZG93OiAnbm9uZSdcbiAgICAgICAgfSxcbiAgICAgICAgY29udHJhc3Q6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7c3VyZmFjZS4wfScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tzdXJmYWNlLjB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuOTUwfScsXG4gICAgICAgICAgICBzaGFkb3c6ICdub25lJ1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJvb3QsXG4gICAgdGV4dCxcbiAgICBpY29uLFxuICAgIGNvbG9yU2NoZW1lXG59IHNhdGlzZmllcyBJbmxpbmVNZXNzYWdlRGVzaWduVG9rZW5zO1xuIl0sIm1hcHBpbmdzIjoiIiwiaWdub3JlTGlzdCI6W119