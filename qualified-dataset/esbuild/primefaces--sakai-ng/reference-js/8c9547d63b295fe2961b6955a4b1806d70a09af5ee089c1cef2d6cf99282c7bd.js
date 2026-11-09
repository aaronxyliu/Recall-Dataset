var o = {
    transitionDuration: "{transition.duration}"
  },
  r = {
    borderWidth: "0",
    borderColor: "{content.border.color}"
  },
  e = {
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{text.color}",
    activeHoverColor: "{text.color}",
    padding: "1.125rem",
    fontWeight: "700",
    borderRadius: "0",
    borderWidth: "0 1px 1px 1px",
    borderColor: "{content.border.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "inset {focus.ring.shadow}"
    },
    toggleIcon: {
      color: "{text.muted.color}",
      hoverColor: "{text.color}",
      activeColor: "{text.color}",
      activeHoverColor: "{text.color}"
    },
    first: {
      topBorderRadius: "{content.border.radius}",
      borderWidth: "1px"
    },
    last: {
      bottomBorderRadius: "{content.border.radius}",
      activeBottomBorderRadius: "0"
    }
  },
  t = {
    borderWidth: "0 1px 1px 1px",
    borderColor: "{content.border.color}",
    background: "{content.background}",
    color: "{text.color}",
    padding: "1.125rem"
  },
  c = {
    light: {
      header: {
        background: "{surface.50}",
        hoverBackground: "{surface.100}",
        activeBackground: "{surface.50}",
        activeHoverBackground: "{surface.100}"
      }
    },
    dark: {
      header: {
        background: "{surface.800}",
        hoverBackground: "{surface.700}",
        activeBackground: "{surface.800}",
        activeHoverBackground: "{surface.700}"
      }
    }
  },
  d = {
    root: o,
    panel: r,
    header: e,
    content: t,
    colorScheme: c
  };
export { c as colorScheme, t as content, d as default, e as header, r as panel, o as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbGFyYS9hY2NvcmRpb24vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBY2NvcmRpb25EZXNpZ25Ub2tlbnMsIEFjY29yZGlvblRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL2FjY29yZGlvbic7XG5cbmV4cG9ydCBjb25zdCByb290OiBBY2NvcmRpb25Ub2tlblNlY3Rpb25zLlJvb3QgPSB7XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAne3RyYW5zaXRpb24uZHVyYXRpb259J1xufTtcblxuZXhwb3J0IGNvbnN0IHBhbmVsOiBBY2NvcmRpb25Ub2tlblNlY3Rpb25zLlBhbmVsID0ge1xuICAgIGJvcmRlcldpZHRoOiAnMCcsXG4gICAgYm9yZGVyQ29sb3I6ICd7Y29udGVudC5ib3JkZXIuY29sb3J9J1xufTtcblxuZXhwb3J0IGNvbnN0IGhlYWRlcjogQWNjb3JkaW9uVG9rZW5TZWN0aW9ucy5IZWFkZXIgPSB7XG4gICAgY29sb3I6ICd7dGV4dC5tdXRlZC5jb2xvcn0nLFxuICAgIGhvdmVyQ29sb3I6ICd7dGV4dC5jb2xvcn0nLFxuICAgIGFjdGl2ZUNvbG9yOiAne3RleHQuY29sb3J9JyxcbiAgICBhY3RpdmVIb3ZlckNvbG9yOiAne3RleHQuY29sb3J9JyxcbiAgICBwYWRkaW5nOiAnMS4xMjVyZW0nLFxuICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxuICAgIGJvcmRlclJhZGl1czogJzAnLFxuICAgIGJvcmRlcldpZHRoOiAnMCAxcHggMXB4IDFweCcsXG4gICAgYm9yZGVyQ29sb3I6ICd7Y29udGVudC5ib3JkZXIuY29sb3J9JyxcbiAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgd2lkdGg6ICd7Zm9jdXMucmluZy53aWR0aH0nLFxuICAgICAgICBzdHlsZTogJ3tmb2N1cy5yaW5nLnN0eWxlfScsXG4gICAgICAgIGNvbG9yOiAne2ZvY3VzLnJpbmcuY29sb3J9JyxcbiAgICAgICAgb2Zmc2V0OiAne2ZvY3VzLnJpbmcub2Zmc2V0fScsXG4gICAgICAgIHNoYWRvdzogJ2luc2V0IHtmb2N1cy5yaW5nLnNoYWRvd30nXG4gICAgfSxcbiAgICB0b2dnbGVJY29uOiB7XG4gICAgICAgIGNvbG9yOiAne3RleHQubXV0ZWQuY29sb3J9JyxcbiAgICAgICAgaG92ZXJDb2xvcjogJ3t0ZXh0LmNvbG9yfScsXG4gICAgICAgIGFjdGl2ZUNvbG9yOiAne3RleHQuY29sb3J9JyxcbiAgICAgICAgYWN0aXZlSG92ZXJDb2xvcjogJ3t0ZXh0LmNvbG9yfSdcbiAgICB9LFxuICAgIGZpcnN0OiB7XG4gICAgICAgIHRvcEJvcmRlclJhZGl1czogJ3tjb250ZW50LmJvcmRlci5yYWRpdXN9JyxcbiAgICAgICAgYm9yZGVyV2lkdGg6ICcxcHgnXG4gICAgfSxcbiAgICBsYXN0OiB7XG4gICAgICAgIGJvdHRvbUJvcmRlclJhZGl1czogJ3tjb250ZW50LmJvcmRlci5yYWRpdXN9JyxcbiAgICAgICAgYWN0aXZlQm90dG9tQm9yZGVyUmFkaXVzOiAnMCdcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgY29udGVudDogQWNjb3JkaW9uVG9rZW5TZWN0aW9ucy5Db250ZW50ID0ge1xuICAgIGJvcmRlcldpZHRoOiAnMCAxcHggMXB4IDFweCcsXG4gICAgYm9yZGVyQ29sb3I6ICd7Y29udGVudC5ib3JkZXIuY29sb3J9JyxcbiAgICBiYWNrZ3JvdW5kOiAne2NvbnRlbnQuYmFja2dyb3VuZH0nLFxuICAgIGNvbG9yOiAne3RleHQuY29sb3J9JyxcbiAgICBwYWRkaW5nOiAnMS4xMjVyZW0nXG59O1xuXG5leHBvcnQgY29uc3QgY29sb3JTY2hlbWU6IEFjY29yZGlvblRva2VuU2VjdGlvbnMuQ29sb3JTY2hlbWUgPSB7XG4gICAgbGlnaHQ6IHtcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuNTB9JyxcbiAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tzdXJmYWNlLjEwMH0nLFxuICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3tzdXJmYWNlLjUwfScsXG4gICAgICAgICAgICBhY3RpdmVIb3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS4xMDB9J1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXJrOiB7XG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjgwMH0nLFxuICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3N1cmZhY2UuNzAwfScsXG4gICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3N1cmZhY2UuODAwfScsXG4gICAgICAgICAgICBhY3RpdmVIb3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS43MDB9J1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJvb3QsXG4gICAgcGFuZWwsXG4gICAgaGVhZGVyLFxuICAgIGNvbnRlbnQsXG4gICAgY29sb3JTY2hlbWVcbn0gc2F0aXNmaWVzIEFjY29yZGlvbkRlc2lnblRva2VucztcbiJdLCJtYXBwaW5ncyI6IiIsImlnbm9yZUxpc3QiOltdfQ==