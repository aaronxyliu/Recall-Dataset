var r = {
    transitionDuration: "{transition.duration}"
  },
  o = {
    width: "2.5rem",
    borderRadius: "{form.field.border.radius}",
    verticalPadding: "{form.field.padding.y}"
  },
  e = {
    light: {
      button: {
        background: "transparent",
        hoverBackground: "{surface.100}",
        activeBackground: "{surface.200}",
        borderColor: "{form.field.border.color}",
        hoverBorderColor: "{form.field.border.color}",
        activeBorderColor: "{form.field.border.color}",
        color: "{surface.400}",
        hoverColor: "{surface.500}",
        activeColor: "{surface.600}"
      }
    },
    dark: {
      button: {
        background: "transparent",
        hoverBackground: "{surface.800}",
        activeBackground: "{surface.700}",
        borderColor: "{form.field.border.color}",
        hoverBorderColor: "{form.field.border.color}",
        activeBorderColor: "{form.field.border.color}",
        color: "{surface.400}",
        hoverColor: "{surface.300}",
        activeColor: "{surface.200}"
      }
    }
  },
  a = {
    root: r,
    button: o,
    colorScheme: e
  };
export { o as button, e as colorScheme, a as default, r as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvYXVyYS9pbnB1dG51bWJlci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IElucHV0TnVtYmVyRGVzaWduVG9rZW5zLCBJbnB1dE51bWJlclRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL2lucHV0bnVtYmVyJztcblxuZXhwb3J0IGNvbnN0IHJvb3Q6IElucHV0TnVtYmVyVG9rZW5TZWN0aW9ucy5Sb290ID0ge1xuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJ3t0cmFuc2l0aW9uLmR1cmF0aW9ufSdcbn07XG5cbmV4cG9ydCBjb25zdCBidXR0b246IElucHV0TnVtYmVyVG9rZW5TZWN0aW9ucy5CdXR0b24gPSB7XG4gICAgd2lkdGg6ICcyLjVyZW0nLFxuICAgIGJvcmRlclJhZGl1czogJ3tmb3JtLmZpZWxkLmJvcmRlci5yYWRpdXN9JyxcbiAgICB2ZXJ0aWNhbFBhZGRpbmc6ICd7Zm9ybS5maWVsZC5wYWRkaW5nLnl9J1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbG9yU2NoZW1lOiBJbnB1dE51bWJlclRva2VuU2VjdGlvbnMuQ29sb3JTY2hlbWUgPSB7XG4gICAgbGlnaHQ6IHtcbiAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3N1cmZhY2UuMTAwfScsXG4gICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3N1cmZhY2UuMjAwfScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmJvcmRlci5jb2xvcn0nLFxuICAgICAgICAgICAgaG92ZXJCb3JkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmJvcmRlci5jb2xvcn0nLFxuICAgICAgICAgICAgYWN0aXZlQm9yZGVyQ29sb3I6ICd7Zm9ybS5maWVsZC5ib3JkZXIuY29sb3J9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuNDAwfScsXG4gICAgICAgICAgICBob3ZlckNvbG9yOiAne3N1cmZhY2UuNTAwfScsXG4gICAgICAgICAgICBhY3RpdmVDb2xvcjogJ3tzdXJmYWNlLjYwMH0nXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhcms6IHtcbiAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3N1cmZhY2UuODAwfScsXG4gICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3N1cmZhY2UuNzAwfScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmJvcmRlci5jb2xvcn0nLFxuICAgICAgICAgICAgaG92ZXJCb3JkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmJvcmRlci5jb2xvcn0nLFxuICAgICAgICAgICAgYWN0aXZlQm9yZGVyQ29sb3I6ICd7Zm9ybS5maWVsZC5ib3JkZXIuY29sb3J9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuNDAwfScsXG4gICAgICAgICAgICBob3ZlckNvbG9yOiAne3N1cmZhY2UuMzAwfScsXG4gICAgICAgICAgICBhY3RpdmVDb2xvcjogJ3tzdXJmYWNlLjIwMH0nXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcm9vdCxcbiAgICBidXR0b24sXG4gICAgY29sb3JTY2hlbWVcbn0gc2F0aXNmaWVzIElucHV0TnVtYmVyRGVzaWduVG9rZW5zO1xuIl0sIm1hcHBpbmdzIjoiIiwiaWdub3JlTGlzdCI6W119