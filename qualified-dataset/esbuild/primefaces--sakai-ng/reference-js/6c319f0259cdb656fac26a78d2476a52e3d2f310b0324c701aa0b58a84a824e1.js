var r = {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    transitionDuration: "{transition.duration}"
  },
  o = {
    background: "transparent",
    color: "{text.color}",
    padding: "1.125rem",
    borderColor: "unset",
    borderWidth: "0",
    borderRadius: "0",
    gap: "0.5rem"
  },
  e = {
    highlightBorderColor: "{primary.color}",
    padding: "0 1.125rem 1.125rem 1.125rem",
    gap: "1rem"
  },
  t = {
    padding: "1rem",
    gap: "1rem",
    borderColor: "{content.border.color}",
    info: {
      gap: "0.5rem"
    }
  },
  a = {
    gap: "0.5rem"
  },
  n = {
    height: "0.25rem"
  },
  d = {
    gap: "0.5rem"
  },
  i = {
    root: r,
    header: o,
    content: e,
    file: t,
    fileList: a,
    progressbar: n,
    basic: d
  };
export { d as basic, e as content, i as default, t as file, a as fileList, o as header, n as progressbar, r as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvYXVyYS9maWxldXBsb2FkL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRmlsZVVwbG9hZERlc2lnblRva2VucywgRmlsZVVwbG9hZFRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL2ZpbGV1cGxvYWQnO1xuXG5leHBvcnQgY29uc3Qgcm9vdDogRmlsZVVwbG9hZFRva2VuU2VjdGlvbnMuUm9vdCA9IHtcbiAgICBiYWNrZ3JvdW5kOiAne2NvbnRlbnQuYmFja2dyb3VuZH0nLFxuICAgIGJvcmRlckNvbG9yOiAne2NvbnRlbnQuYm9yZGVyLmNvbG9yfScsXG4gICAgY29sb3I6ICd7Y29udGVudC5jb2xvcn0nLFxuICAgIGJvcmRlclJhZGl1czogJ3tjb250ZW50LmJvcmRlci5yYWRpdXN9JyxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246ICd7dHJhbnNpdGlvbi5kdXJhdGlvbn0nXG59O1xuXG5leHBvcnQgY29uc3QgaGVhZGVyOiBGaWxlVXBsb2FkVG9rZW5TZWN0aW9ucy5IZWFkZXIgPSB7XG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBjb2xvcjogJ3t0ZXh0LmNvbG9yfScsXG4gICAgcGFkZGluZzogJzEuMTI1cmVtJyxcbiAgICBib3JkZXJDb2xvcjogJ3Vuc2V0JyxcbiAgICBib3JkZXJXaWR0aDogJzAnLFxuICAgIGJvcmRlclJhZGl1czogJzAnLFxuICAgIGdhcDogJzAuNXJlbSdcbn07XG5cbmV4cG9ydCBjb25zdCBjb250ZW50OiBGaWxlVXBsb2FkVG9rZW5TZWN0aW9ucy5Db250ZW50ID0ge1xuICAgIGhpZ2hsaWdodEJvcmRlckNvbG9yOiAne3ByaW1hcnkuY29sb3J9JyxcbiAgICBwYWRkaW5nOiAnMCAxLjEyNXJlbSAxLjEyNXJlbSAxLjEyNXJlbScsXG4gICAgZ2FwOiAnMXJlbSdcbn07XG5cbmV4cG9ydCBjb25zdCBmaWxlOiBGaWxlVXBsb2FkVG9rZW5TZWN0aW9ucy5GaWxlID0ge1xuICAgIHBhZGRpbmc6ICcxcmVtJyxcbiAgICBnYXA6ICcxcmVtJyxcbiAgICBib3JkZXJDb2xvcjogJ3tjb250ZW50LmJvcmRlci5jb2xvcn0nLFxuICAgIGluZm86IHtcbiAgICAgICAgZ2FwOiAnMC41cmVtJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmaWxlTGlzdDogRmlsZVVwbG9hZFRva2VuU2VjdGlvbnMuRmlsZUxpc3QgPSB7XG4gICAgZ2FwOiAnMC41cmVtJ1xufTtcblxuZXhwb3J0IGNvbnN0IHByb2dyZXNzYmFyOiBGaWxlVXBsb2FkVG9rZW5TZWN0aW9ucy5Qcm9ncmVzc2JhciA9IHtcbiAgICBoZWlnaHQ6ICcwLjI1cmVtJ1xufTtcblxuZXhwb3J0IGNvbnN0IGJhc2ljOiBGaWxlVXBsb2FkVG9rZW5TZWN0aW9ucy5CYXNpYyA9IHtcbiAgICBnYXA6ICcwLjVyZW0nXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcm9vdCxcbiAgICBoZWFkZXIsXG4gICAgY29udGVudCxcbiAgICBmaWxlLFxuICAgIGZpbGVMaXN0LFxuICAgIHByb2dyZXNzYmFyLFxuICAgIGJhc2ljXG59IHNhdGlzZmllcyBGaWxlVXBsb2FkRGVzaWduVG9rZW5zO1xuIl0sIm1hcHBpbmdzIjoiIiwiaWdub3JlTGlzdCI6W119