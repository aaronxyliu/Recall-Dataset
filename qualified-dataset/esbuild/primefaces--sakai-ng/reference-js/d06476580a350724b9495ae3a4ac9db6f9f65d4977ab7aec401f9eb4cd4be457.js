var r = {
    width: "2.5rem",
    height: "1.5rem",
    borderRadius: "30px",
    gap: "0.25rem",
    shadow: "{form.field.shadow}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    borderWidth: "1px",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.border.color}",
    checkedBorderColor: "{primary.color}",
    checkedHoverBorderColor: "{primary.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    background: "{form.field.background}",
    hoverBackground: "{form.field.background}",
    checkedBackground: "{primary.color}",
    checkedHoverBackground: "{primary.color}",
    transitionDuration: "{form.field.transition.duration}",
    slideDuration: "0.1s",
    disabledBackground: "{form.field.disabled.background}"
  },
  o = {
    borderRadius: "50%",
    size: "1rem",
    background: "{form.field.border.color}",
    hoverBackground: "{form.field.border.color}",
    checkedBackground: "{primary.contrast.color}",
    checkedHoverBackground: "{primary.contrast.color}",
    disabledBackground: "{form.field.disabled.color}",
    color: "{surface.0}",
    hoverColor: "{surface.0}",
    checkedColor: "{primary.color}",
    checkedHoverColor: "{primary.color}"
  },
  d = {
    root: r,
    handle: o
  };
export { d as default, o as handle, r as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbm9yYS90b2dnbGVzd2l0Y2gvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBUb2dnbGVTd2l0Y2hEZXNpZ25Ub2tlbnMsIFRvZ2dsZVN3aXRjaFRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL3RvZ2dsZXN3aXRjaCc7XG5cbmV4cG9ydCBjb25zdCByb290OiBUb2dnbGVTd2l0Y2hUb2tlblNlY3Rpb25zLlJvb3QgPSB7XG4gICAgd2lkdGg6ICcyLjVyZW0nLFxuICAgIGhlaWdodDogJzEuNXJlbScsXG4gICAgYm9yZGVyUmFkaXVzOiAnMzBweCcsXG4gICAgZ2FwOiAnMC4yNXJlbScsXG4gICAgc2hhZG93OiAne2Zvcm0uZmllbGQuc2hhZG93fScsXG4gICAgZm9jdXNSaW5nOiB7XG4gICAgICAgIHdpZHRoOiAne2ZvY3VzLnJpbmcud2lkdGh9JyxcbiAgICAgICAgc3R5bGU6ICd7Zm9jdXMucmluZy5zdHlsZX0nLFxuICAgICAgICBjb2xvcjogJ3tmb2N1cy5yaW5nLmNvbG9yfScsXG4gICAgICAgIG9mZnNldDogJ3tmb2N1cy5yaW5nLm9mZnNldH0nLFxuICAgICAgICBzaGFkb3c6ICd7Zm9jdXMucmluZy5zaGFkb3d9J1xuICAgIH0sXG4gICAgYm9yZGVyV2lkdGg6ICcxcHgnLFxuICAgIGJvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuYm9yZGVyLmNvbG9yfScsXG4gICAgaG92ZXJCb3JkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmJvcmRlci5jb2xvcn0nLFxuICAgIGNoZWNrZWRCb3JkZXJDb2xvcjogJ3twcmltYXJ5LmNvbG9yfScsXG4gICAgY2hlY2tlZEhvdmVyQm9yZGVyQ29sb3I6ICd7cHJpbWFyeS5jb2xvcn0nLFxuICAgIGludmFsaWRCb3JkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmludmFsaWQuYm9yZGVyLmNvbG9yfScsXG4gICAgYmFja2dyb3VuZDogJ3tmb3JtLmZpZWxkLmJhY2tncm91bmR9JyxcbiAgICBob3ZlckJhY2tncm91bmQ6ICd7Zm9ybS5maWVsZC5iYWNrZ3JvdW5kfScsXG4gICAgY2hlY2tlZEJhY2tncm91bmQ6ICd7cHJpbWFyeS5jb2xvcn0nLFxuICAgIGNoZWNrZWRIb3ZlckJhY2tncm91bmQ6ICd7cHJpbWFyeS5jb2xvcn0nLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJ3tmb3JtLmZpZWxkLnRyYW5zaXRpb24uZHVyYXRpb259JyxcbiAgICBzbGlkZUR1cmF0aW9uOiAnMC4xcycsXG4gICAgZGlzYWJsZWRCYWNrZ3JvdW5kOiAne2Zvcm0uZmllbGQuZGlzYWJsZWQuYmFja2dyb3VuZH0nXG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlOiBUb2dnbGVTd2l0Y2hUb2tlblNlY3Rpb25zLkhhbmRsZSA9IHtcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIHNpemU6ICcxcmVtJyxcbiAgICBiYWNrZ3JvdW5kOiAne2Zvcm0uZmllbGQuYm9yZGVyLmNvbG9yfScsXG4gICAgaG92ZXJCYWNrZ3JvdW5kOiAne2Zvcm0uZmllbGQuYm9yZGVyLmNvbG9yfScsXG4gICAgY2hlY2tlZEJhY2tncm91bmQ6ICd7cHJpbWFyeS5jb250cmFzdC5jb2xvcn0nLFxuICAgIGNoZWNrZWRIb3ZlckJhY2tncm91bmQ6ICd7cHJpbWFyeS5jb250cmFzdC5jb2xvcn0nLFxuICAgIGRpc2FibGVkQmFja2dyb3VuZDogJ3tmb3JtLmZpZWxkLmRpc2FibGVkLmNvbG9yfScsXG4gICAgY29sb3I6ICd7c3VyZmFjZS4wfScsXG4gICAgaG92ZXJDb2xvcjogJ3tzdXJmYWNlLjB9JyxcbiAgICBjaGVja2VkQ29sb3I6ICd7cHJpbWFyeS5jb2xvcn0nLFxuICAgIGNoZWNrZWRIb3ZlckNvbG9yOiAne3ByaW1hcnkuY29sb3J9J1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJvb3QsXG4gICAgaGFuZGxlXG59IHNhdGlzZmllcyBUb2dnbGVTd2l0Y2hEZXNpZ25Ub2tlbnM7XG4iXSwibWFwcGluZ3MiOiIiLCJpZ25vcmVMaXN0IjpbXX0=