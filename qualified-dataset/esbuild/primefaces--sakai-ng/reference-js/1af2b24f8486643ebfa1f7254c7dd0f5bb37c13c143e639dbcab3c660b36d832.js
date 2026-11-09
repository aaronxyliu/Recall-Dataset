var o = {
    padding: "0.5rem 0.75rem",
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
      padding: "0.375rem 0.625rem"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      padding: "0.625rem 0.875rem"
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
        hoverBackground: "{surface.200}"
      }
    },
    dark: {
      root: {
        hoverBackground: "{surface.700}"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbm9yYS90b2dnbGVidXR0b24vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBUb2dnbGVCdXR0b25EZXNpZ25Ub2tlbnMsIFRvZ2dsZUJ1dHRvblRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL3RvZ2dsZWJ1dHRvbic7XG5cbmV4cG9ydCBjb25zdCByb290OiBUb2dnbGVCdXR0b25Ub2tlblNlY3Rpb25zLlJvb3QgPSB7XG4gICAgcGFkZGluZzogJzAuNXJlbSAwLjc1cmVtJyxcbiAgICBib3JkZXJSYWRpdXM6ICd7Y29udGVudC5ib3JkZXIucmFkaXVzfScsXG4gICAgZ2FwOiAnMC41cmVtJyxcbiAgICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgICBiYWNrZ3JvdW5kOiAne2Zvcm0uZmllbGQuYmFja2dyb3VuZH0nLFxuICAgIGJvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuYm9yZGVyLmNvbG9yfScsXG4gICAgY29sb3I6ICd7Zm9ybS5maWVsZC5jb2xvcn0nLFxuICAgIGhvdmVyQ29sb3I6ICd7Zm9ybS5maWVsZC5jb2xvcn0nLFxuICAgIGNoZWNrZWRCYWNrZ3JvdW5kOiAne2hpZ2hsaWdodC5iYWNrZ3JvdW5kfScsXG4gICAgY2hlY2tlZENvbG9yOiAne2hpZ2hsaWdodC5jb2xvcn0nLFxuICAgIGNoZWNrZWRCb3JkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmJvcmRlci5jb2xvcn0nLFxuICAgIGRpc2FibGVkQmFja2dyb3VuZDogJ3tmb3JtLmZpZWxkLmRpc2FibGVkLmJhY2tncm91bmR9JyxcbiAgICBkaXNhYmxlZEJvcmRlckNvbG9yOiAne2Zvcm0uZmllbGQuZGlzYWJsZWQuYmFja2dyb3VuZH0nLFxuICAgIGRpc2FibGVkQ29sb3I6ICd7Zm9ybS5maWVsZC5kaXNhYmxlZC5jb2xvcn0nLFxuICAgIGludmFsaWRCb3JkZXJDb2xvcjogJ3tmb3JtLmZpZWxkLmludmFsaWQuYm9yZGVyLmNvbG9yfScsXG4gICAgZm9jdXNSaW5nOiB7XG4gICAgICAgIHdpZHRoOiAne2Zvcm0uZmllbGQuZm9jdXMucmluZy53aWR0aH0nLFxuICAgICAgICBzdHlsZTogJ3tmb3JtLmZpZWxkLmZvY3VzLnJpbmcuc3R5bGV9JyxcbiAgICAgICAgY29sb3I6ICd7Zm9ybS5maWVsZC5mb2N1cy5yaW5nLmNvbG9yfScsXG4gICAgICAgIG9mZnNldDogJ3tmb3JtLmZpZWxkLmZvY3VzLnJpbmcub2Zmc2V0fScsXG4gICAgICAgIHNoYWRvdzogJ3tmb3JtLmZpZWxkLmZvY3VzLnJpbmcuc2hhZG93fSdcbiAgICB9LFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJ3tmb3JtLmZpZWxkLnRyYW5zaXRpb24uZHVyYXRpb259JyxcbiAgICBzbToge1xuICAgICAgICBmb250U2l6ZTogJ3tmb3JtLmZpZWxkLnNtLmZvbnQuc2l6ZX0nLFxuICAgICAgICBwYWRkaW5nOiAnMC4zNzVyZW0gMC42MjVyZW0nXG4gICAgfSxcbiAgICBsZzoge1xuICAgICAgICBmb250U2l6ZTogJ3tmb3JtLmZpZWxkLmxnLmZvbnQuc2l6ZX0nLFxuICAgICAgICBwYWRkaW5nOiAnMC42MjVyZW0gMC44NzVyZW0nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGljb246IFRvZ2dsZUJ1dHRvblRva2VuU2VjdGlvbnMuSWNvbiA9IHtcbiAgICBjb2xvcjogJ3t0ZXh0Lm11dGVkLmNvbG9yfScsXG4gICAgaG92ZXJDb2xvcjogJ3t0ZXh0Lm11dGVkLmNvbG9yfScsXG4gICAgY2hlY2tlZENvbG9yOiAne2hpZ2hsaWdodC5jb2xvcn0nLFxuICAgIGRpc2FibGVkQ29sb3I6ICd7Zm9ybS5maWVsZC5kaXNhYmxlZC5jb2xvcn0nXG59O1xuXG5leHBvcnQgY29uc3QgY29udGVudDogVG9nZ2xlQnV0dG9uVG9rZW5TZWN0aW9ucy5Db250ZW50ID0ge1xuICAgIGNoZWNrZWRCYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgIGNoZWNrZWRTaGFkb3c6ICdub25lJyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMCcsXG4gICAgc206IHtcbiAgICAgICAgcGFkZGluZzogJzAnXG4gICAgfSxcbiAgICBsZzoge1xuICAgICAgICBwYWRkaW5nOiAnMCdcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgY29sb3JTY2hlbWU6IFRvZ2dsZUJ1dHRvblRva2VuU2VjdGlvbnMuQ29sb3JTY2hlbWUgPSB7XG4gICAgbGlnaHQ6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3N1cmZhY2UuMjAwfSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGFyazoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS43MDB9J1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJvb3QsXG4gICAgaWNvbixcbiAgICBjb250ZW50LFxuICAgIGNvbG9yU2NoZW1lXG59IHNhdGlzZmllcyBUb2dnbGVCdXR0b25EZXNpZ25Ub2tlbnM7XG4iXSwibWFwcGluZ3MiOiIiLCJpZ25vcmVMaXN0IjpbXX0=