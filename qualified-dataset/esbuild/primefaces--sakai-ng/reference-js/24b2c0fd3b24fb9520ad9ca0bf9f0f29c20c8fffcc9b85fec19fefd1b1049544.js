var o = {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    borderColor: "{form.field.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    shadow: "{form.field.shadow}",
    borderRadius: "{form.field.border.radius}",
    transitionDuration: "{form.field.transition.duration}"
  },
  r = {
    padding: "{list.padding}",
    gap: "{list.gap}",
    header: {
      padding: "{list.header.padding}"
    }
  },
  d = {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}"
  },
  i = {
    background: "{list.option.group.background}",
    color: "{list.option.group.color}",
    fontWeight: "{list.option.group.font.weight}",
    padding: "{list.option.group.padding}"
  },
  t = {
    color: "{list.option.color}",
    gutterStart: "-0.5rem",
    gutterEnd: "0.5rem"
  },
  e = {
    padding: "{list.option.padding}"
  },
  l = {
    light: {
      option: {
        stripedBackground: "{surface.50}"
      }
    },
    dark: {
      option: {
        stripedBackground: "{surface.900}"
      }
    }
  },
  n = {
    root: o,
    list: r,
    option: d,
    optionGroup: i,
    checkmark: t,
    emptyMessage: e,
    colorScheme: l
  };
