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
    transitionDuration: "{form.field.transition.duration}"
  },
  r = {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  d = {
    padding: "{list.padding}",
    gap: "{list.gap}"
  },
  e = {
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
  l = {
    background: "{list.option.group.background}",
    color: "{list.option.group.color}",
    fontWeight: "{list.option.group.font.weight}",
    padding: "{list.option.group.padding}"
  },
  i = {
    width: "2.5rem",
    sm: {
      width: "2rem"
    },
    lg: {
      width: "3rem"
    },
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.border.color}",
    activeBorderColor: "{form.field.border.color}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    }
  },
  c = {
    borderRadius: "{border.radius.sm}"
  },
  f = {
    padding: "{list.option.padding}"
  },
  s = {
    light: {
      chip: {
        focusBackground: "{surface.200}",
        focusColor: "{surface.800}"
      },
      dropdown: {
        background: "{surface.50}",
        hoverBackground: "{surface.100}",
        activeBackground: "{surface.200}",
        color: "{surface.600}",
        hoverColor: "{surface.700}",
        activeColor: "{surface.800}"
      }
    },
    dark: {
      chip: {
        focusBackground: "{surface.700}",
        focusColor: "{surface.0}"
      },
      dropdown: {
        background: "{surface.800}",
        hoverBackground: "{surface.700}",
        activeBackground: "{surface.600}",
        color: "{surface.300}",
        hoverColor: "{surface.200}",
        activeColor: "{surface.100}"
      }
    }
  },
  a = {
    root: o,
    overlay: r,
    list: d,
    option: e,
    optionGroup: l,
    dropdown: i,
    chip: c,
    emptyMessage: f,
    colorScheme: s
  };
export { c as chip, s as colorScheme, a as default, i as dropdown, f as emptyMessage, d as list, e as option, l as optionGroup, r as overlay, o as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbGFyYS9hdXRvY29tcGxldGUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBdXRvQ29tcGxldGVEZXNpZ25Ub2tlbnMsIEF1dG9Db21wbGV0ZVRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL2F1dG9jb21wbGV0ZSc7XG5cbmV4cG9ydCBjb25zdCByb290OiBBdXRvQ29tcGxldGVUb2tlblNlY3Rpb25zLlJvb3QgPSB7XG4gICAgYmFja2dyb3VuZDogJ3tmb3JtLmZpZWxkLmJhY2tncm91bmR9JyxcbiAgICBkaXNhYmxlZEJhY2tncm91bmQ6ICd7Zm9ybS5maWVsZC5kaXNhYmxlZC5iYWNrZ3JvdW5kfScsXG4gICAgZmlsbGVkQmFja2dyb3VuZDogJ3tmb3JtLmZpZWxkLmZpbGxlZC5iYWNrZ3JvdW5kfScsXG4gICAgZmlsbGVkSG92ZXJCYWNrZ3JvdW5kOiAne2Zvcm0uZmllbGQuZmlsbGVkLmhvdmVyLmJhY2tncm91bmR9JyxcbiAgICBmaWxsZWRGb2N1c0JhY2tncm91bmQ6ICd7Zm9ybS5maWVsZC5maWxsZWQuZm9jdXMuYmFja2dyb3VuZH0nLFxuICAgIGJvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuYm9yZGVyLmNvbG9yfScsXG4gICAgaG92ZXJCb3JkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmhvdmVyLmJvcmRlci5jb2xvcn0nLFxuICAgIGZvY3VzQm9yZGVyQ29sb3I6ICd7Zm9ybS5maWVsZC5mb2N1cy5ib3JkZXIuY29sb3J9JyxcbiAgICBpbnZhbGlkQm9yZGVyQ29sb3I6ICd7Zm9ybS5maWVsZC5pbnZhbGlkLmJvcmRlci5jb2xvcn0nLFxuICAgIGNvbG9yOiAne2Zvcm0uZmllbGQuY29sb3J9JyxcbiAgICBkaXNhYmxlZENvbG9yOiAne2Zvcm0uZmllbGQuZGlzYWJsZWQuY29sb3J9JyxcbiAgICBwbGFjZWhvbGRlckNvbG9yOiAne2Zvcm0uZmllbGQucGxhY2Vob2xkZXIuY29sb3J9JyxcbiAgICBpbnZhbGlkUGxhY2Vob2xkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmludmFsaWQucGxhY2Vob2xkZXIuY29sb3J9JyxcbiAgICBzaGFkb3c6ICd7Zm9ybS5maWVsZC5zaGFkb3d9JyxcbiAgICBwYWRkaW5nWDogJ3tmb3JtLmZpZWxkLnBhZGRpbmcueH0nLFxuICAgIHBhZGRpbmdZOiAne2Zvcm0uZmllbGQucGFkZGluZy55fScsXG4gICAgYm9yZGVyUmFkaXVzOiAne2Zvcm0uZmllbGQuYm9yZGVyLnJhZGl1c30nLFxuICAgIGZvY3VzUmluZzoge1xuICAgICAgICB3aWR0aDogJ3tmb3JtLmZpZWxkLmZvY3VzLnJpbmcud2lkdGh9JyxcbiAgICAgICAgc3R5bGU6ICd7Zm9ybS5maWVsZC5mb2N1cy5yaW5nLnN0eWxlfScsXG4gICAgICAgIGNvbG9yOiAne2Zvcm0uZmllbGQuZm9jdXMucmluZy5jb2xvcn0nLFxuICAgICAgICBvZmZzZXQ6ICd7Zm9ybS5maWVsZC5mb2N1cy5yaW5nLm9mZnNldH0nLFxuICAgICAgICBzaGFkb3c6ICd7Zm9ybS5maWVsZC5mb2N1cy5yaW5nLnNoYWRvd30nXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246ICd7Zm9ybS5maWVsZC50cmFuc2l0aW9uLmR1cmF0aW9ufSdcbn07XG5cbmV4cG9ydCBjb25zdCBvdmVybGF5OiBBdXRvQ29tcGxldGVUb2tlblNlY3Rpb25zLk92ZXJsYXkgPSB7XG4gICAgYmFja2dyb3VuZDogJ3tvdmVybGF5LnNlbGVjdC5iYWNrZ3JvdW5kfScsXG4gICAgYm9yZGVyQ29sb3I6ICd7b3ZlcmxheS5zZWxlY3QuYm9yZGVyLmNvbG9yfScsXG4gICAgYm9yZGVyUmFkaXVzOiAne292ZXJsYXkuc2VsZWN0LmJvcmRlci5yYWRpdXN9JyxcbiAgICBjb2xvcjogJ3tvdmVybGF5LnNlbGVjdC5jb2xvcn0nLFxuICAgIHNoYWRvdzogJ3tvdmVybGF5LnNlbGVjdC5zaGFkb3d9J1xufTtcblxuZXhwb3J0IGNvbnN0IGxpc3Q6IEF1dG9Db21wbGV0ZVRva2VuU2VjdGlvbnMuTGlzdCA9IHtcbiAgICBwYWRkaW5nOiAne2xpc3QucGFkZGluZ30nLFxuICAgIGdhcDogJ3tsaXN0LmdhcH0nXG59O1xuXG5leHBvcnQgY29uc3Qgb3B0aW9uOiBBdXRvQ29tcGxldGVUb2tlblNlY3Rpb25zLk9wdGlvbiA9IHtcbiAgICBmb2N1c0JhY2tncm91bmQ6ICd7bGlzdC5vcHRpb24uZm9jdXMuYmFja2dyb3VuZH0nLFxuICAgIHNlbGVjdGVkQmFja2dyb3VuZDogJ3tsaXN0Lm9wdGlvbi5zZWxlY3RlZC5iYWNrZ3JvdW5kfScsXG4gICAgc2VsZWN0ZWRGb2N1c0JhY2tncm91bmQ6ICd7bGlzdC5vcHRpb24uc2VsZWN0ZWQuZm9jdXMuYmFja2dyb3VuZH0nLFxuICAgIGNvbG9yOiAne2xpc3Qub3B0aW9uLmNvbG9yfScsXG4gICAgZm9jdXNDb2xvcjogJ3tsaXN0Lm9wdGlvbi5mb2N1cy5jb2xvcn0nLFxuICAgIHNlbGVjdGVkQ29sb3I6ICd7bGlzdC5vcHRpb24uc2VsZWN0ZWQuY29sb3J9JyxcbiAgICBzZWxlY3RlZEZvY3VzQ29sb3I6ICd7bGlzdC5vcHRpb24uc2VsZWN0ZWQuZm9jdXMuY29sb3J9JyxcbiAgICBwYWRkaW5nOiAne2xpc3Qub3B0aW9uLnBhZGRpbmd9JyxcbiAgICBib3JkZXJSYWRpdXM6ICd7bGlzdC5vcHRpb24uYm9yZGVyLnJhZGl1c30nXG59O1xuXG5leHBvcnQgY29uc3Qgb3B0aW9uR3JvdXA6IEF1dG9Db21wbGV0ZVRva2VuU2VjdGlvbnMuT3B0aW9uR3JvdXAgPSB7XG4gICAgYmFja2dyb3VuZDogJ3tsaXN0Lm9wdGlvbi5ncm91cC5iYWNrZ3JvdW5kfScsXG4gICAgY29sb3I6ICd7bGlzdC5vcHRpb24uZ3JvdXAuY29sb3J9JyxcbiAgICBmb250V2VpZ2h0OiAne2xpc3Qub3B0aW9uLmdyb3VwLmZvbnQud2VpZ2h0fScsXG4gICAgcGFkZGluZzogJ3tsaXN0Lm9wdGlvbi5ncm91cC5wYWRkaW5nfSdcbn07XG5cbmV4cG9ydCBjb25zdCBkcm9wZG93bjogQXV0b0NvbXBsZXRlVG9rZW5TZWN0aW9ucy5Ecm9wZG93biA9IHtcbiAgICB3aWR0aDogJzIuNXJlbScsXG4gICAgc206IHtcbiAgICAgICAgd2lkdGg6ICcycmVtJ1xuICAgIH0sXG4gICAgbGc6IHtcbiAgICAgICAgd2lkdGg6ICczcmVtJ1xuICAgIH0sXG4gICAgYm9yZGVyQ29sb3I6ICd7Zm9ybS5maWVsZC5ib3JkZXIuY29sb3J9JyxcbiAgICBob3ZlckJvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuYm9yZGVyLmNvbG9yfScsXG4gICAgYWN0aXZlQm9yZGVyQ29sb3I6ICd7Zm9ybS5maWVsZC5ib3JkZXIuY29sb3J9JyxcbiAgICBib3JkZXJSYWRpdXM6ICd7Zm9ybS5maWVsZC5ib3JkZXIucmFkaXVzfScsXG4gICAgZm9jdXNSaW5nOiB7XG4gICAgICAgIHdpZHRoOiAne2Zvcm0uZmllbGQuZm9jdXMucmluZy53aWR0aH0nLFxuICAgICAgICBzdHlsZTogJ3tmb3JtLmZpZWxkLmZvY3VzLnJpbmcuc3R5bGV9JyxcbiAgICAgICAgY29sb3I6ICd7Zm9ybS5maWVsZC5mb2N1cy5yaW5nLmNvbG9yfScsXG4gICAgICAgIG9mZnNldDogJ3tmb3JtLmZpZWxkLmZvY3VzLnJpbmcub2Zmc2V0fScsXG4gICAgICAgIHNoYWRvdzogJ3tmb3JtLmZpZWxkLmZvY3VzLnJpbmcuc2hhZG93fSdcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgY2hpcDogQXV0b0NvbXBsZXRlVG9rZW5TZWN0aW9ucy5DaGlwID0ge1xuICAgIGJvcmRlclJhZGl1czogJ3tib3JkZXIucmFkaXVzLnNtfSdcbn07XG5cbmV4cG9ydCBjb25zdCBlbXB0eU1lc3NhZ2U6IEF1dG9Db21wbGV0ZVRva2VuU2VjdGlvbnMuRW1wdHlNZXNzYWdlID0ge1xuICAgIHBhZGRpbmc6ICd7bGlzdC5vcHRpb24ucGFkZGluZ30nXG59O1xuXG5leHBvcnQgY29uc3QgY29sb3JTY2hlbWU6IEF1dG9Db21wbGV0ZVRva2VuU2VjdGlvbnMuQ29sb3JTY2hlbWUgPSB7XG4gICAgbGlnaHQ6IHtcbiAgICAgICAgY2hpcDoge1xuICAgICAgICAgICAgZm9jdXNCYWNrZ3JvdW5kOiAne3N1cmZhY2UuMjAwfScsXG4gICAgICAgICAgICBmb2N1c0NvbG9yOiAne3N1cmZhY2UuODAwfSdcbiAgICAgICAgfSxcbiAgICAgICAgZHJvcGRvd246IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7c3VyZmFjZS41MH0nLFxuICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3N1cmZhY2UuMTAwfScsXG4gICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3N1cmZhY2UuMjAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjYwMH0nLFxuICAgICAgICAgICAgaG92ZXJDb2xvcjogJ3tzdXJmYWNlLjcwMH0nLFxuICAgICAgICAgICAgYWN0aXZlQ29sb3I6ICd7c3VyZmFjZS44MDB9J1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXJrOiB7XG4gICAgICAgIGNoaXA6IHtcbiAgICAgICAgICAgIGZvY3VzQmFja2dyb3VuZDogJ3tzdXJmYWNlLjcwMH0nLFxuICAgICAgICAgICAgZm9jdXNDb2xvcjogJ3tzdXJmYWNlLjB9J1xuICAgICAgICB9LFxuICAgICAgICBkcm9wZG93bjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjgwMH0nLFxuICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3N1cmZhY2UuNzAwfScsXG4gICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3N1cmZhY2UuNjAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjMwMH0nLFxuICAgICAgICAgICAgaG92ZXJDb2xvcjogJ3tzdXJmYWNlLjIwMH0nLFxuICAgICAgICAgICAgYWN0aXZlQ29sb3I6ICd7c3VyZmFjZS4xMDB9J1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJvb3QsXG4gICAgb3ZlcmxheSxcbiAgICBsaXN0LFxuICAgIG9wdGlvbixcbiAgICBvcHRpb25Hcm91cCxcbiAgICBkcm9wZG93bixcbiAgICBjaGlwLFxuICAgIGVtcHR5TWVzc2FnZSxcbiAgICBjb2xvclNjaGVtZVxufSBzYXRpc2ZpZXMgQXV0b0NvbXBsZXRlRGVzaWduVG9rZW5zO1xuIl0sIm1hcHBpbmdzIjoiIiwiaWdub3JlTGlzdCI6W119