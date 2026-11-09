var o = {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledHoverBackground: "{form.field.filled.hover.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}"
    }
  },
  d = {
    width: "2.5rem",
    color: "{form.field.icon.color}"
  },
  r = {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  l = {
    padding: "{list.padding}",
    gap: "{list.gap}",
    header: {
      padding: "{list.header.padding}"
    }
  },
  i = {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}",
    gap: "0.5rem"
  },
  e = {
    background: "{list.option.group.background}",
    color: "{list.option.group.color}",
    fontWeight: "{list.option.group.font.weight}",
    padding: "{list.option.group.padding}"
  },
  f = {
    color: "{form.field.icon.color}"
  },
  a = {
    borderRadius: "{border.radius.sm}"
  },
  c = {
    padding: "{list.option.padding}"
  },
  n = {
    root: o,
    dropdown: d,
    overlay: r,
    list: l,
    option: i,
    optionGroup: e,
    chip: a,
    clearIcon: f,
    emptyMessage: c
  };
export { a as chip, f as clearIcon, n as default, d as dropdown, c as emptyMessage, l as list, i as option, e as optionGroup, r as overlay, o as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvYXVyYS9tdWx0aXNlbGVjdC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE11bHRpU2VsZWN0RGVzaWduVG9rZW5zLCBNdWx0aVNlbGVjdFRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL211bHRpc2VsZWN0JztcblxuZXhwb3J0IGNvbnN0IHJvb3Q6IE11bHRpU2VsZWN0VG9rZW5TZWN0aW9ucy5Sb290ID0ge1xuICAgIGJhY2tncm91bmQ6ICd7Zm9ybS5maWVsZC5iYWNrZ3JvdW5kfScsXG4gICAgZGlzYWJsZWRCYWNrZ3JvdW5kOiAne2Zvcm0uZmllbGQuZGlzYWJsZWQuYmFja2dyb3VuZH0nLFxuICAgIGZpbGxlZEJhY2tncm91bmQ6ICd7Zm9ybS5maWVsZC5maWxsZWQuYmFja2dyb3VuZH0nLFxuICAgIGZpbGxlZEhvdmVyQmFja2dyb3VuZDogJ3tmb3JtLmZpZWxkLmZpbGxlZC5ob3Zlci5iYWNrZ3JvdW5kfScsXG4gICAgZmlsbGVkRm9jdXNCYWNrZ3JvdW5kOiAne2Zvcm0uZmllbGQuZmlsbGVkLmZvY3VzLmJhY2tncm91bmR9JyxcbiAgICBib3JkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmJvcmRlci5jb2xvcn0nLFxuICAgIGhvdmVyQm9yZGVyQ29sb3I6ICd7Zm9ybS5maWVsZC5ob3Zlci5ib3JkZXIuY29sb3J9JyxcbiAgICBmb2N1c0JvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuZm9jdXMuYm9yZGVyLmNvbG9yfScsXG4gICAgaW52YWxpZEJvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuaW52YWxpZC5ib3JkZXIuY29sb3J9JyxcbiAgICBjb2xvcjogJ3tmb3JtLmZpZWxkLmNvbG9yfScsXG4gICAgZGlzYWJsZWRDb2xvcjogJ3tmb3JtLmZpZWxkLmRpc2FibGVkLmNvbG9yfScsXG4gICAgcGxhY2Vob2xkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLnBsYWNlaG9sZGVyLmNvbG9yfScsXG4gICAgaW52YWxpZFBsYWNlaG9sZGVyQ29sb3I6ICd7Zm9ybS5maWVsZC5pbnZhbGlkLnBsYWNlaG9sZGVyLmNvbG9yfScsXG4gICAgc2hhZG93OiAne2Zvcm0uZmllbGQuc2hhZG93fScsXG4gICAgcGFkZGluZ1g6ICd7Zm9ybS5maWVsZC5wYWRkaW5nLnh9JyxcbiAgICBwYWRkaW5nWTogJ3tmb3JtLmZpZWxkLnBhZGRpbmcueX0nLFxuICAgIGJvcmRlclJhZGl1czogJ3tmb3JtLmZpZWxkLmJvcmRlci5yYWRpdXN9JyxcbiAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgd2lkdGg6ICd7Zm9ybS5maWVsZC5mb2N1cy5yaW5nLndpZHRofScsXG4gICAgICAgIHN0eWxlOiAne2Zvcm0uZmllbGQuZm9jdXMucmluZy5zdHlsZX0nLFxuICAgICAgICBjb2xvcjogJ3tmb3JtLmZpZWxkLmZvY3VzLnJpbmcuY29sb3J9JyxcbiAgICAgICAgb2Zmc2V0OiAne2Zvcm0uZmllbGQuZm9jdXMucmluZy5vZmZzZXR9JyxcbiAgICAgICAgc2hhZG93OiAne2Zvcm0uZmllbGQuZm9jdXMucmluZy5zaGFkb3d9J1xuICAgIH0sXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAne2Zvcm0uZmllbGQudHJhbnNpdGlvbi5kdXJhdGlvbn0nLFxuICAgIHNtOiB7XG4gICAgICAgIGZvbnRTaXplOiAne2Zvcm0uZmllbGQuc20uZm9udC5zaXplfScsXG4gICAgICAgIHBhZGRpbmdYOiAne2Zvcm0uZmllbGQuc20ucGFkZGluZy54fScsXG4gICAgICAgIHBhZGRpbmdZOiAne2Zvcm0uZmllbGQuc20ucGFkZGluZy55fSdcbiAgICB9LFxuICAgIGxnOiB7XG4gICAgICAgIGZvbnRTaXplOiAne2Zvcm0uZmllbGQubGcuZm9udC5zaXplfScsXG4gICAgICAgIHBhZGRpbmdYOiAne2Zvcm0uZmllbGQubGcucGFkZGluZy54fScsXG4gICAgICAgIHBhZGRpbmdZOiAne2Zvcm0uZmllbGQubGcucGFkZGluZy55fSdcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd246IE11bHRpU2VsZWN0VG9rZW5TZWN0aW9ucy5Ecm9wZG93biA9IHtcbiAgICB3aWR0aDogJzIuNXJlbScsXG4gICAgY29sb3I6ICd7Zm9ybS5maWVsZC5pY29uLmNvbG9yfSdcbn07XG5cbmV4cG9ydCBjb25zdCBvdmVybGF5OiBNdWx0aVNlbGVjdFRva2VuU2VjdGlvbnMuT3ZlcmxheSA9IHtcbiAgICBiYWNrZ3JvdW5kOiAne292ZXJsYXkuc2VsZWN0LmJhY2tncm91bmR9JyxcbiAgICBib3JkZXJDb2xvcjogJ3tvdmVybGF5LnNlbGVjdC5ib3JkZXIuY29sb3J9JyxcbiAgICBib3JkZXJSYWRpdXM6ICd7b3ZlcmxheS5zZWxlY3QuYm9yZGVyLnJhZGl1c30nLFxuICAgIGNvbG9yOiAne292ZXJsYXkuc2VsZWN0LmNvbG9yfScsXG4gICAgc2hhZG93OiAne292ZXJsYXkuc2VsZWN0LnNoYWRvd30nXG59O1xuXG5leHBvcnQgY29uc3QgbGlzdDogTXVsdGlTZWxlY3RUb2tlblNlY3Rpb25zLkxpc3QgPSB7XG4gICAgcGFkZGluZzogJ3tsaXN0LnBhZGRpbmd9JyxcbiAgICBnYXA6ICd7bGlzdC5nYXB9JyxcbiAgICBoZWFkZXI6IHtcbiAgICAgICAgcGFkZGluZzogJ3tsaXN0LmhlYWRlci5wYWRkaW5nfSdcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3Qgb3B0aW9uOiBNdWx0aVNlbGVjdFRva2VuU2VjdGlvbnMuT3B0aW9uID0ge1xuICAgIGZvY3VzQmFja2dyb3VuZDogJ3tsaXN0Lm9wdGlvbi5mb2N1cy5iYWNrZ3JvdW5kfScsXG4gICAgc2VsZWN0ZWRCYWNrZ3JvdW5kOiAne2xpc3Qub3B0aW9uLnNlbGVjdGVkLmJhY2tncm91bmR9JyxcbiAgICBzZWxlY3RlZEZvY3VzQmFja2dyb3VuZDogJ3tsaXN0Lm9wdGlvbi5zZWxlY3RlZC5mb2N1cy5iYWNrZ3JvdW5kfScsXG4gICAgY29sb3I6ICd7bGlzdC5vcHRpb24uY29sb3J9JyxcbiAgICBmb2N1c0NvbG9yOiAne2xpc3Qub3B0aW9uLmZvY3VzLmNvbG9yfScsXG4gICAgc2VsZWN0ZWRDb2xvcjogJ3tsaXN0Lm9wdGlvbi5zZWxlY3RlZC5jb2xvcn0nLFxuICAgIHNlbGVjdGVkRm9jdXNDb2xvcjogJ3tsaXN0Lm9wdGlvbi5zZWxlY3RlZC5mb2N1cy5jb2xvcn0nLFxuICAgIHBhZGRpbmc6ICd7bGlzdC5vcHRpb24ucGFkZGluZ30nLFxuICAgIGJvcmRlclJhZGl1czogJ3tsaXN0Lm9wdGlvbi5ib3JkZXIucmFkaXVzfScsXG4gICAgZ2FwOiAnMC41cmVtJ1xufTtcblxuZXhwb3J0IGNvbnN0IG9wdGlvbkdyb3VwOiBNdWx0aVNlbGVjdFRva2VuU2VjdGlvbnMuT3B0aW9uR3JvdXAgPSB7XG4gICAgYmFja2dyb3VuZDogJ3tsaXN0Lm9wdGlvbi5ncm91cC5iYWNrZ3JvdW5kfScsXG4gICAgY29sb3I6ICd7bGlzdC5vcHRpb24uZ3JvdXAuY29sb3J9JyxcbiAgICBmb250V2VpZ2h0OiAne2xpc3Qub3B0aW9uLmdyb3VwLmZvbnQud2VpZ2h0fScsXG4gICAgcGFkZGluZzogJ3tsaXN0Lm9wdGlvbi5ncm91cC5wYWRkaW5nfSdcbn07XG5cbmV4cG9ydCBjb25zdCBjbGVhckljb246IE11bHRpU2VsZWN0VG9rZW5TZWN0aW9ucy5DbGVhckljb24gPSB7XG4gICAgY29sb3I6ICd7Zm9ybS5maWVsZC5pY29uLmNvbG9yfSdcbn07XG5cbmV4cG9ydCBjb25zdCBjaGlwOiBNdWx0aVNlbGVjdFRva2VuU2VjdGlvbnMuQ2hpcCA9IHtcbiAgICBib3JkZXJSYWRpdXM6ICd7Ym9yZGVyLnJhZGl1cy5zbX0nXG59O1xuXG5leHBvcnQgY29uc3QgZW1wdHlNZXNzYWdlOiBNdWx0aVNlbGVjdFRva2VuU2VjdGlvbnMuRW1wdHlNZXNzYWdlID0ge1xuICAgIHBhZGRpbmc6ICd7bGlzdC5vcHRpb24ucGFkZGluZ30nXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcm9vdCxcbiAgICBkcm9wZG93bixcbiAgICBvdmVybGF5LFxuICAgIGxpc3QsXG4gICAgb3B0aW9uLFxuICAgIG9wdGlvbkdyb3VwLFxuICAgIGNoaXAsXG4gICAgY2xlYXJJY29uLFxuICAgIGVtcHR5TWVzc2FnZVxufSBzYXRpc2ZpZXMgTXVsdGlTZWxlY3REZXNpZ25Ub2tlbnM7XG4iXSwibWFwcGluZ3MiOiIiLCJpZ25vcmVMaXN0IjpbXX0=