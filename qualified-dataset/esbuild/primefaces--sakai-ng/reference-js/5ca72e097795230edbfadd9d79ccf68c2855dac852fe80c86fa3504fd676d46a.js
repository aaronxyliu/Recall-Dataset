var r = {
    width: "3rem",
    height: "1.75rem",
    borderRadius: "30px",
    gap: "0.25rem",
    shadow: "{form.field.shadow}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    borderWidth: "1px",
    borderColor: "transparent",
    hoverBorderColor: "transparent",
    checkedBorderColor: "transparent",
    checkedHoverBorderColor: "transparent",
    invalidBorderColor: "{form.field.invalid.border.color}",
    transitionDuration: "{form.field.transition.duration}",
    slideDuration: "0.2s"
  },
  o = {
    borderRadius: "50%",
    size: "1.25rem"
  },
  e = {
    light: {
      root: {
        background: "{surface.300}",
        disabledBackground: "{form.field.disabled.background}",
        hoverBackground: "{surface.400}",
        checkedBackground: "{primary.color}",
        checkedHoverBackground: "{primary.hover.color}"
      },
      handle: {
        background: "{surface.0}",
        disabledBackground: "{form.field.disabled.color}",
        hoverBackground: "{surface.0}",
        checkedBackground: "{surface.0}",
        checkedHoverBackground: "{surface.0}",
        color: "{text.muted.color}",
        hoverColor: "{text.color}",
        checkedColor: "{primary.color}",
        checkedHoverColor: "{primary.hover.color}"
      }
    },
    dark: {
      root: {
        background: "{surface.700}",
        disabledBackground: "{surface.600}",
        hoverBackground: "{surface.600}",
        checkedBackground: "{primary.color}",
        checkedHoverBackground: "{primary.hover.color}"
      },
      handle: {
        background: "{surface.400}",
        disabledBackground: "{surface.900}",
        hoverBackground: "{surface.300}",
        checkedBackground: "{surface.900}",
        checkedHoverBackground: "{surface.900}",
        color: "{surface.900}",
        hoverColor: "{surface.800}",
        checkedColor: "{primary.color}",
        checkedHoverColor: "{primary.hover.color}"
      }
    }
  },
  c = {
    root: r,
    handle: o,
    colorScheme: e
  };
