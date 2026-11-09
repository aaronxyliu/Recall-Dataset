var r = {
    padding: "{form.field.padding.y} {form.field.padding.x}",
    borderRadius: "{content.border.radius}",
    gap: "0.5rem"
  },
  o = {
    fontWeight: "500"
  },
  n = {
    size: "1.125rem"
  },
  e = {
    light: {
      info: {
        background: "color-mix(in srgb, {blue.50}, transparent 5%)",
        borderColor: "color-mix(in srgb, {blue.50}, transparent 5%)",
        color: "{blue.600}",
        shadow: "none"
      },
      success: {
        background: "color-mix(in srgb, {green.50}, transparent 5%)",
        borderColor: "color-mix(in srgb, {green.50}, transparent 5%)",
        color: "{green.600}",
        shadow: "none"
      },
      warn: {
        background: "color-mix(in srgb,{yellow.50}, transparent 5%)",
        borderColor: "color-mix(in srgb,{yellow.50}, transparent 5%)",
        color: "{yellow.600}",
        shadow: "none"
      },
      error: {
        background: "color-mix(in srgb, {red.50}, transparent 5%)",
        borderColor: "color-mix(in srgb, {red.50}, transparent 5%)",
        color: "{red.600}",
        shadow: "none"
      },
      secondary: {
        background: "{surface.100}",
        borderColor: "{surface.100}",
        color: "{surface.600}",
        shadow: "none"
      },
      contrast: {
        background: "{surface.900}",
        borderColor: "{surface.900}",
        color: "{surface.50}",
        shadow: "none"
      }
    },
    dark: {
      info: {
        background: "color-mix(in srgb, {blue.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {blue.500}, transparent 84%)",
        color: "{blue.500}",
        shadow: "none"
      },
      success: {
        background: "color-mix(in srgb, {green.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {green.500}, transparent 84%)",
        color: "{green.500}",
        shadow: "none"
      },
      warn: {
        background: "color-mix(in srgb, {yellow.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {yellow.500}, transparent 84%)",
        color: "{yellow.500}",
        shadow: "none"
      },
      error: {
        background: "color-mix(in srgb, {red.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {red.500}, transparent 84%)",
        color: "{red.500}",
        shadow: "none"
      },
      secondary: {
        background: "{surface.800}",
        borderColor: "{surface.800}",
        color: "{surface.300}",
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
  a = {
    root: r,
    text: o,
    icon: n,
    colorScheme: e
  };
export { e as colorScheme, a as default, n as icon, r as root, o as text };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbGFyYS9pbmxpbmVtZXNzYWdlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgSW5saW5lTWVzc2FnZURlc2lnblRva2VucywgSW5saW5lTWVzc2FnZVRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL2lubGluZW1lc3NhZ2UnO1xuXG5leHBvcnQgY29uc3Qgcm9vdDogSW5saW5lTWVzc2FnZVRva2VuU2VjdGlvbnMuUm9vdCA9IHtcbiAgICBwYWRkaW5nOiAne2Zvcm0uZmllbGQucGFkZGluZy55fSB7Zm9ybS5maWVsZC5wYWRkaW5nLnh9JyxcbiAgICBib3JkZXJSYWRpdXM6ICd7Y29udGVudC5ib3JkZXIucmFkaXVzfScsXG4gICAgZ2FwOiAnMC41cmVtJ1xufTtcblxuZXhwb3J0IGNvbnN0IHRleHQ6IElubGluZU1lc3NhZ2VUb2tlblNlY3Rpb25zLlRleHQgPSB7XG4gICAgZm9udFdlaWdodDogJzUwMCdcbn07XG5cbmV4cG9ydCBjb25zdCBpY29uOiBJbmxpbmVNZXNzYWdlVG9rZW5TZWN0aW9ucy5JY29uID0ge1xuICAgIHNpemU6ICcxLjEyNXJlbSdcbn07XG5cbmV4cG9ydCBjb25zdCBjb2xvclNjaGVtZTogSW5saW5lTWVzc2FnZVRva2VuU2VjdGlvbnMuQ29sb3JTY2hlbWUgPSB7XG4gICAgbGlnaHQ6IHtcbiAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ2NvbG9yLW1peChpbiBzcmdiLCB7Ymx1ZS41MH0sIHRyYW5zcGFyZW50IDUlKScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ2NvbG9yLW1peChpbiBzcmdiLCB7Ymx1ZS41MH0sIHRyYW5zcGFyZW50IDUlKScsXG4gICAgICAgICAgICBjb2xvcjogJ3tibHVlLjYwMH0nLFxuICAgICAgICAgICAgc2hhZG93OiAnbm9uZSdcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ2NvbG9yLW1peChpbiBzcmdiLCB7Z3JlZW4uNTB9LCB0cmFuc3BhcmVudCA1JSknLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdjb2xvci1taXgoaW4gc3JnYiwge2dyZWVuLjUwfSwgdHJhbnNwYXJlbnQgNSUpJyxcbiAgICAgICAgICAgIGNvbG9yOiAne2dyZWVuLjYwMH0nLFxuICAgICAgICAgICAgc2hhZG93OiAnbm9uZSdcbiAgICAgICAgfSxcbiAgICAgICAgd2Fybjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ2NvbG9yLW1peChpbiBzcmdiLHt5ZWxsb3cuNTB9LCB0cmFuc3BhcmVudCA1JSknLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdjb2xvci1taXgoaW4gc3JnYix7eWVsbG93LjUwfSwgdHJhbnNwYXJlbnQgNSUpJyxcbiAgICAgICAgICAgIGNvbG9yOiAne3llbGxvdy42MDB9JyxcbiAgICAgICAgICAgIHNoYWRvdzogJ25vbmUnXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnY29sb3ItbWl4KGluIHNyZ2IsIHtyZWQuNTB9LCB0cmFuc3BhcmVudCA1JSknLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdjb2xvci1taXgoaW4gc3JnYiwge3JlZC41MH0sIHRyYW5zcGFyZW50IDUlKScsXG4gICAgICAgICAgICBjb2xvcjogJ3tyZWQuNjAwfScsXG4gICAgICAgICAgICBzaGFkb3c6ICdub25lJ1xuICAgICAgICB9LFxuICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7c3VyZmFjZS4xMDB9JyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3N1cmZhY2UuMTAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjYwMH0nLFxuICAgICAgICAgICAgc2hhZG93OiAnbm9uZSdcbiAgICAgICAgfSxcbiAgICAgICAgY29udHJhc3Q6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7c3VyZmFjZS45MDB9JyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3N1cmZhY2UuOTAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjUwfScsXG4gICAgICAgICAgICBzaGFkb3c6ICdub25lJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXJrOiB7XG4gICAgICAgIGluZm86IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdjb2xvci1taXgoaW4gc3JnYiwge2JsdWUuNTAwfSwgdHJhbnNwYXJlbnQgODQlKScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ2NvbG9yLW1peChpbiBzcmdiLCB7Ymx1ZS41MDB9LCB0cmFuc3BhcmVudCA4NCUpJyxcbiAgICAgICAgICAgIGNvbG9yOiAne2JsdWUuNTAwfScsXG4gICAgICAgICAgICBzaGFkb3c6ICdub25lJ1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnY29sb3ItbWl4KGluIHNyZ2IsIHtncmVlbi41MDB9LCB0cmFuc3BhcmVudCA4NCUpJyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnY29sb3ItbWl4KGluIHNyZ2IsIHtncmVlbi41MDB9LCB0cmFuc3BhcmVudCA4NCUpJyxcbiAgICAgICAgICAgIGNvbG9yOiAne2dyZWVuLjUwMH0nLFxuICAgICAgICAgICAgc2hhZG93OiAnbm9uZSdcbiAgICAgICAgfSxcbiAgICAgICAgd2Fybjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ2NvbG9yLW1peChpbiBzcmdiLCB7eWVsbG93LjUwMH0sIHRyYW5zcGFyZW50IDg0JSknLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdjb2xvci1taXgoaW4gc3JnYiwge3llbGxvdy41MDB9LCB0cmFuc3BhcmVudCA4NCUpJyxcbiAgICAgICAgICAgIGNvbG9yOiAne3llbGxvdy41MDB9JyxcbiAgICAgICAgICAgIHNoYWRvdzogJ25vbmUnXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnY29sb3ItbWl4KGluIHNyZ2IsIHtyZWQuNTAwfSwgdHJhbnNwYXJlbnQgODQlKScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ2NvbG9yLW1peChpbiBzcmdiLCB7cmVkLjUwMH0sIHRyYW5zcGFyZW50IDg0JSknLFxuICAgICAgICAgICAgY29sb3I6ICd7cmVkLjUwMH0nLFxuICAgICAgICAgICAgc2hhZG93OiAnbm9uZSdcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuODAwfScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tzdXJmYWNlLjgwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS4zMDB9JyxcbiAgICAgICAgICAgIHNoYWRvdzogJ25vbmUnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRyYXN0OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuMH0nLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c3VyZmFjZS4wfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjk1MH0nLFxuICAgICAgICAgICAgc2hhZG93OiAnbm9uZSdcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByb290LFxuICAgIHRleHQsXG4gICAgaWNvbixcbiAgICBjb2xvclNjaGVtZVxufSBzYXRpc2ZpZXMgSW5saW5lTWVzc2FnZURlc2lnblRva2VucztcbiJdLCJtYXBwaW5ncyI6IiIsImlnbm9yZUxpc3QiOltdfQ==