export { t as checkmark, l as colorScheme, n as default, e as emptyMessage, r as list, d as option, i as optionGroup, o as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbGFyYS9saXN0Ym94L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTGlzdGJveERlc2lnblRva2VucywgTGlzdGJveFRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL2xpc3Rib3gnO1xuXG5leHBvcnQgY29uc3Qgcm9vdDogTGlzdGJveFRva2VuU2VjdGlvbnMuUm9vdCA9IHtcbiAgICBiYWNrZ3JvdW5kOiAne2Zvcm0uZmllbGQuYmFja2dyb3VuZH0nLFxuICAgIGRpc2FibGVkQmFja2dyb3VuZDogJ3tmb3JtLmZpZWxkLmRpc2FibGVkLmJhY2tncm91bmR9JyxcbiAgICBib3JkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmJvcmRlci5jb2xvcn0nLFxuICAgIGludmFsaWRCb3JkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmludmFsaWQuYm9yZGVyLmNvbG9yfScsXG4gICAgY29sb3I6ICd7Zm9ybS5maWVsZC5jb2xvcn0nLFxuICAgIGRpc2FibGVkQ29sb3I6ICd7Zm9ybS5maWVsZC5kaXNhYmxlZC5jb2xvcn0nLFxuICAgIHNoYWRvdzogJ3tmb3JtLmZpZWxkLnNoYWRvd30nLFxuICAgIGJvcmRlclJhZGl1czogJ3tmb3JtLmZpZWxkLmJvcmRlci5yYWRpdXN9JyxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246ICd7Zm9ybS5maWVsZC50cmFuc2l0aW9uLmR1cmF0aW9ufSdcbn07XG5cbmV4cG9ydCBjb25zdCBsaXN0OiBMaXN0Ym94VG9rZW5TZWN0aW9ucy5MaXN0ID0ge1xuICAgIHBhZGRpbmc6ICd7bGlzdC5wYWRkaW5nfScsXG4gICAgZ2FwOiAne2xpc3QuZ2FwfScsXG4gICAgaGVhZGVyOiB7XG4gICAgICAgIHBhZGRpbmc6ICd7bGlzdC5oZWFkZXIucGFkZGluZ30nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG9wdGlvbjogTGlzdGJveFRva2VuU2VjdGlvbnMuT3B0aW9uID0ge1xuICAgIGZvY3VzQmFja2dyb3VuZDogJ3tsaXN0Lm9wdGlvbi5mb2N1cy5iYWNrZ3JvdW5kfScsXG4gICAgc2VsZWN0ZWRCYWNrZ3JvdW5kOiAne2xpc3Qub3B0aW9uLnNlbGVjdGVkLmJhY2tncm91bmR9JyxcbiAgICBzZWxlY3RlZEZvY3VzQmFja2dyb3VuZDogJ3tsaXN0Lm9wdGlvbi5zZWxlY3RlZC5mb2N1cy5iYWNrZ3JvdW5kfScsXG4gICAgY29sb3I6ICd7bGlzdC5vcHRpb24uY29sb3J9JyxcbiAgICBmb2N1c0NvbG9yOiAne2xpc3Qub3B0aW9uLmZvY3VzLmNvbG9yfScsXG4gICAgc2VsZWN0ZWRDb2xvcjogJ3tsaXN0Lm9wdGlvbi5zZWxlY3RlZC5jb2xvcn0nLFxuICAgIHNlbGVjdGVkRm9jdXNDb2xvcjogJ3tsaXN0Lm9wdGlvbi5zZWxlY3RlZC5mb2N1cy5jb2xvcn0nLFxuICAgIHBhZGRpbmc6ICd7bGlzdC5vcHRpb24ucGFkZGluZ30nLFxuICAgIGJvcmRlclJhZGl1czogJ3tsaXN0Lm9wdGlvbi5ib3JkZXIucmFkaXVzfSdcbn07XG5cbmV4cG9ydCBjb25zdCBvcHRpb25Hcm91cDogTGlzdGJveFRva2VuU2VjdGlvbnMuT3B0aW9uR3JvdXAgPSB7XG4gICAgYmFja2dyb3VuZDogJ3tsaXN0Lm9wdGlvbi5ncm91cC5iYWNrZ3JvdW5kfScsXG4gICAgY29sb3I6ICd7bGlzdC5vcHRpb24uZ3JvdXAuY29sb3J9JyxcbiAgICBmb250V2VpZ2h0OiAne2xpc3Qub3B0aW9uLmdyb3VwLmZvbnQud2VpZ2h0fScsXG4gICAgcGFkZGluZzogJ3tsaXN0Lm9wdGlvbi5ncm91cC5wYWRkaW5nfSdcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja21hcms6IExpc3Rib3hUb2tlblNlY3Rpb25zLkNoZWNrbWFyayA9IHtcbiAgICBjb2xvcjogJ3tsaXN0Lm9wdGlvbi5jb2xvcn0nLFxuICAgIGd1dHRlclN0YXJ0OiAnLTAuNXJlbScsXG4gICAgZ3V0dGVyRW5kOiAnMC41cmVtJ1xufTtcblxuZXhwb3J0IGNvbnN0IGVtcHR5TWVzc2FnZTogTGlzdGJveFRva2VuU2VjdGlvbnMuRW1wdHlNZXNzYWdlID0ge1xuICAgIHBhZGRpbmc6ICd7bGlzdC5vcHRpb24ucGFkZGluZ30nXG59O1xuXG5leHBvcnQgY29uc3QgY29sb3JTY2hlbWU6IExpc3Rib3hUb2tlblNlY3Rpb25zLkNvbG9yU2NoZW1lID0ge1xuICAgIGxpZ2h0OiB7XG4gICAgICAgIG9wdGlvbjoge1xuICAgICAgICAgICAgc3RyaXBlZEJhY2tncm91bmQ6ICd7c3VyZmFjZS41MH0nXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhcms6IHtcbiAgICAgICAgb3B0aW9uOiB7XG4gICAgICAgICAgICBzdHJpcGVkQmFja2dyb3VuZDogJ3tzdXJmYWNlLjkwMH0nXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcm9vdCxcbiAgICBsaXN0LFxuICAgIG9wdGlvbixcbiAgICBvcHRpb25Hcm91cCxcbiAgICBjaGVja21hcmssXG4gICAgZW1wdHlNZXNzYWdlLFxuICAgIGNvbG9yU2NoZW1lXG59IHNhdGlzZmllcyBMaXN0Ym94RGVzaWduVG9rZW5zO1xuIl0sIm1hcHBpbmdzIjoiIiwiaWdub3JlTGlzdCI6W119