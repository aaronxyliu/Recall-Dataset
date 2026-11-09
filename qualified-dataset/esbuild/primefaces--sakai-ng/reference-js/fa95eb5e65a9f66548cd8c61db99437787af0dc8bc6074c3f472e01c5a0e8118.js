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
  c = {
    light: {
      primary: {
        background: "{primary.color}",
        color: "{primary.contrast.color}"
      },
      secondary: {
        background: "{surface.100}",
        color: "{surface.600}"
      },
      success: {
        background: "{green.500}",
        color: "{surface.0}"
      },
      info: {
        background: "{sky.500}",
        color: "{surface.0}"
      },
      warn: {
        background: "{orange.500}",
        color: "{surface.0}"
      },
      danger: {
        background: "{red.500}",
        color: "{surface.0}"
      },
      contrast: {
        background: "{surface.950}",
        color: "{surface.0}"
      }
    },
    dark: {
      primary: {
        background: "{primary.color}",
        color: "{primary.contrast.color}"
      },
      secondary: {
        background: "{surface.800}",
        color: "{surface.300}"
      },
      success: {
        background: "{green.400}",
        color: "{green.950}"
      },
      info: {
        background: "{sky.400}",
        color: "{sky.950}"
      },
      warn: {
        background: "{orange.400}",
        color: "{orange.950}"
      },
      danger: {
        background: "{red.400}",
        color: "{red.950}"
      },
      contrast: {
        background: "{surface.0}",
        color: "{surface.950}"
      }
    }
  },
  a = {
    root: r,
    icon: o,
    colorScheme: c
  };
export { c as colorScheme, a as default, o as icon, r as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbGFyYS90YWcvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBUYWdEZXNpZ25Ub2tlbnMsIFRhZ1Rva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL3RhZyc7XG5cbmV4cG9ydCBjb25zdCByb290OiBUYWdUb2tlblNlY3Rpb25zLlJvb3QgPSB7XG4gICAgZm9udFNpemU6ICcwLjg3NXJlbScsXG4gICAgZm9udFdlaWdodDogJzcwMCcsXG4gICAgcGFkZGluZzogJzAuMjVyZW0gMC41cmVtJyxcbiAgICBnYXA6ICcwLjI1cmVtJyxcbiAgICBib3JkZXJSYWRpdXM6ICd7Y29udGVudC5ib3JkZXIucmFkaXVzfScsXG4gICAgcm91bmRlZEJvcmRlclJhZGl1czogJ3tib3JkZXIucmFkaXVzLnhsfSdcbn07XG5cbmV4cG9ydCBjb25zdCBpY29uOiBUYWdUb2tlblNlY3Rpb25zLkljb24gPSB7XG4gICAgc2l6ZTogJzAuNzVyZW0nXG59O1xuXG5leHBvcnQgY29uc3QgY29sb3JTY2hlbWU6IFRhZ1Rva2VuU2VjdGlvbnMuQ29sb3JTY2hlbWUgPSB7XG4gICAgbGlnaHQ6IHtcbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3twcmltYXJ5LmNvbG9yfScsXG4gICAgICAgICAgICBjb2xvcjogJ3twcmltYXJ5LmNvbnRyYXN0LmNvbG9yfSdcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuMTAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjYwMH0nXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7Z3JlZW4uNTAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjB9J1xuICAgICAgICB9LFxuICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3NreS41MDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuMH0nXG4gICAgICAgIH0sXG4gICAgICAgIHdhcm46IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7b3JhbmdlLjUwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS4wfSdcbiAgICAgICAgfSxcbiAgICAgICAgZGFuZ2VyOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3JlZC41MDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuMH0nXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRyYXN0OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuOTUwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjB9J1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXJrOiB7XG4gICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7cHJpbWFyeS5jb2xvcn0nLFxuICAgICAgICAgICAgY29sb3I6ICd7cHJpbWFyeS5jb250cmFzdC5jb2xvcn0nXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjgwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS4zMDB9J1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne2dyZWVuLjQwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7Z3JlZW4uOTUwfSdcbiAgICAgICAgfSxcbiAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tza3kuNDAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tza3kuOTUwfSdcbiAgICAgICAgfSxcbiAgICAgICAgd2Fybjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tvcmFuZ2UuNDAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tvcmFuZ2UuOTUwfSdcbiAgICAgICAgfSxcbiAgICAgICAgZGFuZ2VyOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3JlZC40MDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3JlZC45NTB9J1xuICAgICAgICB9LFxuICAgICAgICBjb250cmFzdDoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuOTUwfSdcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByb290LFxuICAgIGljb24sXG4gICAgY29sb3JTY2hlbWVcbn0gc2F0aXNmaWVzIFRhZ0Rlc2lnblRva2VucztcbiJdLCJtYXBwaW5ncyI6IiIsImlnbm9yZUxpc3QiOltdfQ==