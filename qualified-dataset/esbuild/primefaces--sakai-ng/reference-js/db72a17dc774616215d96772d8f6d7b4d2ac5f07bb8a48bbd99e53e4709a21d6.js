var r = {
    borderRadius: "{form.field.border.radius}",
    roundedBorderRadius: "2rem",
    gap: "0.5rem",
    paddingX: "1rem",
    paddingY: "{form.field.padding.y}",
    iconOnlyWidth: "2.75rem",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}",
      iconOnlyWidth: "2.25rem"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}",
      iconOnlyWidth: "3.25rem"
    },
    label: {
      fontWeight: "600"
    },
    raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      offset: "{form.field.focus.ring.offset}"
    },
    badgeSize: "1rem",
    transitionDuration: "{form.field.transition.duration}"
  },
  o = {
    light: {
      root: {
        primary: {
          background: "{primary.color}",
          hoverBackground: "{primary.hover.color}",
          activeBackground: "{primary.active.color}",
          borderColor: "{primary.color}",
          hoverBorderColor: "{primary.hover.color}",
          activeBorderColor: "{primary.active.color}",
          color: "{primary.contrast.color}",
          hoverColor: "{primary.contrast.color}",
          activeColor: "{primary.contrast.color}",
          focusRing: {
            color: "transparent",
            shadow: "0 0 0 0.2rem {primary.200}"
          }
        },
        secondary: {
          background: "{surface.100}",
          hoverBackground: "{surface.200}",
          activeBackground: "{surface.300}",
          borderColor: "{surface.100}",
          hoverBorderColor: "{surface.200}",
          activeBorderColor: "{surface.300}",
          color: "{surface.600}",
          hoverColor: "{surface.700}",
          activeColor: "{surface.800}",
          focusRing: {
            color: "transparent",
            shadow: "0 0 0 0.2rem {surface.200}"
          }
        },
        info: {
          background: "{sky.500}",
          hoverBackground: "{sky.600}",
          activeBackground: "{sky.700}",
          borderColor: "{sky.500}",
          hoverBorderColor: "{sky.600}",
          activeBorderColor: "{sky.700}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "transparent",
            shadow: "0 0 0 0.2rem {sky.200}"
          }
        },
        success: {
          background: "{green.500}",
          hoverBackground: "{green.600}",
          activeBackground: "{green.700}",
          borderColor: "{green.500}",
          hoverBorderColor: "{green.600}",
          activeBorderColor: "{green.700}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "transparent",
            shadow: "0 0 0 0.2rem {green.200}"
          }
        },
        warn: {
          background: "{orange.500}",
          hoverBackground: "{orange.600}",
          activeBackground: "{orange.700}",
          borderColor: "{orange.500}",
          hoverBorderColor: "{orange.600}",
          activeBorderColor: "{orange.700}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "transparent",
            shadow: "0 0 0 0.2rem {orange.200}"
          }
        },
        help: {
          background: "{purple.500}",
          hoverBackground: "{purple.600}",
          activeBackground: "{purple.700}",
          borderColor: "{purple.500}",
          hoverBorderColor: "{purple.600}",
          activeBorderColor: "{purple.700}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "transparent",
            shadow: "0 0 0 0.2rem {purple.200}"
          }
        },
        danger: {
          background: "{red.500}",
          hoverBackground: "{red.600}",
          activeBackground: "{red.700}",
          borderColor: "{red.500}",
          hoverBorderColor: "{red.600}",
          activeBorderColor: "{red.700}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "transparent",
            shadow: "0 0 0 0.2rem {red.200}"
          }
        },
        contrast: {
          background: "{surface.950}",
          hoverBackground: "{surface.900}",
          activeBackground: "{surface.800}",
          borderColor: "{surface.950}",
          hoverBorderColor: "{surface.900}",
          activeBorderColor: "{surface.800}",
          color: "{surface.0}",
          hoverColor: "{surface.0}",
          activeColor: "{surface.0}",
          focusRing: {
            color: "transparent",
            shadow: "0 0 0 0.2rem {surface.400}"
          }
        }
      },
      outlined: {
        primary: {
          hoverBackground: "{primary.50}",
          activeBackground: "{primary.100}",
          borderColor: "{primary.200}",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          borderColor: "{surface.200}",
          color: "{surface.500}"
        },
        success: {
          hoverBackground: "{green.50}",
          activeBackground: "{green.100}",
          borderColor: "{green.200}",
          color: "{green.500}"
        },
        info: {
          hoverBackground: "{sky.50}",
          activeBackground: "{sky.100}",
          borderColor: "{sky.200}",
          color: "{sky.500}"
        },
        warn: {
          hoverBackground: "{orange.50}",
          activeBackground: "{orange.100}",
          borderColor: "{orange.200}",
          color: "{orange.500}"
        },
        help: {
          hoverBackground: "{purple.50}",
          activeBackground: "{purple.100}",
          borderColor: "{purple.200}",
          color: "{purple.500}"
        },
        danger: {
          hoverBackground: "{red.50}",
          activeBackground: "{red.100}",
          borderColor: "{red.200}",
          color: "{red.500}"
        },
        contrast: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          borderColor: "{surface.700}",
          color: "{surface.950}"
        },
        plain: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          borderColor: "{surface.200}",
          color: "{surface.700}"
        }
      },
      text: {
        primary: {
          hoverBackground: "{primary.50}",
          activeBackground: "{primary.100}",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "{surface.100}",
          activeBackground: "{surface.200}",
          color: "{surface.600}"
        },
        success: {
          hoverBackground: "{green.50}",
          activeBackground: "{green.100}",
          color: "{green.500}"
        },
        info: {
          hoverBackground: "{sky.50}",
          activeBackground: "{sky.100}",
          color: "{sky.500}"
        },
        warn: {
          hoverBackground: "{orange.50}",
          activeBackground: "{orange.100}",
          color: "{orange.500}"
        },
        help: {
          hoverBackground: "{purple.50}",
          activeBackground: "{purple.100}",
          color: "{purple.500}"
        },
        danger: {
          hoverBackground: "{red.50}",
          activeBackground: "{red.100}",
          color: "{red.500}"
        },
        contrast: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          color: "{surface.950}"
        },
        plain: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          color: "{surface.700}"
        }
      },
      link: {
        color: "{primary.color}",
        hoverColor: "{primary.color}",
        activeColor: "{primary.color}"
      }
    },
    dark: {
      root: {
        primary: {
          background: "{primary.color}",
          hoverBackground: "{primary.hover.color}",
          activeBackground: "{primary.active.color}",
          borderColor: "{primary.color}",
          hoverBorderColor: "{primary.hover.color}",
          activeBorderColor: "{primary.active.color}",
          color: "{primary.contrast.color}",
          hoverColor: "{primary.contrast.color}",
          activeColor: "{primary.contrast.color}",
          focusRing: {
            color: "transparent",
            shadow: "0 0 0 0.2rem color-mix(in srgb, {primary.color}, transparent 80%)"
          }
        },
        secondary: {
          background: "{surface.800}",
          hoverBackground: "{surface.700}",
          activeBackground: "{surface.600}",
          borderColor: "{surface.800}",
          hoverBorderColor: "{surface.700}",
          activeBorderColor: "{surface.600}",
          color: "{surface.300}",
          hoverColor: "{surface.200}",
          activeColor: "{surface.100}",
          focusRing: {
            color: "transparent",
            shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)"
          }
        },
        info: {
          background: "{sky.400}",
          hoverBackground: "{sky.300}",
          activeBackground: "{sky.200}",
          borderColor: "{sky.400}",
          hoverBorderColor: "{sky.300}",
          activeBorderColor: "{sky.200}",
          color: "{sky.950}",
          hoverColor: "{sky.950}",
          activeColor: "{sky.950}",
          focusRing: {
            color: "transparent",
            shadow: "0 0 0 0.2rem color-mix(in srgb, {sky.400}, transparent 80%)"
          }
        },
        success: {
          background: "{green.400}",
          hoverBackground: "{green.300}",
          activeBackground: "{green.200}",
          borderColor: "{green.400}",
          hoverBorderColor: "{green.300}",
          activeBorderColor: "{green.200}",
          color: "{green.950}",
          hoverColor: "{green.950}",
          activeColor: "{green.950}",
          focusRing: {
            color: "transparent",
            shadow: "0 0 0 0.2rem color-mix(in srgb, {green.400}, transparent 80%)"
          }
        },
        warn: {
          background: "{orange.400}",
          hoverBackground: "{orange.300}",
          activeBackground: "{orange.200}",
          borderColor: "{orange.400}",
          hoverBorderColor: "{orange.300}",
          activeBorderColor: "{orange.200}",
          color: "{orange.950}",
          hoverColor: "{orange.950}",
          activeColor: "{orange.950}",
          focusRing: {
            color: "transparent",
            shadow: "0 0 0 0.2rem color-mix(in srgb, {orange.400}, transparent 80%)"
          }
        },
        help: {
          background: "{purple.400}",
          hoverBackground: "{purple.300}",
          activeBackground: "{purple.200}",
          borderColor: "{purple.400}",
          hoverBorderColor: "{purple.300}",
          activeBorderColor: "{purple.200}",
          color: "{purple.950}",
          hoverColor: "{purple.950}",
          activeColor: "{purple.950}",
          focusRing: {
            color: "transparent",
            shadow: "0 0 0 0.2rem color-mix(in srgb, {purple.400}, transparent 80%)"
          }
        },
        danger: {
          background: "{red.400}",
          hoverBackground: "{red.300}",
          activeBackground: "{red.200}",
          borderColor: "{red.400}",
          hoverBorderColor: "{red.300}",
          activeBorderColor: "{red.200}",
          color: "{red.950}",
          hoverColor: "{red.950}",
          activeColor: "{red.950}",
          focusRing: {
            color: "transparent",
            shadow: "0 0 0 0.2rem color-mix(in srgb, {red.400}, transparent 80%)"
          }
        },
        contrast: {
          background: "{surface.0}",
          hoverBackground: "{surface.100}",
          activeBackground: "{surface.200}",
          borderColor: "{surface.0}",
          hoverBorderColor: "{surface.100}",
          activeBorderColor: "{surface.200}",
          color: "{surface.950}",
          hoverColor: "{surface.950}",
          activeColor: "{surface.950}",
          focusRing: {
            color: "transparent",
            shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.0}, transparent 80%)"
          }
        }
      },
      outlined: {
        primary: {
          hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)",
          borderColor: "{primary.700}",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "rgba(255,255,255,0.04)",
          activeBackground: "rgba(255,255,255,0.16)",
          borderColor: "{surface.700}",
          color: "{surface.400}"
        },
        success: {
          hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)",
          borderColor: "{green.700}",
          color: "{green.400}"
        },
        info: {
          hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)",
          borderColor: "{sky.700}",
          color: "{sky.400}"
        },
        warn: {
          hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)",
          borderColor: "{orange.700}",
          color: "{orange.400}"
        },
        help: {
          hoverBackground: "color-mix(in srgb, {help.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {help.400}, transparent 84%)",
          borderColor: "{purple.700}",
          color: "{purple.400}"
        },
        danger: {
          hoverBackground: "color-mix(in srgb, {danger.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {danger.400}, transparent 84%)",
          borderColor: "{red.700}",
          color: "{red.400}"
        },
        contrast: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          borderColor: "{surface.500}",
          color: "{surface.0}"
        },
        plain: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          borderColor: "{surface.600}",
          color: "{surface.0}"
        }
      },
      text: {
        primary: {
          hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "{surface.700}",
          activeBackground: "{surface.600}",
          color: "{surface.300}"
        },
        success: {
          hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)",
          color: "{green.400}"
        },
        info: {
          hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)",
          color: "{sky.400}"
        },
        warn: {
          hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)",
          color: "{orange.400}"
        },
        help: {
          hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)",
          color: "{purple.400}"
        },
        danger: {
          hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)",
          color: "{red.400}"
        },
        contrast: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          color: "{surface.0}"
        },
        plain: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          color: "{surface.0}"
        }
      },
      link: {
        color: "{primary.color}",
        hoverColor: "{primary.color}",
        activeColor: "{primary.color}"
      }
    }
  },
  e = {
    root: r,
    colorScheme: o
  };