export { e as colorScheme, c as default, o as handle, r as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbGFyYS90b2dnbGVzd2l0Y2gvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBUb2dnbGVTd2l0Y2hEZXNpZ25Ub2tlbnMsIFRvZ2dsZVN3aXRjaFRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL3RvZ2dsZXN3aXRjaCc7XG5cbmV4cG9ydCBjb25zdCByb290OiBUb2dnbGVTd2l0Y2hUb2tlblNlY3Rpb25zLlJvb3QgPSB7XG4gICAgd2lkdGg6ICczcmVtJyxcbiAgICBoZWlnaHQ6ICcxLjc1cmVtJyxcbiAgICBib3JkZXJSYWRpdXM6ICczMHB4JyxcbiAgICBnYXA6ICcwLjI1cmVtJyxcbiAgICBzaGFkb3c6ICd7Zm9ybS5maWVsZC5zaGFkb3d9JyxcbiAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgd2lkdGg6ICd7Zm9ybS5maWVsZC5mb2N1cy5yaW5nLndpZHRofScsXG4gICAgICAgIHN0eWxlOiAne2Zvcm0uZmllbGQuZm9jdXMucmluZy5zdHlsZX0nLFxuICAgICAgICBjb2xvcjogJ3tmb3JtLmZpZWxkLmZvY3VzLnJpbmcuY29sb3J9JyxcbiAgICAgICAgb2Zmc2V0OiAne2Zvcm0uZmllbGQuZm9jdXMucmluZy5vZmZzZXR9JyxcbiAgICAgICAgc2hhZG93OiAne2Zvcm0uZmllbGQuZm9jdXMucmluZy5zaGFkb3d9J1xuICAgIH0sXG4gICAgYm9yZGVyV2lkdGg6ICcxcHgnLFxuICAgIGJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIGhvdmVyQm9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgY2hlY2tlZEJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIGNoZWNrZWRIb3ZlckJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIGludmFsaWRCb3JkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmludmFsaWQuYm9yZGVyLmNvbG9yfScsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAne2Zvcm0uZmllbGQudHJhbnNpdGlvbi5kdXJhdGlvbn0nLFxuICAgIHNsaWRlRHVyYXRpb246ICcwLjJzJ1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZTogVG9nZ2xlU3dpdGNoVG9rZW5TZWN0aW9ucy5IYW5kbGUgPSB7XG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICBzaXplOiAnMS4yNXJlbSdcbn07XG5cbmV4cG9ydCBjb25zdCBjb2xvclNjaGVtZTogVG9nZ2xlU3dpdGNoVG9rZW5TZWN0aW9ucy5Db2xvclNjaGVtZSA9IHtcbiAgICBsaWdodDoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuMzAwfScsXG4gICAgICAgICAgICBkaXNhYmxlZEJhY2tncm91bmQ6ICd7Zm9ybS5maWVsZC5kaXNhYmxlZC5iYWNrZ3JvdW5kfScsXG4gICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS40MDB9JyxcbiAgICAgICAgICAgIGNoZWNrZWRCYWNrZ3JvdW5kOiAne3ByaW1hcnkuY29sb3J9JyxcbiAgICAgICAgICAgIGNoZWNrZWRIb3ZlckJhY2tncm91bmQ6ICd7cHJpbWFyeS5ob3Zlci5jb2xvcn0nXG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZToge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjB9JyxcbiAgICAgICAgICAgIGRpc2FibGVkQmFja2dyb3VuZDogJ3tmb3JtLmZpZWxkLmRpc2FibGVkLmNvbG9yfScsXG4gICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS4wfScsXG4gICAgICAgICAgICBjaGVja2VkQmFja2dyb3VuZDogJ3tzdXJmYWNlLjB9JyxcbiAgICAgICAgICAgIGNoZWNrZWRIb3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS4wfScsXG4gICAgICAgICAgICBjb2xvcjogJ3t0ZXh0Lm11dGVkLmNvbG9yfScsXG4gICAgICAgICAgICBob3ZlckNvbG9yOiAne3RleHQuY29sb3J9JyxcbiAgICAgICAgICAgIGNoZWNrZWRDb2xvcjogJ3twcmltYXJ5LmNvbG9yfScsXG4gICAgICAgICAgICBjaGVja2VkSG92ZXJDb2xvcjogJ3twcmltYXJ5LmhvdmVyLmNvbG9yfSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGFyazoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuNzAwfScsXG4gICAgICAgICAgICBkaXNhYmxlZEJhY2tncm91bmQ6ICd7c3VyZmFjZS42MDB9JyxcbiAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tzdXJmYWNlLjYwMH0nLFxuICAgICAgICAgICAgY2hlY2tlZEJhY2tncm91bmQ6ICd7cHJpbWFyeS5jb2xvcn0nLFxuICAgICAgICAgICAgY2hlY2tlZEhvdmVyQmFja2dyb3VuZDogJ3twcmltYXJ5LmhvdmVyLmNvbG9yfSdcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuNDAwfScsXG4gICAgICAgICAgICBkaXNhYmxlZEJhY2tncm91bmQ6ICd7c3VyZmFjZS45MDB9JyxcbiAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tzdXJmYWNlLjMwMH0nLFxuICAgICAgICAgICAgY2hlY2tlZEJhY2tncm91bmQ6ICd7c3VyZmFjZS45MDB9JyxcbiAgICAgICAgICAgIGNoZWNrZWRIb3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS45MDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuOTAwfScsXG4gICAgICAgICAgICBob3ZlckNvbG9yOiAne3N1cmZhY2UuODAwfScsXG4gICAgICAgICAgICBjaGVja2VkQ29sb3I6ICd7cHJpbWFyeS5jb2xvcn0nLFxuICAgICAgICAgICAgY2hlY2tlZEhvdmVyQ29sb3I6ICd7cHJpbWFyeS5ob3Zlci5jb2xvcn0nXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcm9vdCxcbiAgICBoYW5kbGUsXG4gICAgY29sb3JTY2hlbWVcbn0gc2F0aXNmaWVzIFRvZ2dsZVN3aXRjaERlc2lnblRva2VucztcbiJdLCJtYXBwaW5ncyI6IiIsImlnbm9yZUxpc3QiOltdfQ==