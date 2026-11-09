var o = {
    padding: "0.625rem 1rem",
    borderRadius: "{content.border.radius}",
    gap: "0.5rem",
    fontWeight: "500",
    background: "{form.field.background}",
    borderColor: "{form.field.border.color}",
    color: "{form.field.color}",
    hoverColor: "{form.field.color}",
    checkedBackground: "{highlight.background}",
    checkedColor: "{highlight.color}",
    checkedBorderColor: "{form.field.border.color}",
    disabledBackground: "{form.field.disabled.background}",
    disabledBorderColor: "{form.field.disabled.background}",
    disabledColor: "{form.field.disabled.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
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
      padding: "0.5rem 0.75rem"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      padding: "0.75rem 1.25rem"
    }
  },
  r = {
    color: "{text.muted.color}",
    hoverColor: "{text.muted.color}",
    checkedColor: "{highlight.color}",
    disabledColor: "{form.field.disabled.color}"
  },
  d = {
    checkedBackground: "transparent",
    checkedShadow: "none",
    padding: "0",
    borderRadius: "0",
    sm: {
      padding: "0"
    },
    lg: {
      padding: "0"
    }
  },
  e = {
    light: {
      root: {
        hoverBackground: "{surface.100}"
      }
    },
    dark: {
      root: {
        hoverBackground: "{surface.800}"
      }
    }
  },
  i = {
    root: o,
    icon: r,
    content: d,
    colorScheme: e
  };
export { e as colorScheme, d as content, i as default, r as icon, o as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbGFyYS90b2dnbGVidXR0b24vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBUb2dnbGVCdXR0b25EZXNpZ25Ub2tlbnMsIFRvZ2dsZUJ1dHRvblRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL3RvZ2dsZWJ1dHRvbic7XG5cbmV4cG9ydCBjb25zdCByb290OiBUb2dnbGVCdXR0b25Ub2tlblNlY3Rpb25zLlJvb3QgPSB7XG4gICAgcGFkZGluZzogJzAuNjI1cmVtIDFyZW0nLFxuICAgIGJvcmRlclJhZGl1czogJ3tjb250ZW50LmJvcmRlci5yYWRpdXN9JyxcbiAgICBnYXA6ICcwLjVyZW0nLFxuICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgIGJhY2tncm91bmQ6ICd7Zm9ybS5maWVsZC5iYWNrZ3JvdW5kfScsXG4gICAgYm9yZGVyQ29sb3I6ICd7Zm9ybS5maWVsZC5ib3JkZXIuY29sb3J9JyxcbiAgICBjb2xvcjogJ3tmb3JtLmZpZWxkLmNvbG9yfScsXG4gICAgaG92ZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmNvbG9yfScsXG4gICAgY2hlY2tlZEJhY2tncm91bmQ6ICd7aGlnaGxpZ2h0LmJhY2tncm91bmR9JyxcbiAgICBjaGVja2VkQ29sb3I6ICd7aGlnaGxpZ2h0LmNvbG9yfScsXG4gICAgY2hlY2tlZEJvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuYm9yZGVyLmNvbG9yfScsXG4gICAgZGlzYWJsZWRCYWNrZ3JvdW5kOiAne2Zvcm0uZmllbGQuZGlzYWJsZWQuYmFja2dyb3VuZH0nLFxuICAgIGRpc2FibGVkQm9yZGVyQ29sb3I6ICd7Zm9ybS5maWVsZC5kaXNhYmxlZC5iYWNrZ3JvdW5kfScsXG4gICAgZGlzYWJsZWRDb2xvcjogJ3tmb3JtLmZpZWxkLmRpc2FibGVkLmNvbG9yfScsXG4gICAgaW52YWxpZEJvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuaW52YWxpZC5ib3JkZXIuY29sb3J9JyxcbiAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgd2lkdGg6ICd7Zm9ybS5maWVsZC5mb2N1cy5yaW5nLndpZHRofScsXG4gICAgICAgIHN0eWxlOiAne2Zvcm0uZmllbGQuZm9jdXMucmluZy5zdHlsZX0nLFxuICAgICAgICBjb2xvcjogJ3tmb3JtLmZpZWxkLmZvY3VzLnJpbmcuY29sb3J9JyxcbiAgICAgICAgb2Zmc2V0OiAne2Zvcm0uZmllbGQuZm9jdXMucmluZy5vZmZzZXR9JyxcbiAgICAgICAgc2hhZG93OiAne2Zvcm0uZmllbGQuZm9jdXMucmluZy5zaGFkb3d9J1xuICAgIH0sXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAne2Zvcm0uZmllbGQudHJhbnNpdGlvbi5kdXJhdGlvbn0nLFxuICAgIHNtOiB7XG4gICAgICAgIGZvbnRTaXplOiAne2Zvcm0uZmllbGQuc20uZm9udC5zaXplfScsXG4gICAgICAgIHBhZGRpbmc6ICcwLjVyZW0gMC43NXJlbSdcbiAgICB9LFxuICAgIGxnOiB7XG4gICAgICAgIGZvbnRTaXplOiAne2Zvcm0uZmllbGQubGcuZm9udC5zaXplfScsXG4gICAgICAgIHBhZGRpbmc6ICcwLjc1cmVtIDEuMjVyZW0nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGljb246IFRvZ2dsZUJ1dHRvblRva2VuU2VjdGlvbnMuSWNvbiA9IHtcbiAgICBjb2xvcjogJ3t0ZXh0Lm11dGVkLmNvbG9yfScsXG4gICAgaG92ZXJDb2xvcjogJ3t0ZXh0Lm11dGVkLmNvbG9yfScsXG4gICAgY2hlY2tlZENvbG9yOiAne2hpZ2hsaWdodC5jb2xvcn0nLFxuICAgIGRpc2FibGVkQ29sb3I6ICd7Zm9ybS5maWVsZC5kaXNhYmxlZC5jb2xvcn0nXG59O1xuXG5leHBvcnQgY29uc3QgY29udGVudDogVG9nZ2xlQnV0dG9uVG9rZW5TZWN0aW9ucy5Db250ZW50ID0ge1xuICAgIGNoZWNrZWRCYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgIGNoZWNrZWRTaGFkb3c6ICdub25lJyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMCcsXG4gICAgc206IHtcbiAgICAgICAgcGFkZGluZzogJzAnXG4gICAgfSxcbiAgICBsZzoge1xuICAgICAgICBwYWRkaW5nOiAnMCdcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgY29sb3JTY2hlbWU6IFRvZ2dsZUJ1dHRvblRva2VuU2VjdGlvbnMuQ29sb3JTY2hlbWUgPSB7XG4gICAgbGlnaHQ6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3N1cmZhY2UuMTAwfSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGFyazoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS44MDB9J1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJvb3QsXG4gICAgaWNvbixcbiAgICBjb250ZW50LFxuICAgIGNvbG9yU2NoZW1lXG59IHNhdGlzZmllcyBUb2dnbGVCdXR0b25EZXNpZ25Ub2tlbnM7XG4iXSwibWFwcGluZ3MiOiIiLCJpZ25vcmVMaXN0IjpbXX0=