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
        background: "{surface.100}",
        hoverBackground: "{surface.200}",
        activeBackground: "{surface.300}",
        borderColor: "{form.field.border.color}",
        hoverBorderColor: "{form.field.border.color}",
        activeBorderColor: "{form.field.border.color}",
        color: "{surface.600}",
        hoverColor: "{surface.700}",
        activeColor: "{surface.800}"
      }
    },
    dark: {
      button: {
        background: "{surface.800}",
        hoverBackground: "{surface.700}",
        activeBackground: "{surface.500}",
        borderColor: "{form.field.border.color}",
        hoverBorderColor: "{form.field.border.color}",
        activeBorderColor: "{form.field.border.color}",
        color: "{surface.300}",
        hoverColor: "{surface.200}",
        activeColor: "{surface.100}"
      }
    }
  },
  d = {
    root: r,
    button: o,
    colorScheme: e
  };
export { o as button, e as colorScheme, d as default, r as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbGFyYS9pbnB1dG51bWJlci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IElucHV0TnVtYmVyRGVzaWduVG9rZW5zLCBJbnB1dE51bWJlclRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL2lucHV0bnVtYmVyJztcblxuZXhwb3J0IGNvbnN0IHJvb3Q6IElucHV0TnVtYmVyVG9rZW5TZWN0aW9ucy5Sb290ID0ge1xuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJ3t0cmFuc2l0aW9uLmR1cmF0aW9ufSdcbn07XG5cbmV4cG9ydCBjb25zdCBidXR0b246IElucHV0TnVtYmVyVG9rZW5TZWN0aW9ucy5CdXR0b24gPSB7XG4gICAgd2lkdGg6ICcyLjVyZW0nLFxuICAgIGJvcmRlclJhZGl1czogJ3tmb3JtLmZpZWxkLmJvcmRlci5yYWRpdXN9JyxcbiAgICB2ZXJ0aWNhbFBhZGRpbmc6ICd7Zm9ybS5maWVsZC5wYWRkaW5nLnl9J1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbG9yU2NoZW1lOiBJbnB1dE51bWJlclRva2VuU2VjdGlvbnMuQ29sb3JTY2hlbWUgPSB7XG4gICAgbGlnaHQ6IHtcbiAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuMTAwfScsXG4gICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS4yMDB9JyxcbiAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c3VyZmFjZS4zMDB9JyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuYm9yZGVyLmNvbG9yfScsXG4gICAgICAgICAgICBob3ZlckJvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuYm9yZGVyLmNvbG9yfScsXG4gICAgICAgICAgICBhY3RpdmVCb3JkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmJvcmRlci5jb2xvcn0nLFxuICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS42MDB9JyxcbiAgICAgICAgICAgIGhvdmVyQ29sb3I6ICd7c3VyZmFjZS43MDB9JyxcbiAgICAgICAgICAgIGFjdGl2ZUNvbG9yOiAne3N1cmZhY2UuODAwfSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGFyazoge1xuICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7c3VyZmFjZS44MDB9JyxcbiAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tzdXJmYWNlLjcwMH0nLFxuICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3tzdXJmYWNlLjUwMH0nLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7Zm9ybS5maWVsZC5ib3JkZXIuY29sb3J9JyxcbiAgICAgICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6ICd7Zm9ybS5maWVsZC5ib3JkZXIuY29sb3J9JyxcbiAgICAgICAgICAgIGFjdGl2ZUJvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuYm9yZGVyLmNvbG9yfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjMwMH0nLFxuICAgICAgICAgICAgaG92ZXJDb2xvcjogJ3tzdXJmYWNlLjIwMH0nLFxuICAgICAgICAgICAgYWN0aXZlQ29sb3I6ICd7c3VyZmFjZS4xMDB9J1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJvb3QsXG4gICAgYnV0dG9uLFxuICAgIGNvbG9yU2NoZW1lXG59IHNhdGlzZmllcyBJbnB1dE51bWJlckRlc2lnblRva2VucztcbiJdLCJtYXBwaW5ncyI6IiIsImlnbm9yZUxpc3QiOltdfQ==