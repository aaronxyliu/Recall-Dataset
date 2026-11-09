var o = {
    borderRadius: "16px",
    paddingX: "0.75rem",
    paddingY: "0.5rem",
    gap: "0.5rem",
    transitionDuration: "{transition.duration}"
  },
  r = {
    width: "2rem",
    height: "2rem"
  },
  e = {
    size: "1rem"
  },
  c = {
    size: "1rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    }
  },
  i = {
    light: {
      root: {
        background: "{surface.100}",
        color: "{surface.800}"
      },
      icon: {
        color: "{surface.800}"
      },
      removeIcon: {
        color: "{surface.800}"
      }
    },
    dark: {
      root: {
        background: "{surface.800}",
        color: "{surface.0}"
      },
      icon: {
        color: "{surface.0}"
      },
      removeIcon: {
        color: "{surface.0}"
      }
    }
  },
  s = {
    root: o,
    image: r,
    icon: e,
    removeIcon: c,
    colorScheme: i
  };
export { i as colorScheme, s as default, e as icon, r as image, c as removeIcon, o as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvYXVyYS9jaGlwL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQ2hpcERlc2lnblRva2VucywgQ2hpcFRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL2NoaXAnO1xuXG5leHBvcnQgY29uc3Qgcm9vdDogQ2hpcFRva2VuU2VjdGlvbnMuUm9vdCA9IHtcbiAgICBib3JkZXJSYWRpdXM6ICcxNnB4JyxcbiAgICBwYWRkaW5nWDogJzAuNzVyZW0nLFxuICAgIHBhZGRpbmdZOiAnMC41cmVtJyxcbiAgICBnYXA6ICcwLjVyZW0nLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJ3t0cmFuc2l0aW9uLmR1cmF0aW9ufSdcbn07XG5cbmV4cG9ydCBjb25zdCBpbWFnZTogQ2hpcFRva2VuU2VjdGlvbnMuSW1hZ2UgPSB7XG4gICAgd2lkdGg6ICcycmVtJyxcbiAgICBoZWlnaHQ6ICcycmVtJ1xufTtcblxuZXhwb3J0IGNvbnN0IGljb246IENoaXBUb2tlblNlY3Rpb25zLkljb24gPSB7XG4gICAgc2l6ZTogJzFyZW0nXG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlSWNvbjogQ2hpcFRva2VuU2VjdGlvbnMuUmVtb3ZlSWNvbiA9IHtcbiAgICBzaXplOiAnMXJlbScsXG4gICAgZm9jdXNSaW5nOiB7XG4gICAgICAgIHdpZHRoOiAne2ZvY3VzLnJpbmcud2lkdGh9JyxcbiAgICAgICAgc3R5bGU6ICd7Zm9jdXMucmluZy5zdHlsZX0nLFxuICAgICAgICBjb2xvcjogJ3tmb2N1cy5yaW5nLmNvbG9yfScsXG4gICAgICAgIG9mZnNldDogJ3tmb2N1cy5yaW5nLm9mZnNldH0nLFxuICAgICAgICBzaGFkb3c6ICd7Zm9ybS5maWVsZC5mb2N1cy5yaW5nLnNoYWRvd30nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNvbG9yU2NoZW1lOiBDaGlwVG9rZW5TZWN0aW9ucy5Db2xvclNjaGVtZSA9IHtcbiAgICBsaWdodDoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuMTAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjgwMH0nXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IHtcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuODAwfSdcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlSWNvbjoge1xuICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS44MDB9J1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXJrOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7c3VyZmFjZS44MDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuMH0nXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IHtcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuMH0nXG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUljb246IHtcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuMH0nXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcm9vdCxcbiAgICBpbWFnZSxcbiAgICBpY29uLFxuICAgIHJlbW92ZUljb24sXG4gICAgY29sb3JTY2hlbWVcbn0gc2F0aXNmaWVzIENoaXBEZXNpZ25Ub2tlbnM7XG4iXSwibWFwcGluZ3MiOiIiLCJpZ25vcmVMaXN0IjpbXX0=