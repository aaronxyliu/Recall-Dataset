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
        background: "{surface.200}",
        color: "{surface.700}"
      },
      success: {
        background: "{green.600}",
        color: "{surface.0}"
      },
      info: {
        background: "{sky.600}",
        color: "{surface.0}"
      },
      warn: {
        background: "{orange.600}",
        color: "{surface.0}"
      },
      danger: {
        background: "{red.600}",
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
        background: "{surface.700}",
        color: "{surface.200}"
      },
      success: {
        background: "{green.500}",
        color: "{green.950}"
      },
      info: {
        background: "{sky.500}",
        color: "{sky.950}"
      },
      warn: {
        background: "{orange.500}",
        color: "{orange.950}"
      },
      danger: {
        background: "{red.500}",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbm9yYS90YWcvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBUYWdEZXNpZ25Ub2tlbnMsIFRhZ1Rva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL3RhZyc7XG5cbmV4cG9ydCBjb25zdCByb290OiBUYWdUb2tlblNlY3Rpb25zLlJvb3QgPSB7XG4gICAgZm9udFNpemU6ICcwLjg3NXJlbScsXG4gICAgZm9udFdlaWdodDogJzcwMCcsXG4gICAgcGFkZGluZzogJzAuMjVyZW0gMC41cmVtJyxcbiAgICBnYXA6ICcwLjI1cmVtJyxcbiAgICBib3JkZXJSYWRpdXM6ICd7Y29udGVudC5ib3JkZXIucmFkaXVzfScsXG4gICAgcm91bmRlZEJvcmRlclJhZGl1czogJ3tib3JkZXIucmFkaXVzLnhsfSdcbn07XG5cbmV4cG9ydCBjb25zdCBpY29uOiBUYWdUb2tlblNlY3Rpb25zLkljb24gPSB7XG4gICAgc2l6ZTogJzAuNzVyZW0nXG59O1xuXG5leHBvcnQgY29uc3QgY29sb3JTY2hlbWU6IFRhZ1Rva2VuU2VjdGlvbnMuQ29sb3JTY2hlbWUgPSB7XG4gICAgbGlnaHQ6IHtcbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3twcmltYXJ5LmNvbG9yfScsXG4gICAgICAgICAgICBjb2xvcjogJ3twcmltYXJ5LmNvbnRyYXN0LmNvbG9yfSdcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuMjAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjcwMH0nXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7Z3JlZW4uNjAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjB9J1xuICAgICAgICB9LFxuICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3NreS42MDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuMH0nXG4gICAgICAgIH0sXG4gICAgICAgIHdhcm46IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7b3JhbmdlLjYwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS4wfSdcbiAgICAgICAgfSxcbiAgICAgICAgZGFuZ2VyOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3JlZC42MDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuMH0nXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRyYXN0OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuOTUwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjB9J1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXJrOiB7XG4gICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7cHJpbWFyeS5jb2xvcn0nLFxuICAgICAgICAgICAgY29sb3I6ICd7cHJpbWFyeS5jb250cmFzdC5jb2xvcn0nXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjcwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS4yMDB9J1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne2dyZWVuLjUwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7Z3JlZW4uOTUwfSdcbiAgICAgICAgfSxcbiAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tza3kuNTAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tza3kuOTUwfSdcbiAgICAgICAgfSxcbiAgICAgICAgd2Fybjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tvcmFuZ2UuNTAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tvcmFuZ2UuOTUwfSdcbiAgICAgICAgfSxcbiAgICAgICAgZGFuZ2VyOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3JlZC41MDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3JlZC45NTB9J1xuICAgICAgICB9LFxuICAgICAgICBjb250cmFzdDoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuOTUwfSdcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByb290LFxuICAgIGljb24sXG4gICAgY29sb3JTY2hlbWVcbn0gc2F0aXNmaWVzIFRhZ0Rlc2lnblRva2VucztcbiJdLCJtYXBwaW5ncyI6IiIsImlnbm9yZUxpc3QiOltdfQ==