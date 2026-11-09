var o = {
    borderColor: "{content.border.color}",
    borderWidth: "1px",
    borderRadius: "4px",
    padding: "0"
  },
  r = {
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.875rem 1.125rem",
    borderRadius: "5px 5px 0 0"
  },
  e = {
    background: "{content.background}",
    color: "{content.color}",
    borderColor: "transparent",
    borderWidth: "0",
    padding: "0",
    borderRadius: "5px"
  },
  d = {
    background: "{content.background}",
    color: "{content.color}",
    borderColor: "{content.border.color}",
    borderWidth: "1px 0 0 0",
    padding: "0.875rem 1.125rem",
    borderRadius: "0 0 5px 5px"
  },
  t = {
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0"
  },
  n = {
    borderColor: "{content.border.color}",
    borderWidth: "1px 0 0 0"
  },
  c = {
    light: {
      header: {
        background: "{surface.50}",
        color: "{text.color}"
      }
    },
    dark: {
      header: {
        background: "{surface.800}",
        color: "{text.color}"
      }
    }
  },
  a = {
    root: o,
    header: r,
    content: e,
    footer: d,
    paginatorTop: t,
    paginatorBottom: n,
    colorScheme: c
  };
export { c as colorScheme, e as content, a as default, d as footer, r as header, n as paginatorBottom, t as paginatorTop, o as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbGFyYS9kYXRhdmlldy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IERhdGFWaWV3RGVzaWduVG9rZW5zLCBEYXRhVmlld1Rva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL2RhdGF2aWV3JztcblxuZXhwb3J0IGNvbnN0IHJvb3Q6IERhdGFWaWV3VG9rZW5TZWN0aW9ucy5Sb290ID0ge1xuICAgIGJvcmRlckNvbG9yOiAne2NvbnRlbnQuYm9yZGVyLmNvbG9yfScsXG4gICAgYm9yZGVyV2lkdGg6ICcxcHgnLFxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgcGFkZGluZzogJzAnXG59O1xuXG5leHBvcnQgY29uc3QgaGVhZGVyOiBEYXRhVmlld1Rva2VuU2VjdGlvbnMuSGVhZGVyID0ge1xuICAgIGJvcmRlckNvbG9yOiAne2NvbnRlbnQuYm9yZGVyLmNvbG9yfScsXG4gICAgYm9yZGVyV2lkdGg6ICcwIDAgMXB4IDAnLFxuICAgIHBhZGRpbmc6ICcwLjg3NXJlbSAxLjEyNXJlbScsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4IDVweCAwIDAnXG59O1xuXG5leHBvcnQgY29uc3QgY29udGVudDogRGF0YVZpZXdUb2tlblNlY3Rpb25zLkNvbnRlbnQgPSB7XG4gICAgYmFja2dyb3VuZDogJ3tjb250ZW50LmJhY2tncm91bmR9JyxcbiAgICBjb2xvcjogJ3tjb250ZW50LmNvbG9yfScsXG4gICAgYm9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgYm9yZGVyV2lkdGg6ICcwJyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4J1xufTtcblxuZXhwb3J0IGNvbnN0IGZvb3RlcjogRGF0YVZpZXdUb2tlblNlY3Rpb25zLkZvb3RlciA9IHtcbiAgICBiYWNrZ3JvdW5kOiAne2NvbnRlbnQuYmFja2dyb3VuZH0nLFxuICAgIGNvbG9yOiAne2NvbnRlbnQuY29sb3J9JyxcbiAgICBib3JkZXJDb2xvcjogJ3tjb250ZW50LmJvcmRlci5jb2xvcn0nLFxuICAgIGJvcmRlcldpZHRoOiAnMXB4IDAgMCAwJyxcbiAgICBwYWRkaW5nOiAnMC44NzVyZW0gMS4xMjVyZW0nLFxuICAgIGJvcmRlclJhZGl1czogJzAgMCA1cHggNXB4J1xufTtcblxuZXhwb3J0IGNvbnN0IHBhZ2luYXRvclRvcDogRGF0YVZpZXdUb2tlblNlY3Rpb25zLlBhZ2luYXRvclRvcCA9IHtcbiAgICBib3JkZXJDb2xvcjogJ3tjb250ZW50LmJvcmRlci5jb2xvcn0nLFxuICAgIGJvcmRlcldpZHRoOiAnMCAwIDFweCAwJ1xufTtcblxuZXhwb3J0IGNvbnN0IHBhZ2luYXRvckJvdHRvbTogRGF0YVZpZXdUb2tlblNlY3Rpb25zLlBhZ2luYXRvckJvdHRvbSA9IHtcbiAgICBib3JkZXJDb2xvcjogJ3tjb250ZW50LmJvcmRlci5jb2xvcn0nLFxuICAgIGJvcmRlcldpZHRoOiAnMXB4IDAgMCAwJ1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbG9yU2NoZW1lOiBEYXRhVmlld1Rva2VuU2VjdGlvbnMuQ29sb3JTY2hlbWUgPSB7XG4gICAgbGlnaHQ6IHtcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuNTB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3RleHQuY29sb3J9J1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXJrOiB7XG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjgwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7dGV4dC5jb2xvcn0nXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcm9vdCxcbiAgICBoZWFkZXIsXG4gICAgY29udGVudCxcbiAgICBmb290ZXIsXG4gICAgcGFnaW5hdG9yVG9wLFxuICAgIHBhZ2luYXRvckJvdHRvbSxcbiAgICBjb2xvclNjaGVtZVxufSBzYXRpc2ZpZXMgRGF0YVZpZXdEZXNpZ25Ub2tlbnM7XG4iXSwibWFwcGluZ3MiOiIiLCJpZ25vcmVMaXN0IjpbXX0=