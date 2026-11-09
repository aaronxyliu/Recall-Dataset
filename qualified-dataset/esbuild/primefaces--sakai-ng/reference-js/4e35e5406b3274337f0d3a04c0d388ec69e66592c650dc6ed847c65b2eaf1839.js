var r = {
    borderRadius: "{border.radius.md}",
    padding: "0 0.5rem",
    fontSize: "0.75rem",
    fontWeight: "700",
    minWidth: "1.5rem",
    height: "1.5rem"
  },
  o = {
    size: "0.5rem"
  },
  e = {
    fontSize: "0.625rem",
    minWidth: "1.25rem",
    height: "1.25rem"
  },
  c = {
    fontSize: "0.875rem",
    minWidth: "1.75rem",
    height: "1.75rem"
  },
  a = {
    fontSize: "1rem",
    minWidth: "2rem",
    height: "2rem"
  },
  n = {
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
  d = {
    root: r,
    dot: o,
    sm: e,
    lg: c,
    xl: a,
    colorScheme: n
  };
export { n as colorScheme, d as default, o as dot, c as lg, r as root, e as sm, a as xl };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbm9yYS9iYWRnZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJhZGdlRGVzaWduVG9rZW5zLCBCYWRnZVRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL2JhZGdlJztcblxuZXhwb3J0IGNvbnN0IHJvb3Q6IEJhZGdlVG9rZW5TZWN0aW9ucy5Sb290ID0ge1xuICAgIGJvcmRlclJhZGl1czogJ3tib3JkZXIucmFkaXVzLm1kfScsXG4gICAgcGFkZGluZzogJzAgMC41cmVtJyxcbiAgICBmb250U2l6ZTogJzAuNzVyZW0nLFxuICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxuICAgIG1pbldpZHRoOiAnMS41cmVtJyxcbiAgICBoZWlnaHQ6ICcxLjVyZW0nXG59O1xuZXhwb3J0IGNvbnN0IGRvdDogQmFkZ2VUb2tlblNlY3Rpb25zLkRvdCA9IHtcbiAgICBzaXplOiAnMC41cmVtJ1xufTtcbmV4cG9ydCBjb25zdCBzbTogQmFkZ2VUb2tlblNlY3Rpb25zLlNtID0ge1xuICAgIGZvbnRTaXplOiAnMC42MjVyZW0nLFxuICAgIG1pbldpZHRoOiAnMS4yNXJlbScsXG4gICAgaGVpZ2h0OiAnMS4yNXJlbSdcbn07XG5cbmV4cG9ydCBjb25zdCBsZzogQmFkZ2VUb2tlblNlY3Rpb25zLkxnID0ge1xuICAgIGZvbnRTaXplOiAnMC44NzVyZW0nLFxuICAgIG1pbldpZHRoOiAnMS43NXJlbScsXG4gICAgaGVpZ2h0OiAnMS43NXJlbSdcbn07XG5cbmV4cG9ydCBjb25zdCB4bDogQmFkZ2VUb2tlblNlY3Rpb25zLlhsID0ge1xuICAgIGZvbnRTaXplOiAnMXJlbScsXG4gICAgbWluV2lkdGg6ICcycmVtJyxcbiAgICBoZWlnaHQ6ICcycmVtJ1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbG9yU2NoZW1lOiBCYWRnZVRva2VuU2VjdGlvbnMuQ29sb3JTY2hlbWUgPSB7XG4gICAgbGlnaHQ6IHtcbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3twcmltYXJ5LmNvbG9yfScsXG4gICAgICAgICAgICBjb2xvcjogJ3twcmltYXJ5LmNvbnRyYXN0LmNvbG9yfSdcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuMjAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjcwMH0nXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7Z3JlZW4uNjAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjB9J1xuICAgICAgICB9LFxuICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3NreS42MDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuMH0nXG4gICAgICAgIH0sXG4gICAgICAgIHdhcm46IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7b3JhbmdlLjYwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS4wfSdcbiAgICAgICAgfSxcbiAgICAgICAgZGFuZ2VyOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3JlZC42MDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuMH0nXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRyYXN0OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuOTUwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjB9J1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXJrOiB7XG4gICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7cHJpbWFyeS5jb2xvcn0nLFxuICAgICAgICAgICAgY29sb3I6ICd7cHJpbWFyeS5jb250cmFzdC5jb2xvcn0nXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjcwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS4yMDB9J1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne2dyZWVuLjUwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7Z3JlZW4uOTUwfSdcbiAgICAgICAgfSxcbiAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tza3kuNTAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tza3kuOTUwfSdcbiAgICAgICAgfSxcbiAgICAgICAgd2Fybjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tvcmFuZ2UuNTAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tvcmFuZ2UuOTUwfSdcbiAgICAgICAgfSxcbiAgICAgICAgZGFuZ2VyOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3JlZC41MDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3JlZC45NTB9J1xuICAgICAgICB9LFxuICAgICAgICBjb250cmFzdDoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuOTUwfSdcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByb290LFxuICAgIGRvdCxcbiAgICBzbSxcbiAgICBsZyxcbiAgICB4bCxcbiAgICBjb2xvclNjaGVtZVxufSBzYXRpc2ZpZXMgQmFkZ2VEZXNpZ25Ub2tlbnM7XG4iXSwibWFwcGluZ3MiOiIiLCJpZ25vcmVMaXN0IjpbXX0=