export { o as colorScheme, e as default, r as root };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbGFyYS9idXR0b24vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBCdXR0b25EZXNpZ25Ub2tlbnMsIEJ1dHRvblRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL2J1dHRvbic7XG5cbmV4cG9ydCBjb25zdCByb290OiBCdXR0b25Ub2tlblNlY3Rpb25zLlJvb3QgPSB7XG4gICAgYm9yZGVyUmFkaXVzOiAne2Zvcm0uZmllbGQuYm9yZGVyLnJhZGl1c30nLFxuICAgIHJvdW5kZWRCb3JkZXJSYWRpdXM6ICcycmVtJyxcbiAgICBnYXA6ICcwLjVyZW0nLFxuICAgIHBhZGRpbmdYOiAnMXJlbScsXG4gICAgcGFkZGluZ1k6ICd7Zm9ybS5maWVsZC5wYWRkaW5nLnl9JyxcbiAgICBpY29uT25seVdpZHRoOiAnMi43NXJlbScsXG4gICAgc206IHtcbiAgICAgICAgZm9udFNpemU6ICd7Zm9ybS5maWVsZC5zbS5mb250LnNpemV9JyxcbiAgICAgICAgcGFkZGluZ1g6ICd7Zm9ybS5maWVsZC5zbS5wYWRkaW5nLnh9JyxcbiAgICAgICAgcGFkZGluZ1k6ICd7Zm9ybS5maWVsZC5zbS5wYWRkaW5nLnl9JyxcbiAgICAgICAgaWNvbk9ubHlXaWR0aDogJzIuMjVyZW0nXG4gICAgfSxcbiAgICBsZzoge1xuICAgICAgICBmb250U2l6ZTogJ3tmb3JtLmZpZWxkLmxnLmZvbnQuc2l6ZX0nLFxuICAgICAgICBwYWRkaW5nWDogJ3tmb3JtLmZpZWxkLmxnLnBhZGRpbmcueH0nLFxuICAgICAgICBwYWRkaW5nWTogJ3tmb3JtLmZpZWxkLmxnLnBhZGRpbmcueX0nLFxuICAgICAgICBpY29uT25seVdpZHRoOiAnMy4yNXJlbSdcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICAgIGZvbnRXZWlnaHQ6ICc2MDAnXG4gICAgfSxcbiAgICByYWlzZWRTaGFkb3c6ICcwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiknLFxuICAgIGZvY3VzUmluZzoge1xuICAgICAgICB3aWR0aDogJ3tmb3JtLmZpZWxkLmZvY3VzLnJpbmcud2lkdGh9JyxcbiAgICAgICAgc3R5bGU6ICd7Zm9ybS5maWVsZC5mb2N1cy5yaW5nLnN0eWxlfScsXG4gICAgICAgIG9mZnNldDogJ3tmb3JtLmZpZWxkLmZvY3VzLnJpbmcub2Zmc2V0fSdcbiAgICB9LFxuICAgIGJhZGdlU2l6ZTogJzFyZW0nLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJ3tmb3JtLmZpZWxkLnRyYW5zaXRpb24uZHVyYXRpb259J1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbG9yU2NoZW1lOiBCdXR0b25Ub2tlblNlY3Rpb25zLkNvbG9yU2NoZW1lID0ge1xuICAgIGxpZ2h0OiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3ByaW1hcnkuY29sb3J9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7cHJpbWFyeS5ob3Zlci5jb2xvcn0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7cHJpbWFyeS5hY3RpdmUuY29sb3J9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3twcmltYXJ5LmNvbG9yfScsXG4gICAgICAgICAgICAgICAgaG92ZXJCb3JkZXJDb2xvcjogJ3twcmltYXJ5LmhvdmVyLmNvbG9yfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQm9yZGVyQ29sb3I6ICd7cHJpbWFyeS5hY3RpdmUuY29sb3J9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3twcmltYXJ5LmNvbnRyYXN0LmNvbG9yfScsXG4gICAgICAgICAgICAgICAgaG92ZXJDb2xvcjogJ3twcmltYXJ5LmNvbnRyYXN0LmNvbG9yfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQ29sb3I6ICd7cHJpbWFyeS5jb250cmFzdC5jb2xvcn0nLFxuICAgICAgICAgICAgICAgIGZvY3VzUmluZzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93OiAnMCAwIDAgMC4ycmVtIHtwcmltYXJ5LjIwMH0nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7c3VyZmFjZS4xMDB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS4yMDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3N1cmZhY2UuMzAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c3VyZmFjZS4xMDB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJvcmRlckNvbG9yOiAne3N1cmZhY2UuMjAwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQm9yZGVyQ29sb3I6ICd7c3VyZmFjZS4zMDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjYwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQ29sb3I6ICd7c3VyZmFjZS43MDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVDb2xvcjogJ3tzdXJmYWNlLjgwMH0nLFxuICAgICAgICAgICAgICAgIGZvY3VzUmluZzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93OiAnMCAwIDAgMC4ycmVtIHtzdXJmYWNlLjIwMH0nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3NreS41MDB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c2t5LjYwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c2t5LjcwMH0nLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3NreS41MDB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJvcmRlckNvbG9yOiAne3NreS42MDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCb3JkZXJDb2xvcjogJ3tza3kuNzAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICBob3ZlckNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgYWN0aXZlQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvdzogJzAgMCAwIDAuMnJlbSB7c2t5LjIwMH0nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAne2dyZWVuLjUwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tncmVlbi42MDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne2dyZWVuLjcwMH0nLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne2dyZWVuLjUwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6ICd7Z3JlZW4uNjAwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQm9yZGVyQ29sb3I6ICd7Z3JlZW4uNzAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICBob3ZlckNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgYWN0aXZlQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvdzogJzAgMCAwIDAuMnJlbSB7Z3JlZW4uMjAwfSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2Fybjoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7b3JhbmdlLjUwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tvcmFuZ2UuNjAwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3tvcmFuZ2UuNzAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7b3JhbmdlLjUwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6ICd7b3JhbmdlLjYwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJvcmRlckNvbG9yOiAne29yYW5nZS43MDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgIGhvdmVyQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICBhY3RpdmVDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgIGZvY3VzUmluZzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93OiAnMCAwIDAgMC4ycmVtIHtvcmFuZ2UuMjAwfSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVscDoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7cHVycGxlLjUwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3twdXJwbGUuNjAwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3twdXJwbGUuNzAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7cHVycGxlLjUwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6ICd7cHVycGxlLjYwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJvcmRlckNvbG9yOiAne3B1cnBsZS43MDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgIGhvdmVyQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICBhY3RpdmVDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgIGZvY3VzUmluZzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93OiAnMCAwIDAgMC4ycmVtIHtwdXJwbGUuMjAwfSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGFuZ2VyOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tyZWQuNTAwfScsXG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3JlZC42MDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3JlZC43MDB9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tyZWQuNTAwfScsXG4gICAgICAgICAgICAgICAgaG92ZXJCb3JkZXJDb2xvcjogJ3tyZWQuNjAwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQm9yZGVyQ29sb3I6ICd7cmVkLjcwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgaG92ZXJDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgZm9jdXNSaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICBzaGFkb3c6ICcwIDAgMCAwLjJyZW0ge3JlZC4yMDB9J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250cmFzdDoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7c3VyZmFjZS45NTB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS45MDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3N1cmZhY2UuODAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c3VyZmFjZS45NTB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJvcmRlckNvbG9yOiAne3N1cmZhY2UuOTAwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQm9yZGVyQ29sb3I6ICd7c3VyZmFjZS44MDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckNvbG9yOiAne3N1cmZhY2UuMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUNvbG9yOiAne3N1cmZhY2UuMH0nLFxuICAgICAgICAgICAgICAgIGZvY3VzUmluZzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93OiAnMCAwIDAgMC4ycmVtIHtzdXJmYWNlLjQwMH0nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvdXRsaW5lZDoge1xuICAgICAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3twcmltYXJ5LjUwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3twcmltYXJ5LjEwMH0nLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3ByaW1hcnkuMjAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7cHJpbWFyeS5jb2xvcn0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3N1cmZhY2UuNTB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3N1cmZhY2UuMTAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c3VyZmFjZS4yMDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjUwMH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tncmVlbi41MH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7Z3JlZW4uMTAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7Z3JlZW4uMjAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7Z3JlZW4uNTAwfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3NreS41MH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c2t5LjEwMH0nLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3NreS4yMDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tza3kuNTAwfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3YXJuOiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne29yYW5nZS41MH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7b3JhbmdlLjEwMH0nLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne29yYW5nZS4yMDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tvcmFuZ2UuNTAwfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWxwOiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3B1cnBsZS41MH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7cHVycGxlLjEwMH0nLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3B1cnBsZS4yMDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3twdXJwbGUuNTAwfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYW5nZXI6IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7cmVkLjUwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3tyZWQuMTAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7cmVkLjIwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3JlZC41MDB9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRyYXN0OiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3N1cmZhY2UuNTB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3N1cmZhY2UuMTAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c3VyZmFjZS43MDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjk1MH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxhaW46IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS41MH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c3VyZmFjZS4xMDB9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tzdXJmYWNlLjIwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuNzAwfSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3twcmltYXJ5LjUwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3twcmltYXJ5LjEwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3ByaW1hcnkuY29sb3J9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tzdXJmYWNlLjEwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c3VyZmFjZS4yMDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjYwMH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tncmVlbi41MH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7Z3JlZW4uMTAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7Z3JlZW4uNTAwfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3NreS41MH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c2t5LjEwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3NreS41MDB9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdhcm46IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7b3JhbmdlLjUwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3tvcmFuZ2UuMTAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7b3JhbmdlLjUwMH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVscDoge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3twdXJwbGUuNTB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3B1cnBsZS4xMDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3twdXJwbGUuNTAwfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYW5nZXI6IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7cmVkLjUwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3tyZWQuMTAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7cmVkLjUwMH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udHJhc3Q6IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS41MH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c3VyZmFjZS4xMDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjk1MH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxhaW46IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS41MH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c3VyZmFjZS4xMDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjcwMH0nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxpbms6IHtcbiAgICAgICAgICAgIGNvbG9yOiAne3ByaW1hcnkuY29sb3J9JyxcbiAgICAgICAgICAgIGhvdmVyQ29sb3I6ICd7cHJpbWFyeS5jb2xvcn0nLFxuICAgICAgICAgICAgYWN0aXZlQ29sb3I6ICd7cHJpbWFyeS5jb2xvcn0nXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhcms6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7cHJpbWFyeS5jb2xvcn0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3twcmltYXJ5LmhvdmVyLmNvbG9yfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3twcmltYXJ5LmFjdGl2ZS5jb2xvcn0nLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3ByaW1hcnkuY29sb3J9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJvcmRlckNvbG9yOiAne3ByaW1hcnkuaG92ZXIuY29sb3J9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCb3JkZXJDb2xvcjogJ3twcmltYXJ5LmFjdGl2ZS5jb2xvcn0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3ByaW1hcnkuY29udHJhc3QuY29sb3J9JyxcbiAgICAgICAgICAgICAgICBob3ZlckNvbG9yOiAne3ByaW1hcnkuY29udHJhc3QuY29sb3J9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVDb2xvcjogJ3twcmltYXJ5LmNvbnRyYXN0LmNvbG9yfScsXG4gICAgICAgICAgICAgICAgZm9jdXNSaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICBzaGFkb3c6ICcwIDAgMCAwLjJyZW0gY29sb3ItbWl4KGluIHNyZ2IsIHtwcmltYXJ5LmNvbG9yfSwgdHJhbnNwYXJlbnQgODAlKSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjgwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tzdXJmYWNlLjcwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c3VyZmFjZS42MDB9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tzdXJmYWNlLjgwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6ICd7c3VyZmFjZS43MDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCb3JkZXJDb2xvcjogJ3tzdXJmYWNlLjYwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuMzAwfScsXG4gICAgICAgICAgICAgICAgaG92ZXJDb2xvcjogJ3tzdXJmYWNlLjIwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUNvbG9yOiAne3N1cmZhY2UuMTAwfScsXG4gICAgICAgICAgICAgICAgZm9jdXNSaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICBzaGFkb3c6ICcwIDAgMCAwLjJyZW0gY29sb3ItbWl4KGluIHNyZ2IsIHtzdXJmYWNlLjMwMH0sIHRyYW5zcGFyZW50IDgwJSknXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3NreS40MDB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c2t5LjMwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c2t5LjIwMH0nLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3NreS40MDB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJvcmRlckNvbG9yOiAne3NreS4zMDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCb3JkZXJDb2xvcjogJ3tza3kuMjAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7c2t5Ljk1MH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQ29sb3I6ICd7c2t5Ljk1MH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUNvbG9yOiAne3NreS45NTB9JyxcbiAgICAgICAgICAgICAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvdzogJzAgMCAwIDAuMnJlbSBjb2xvci1taXgoaW4gc3JnYiwge3NreS40MDB9LCB0cmFuc3BhcmVudCA4MCUpJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tncmVlbi40MDB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7Z3JlZW4uMzAwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3tncmVlbi4yMDB9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tncmVlbi40MDB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJvcmRlckNvbG9yOiAne2dyZWVuLjMwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJvcmRlckNvbG9yOiAne2dyZWVuLjIwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne2dyZWVuLjk1MH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQ29sb3I6ICd7Z3JlZW4uOTUwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQ29sb3I6ICd7Z3JlZW4uOTUwfScsXG4gICAgICAgICAgICAgICAgZm9jdXNSaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICBzaGFkb3c6ICcwIDAgMCAwLjJyZW0gY29sb3ItbWl4KGluIHNyZ2IsIHtncmVlbi40MDB9LCB0cmFuc3BhcmVudCA4MCUpJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3YXJuOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tvcmFuZ2UuNDAwfScsXG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne29yYW5nZS4zMDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne29yYW5nZS4yMDB9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tvcmFuZ2UuNDAwfScsXG4gICAgICAgICAgICAgICAgaG92ZXJCb3JkZXJDb2xvcjogJ3tvcmFuZ2UuMzAwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQm9yZGVyQ29sb3I6ICd7b3JhbmdlLjIwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne29yYW5nZS45NTB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckNvbG9yOiAne29yYW5nZS45NTB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVDb2xvcjogJ3tvcmFuZ2UuOTUwfScsXG4gICAgICAgICAgICAgICAgZm9jdXNSaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICBzaGFkb3c6ICcwIDAgMCAwLjJyZW0gY29sb3ItbWl4KGluIHNyZ2IsIHtvcmFuZ2UuNDAwfSwgdHJhbnNwYXJlbnQgODAlKSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVscDoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7cHVycGxlLjQwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3twdXJwbGUuMzAwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3twdXJwbGUuMjAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7cHVycGxlLjQwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6ICd7cHVycGxlLjMwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJvcmRlckNvbG9yOiAne3B1cnBsZS4yMDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3twdXJwbGUuOTUwfScsXG4gICAgICAgICAgICAgICAgaG92ZXJDb2xvcjogJ3twdXJwbGUuOTUwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQ29sb3I6ICd7cHVycGxlLjk1MH0nLFxuICAgICAgICAgICAgICAgIGZvY3VzUmluZzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93OiAnMCAwIDAgMC4ycmVtIGNvbG9yLW1peChpbiBzcmdiLCB7cHVycGxlLjQwMH0sIHRyYW5zcGFyZW50IDgwJSknXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhbmdlcjoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7cmVkLjQwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tyZWQuMzAwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3tyZWQuMjAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7cmVkLjQwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6ICd7cmVkLjMwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJvcmRlckNvbG9yOiAne3JlZC4yMDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tyZWQuOTUwfScsXG4gICAgICAgICAgICAgICAgaG92ZXJDb2xvcjogJ3tyZWQuOTUwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQ29sb3I6ICd7cmVkLjk1MH0nLFxuICAgICAgICAgICAgICAgIGZvY3VzUmluZzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93OiAnMCAwIDAgMC4ycmVtIGNvbG9yLW1peChpbiBzcmdiLCB7cmVkLjQwMH0sIHRyYW5zcGFyZW50IDgwJSknXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRyYXN0OiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS4xMDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3N1cmZhY2UuMjAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c3VyZmFjZS4wfScsXG4gICAgICAgICAgICAgICAgaG92ZXJCb3JkZXJDb2xvcjogJ3tzdXJmYWNlLjEwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJvcmRlckNvbG9yOiAne3N1cmZhY2UuMjAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS45NTB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckNvbG9yOiAne3N1cmZhY2UuOTUwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQ29sb3I6ICd7c3VyZmFjZS45NTB9JyxcbiAgICAgICAgICAgICAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvdzogJzAgMCAwIDAuMnJlbSBjb2xvci1taXgoaW4gc3JnYiwge3N1cmZhY2UuMH0sIHRyYW5zcGFyZW50IDgwJSknXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvdXRsaW5lZDoge1xuICAgICAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ2NvbG9yLW1peChpbiBzcmdiLCB7cHJpbWFyeS5jb2xvcn0sIHRyYW5zcGFyZW50IDk2JSknLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICdjb2xvci1taXgoaW4gc3JnYiwge3ByaW1hcnkuY29sb3J9LCB0cmFuc3BhcmVudCA4NCUpJyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3twcmltYXJ5LjcwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3ByaW1hcnkuY29sb3J9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3JnYmEoMjU1LDI1NSwyNTUsMC4wNCknLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTYpJyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tzdXJmYWNlLjcwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuNDAwfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAnY29sb3ItbWl4KGluIHNyZ2IsIHtncmVlbi40MDB9LCB0cmFuc3BhcmVudCA5NiUpJyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAnY29sb3ItbWl4KGluIHNyZ2IsIHtncmVlbi40MDB9LCB0cmFuc3BhcmVudCA4NCUpJyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tncmVlbi43MDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tncmVlbi40MDB9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICdjb2xvci1taXgoaW4gc3JnYiwge3NreS40MDB9LCB0cmFuc3BhcmVudCA5NiUpJyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAnY29sb3ItbWl4KGluIHNyZ2IsIHtza3kuNDAwfSwgdHJhbnNwYXJlbnQgODQlKScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c2t5LjcwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3NreS40MDB9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdhcm46IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICdjb2xvci1taXgoaW4gc3JnYiwge29yYW5nZS40MDB9LCB0cmFuc3BhcmVudCA5NiUpJyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAnY29sb3ItbWl4KGluIHNyZ2IsIHtvcmFuZ2UuNDAwfSwgdHJhbnNwYXJlbnQgODQlKScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7b3JhbmdlLjcwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne29yYW5nZS40MDB9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlbHA6IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICdjb2xvci1taXgoaW4gc3JnYiwge2hlbHAuNDAwfSwgdHJhbnNwYXJlbnQgOTYlKScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ2NvbG9yLW1peChpbiBzcmdiLCB7aGVscC40MDB9LCB0cmFuc3BhcmVudCA4NCUpJyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3twdXJwbGUuNzAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7cHVycGxlLjQwMH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGFuZ2VyOiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAnY29sb3ItbWl4KGluIHNyZ2IsIHtkYW5nZXIuNDAwfSwgdHJhbnNwYXJlbnQgOTYlKScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ2NvbG9yLW1peChpbiBzcmdiLCB7ZGFuZ2VyLjQwMH0sIHRyYW5zcGFyZW50IDg0JSknLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3JlZC43MDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tyZWQuNDAwfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250cmFzdDoge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tzdXJmYWNlLjgwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c3VyZmFjZS43MDB9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tzdXJmYWNlLjUwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuMH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxhaW46IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS44MDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3N1cmZhY2UuNzAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c3VyZmFjZS42MDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjB9J1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAnY29sb3ItbWl4KGluIHNyZ2IsIHtwcmltYXJ5LmNvbG9yfSwgdHJhbnNwYXJlbnQgOTYlKScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ2NvbG9yLW1peChpbiBzcmdiLCB7cHJpbWFyeS5jb2xvcn0sIHRyYW5zcGFyZW50IDg0JSknLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3ByaW1hcnkuY29sb3J9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tzdXJmYWNlLjcwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c3VyZmFjZS42MDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjMwMH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ2NvbG9yLW1peChpbiBzcmdiLCB7Z3JlZW4uNDAwfSwgdHJhbnNwYXJlbnQgOTYlKScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ2NvbG9yLW1peChpbiBzcmdiLCB7Z3JlZW4uNDAwfSwgdHJhbnNwYXJlbnQgODQlKScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7Z3JlZW4uNDAwfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAnY29sb3ItbWl4KGluIHNyZ2IsIHtza3kuNDAwfSwgdHJhbnNwYXJlbnQgOTYlKScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ2NvbG9yLW1peChpbiBzcmdiLCB7c2t5LjQwMH0sIHRyYW5zcGFyZW50IDg0JSknLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3NreS40MDB9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdhcm46IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICdjb2xvci1taXgoaW4gc3JnYiwge29yYW5nZS40MDB9LCB0cmFuc3BhcmVudCA5NiUpJyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAnY29sb3ItbWl4KGluIHNyZ2IsIHtvcmFuZ2UuNDAwfSwgdHJhbnNwYXJlbnQgODQlKScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7b3JhbmdlLjQwMH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVscDoge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ2NvbG9yLW1peChpbiBzcmdiLCB7cHVycGxlLjQwMH0sIHRyYW5zcGFyZW50IDk2JSknLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICdjb2xvci1taXgoaW4gc3JnYiwge3B1cnBsZS40MDB9LCB0cmFuc3BhcmVudCA4NCUpJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3twdXJwbGUuNDAwfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYW5nZXI6IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICdjb2xvci1taXgoaW4gc3JnYiwge3JlZC40MDB9LCB0cmFuc3BhcmVudCA5NiUpJyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAnY29sb3ItbWl4KGluIHNyZ2IsIHtyZWQuNDAwfSwgdHJhbnNwYXJlbnQgODQlKScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7cmVkLjQwMH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udHJhc3Q6IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS44MDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3N1cmZhY2UuNzAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS4wfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGFpbjoge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tzdXJmYWNlLjgwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c3VyZmFjZS43MDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjB9J1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICBjb2xvcjogJ3twcmltYXJ5LmNvbG9yfScsXG4gICAgICAgICAgICBob3ZlckNvbG9yOiAne3ByaW1hcnkuY29sb3J9JyxcbiAgICAgICAgICAgIGFjdGl2ZUNvbG9yOiAne3ByaW1hcnkuY29sb3J9J1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJvb3QsXG4gICAgY29sb3JTY2hlbWVcbn0gc2F0aXNmaWVzIEJ1dHRvbkRlc2lnblRva2VucztcbiJdLCJtYXBwaW5ncyI6IiIsImlnbm9yZUxpc3QiOltdfQ==