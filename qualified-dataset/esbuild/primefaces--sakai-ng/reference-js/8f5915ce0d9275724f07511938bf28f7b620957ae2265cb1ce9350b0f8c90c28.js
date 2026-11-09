var r = {
    padding: "0.25rem",
    borderRadius: "{content.border.radius}",
    gap: "0.5rem",
    fontWeight: "500",
    disabledBackground: "{form.field.disabled.background}",
    disabledBorderColor: "{form.field.disabled.background}",
    disabledColor: "{form.field.disabled.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      padding: "0.25rem"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      padding: "0.25rem"
    }
  },
  o = {
    disabledColor: "{form.field.disabled.color}"
  },
  e = {
    padding: "0.25rem 0.75rem",
    borderRadius: "{content.border.radius}",
    checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)",
    sm: {
      padding: "0.25rem 0.75rem"
    },
    lg: {
      padding: "0.25rem 0.75rem"
    }
  },
  d = {
    light: {
      root: {
        background: "{surface.100}",
        checkedBackground: "{surface.100}",
        hoverBackground: "{surface.100}",
        borderColor: "{surface.100}",
        color: "{surface.500}",
        hoverColor: "{surface.700}",
        checkedColor: "{surface.900}",
        checkedBorderColor: "{surface.100}"
      },
      content: {
        checkedBackground: "{surface.0}"
      },
      icon: {
        color: "{surface.500}",
        hoverColor: "{surface.700}",
        checkedColor: "{surface.900}"
      }
    },
    dark: {
      root: {
        background: "{surface.950}",
        checkedBackground: "{surface.950}",
        hoverBackground: "{surface.950}",
        borderColor: "{surface.950}",
        color: "{surface.400}",
        hoverColor: "{surface.300}",
        checkedColor: "{surface.0}",
        checkedBorderColor: "{surface.950}"
      },
      content: {
        checkedBackground: "{surface.800}"
      },
      icon: {
        color: "{surface.400}",
        hoverColor: "{surface.300}",
        checkedColor: "{surface.0}"
      }
    }
  },
  c = {
    root: r,
    icon: o,
    content: e,
    colorScheme: d
  };
