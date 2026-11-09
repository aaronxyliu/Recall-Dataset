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
  r = {
    width: "2.5rem",
    color: "{form.field.icon.color}"
  },
  d = {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  l = {
    padding: "{list.padding}"
  },
  e = {
    padding: "{list.option.padding}"
  },
  i = {
    borderRadius: "{border.radius.sm}"
  },
  f = {
    color: "{form.field.icon.color}"
  },
  a = {
    root: o,
    dropdown: r,
    overlay: d,
    tree: l,
    emptyMessage: e,
    chip: i,
    clearIcon: f
  };
export { i as chip, f as clearIcon, a as default, r as dropdown, e as emptyMessage, d as overlay, o as root, l as tree };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvYXVyYS90cmVlc2VsZWN0L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgVHJlZVNlbGVjdERlc2lnblRva2VucywgVHJlZVNlbGVjdFRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL3RyZWVzZWxlY3QnO1xuXG5leHBvcnQgY29uc3Qgcm9vdDogVHJlZVNlbGVjdFRva2VuU2VjdGlvbnMuUm9vdCA9IHtcbiAgICBiYWNrZ3JvdW5kOiAne2Zvcm0uZmllbGQuYmFja2dyb3VuZH0nLFxuICAgIGRpc2FibGVkQmFja2dyb3VuZDogJ3tmb3JtLmZpZWxkLmRpc2FibGVkLmJhY2tncm91bmR9JyxcbiAgICBmaWxsZWRCYWNrZ3JvdW5kOiAne2Zvcm0uZmllbGQuZmlsbGVkLmJhY2tncm91bmR9JyxcbiAgICBmaWxsZWRIb3ZlckJhY2tncm91bmQ6ICd7Zm9ybS5maWVsZC5maWxsZWQuaG92ZXIuYmFja2dyb3VuZH0nLFxuICAgIGZpbGxlZEZvY3VzQmFja2dyb3VuZDogJ3tmb3JtLmZpZWxkLmZpbGxlZC5mb2N1cy5iYWNrZ3JvdW5kfScsXG4gICAgYm9yZGVyQ29sb3I6ICd7Zm9ybS5maWVsZC5ib3JkZXIuY29sb3J9JyxcbiAgICBob3ZlckJvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuaG92ZXIuYm9yZGVyLmNvbG9yfScsXG4gICAgZm9jdXNCb3JkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmZvY3VzLmJvcmRlci5jb2xvcn0nLFxuICAgIGludmFsaWRCb3JkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmludmFsaWQuYm9yZGVyLmNvbG9yfScsXG4gICAgY29sb3I6ICd7Zm9ybS5maWVsZC5jb2xvcn0nLFxuICAgIGRpc2FibGVkQ29sb3I6ICd7Zm9ybS5maWVsZC5kaXNhYmxlZC5jb2xvcn0nLFxuICAgIHBsYWNlaG9sZGVyQ29sb3I6ICd7Zm9ybS5maWVsZC5wbGFjZWhvbGRlci5jb2xvcn0nLFxuICAgIGludmFsaWRQbGFjZWhvbGRlckNvbG9yOiAne2Zvcm0uZmllbGQuaW52YWxpZC5wbGFjZWhvbGRlci5jb2xvcn0nLFxuICAgIHNoYWRvdzogJ3tmb3JtLmZpZWxkLnNoYWRvd30nLFxuICAgIHBhZGRpbmdYOiAne2Zvcm0uZmllbGQucGFkZGluZy54fScsXG4gICAgcGFkZGluZ1k6ICd7Zm9ybS5maWVsZC5wYWRkaW5nLnl9JyxcbiAgICBib3JkZXJSYWRpdXM6ICd7Zm9ybS5maWVsZC5ib3JkZXIucmFkaXVzfScsXG4gICAgZm9jdXNSaW5nOiB7XG4gICAgICAgIHdpZHRoOiAne2Zvcm0uZmllbGQuZm9jdXMucmluZy53aWR0aH0nLFxuICAgICAgICBzdHlsZTogJ3tmb3JtLmZpZWxkLmZvY3VzLnJpbmcuc3R5bGV9JyxcbiAgICAgICAgY29sb3I6ICd7Zm9ybS5maWVsZC5mb2N1cy5yaW5nLmNvbG9yfScsXG4gICAgICAgIG9mZnNldDogJ3tmb3JtLmZpZWxkLmZvY3VzLnJpbmcub2Zmc2V0fScsXG4gICAgICAgIHNoYWRvdzogJ3tmb3JtLmZpZWxkLmZvY3VzLnJpbmcuc2hhZG93fSdcbiAgICB9LFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJ3tmb3JtLmZpZWxkLnRyYW5zaXRpb24uZHVyYXRpb259JyxcbiAgICBzbToge1xuICAgICAgICBmb250U2l6ZTogJ3tmb3JtLmZpZWxkLnNtLmZvbnQuc2l6ZX0nLFxuICAgICAgICBwYWRkaW5nWDogJ3tmb3JtLmZpZWxkLnNtLnBhZGRpbmcueH0nLFxuICAgICAgICBwYWRkaW5nWTogJ3tmb3JtLmZpZWxkLnNtLnBhZGRpbmcueX0nXG4gICAgfSxcbiAgICBsZzoge1xuICAgICAgICBmb250U2l6ZTogJ3tmb3JtLmZpZWxkLmxnLmZvbnQuc2l6ZX0nLFxuICAgICAgICBwYWRkaW5nWDogJ3tmb3JtLmZpZWxkLmxnLnBhZGRpbmcueH0nLFxuICAgICAgICBwYWRkaW5nWTogJ3tmb3JtLmZpZWxkLmxnLnBhZGRpbmcueX0nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duOiBUcmVlU2VsZWN0VG9rZW5TZWN0aW9ucy5Ecm9wZG93biA9IHtcbiAgICB3aWR0aDogJzIuNXJlbScsXG4gICAgY29sb3I6ICd7Zm9ybS5maWVsZC5pY29uLmNvbG9yfSdcbn07XG5cbmV4cG9ydCBjb25zdCBvdmVybGF5OiBUcmVlU2VsZWN0VG9rZW5TZWN0aW9ucy5PdmVybGF5ID0ge1xuICAgIGJhY2tncm91bmQ6ICd7b3ZlcmxheS5zZWxlY3QuYmFja2dyb3VuZH0nLFxuICAgIGJvcmRlckNvbG9yOiAne292ZXJsYXkuc2VsZWN0LmJvcmRlci5jb2xvcn0nLFxuICAgIGJvcmRlclJhZGl1czogJ3tvdmVybGF5LnNlbGVjdC5ib3JkZXIucmFkaXVzfScsXG4gICAgY29sb3I6ICd7b3ZlcmxheS5zZWxlY3QuY29sb3J9JyxcbiAgICBzaGFkb3c6ICd7b3ZlcmxheS5zZWxlY3Quc2hhZG93fSdcbn07XG5cbmV4cG9ydCBjb25zdCB0cmVlOiBUcmVlU2VsZWN0VG9rZW5TZWN0aW9ucy5UcmVlID0ge1xuICAgIHBhZGRpbmc6ICd7bGlzdC5wYWRkaW5nfSdcbn07XG5cbmV4cG9ydCBjb25zdCBlbXB0eU1lc3NhZ2U6IFRyZWVTZWxlY3RUb2tlblNlY3Rpb25zLkVtcHR5TWVzc2FnZSA9IHtcbiAgICBwYWRkaW5nOiAne2xpc3Qub3B0aW9uLnBhZGRpbmd9J1xufTtcblxuZXhwb3J0IGNvbnN0IGNoaXA6IFRyZWVTZWxlY3RUb2tlblNlY3Rpb25zLkNoaXAgPSB7XG4gICAgYm9yZGVyUmFkaXVzOiAne2JvcmRlci5yYWRpdXMuc219J1xufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFySWNvbjogVHJlZVNlbGVjdFRva2VuU2VjdGlvbnMuQ2xlYXJJY29uID0ge1xuICAgIGNvbG9yOiAne2Zvcm0uZmllbGQuaWNvbi5jb2xvcn0nXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcm9vdCxcbiAgICBkcm9wZG93bixcbiAgICBvdmVybGF5LFxuICAgIHRyZWUsXG4gICAgZW1wdHlNZXNzYWdlLFxuICAgIGNoaXAsXG4gICAgY2xlYXJJY29uXG59IHNhdGlzZmllcyBUcmVlU2VsZWN0RGVzaWduVG9rZW5zO1xuIl0sIm1hcHBpbmdzIjoiIiwiaWdub3JlTGlzdCI6W119