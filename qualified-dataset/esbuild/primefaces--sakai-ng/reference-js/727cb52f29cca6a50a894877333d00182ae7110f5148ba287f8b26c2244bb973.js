var o = {
    gap: "0",
    transitionDuration: "{transition.duration}"
  },
  r = {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderWidth: "1px",
    color: "{content.color}",
    padding: "0.25rem 0.25rem",
    borderRadius: "0",
    first: {
      borderWidth: "1px 1px 0 1px",
      topBorderRadius: "{content.border.radius}"
    },
    last: {
      borderWidth: "0 1px 1px 1px",
      bottomBorderRadius: "{content.border.radius}"
    }
  },
  n = {
    focusBackground: "{navigation.item.focus.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    gap: "0.5rem",
    padding: "{navigation.item.padding}",
    borderRadius: "{content.border.radius}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}"
    }
  },
  i = {
    indent: "1rem"
  },
  t = {
    color: "{navigation.submenu.icon.color}",
    focusColor: "{navigation.submenu.icon.focus.color}"
  },
  a = {
    root: o,
    panel: r,
    item: n,
    submenu: i,
    submenuIcon: t
  };
export { a as default, n as item, r as panel, o as root, i as submenu, t as submenuIcon };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbm9yYS9wYW5lbG1lbnUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQYW5lbE1lbnVEZXNpZ25Ub2tlbnMsIFBhbmVsTWVudVRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL3BhbmVsbWVudSc7XG5cbmV4cG9ydCBjb25zdCByb290OiBQYW5lbE1lbnVUb2tlblNlY3Rpb25zLlJvb3QgPSB7XG4gICAgZ2FwOiAnMCcsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAne3RyYW5zaXRpb24uZHVyYXRpb259J1xufTtcblxuZXhwb3J0IGNvbnN0IHBhbmVsOiBQYW5lbE1lbnVUb2tlblNlY3Rpb25zLlBhbmVsID0ge1xuICAgIGJhY2tncm91bmQ6ICd7Y29udGVudC5iYWNrZ3JvdW5kfScsXG4gICAgYm9yZGVyQ29sb3I6ICd7Y29udGVudC5ib3JkZXIuY29sb3J9JyxcbiAgICBib3JkZXJXaWR0aDogJzFweCcsXG4gICAgY29sb3I6ICd7Y29udGVudC5jb2xvcn0nLFxuICAgIHBhZGRpbmc6ICcwLjI1cmVtIDAuMjVyZW0nLFxuICAgIGJvcmRlclJhZGl1czogJzAnLFxuICAgIGZpcnN0OiB7XG4gICAgICAgIGJvcmRlcldpZHRoOiAnMXB4IDFweCAwIDFweCcsXG4gICAgICAgIHRvcEJvcmRlclJhZGl1czogJ3tjb250ZW50LmJvcmRlci5yYWRpdXN9J1xuICAgIH0sXG4gICAgbGFzdDoge1xuICAgICAgICBib3JkZXJXaWR0aDogJzAgMXB4IDFweCAxcHgnLFxuICAgICAgICBib3R0b21Cb3JkZXJSYWRpdXM6ICd7Y29udGVudC5ib3JkZXIucmFkaXVzfSdcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgaXRlbTogUGFuZWxNZW51VG9rZW5TZWN0aW9ucy5JdGVtID0ge1xuICAgIGZvY3VzQmFja2dyb3VuZDogJ3tuYXZpZ2F0aW9uLml0ZW0uZm9jdXMuYmFja2dyb3VuZH0nLFxuICAgIGNvbG9yOiAne25hdmlnYXRpb24uaXRlbS5jb2xvcn0nLFxuICAgIGZvY3VzQ29sb3I6ICd7bmF2aWdhdGlvbi5pdGVtLmZvY3VzLmNvbG9yfScsXG4gICAgZ2FwOiAnMC41cmVtJyxcbiAgICBwYWRkaW5nOiAne25hdmlnYXRpb24uaXRlbS5wYWRkaW5nfScsXG4gICAgYm9yZGVyUmFkaXVzOiAne2NvbnRlbnQuYm9yZGVyLnJhZGl1c30nLFxuICAgIGljb246IHtcbiAgICAgICAgY29sb3I6ICd7bmF2aWdhdGlvbi5pdGVtLmljb24uY29sb3J9JyxcbiAgICAgICAgZm9jdXNDb2xvcjogJ3tuYXZpZ2F0aW9uLml0ZW0uaWNvbi5mb2N1cy5jb2xvcn0nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHN1Ym1lbnU6IFBhbmVsTWVudVRva2VuU2VjdGlvbnMuU3VibWVudSA9IHtcbiAgICBpbmRlbnQ6ICcxcmVtJ1xufTtcblxuZXhwb3J0IGNvbnN0IHN1Ym1lbnVJY29uOiBQYW5lbE1lbnVUb2tlblNlY3Rpb25zLlN1Ym1lbnVJY29uID0ge1xuICAgIGNvbG9yOiAne25hdmlnYXRpb24uc3VibWVudS5pY29uLmNvbG9yfScsXG4gICAgZm9jdXNDb2xvcjogJ3tuYXZpZ2F0aW9uLnN1Ym1lbnUuaWNvbi5mb2N1cy5jb2xvcn0nXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcm9vdCxcbiAgICBwYW5lbCxcbiAgICBpdGVtLFxuICAgIHN1Ym1lbnUsXG4gICAgc3VibWVudUljb25cbn0gc2F0aXNmaWVzIFBhbmVsTWVudURlc2lnblRva2VucztcbiJdLCJtYXBwaW5ncyI6IiIsImlnbm9yZUxpc3QiOltdfQ==