export { d as colorScheme, e as content, c as default, o as icon, r as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvYXVyYS90b2dnbGVidXR0b24vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBUb2dnbGVCdXR0b25EZXNpZ25Ub2tlbnMsIFRvZ2dsZUJ1dHRvblRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL3RvZ2dsZWJ1dHRvbic7XG5cbmV4cG9ydCBjb25zdCByb290OiBUb2dnbGVCdXR0b25Ub2tlblNlY3Rpb25zLlJvb3QgPSB7XG4gICAgcGFkZGluZzogJzAuMjVyZW0nLFxuICAgIGJvcmRlclJhZGl1czogJ3tjb250ZW50LmJvcmRlci5yYWRpdXN9JyxcbiAgICBnYXA6ICcwLjVyZW0nLFxuICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgIGRpc2FibGVkQmFja2dyb3VuZDogJ3tmb3JtLmZpZWxkLmRpc2FibGVkLmJhY2tncm91bmR9JyxcbiAgICBkaXNhYmxlZEJvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuZGlzYWJsZWQuYmFja2dyb3VuZH0nLFxuICAgIGRpc2FibGVkQ29sb3I6ICd7Zm9ybS5maWVsZC5kaXNhYmxlZC5jb2xvcn0nLFxuICAgIGludmFsaWRCb3JkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmludmFsaWQuYm9yZGVyLmNvbG9yfScsXG4gICAgZm9jdXNSaW5nOiB7XG4gICAgICAgIHdpZHRoOiAne2ZvY3VzLnJpbmcud2lkdGh9JyxcbiAgICAgICAgc3R5bGU6ICd7Zm9jdXMucmluZy5zdHlsZX0nLFxuICAgICAgICBjb2xvcjogJ3tmb2N1cy5yaW5nLmNvbG9yfScsXG4gICAgICAgIG9mZnNldDogJ3tmb2N1cy5yaW5nLm9mZnNldH0nLFxuICAgICAgICBzaGFkb3c6ICd7Zm9jdXMucmluZy5zaGFkb3d9J1xuICAgIH0sXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAne2Zvcm0uZmllbGQudHJhbnNpdGlvbi5kdXJhdGlvbn0nLFxuICAgIHNtOiB7XG4gICAgICAgIGZvbnRTaXplOiAne2Zvcm0uZmllbGQuc20uZm9udC5zaXplfScsXG4gICAgICAgIHBhZGRpbmc6ICcwLjI1cmVtJ1xuICAgIH0sXG4gICAgbGc6IHtcbiAgICAgICAgZm9udFNpemU6ICd7Zm9ybS5maWVsZC5sZy5mb250LnNpemV9JyxcbiAgICAgICAgcGFkZGluZzogJzAuMjVyZW0nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGljb246IFRvZ2dsZUJ1dHRvblRva2VuU2VjdGlvbnMuSWNvbiA9IHtcbiAgICBkaXNhYmxlZENvbG9yOiAne2Zvcm0uZmllbGQuZGlzYWJsZWQuY29sb3J9J1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQ6IFRvZ2dsZUJ1dHRvblRva2VuU2VjdGlvbnMuQ29udGVudCA9IHtcbiAgICBwYWRkaW5nOiAnMC4yNXJlbSAwLjc1cmVtJyxcbiAgICBib3JkZXJSYWRpdXM6ICd7Y29udGVudC5ib3JkZXIucmFkaXVzfScsXG4gICAgY2hlY2tlZFNoYWRvdzogJzBweCAxcHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDIpLCAwcHggMXB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA0KScsXG4gICAgc206IHtcbiAgICAgICAgcGFkZGluZzogJzAuMjVyZW0gMC43NXJlbSdcbiAgICB9LFxuICAgIGxnOiB7XG4gICAgICAgIHBhZGRpbmc6ICcwLjI1cmVtIDAuNzVyZW0nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNvbG9yU2NoZW1lOiBUb2dnbGVCdXR0b25Ub2tlblNlY3Rpb25zLkNvbG9yU2NoZW1lID0ge1xuICAgIGxpZ2h0OiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7c3VyZmFjZS4xMDB9JyxcbiAgICAgICAgICAgIGNoZWNrZWRCYWNrZ3JvdW5kOiAne3N1cmZhY2UuMTAwfScsXG4gICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS4xMDB9JyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3N1cmZhY2UuMTAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjUwMH0nLFxuICAgICAgICAgICAgaG92ZXJDb2xvcjogJ3tzdXJmYWNlLjcwMH0nLFxuICAgICAgICAgICAgY2hlY2tlZENvbG9yOiAne3N1cmZhY2UuOTAwfScsXG4gICAgICAgICAgICBjaGVja2VkQm9yZGVyQ29sb3I6ICd7c3VyZmFjZS4xMDB9J1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICBjaGVja2VkQmFja2dyb3VuZDogJ3tzdXJmYWNlLjB9J1xuICAgICAgICB9LFxuICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjUwMH0nLFxuICAgICAgICAgICAgaG92ZXJDb2xvcjogJ3tzdXJmYWNlLjcwMH0nLFxuICAgICAgICAgICAgY2hlY2tlZENvbG9yOiAne3N1cmZhY2UuOTAwfSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGFyazoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuOTUwfScsXG4gICAgICAgICAgICBjaGVja2VkQmFja2dyb3VuZDogJ3tzdXJmYWNlLjk1MH0nLFxuICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3N1cmZhY2UuOTUwfScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tzdXJmYWNlLjk1MH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS40MDB9JyxcbiAgICAgICAgICAgIGhvdmVyQ29sb3I6ICd7c3VyZmFjZS4zMDB9JyxcbiAgICAgICAgICAgIGNoZWNrZWRDb2xvcjogJ3tzdXJmYWNlLjB9JyxcbiAgICAgICAgICAgIGNoZWNrZWRCb3JkZXJDb2xvcjogJ3tzdXJmYWNlLjk1MH0nXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgIGNoZWNrZWRCYWNrZ3JvdW5kOiAne3N1cmZhY2UuODAwfSdcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS40MDB9JyxcbiAgICAgICAgICAgIGhvdmVyQ29sb3I6ICd7c3VyZmFjZS4zMDB9JyxcbiAgICAgICAgICAgIGNoZWNrZWRDb2xvcjogJ3tzdXJmYWNlLjB9J1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJvb3QsXG4gICAgaWNvbixcbiAgICBjb250ZW50LFxuICAgIGNvbG9yU2NoZW1lXG59IHNhdGlzZmllcyBUb2dnbGVCdXR0b25EZXNpZ25Ub2tlbnM7XG4iXSwibWFwcGluZ3MiOiIiLCJpZ25vcmVMaXN0IjpbXX0=