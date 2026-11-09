var o = {
    padding: "0.5rem 1rem",
    gap: "0.25rem",
    borderRadius: "{content.border.radius}",
    background: "{content.background}",
    color: "{content.color}",
    transitionDuration: "{transition.duration}"
  },
  r = {
    background: "transparent",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    selectedColor: "{highlight.color}",
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  t = {
    color: "{text.muted.color}"
  },
  e = {
    maxWidth: "2.5rem"
  },
  n = {
    root: o,
    navButton: r,
    currentPageReport: t,
    jumpToPageInput: e
  };
export { t as currentPageReport, n as default, e as jumpToPageInput, r as navButton, o as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvYXVyYS9wYWdpbmF0b3IvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQYWdpbmF0b3JEZXNpZ25Ub2tlbnMsIFBhZ2luYXRvclRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL3BhZ2luYXRvcic7XG5cbmV4cG9ydCBjb25zdCByb290OiBQYWdpbmF0b3JUb2tlblNlY3Rpb25zLlJvb3QgPSB7XG4gICAgcGFkZGluZzogJzAuNXJlbSAxcmVtJyxcbiAgICBnYXA6ICcwLjI1cmVtJyxcbiAgICBib3JkZXJSYWRpdXM6ICd7Y29udGVudC5ib3JkZXIucmFkaXVzfScsXG4gICAgYmFja2dyb3VuZDogJ3tjb250ZW50LmJhY2tncm91bmR9JyxcbiAgICBjb2xvcjogJ3tjb250ZW50LmNvbG9yfScsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAne3RyYW5zaXRpb24uZHVyYXRpb259J1xufTtcblxuZXhwb3J0IGNvbnN0IG5hdkJ1dHRvbjogUGFnaW5hdG9yVG9rZW5TZWN0aW9ucy5OYXZCdXR0b24gPSB7XG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBob3ZlckJhY2tncm91bmQ6ICd7Y29udGVudC5ob3Zlci5iYWNrZ3JvdW5kfScsXG4gICAgc2VsZWN0ZWRCYWNrZ3JvdW5kOiAne2hpZ2hsaWdodC5iYWNrZ3JvdW5kfScsXG4gICAgY29sb3I6ICd7dGV4dC5tdXRlZC5jb2xvcn0nLFxuICAgIGhvdmVyQ29sb3I6ICd7dGV4dC5ob3Zlci5tdXRlZC5jb2xvcn0nLFxuICAgIHNlbGVjdGVkQ29sb3I6ICd7aGlnaGxpZ2h0LmNvbG9yfScsXG4gICAgd2lkdGg6ICcyLjVyZW0nLFxuICAgIGhlaWdodDogJzIuNXJlbScsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgd2lkdGg6ICd7Zm9jdXMucmluZy53aWR0aH0nLFxuICAgICAgICBzdHlsZTogJ3tmb2N1cy5yaW5nLnN0eWxlfScsXG4gICAgICAgIGNvbG9yOiAne2ZvY3VzLnJpbmcuY29sb3J9JyxcbiAgICAgICAgb2Zmc2V0OiAne2ZvY3VzLnJpbmcub2Zmc2V0fScsXG4gICAgICAgIHNoYWRvdzogJ3tmb2N1cy5yaW5nLnNoYWRvd30nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGN1cnJlbnRQYWdlUmVwb3J0OiBQYWdpbmF0b3JUb2tlblNlY3Rpb25zLkN1cnJlbnRQYWdlUmVwb3J0ID0ge1xuICAgIGNvbG9yOiAne3RleHQubXV0ZWQuY29sb3J9J1xufTtcblxuZXhwb3J0IGNvbnN0IGp1bXBUb1BhZ2VJbnB1dDogUGFnaW5hdG9yVG9rZW5TZWN0aW9ucy5KdW1wVG9QYWdlSW5wdXQgPSB7XG4gICAgbWF4V2lkdGg6ICcyLjVyZW0nXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcm9vdCxcbiAgICBuYXZCdXR0b24sXG4gICAgY3VycmVudFBhZ2VSZXBvcnQsXG4gICAganVtcFRvUGFnZUlucHV0XG59IHNhdGlzZmllcyBQYWdpbmF0b3JEZXNpZ25Ub2tlbnM7XG4iXSwibWFwcGluZ3MiOiIiLCJpZ25vcmVMaXN0IjpbXX0=