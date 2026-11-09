var r = {
    fontSize: "0.875rem",
    fontWeight: "700",
    padding: "0.25rem 0.5rem",
    gap: "0.25rem",
    borderRadius: "{content.border.radius}",
    roundedBorderRadius: "{border.radius.xl}"
  },
  o = {
    size: "0.75rem"
  },
  a = {
    light: {
      primary: {
        background: "{primary.100}",
        color: "{primary.700}"
      },
      secondary: {
        background: "{surface.100}",
        color: "{surface.600}"
      },
      success: {
        background: "{green.100}",
        color: "{green.700}"
      },
      info: {
        background: "{sky.100}",
        color: "{sky.700}"
      },
      warn: {
        background: "{orange.100}",
        color: "{orange.700}"
      },
      danger: {
        background: "{red.100}",
        color: "{red.700}"
      },
      contrast: {
        background: "{surface.950}",
        color: "{surface.0}"
      }
    },
    dark: {
      primary: {
        background: "color-mix(in srgb, {primary.500}, transparent 84%)",
        color: "{primary.300}"
      },
      secondary: {
        background: "{surface.800}",
        color: "{surface.300}"
      },
      success: {
        background: "color-mix(in srgb, {green.500}, transparent 84%)",
        color: "{green.300}"
      },
      info: {
        background: "color-mix(in srgb, {sky.500}, transparent 84%)",
        color: "{sky.300}"
      },
      warn: {
        background: "color-mix(in srgb, {orange.500}, transparent 84%)",
        color: "{orange.300}"
      },
      danger: {
        background: "color-mix(in srgb, {red.500}, transparent 84%)",
        color: "{red.300}"
      },
      contrast: {
        background: "{surface.0}",
        color: "{surface.950}"
      }
    }
  },
  n = {
    root: r,
    icon: o,
    colorScheme: a
  };
export { a as colorScheme, n as default, o as icon, r as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvYXVyYS90YWcvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBUYWdEZXNpZ25Ub2tlbnMsIFRhZ1Rva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL3RhZyc7XG5cbmV4cG9ydCBjb25zdCByb290OiBUYWdUb2tlblNlY3Rpb25zLlJvb3QgPSB7XG4gICAgZm9udFNpemU6ICcwLjg3NXJlbScsXG4gICAgZm9udFdlaWdodDogJzcwMCcsXG4gICAgcGFkZGluZzogJzAuMjVyZW0gMC41cmVtJyxcbiAgICBnYXA6ICcwLjI1cmVtJyxcbiAgICBib3JkZXJSYWRpdXM6ICd7Y29udGVudC5ib3JkZXIucmFkaXVzfScsXG4gICAgcm91bmRlZEJvcmRlclJhZGl1czogJ3tib3JkZXIucmFkaXVzLnhsfSdcbn07XG5cbmV4cG9ydCBjb25zdCBpY29uOiBUYWdUb2tlblNlY3Rpb25zLkljb24gPSB7XG4gICAgc2l6ZTogJzAuNzVyZW0nXG59O1xuXG5leHBvcnQgY29uc3QgY29sb3JTY2hlbWU6IFRhZ1Rva2VuU2VjdGlvbnMuQ29sb3JTY2hlbWUgPSB7XG4gICAgbGlnaHQ6IHtcbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3twcmltYXJ5LjEwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7cHJpbWFyeS43MDB9J1xuICAgICAgICB9LFxuICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7c3VyZmFjZS4xMDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuNjAwfSdcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tncmVlbi4xMDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne2dyZWVuLjcwMH0nXG4gICAgICAgIH0sXG4gICAgICAgIGluZm86IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7c2t5LjEwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7c2t5LjcwMH0nXG4gICAgICAgIH0sXG4gICAgICAgIHdhcm46IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7b3JhbmdlLjEwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7b3JhbmdlLjcwMH0nXG4gICAgICAgIH0sXG4gICAgICAgIGRhbmdlcjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tyZWQuMTAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tyZWQuNzAwfSdcbiAgICAgICAgfSxcbiAgICAgICAgY29udHJhc3Q6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7c3VyZmFjZS45NTB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuMH0nXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhcms6IHtcbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ2NvbG9yLW1peChpbiBzcmdiLCB7cHJpbWFyeS41MDB9LCB0cmFuc3BhcmVudCA4NCUpJyxcbiAgICAgICAgICAgIGNvbG9yOiAne3ByaW1hcnkuMzAwfSdcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuODAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjMwMH0nXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdjb2xvci1taXgoaW4gc3JnYiwge2dyZWVuLjUwMH0sIHRyYW5zcGFyZW50IDg0JSknLFxuICAgICAgICAgICAgY29sb3I6ICd7Z3JlZW4uMzAwfSdcbiAgICAgICAgfSxcbiAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ2NvbG9yLW1peChpbiBzcmdiLCB7c2t5LjUwMH0sIHRyYW5zcGFyZW50IDg0JSknLFxuICAgICAgICAgICAgY29sb3I6ICd7c2t5LjMwMH0nXG4gICAgICAgIH0sXG4gICAgICAgIHdhcm46IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdjb2xvci1taXgoaW4gc3JnYiwge29yYW5nZS41MDB9LCB0cmFuc3BhcmVudCA4NCUpJyxcbiAgICAgICAgICAgIGNvbG9yOiAne29yYW5nZS4zMDB9J1xuICAgICAgICB9LFxuICAgICAgICBkYW5nZXI6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdjb2xvci1taXgoaW4gc3JnYiwge3JlZC41MDB9LCB0cmFuc3BhcmVudCA4NCUpJyxcbiAgICAgICAgICAgIGNvbG9yOiAne3JlZC4zMDB9J1xuICAgICAgICB9LFxuICAgICAgICBjb250cmFzdDoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuOTUwfSdcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByb290LFxuICAgIGljb24sXG4gICAgY29sb3JTY2hlbWVcbn0gc2F0aXNmaWVzIFRhZ0Rlc2lnblRva2VucztcbiJdLCJtYXBwaW5ncyI6IiIsImlnbm9yZUxpc3QiOltdfQ==