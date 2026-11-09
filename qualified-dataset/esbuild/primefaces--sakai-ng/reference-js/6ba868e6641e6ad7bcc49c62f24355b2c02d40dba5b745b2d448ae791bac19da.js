var o = {
    transitionDuration: "{transition.duration}"
  },
  r = {
    borderWidth: "0 0 1px 0",
    borderColor: "{content.border.color}"
  },
  t = {
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{text.color}",
    activeHoverColor: "{text.color}",
    padding: "1.125rem",
    fontWeight: "600",
    borderRadius: "0",
    borderWidth: "0",
    borderColor: "{content.border.color}",
    background: "{content.background}",
    hoverBackground: "{content.background}",
    activeBackground: "{content.background}",
    activeHoverBackground: "{content.background}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    },
    toggleIcon: {
      color: "{text.muted.color}",
      hoverColor: "{text.color}",
      activeColor: "{text.color}",
      activeHoverColor: "{text.color}"
    },
    first: {
      topBorderRadius: "{content.border.radius}",
      borderWidth: "0"
    },
    last: {
      bottomBorderRadius: "{content.border.radius}",
      activeBottomBorderRadius: "0"
    }
  },
  e = {
    borderWidth: "0",
    borderColor: "{content.border.color}",
    background: "{content.background}",
    color: "{text.color}",
    padding: "0 1.125rem 1.125rem 1.125rem"
  },
  c = {
    root: o,
    panel: r,
    header: t,
    content: e
  };
export { e as content, c as default, t as header, r as panel, o as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvYXVyYS9hY2NvcmRpb24vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBY2NvcmRpb25EZXNpZ25Ub2tlbnMsIEFjY29yZGlvblRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL2FjY29yZGlvbic7XG5cbmV4cG9ydCBjb25zdCByb290OiBBY2NvcmRpb25Ub2tlblNlY3Rpb25zLlJvb3QgPSB7XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAne3RyYW5zaXRpb24uZHVyYXRpb259J1xufTtcblxuZXhwb3J0IGNvbnN0IHBhbmVsOiBBY2NvcmRpb25Ub2tlblNlY3Rpb25zLlBhbmVsID0ge1xuICAgIGJvcmRlcldpZHRoOiAnMCAwIDFweCAwJyxcbiAgICBib3JkZXJDb2xvcjogJ3tjb250ZW50LmJvcmRlci5jb2xvcn0nXG59O1xuXG5leHBvcnQgY29uc3QgaGVhZGVyOiBBY2NvcmRpb25Ub2tlblNlY3Rpb25zLkhlYWRlciA9IHtcbiAgICBjb2xvcjogJ3t0ZXh0Lm11dGVkLmNvbG9yfScsXG4gICAgaG92ZXJDb2xvcjogJ3t0ZXh0LmNvbG9yfScsXG4gICAgYWN0aXZlQ29sb3I6ICd7dGV4dC5jb2xvcn0nLFxuICAgIGFjdGl2ZUhvdmVyQ29sb3I6ICd7dGV4dC5jb2xvcn0nLFxuICAgIHBhZGRpbmc6ICcxLjEyNXJlbScsXG4gICAgZm9udFdlaWdodDogJzYwMCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMCcsXG4gICAgYm9yZGVyV2lkdGg6ICcwJyxcbiAgICBib3JkZXJDb2xvcjogJ3tjb250ZW50LmJvcmRlci5jb2xvcn0nLFxuICAgIGJhY2tncm91bmQ6ICd7Y29udGVudC5iYWNrZ3JvdW5kfScsXG4gICAgaG92ZXJCYWNrZ3JvdW5kOiAne2NvbnRlbnQuYmFja2dyb3VuZH0nLFxuICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7Y29udGVudC5iYWNrZ3JvdW5kfScsXG4gICAgYWN0aXZlSG92ZXJCYWNrZ3JvdW5kOiAne2NvbnRlbnQuYmFja2dyb3VuZH0nLFxuICAgIGZvY3VzUmluZzoge1xuICAgICAgICB3aWR0aDogJ3tmb2N1cy5yaW5nLndpZHRofScsXG4gICAgICAgIHN0eWxlOiAne2ZvY3VzLnJpbmcuc3R5bGV9JyxcbiAgICAgICAgY29sb3I6ICd7Zm9jdXMucmluZy5jb2xvcn0nLFxuICAgICAgICBvZmZzZXQ6ICctMXB4JyxcbiAgICAgICAgc2hhZG93OiAne2ZvY3VzLnJpbmcuc2hhZG93fSdcbiAgICB9LFxuICAgIHRvZ2dsZUljb246IHtcbiAgICAgICAgY29sb3I6ICd7dGV4dC5tdXRlZC5jb2xvcn0nLFxuICAgICAgICBob3ZlckNvbG9yOiAne3RleHQuY29sb3J9JyxcbiAgICAgICAgYWN0aXZlQ29sb3I6ICd7dGV4dC5jb2xvcn0nLFxuICAgICAgICBhY3RpdmVIb3ZlckNvbG9yOiAne3RleHQuY29sb3J9J1xuICAgIH0sXG4gICAgZmlyc3Q6IHtcbiAgICAgICAgdG9wQm9yZGVyUmFkaXVzOiAne2NvbnRlbnQuYm9yZGVyLnJhZGl1c30nLFxuICAgICAgICBib3JkZXJXaWR0aDogJzAnXG4gICAgfSxcbiAgICBsYXN0OiB7XG4gICAgICAgIGJvdHRvbUJvcmRlclJhZGl1czogJ3tjb250ZW50LmJvcmRlci5yYWRpdXN9JyxcbiAgICAgICAgYWN0aXZlQm90dG9tQm9yZGVyUmFkaXVzOiAnMCdcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgY29udGVudDogQWNjb3JkaW9uVG9rZW5TZWN0aW9ucy5Db250ZW50ID0ge1xuICAgIGJvcmRlcldpZHRoOiAnMCcsXG4gICAgYm9yZGVyQ29sb3I6ICd7Y29udGVudC5ib3JkZXIuY29sb3J9JyxcbiAgICBiYWNrZ3JvdW5kOiAne2NvbnRlbnQuYmFja2dyb3VuZH0nLFxuICAgIGNvbG9yOiAne3RleHQuY29sb3J9JyxcbiAgICBwYWRkaW5nOiAnMCAxLjEyNXJlbSAxLjEyNXJlbSAxLjEyNXJlbSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByb290LFxuICAgIHBhbmVsLFxuICAgIGhlYWRlcixcbiAgICBjb250ZW50XG59IHNhdGlzZmllcyBBY2NvcmRpb25EZXNpZ25Ub2tlbnM7XG4iXSwibWFwcGluZ3MiOiIiLCJpZ25vcmVMaXN0IjpbXX0=