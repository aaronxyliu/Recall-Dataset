var r = {
    padding: "{form.field.padding.y} {form.field.padding.x}",
    borderRadius: "{content.border.radius}",
    gap: "0.5rem"
  },
  o = {
    fontWeight: "500"
  },
  e = {
    size: "1rem"
  },
  n = {
    light: {
      info: {
        background: "color-mix(in srgb, {blue.50}, transparent 5%)",
        borderColor: "{blue.200}",
        color: "{blue.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
      },
      success: {
        background: "color-mix(in srgb, {green.50}, transparent 5%)",
        borderColor: "{green.200}",
        color: "{green.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
      },
      warn: {
        background: "color-mix(in srgb,{yellow.50}, transparent 5%)",
        borderColor: "{yellow.200}",
        color: "{yellow.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
      },
      error: {
        background: "color-mix(in srgb, {red.50}, transparent 5%)",
        borderColor: "{red.200}",
        color: "{red.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
      },
      secondary: {
        background: "{surface.100}",
        borderColor: "{surface.200}",
        color: "{surface.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
      },
      contrast: {
        background: "{surface.900}",
        borderColor: "{surface.950}",
        color: "{surface.50}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
      }
    },
    dark: {
      info: {
        background: "color-mix(in srgb, {blue.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
        color: "{blue.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
      },
      success: {
        background: "color-mix(in srgb, {green.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {green.700}, transparent 64%)",
        color: "{green.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
      },
      warn: {
        background: "color-mix(in srgb, {yellow.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)",
        color: "{yellow.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
      },
      error: {
        background: "color-mix(in srgb, {red.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
        color: "{red.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
      },
      secondary: {
        background: "{surface.800}",
        borderColor: "{surface.700}",
        color: "{surface.300}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
      },
      contrast: {
        background: "{surface.0}",
        borderColor: "{surface.100}",
        color: "{surface.950}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
      }
    }
  },
  a = {
    root: r,
    text: o,
    icon: e,
    colorScheme: n
  };
export { n as colorScheme, a as default, e as icon, r as root, o as text };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvYXVyYS9pbmxpbmVtZXNzYWdlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgSW5saW5lTWVzc2FnZURlc2lnblRva2VucywgSW5saW5lTWVzc2FnZVRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL2lubGluZW1lc3NhZ2UnO1xuXG5leHBvcnQgY29uc3Qgcm9vdDogSW5saW5lTWVzc2FnZVRva2VuU2VjdGlvbnMuUm9vdCA9IHtcbiAgICBwYWRkaW5nOiAne2Zvcm0uZmllbGQucGFkZGluZy55fSB7Zm9ybS5maWVsZC5wYWRkaW5nLnh9JyxcbiAgICBib3JkZXJSYWRpdXM6ICd7Y29udGVudC5ib3JkZXIucmFkaXVzfScsXG4gICAgZ2FwOiAnMC41cmVtJ1xufTtcblxuZXhwb3J0IGNvbnN0IHRleHQ6IElubGluZU1lc3NhZ2VUb2tlblNlY3Rpb25zLlRleHQgPSB7XG4gICAgZm9udFdlaWdodDogJzUwMCdcbn07XG5cbmV4cG9ydCBjb25zdCBpY29uOiBJbmxpbmVNZXNzYWdlVG9rZW5TZWN0aW9ucy5JY29uID0ge1xuICAgIHNpemU6ICcxcmVtJ1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbG9yU2NoZW1lOiBJbmxpbmVNZXNzYWdlVG9rZW5TZWN0aW9ucy5Db2xvclNjaGVtZSA9IHtcbiAgICBsaWdodDoge1xuICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnY29sb3ItbWl4KGluIHNyZ2IsIHtibHVlLjUwfSwgdHJhbnNwYXJlbnQgNSUpJyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne2JsdWUuMjAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tibHVlLjYwMH0nLFxuICAgICAgICAgICAgc2hhZG93OiAnMHB4IDRweCA4cHggMHB4IGNvbG9yLW1peChpbiBzcmdiLCB7Ymx1ZS41MDB9LCB0cmFuc3BhcmVudCA5NiUpJ1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnY29sb3ItbWl4KGluIHNyZ2IsIHtncmVlbi41MH0sIHRyYW5zcGFyZW50IDUlKScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tncmVlbi4yMDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne2dyZWVuLjYwMH0nLFxuICAgICAgICAgICAgc2hhZG93OiAnMHB4IDRweCA4cHggMHB4IGNvbG9yLW1peChpbiBzcmdiLCB7Z3JlZW4uNTAwfSwgdHJhbnNwYXJlbnQgOTYlKSdcbiAgICAgICAgfSxcbiAgICAgICAgd2Fybjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ2NvbG9yLW1peChpbiBzcmdiLHt5ZWxsb3cuNTB9LCB0cmFuc3BhcmVudCA1JSknLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7eWVsbG93LjIwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7eWVsbG93LjYwMH0nLFxuICAgICAgICAgICAgc2hhZG93OiAnMHB4IDRweCA4cHggMHB4IGNvbG9yLW1peChpbiBzcmdiLCB7eWVsbG93LjUwMH0sIHRyYW5zcGFyZW50IDk2JSknXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnY29sb3ItbWl4KGluIHNyZ2IsIHtyZWQuNTB9LCB0cmFuc3BhcmVudCA1JSknLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7cmVkLjIwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7cmVkLjYwMH0nLFxuICAgICAgICAgICAgc2hhZG93OiAnMHB4IDRweCA4cHggMHB4IGNvbG9yLW1peChpbiBzcmdiLCB7cmVkLjUwMH0sIHRyYW5zcGFyZW50IDk2JSknXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjEwMH0nLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c3VyZmFjZS4yMDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuNjAwfScsXG4gICAgICAgICAgICBzaGFkb3c6ICcwcHggNHB4IDhweCAwcHggY29sb3ItbWl4KGluIHNyZ2IsIHtzdXJmYWNlLjUwMH0sIHRyYW5zcGFyZW50IDk2JSknXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRyYXN0OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuOTAwfScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tzdXJmYWNlLjk1MH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS41MH0nLFxuICAgICAgICAgICAgc2hhZG93OiAnMHB4IDRweCA4cHggMHB4IGNvbG9yLW1peChpbiBzcmdiLCB7c3VyZmFjZS45NTB9LCB0cmFuc3BhcmVudCA5NiUpJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXJrOiB7XG4gICAgICAgIGluZm86IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdjb2xvci1taXgoaW4gc3JnYiwge2JsdWUuNTAwfSwgdHJhbnNwYXJlbnQgODQlKScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ2NvbG9yLW1peChpbiBzcmdiLCB7Ymx1ZS43MDB9LCB0cmFuc3BhcmVudCA2NCUpJyxcbiAgICAgICAgICAgIGNvbG9yOiAne2JsdWUuNTAwfScsXG4gICAgICAgICAgICBzaGFkb3c6ICcwcHggNHB4IDhweCAwcHggY29sb3ItbWl4KGluIHNyZ2IsIHtibHVlLjUwMH0sIHRyYW5zcGFyZW50IDk2JSknXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdjb2xvci1taXgoaW4gc3JnYiwge2dyZWVuLjUwMH0sIHRyYW5zcGFyZW50IDg0JSknLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdjb2xvci1taXgoaW4gc3JnYiwge2dyZWVuLjcwMH0sIHRyYW5zcGFyZW50IDY0JSknLFxuICAgICAgICAgICAgY29sb3I6ICd7Z3JlZW4uNTAwfScsXG4gICAgICAgICAgICBzaGFkb3c6ICcwcHggNHB4IDhweCAwcHggY29sb3ItbWl4KGluIHNyZ2IsIHtncmVlbi41MDB9LCB0cmFuc3BhcmVudCA5NiUpJ1xuICAgICAgICB9LFxuICAgICAgICB3YXJuOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnY29sb3ItbWl4KGluIHNyZ2IsIHt5ZWxsb3cuNTAwfSwgdHJhbnNwYXJlbnQgODQlKScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ2NvbG9yLW1peChpbiBzcmdiLCB7eWVsbG93LjcwMH0sIHRyYW5zcGFyZW50IDY0JSknLFxuICAgICAgICAgICAgY29sb3I6ICd7eWVsbG93LjUwMH0nLFxuICAgICAgICAgICAgc2hhZG93OiAnMHB4IDRweCA4cHggMHB4IGNvbG9yLW1peChpbiBzcmdiLCB7eWVsbG93LjUwMH0sIHRyYW5zcGFyZW50IDk2JSknXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnY29sb3ItbWl4KGluIHNyZ2IsIHtyZWQuNTAwfSwgdHJhbnNwYXJlbnQgODQlKScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ2NvbG9yLW1peChpbiBzcmdiLCB7cmVkLjcwMH0sIHRyYW5zcGFyZW50IDY0JSknLFxuICAgICAgICAgICAgY29sb3I6ICd7cmVkLjUwMH0nLFxuICAgICAgICAgICAgc2hhZG93OiAnMHB4IDRweCA4cHggMHB4IGNvbG9yLW1peChpbiBzcmdiLCB7cmVkLjUwMH0sIHRyYW5zcGFyZW50IDk2JSknXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjgwMH0nLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c3VyZmFjZS43MDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuMzAwfScsXG4gICAgICAgICAgICBzaGFkb3c6ICcwcHggNHB4IDhweCAwcHggY29sb3ItbWl4KGluIHNyZ2IsIHtzdXJmYWNlLjUwMH0sIHRyYW5zcGFyZW50IDk2JSknXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRyYXN0OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuMH0nLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c3VyZmFjZS4xMDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuOTUwfScsXG4gICAgICAgICAgICBzaGFkb3c6ICcwcHggNHB4IDhweCAwcHggY29sb3ItbWl4KGluIHNyZ2IsIHtzdXJmYWNlLjk1MH0sIHRyYW5zcGFyZW50IDk2JSknXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcm9vdCxcbiAgICB0ZXh0LFxuICAgIGljb24sXG4gICAgY29sb3JTY2hlbWVcbn0gc2F0aXNmaWVzIElubGluZU1lc3NhZ2VEZXNpZ25Ub2tlbnM7XG4iXSwibWFwcGluZ3MiOiIiLCJpZ25vcmVMaXN0IjpbXX0=