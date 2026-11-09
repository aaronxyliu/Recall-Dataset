var r = {
    borderRadius: "{form.field.border.radius}",
    roundedBorderRadius: "2rem",
    gap: "0.5rem",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    iconOnlyWidth: "2.5rem",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}",
      iconOnlyWidth: "2rem"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}",
      iconOnlyWidth: "3rem"
    },
    label: {
      fontWeight: "700"
    },
    raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      offset: "{focus.ring.offset}"
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
            color: "{primary.color}",
            shadow: "none"
          }
        },
        secondary: {
          background: "{surface.200}",
          hoverBackground: "{surface.300}",
          activeBackground: "{surface.400}",
          borderColor: "{surface.200}",
          hoverBorderColor: "{surface.300}",
          activeBorderColor: "{surface.400}",
          color: "{surface.700}",
          hoverColor: "{surface.800}",
          activeColor: "{surface.900}",
          focusRing: {
            color: "{surface.700}",
            shadow: "none"
          }
        },
        info: {
          background: "{sky.600}",
          hoverBackground: "{sky.700}",
          activeBackground: "{sky.800}",
          borderColor: "{sky.600}",
          hoverBorderColor: "{sky.700}",
          activeBorderColor: "{sky.800}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{sky.600}",
            shadow: "none"
          }
        },
        success: {
          background: "{green.600}",
          hoverBackground: "{green.700}",
          activeBackground: "{green.800}",
          borderColor: "{green.600}",
          hoverBorderColor: "{green.700}",
          activeBorderColor: "{green.800}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{green.600}",
            shadow: "none"
          }
        },
        warn: {
          background: "{orange.600}",
          hoverBackground: "{orange.700}",
          activeBackground: "{orange.800}",
          borderColor: "{orange.600}",
          hoverBorderColor: "{orange.700}",
          activeBorderColor: "{orange.800}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{orange.600}",
            shadow: "none"
          }
        },
        help: {
          background: "{purple.600}",
          hoverBackground: "{purple.700}",
          activeBackground: "{purple.800}",
          borderColor: "{purple.600}",
          hoverBorderColor: "{purple.700}",
          activeBorderColor: "{purple.800}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{purple.600}",
            shadow: "none"
          }
        },
        danger: {
          background: "{red.600}",
          hoverBackground: "{red.700}",
          activeBackground: "{red.800}",
          borderColor: "{red.600}",
          hoverBorderColor: "{red.700}",
          activeBorderColor: "{red.800}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{red.600}",
            shadow: "none"
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
            color: "{surface.950}",
            shadow: "none"
          }
        }
      },
      outlined: {
        primary: {
          hoverBackground: "{primary.50}",
          activeBackground: "{primary.100}",
          borderColor: "{primary.color}",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          borderColor: "{surface.600}",
          color: "{surface.600}"
        },
        success: {
          hoverBackground: "{green.50}",
          activeBackground: "{green.100}",
          borderColor: "{green.600}",
          color: "{green.600}"
        },
        info: {
          hoverBackground: "{sky.50}",
          activeBackground: "{sky.100}",
          borderColor: "{sky.600}",
          color: "{sky.600}"
        },
        warn: {
          hoverBackground: "{orange.50}",
          activeBackground: "{orange.100}",
          borderColor: "{orange.600}",
          color: "{orange.600}"
        },
        help: {
          hoverBackground: "{purple.50}",
          activeBackground: "{purple.100}",
          borderColor: "{purple.600}",
          color: "{purple.600}"
        },
        danger: {
          hoverBackground: "{red.50}",
          activeBackground: "{red.100}",
          borderColor: "{red.600}",
          color: "{red.600}"
        },
        contrast: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          borderColor: "{surface.950}",
          color: "{surface.950}"
        },
        plain: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          borderColor: "{surface.900}",
          color: "{surface.900}"
        }
      },
      text: {
        primary: {
          hoverBackground: "{primary.50}",
          activeBackground: "{primary.100}",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          color: "{surface.600}"
        },
        success: {
          hoverBackground: "{green.50}",
          activeBackground: "{green.100}",
          color: "{green.600}"
        },
        info: {
          hoverBackground: "{sky.50}",
          activeBackground: "{sky.100}",
          color: "{sky.600}"
        },
        warn: {
          hoverBackground: "{orange.50}",
          activeBackground: "{orange.100}",
          color: "{orange.600}"
        },
        help: {
          hoverBackground: "{purple.50}",
          activeBackground: "{purple.100}",
          color: "{purple.600}"
        },
        danger: {
          hoverBackground: "{red.50}",
          activeBackground: "{red.100}",
          color: "{red.600}"
        },
        contrast: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          color: "{surface.950}"
        },
        plain: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          color: "{surface.900}"
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
            color: "{primary.color}",
            shadow: "none"
          }
        },
        secondary: {
          background: "{surface.700}",
          hoverBackground: "{surface.600}",
          activeBackground: "{surface.500}",
          borderColor: "{surface.700}",
          hoverBorderColor: "{surface.600}",
          activeBorderColor: "{surface.500}",
          color: "{surface.200}",
          hoverColor: "{surface.100}",
          activeColor: "{surface.0}",
          focusRing: {
            color: "{surface.200}",
            shadow: "none"
          }
        },
        info: {
          background: "{sky.500}",
          hoverBackground: "{sky.400}",
          activeBackground: "{sky.300}",
          borderColor: "{sky.500}",
          hoverBorderColor: "{sky.400}",
          activeBorderColor: "{sky.300}",
          color: "{sky.950}",
          hoverColor: "{sky.950}",
          activeColor: "{sky.950}",
          focusRing: {
            color: "{sky.500}",
            shadow: "none"
          }
        },
        success: {
          background: "{green.500}",
          hoverBackground: "{green.400}",
          activeBackground: "{green.300}",
          borderColor: "{green.500}",
          hoverBorderColor: "{green.400}",
          activeBorderColor: "{green.300}",
          color: "{green.950}",
          hoverColor: "{green.950}",
          activeColor: "{green.950}",
          focusRing: {
            color: "{green.500}",
            shadow: "none"
          }
        },
        warn: {
          background: "{orange.500}",
          hoverBackground: "{orange.400}",
          activeBackground: "{orange.300}",
          borderColor: "{orange.500}",
          hoverBorderColor: "{orange.400}",
          activeBorderColor: "{orange.300}",
          color: "{orange.950}",
          hoverColor: "{orange.950}",
          activeColor: "{orange.950}",
          focusRing: {
            color: "{orange.500}",
            shadow: "none"
          }
        },
        help: {
          background: "{purple.500}",
          hoverBackground: "{purple.400}",
          activeBackground: "{purple.300}",
          borderColor: "{purple.500}",
          hoverBorderColor: "{purple.400}",
          activeBorderColor: "{purple.300}",
          color: "{purple.950}",
          hoverColor: "{purple.950}",
          activeColor: "{purple.950}",
          focusRing: {
            color: "{purple.500}",
            shadow: "none"
          }
        },
        danger: {
          background: "{red.500}",
          hoverBackground: "{red.400}",
          activeBackground: "{red.300}",
          borderColor: "{red.500}",
          hoverBorderColor: "{red.400}",
          activeBorderColor: "{red.300}",
          color: "{red.950}",
          hoverColor: "{red.950}",
          activeColor: "{red.950}",
          focusRing: {
            color: "{red.500}",
            shadow: "none"
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
            color: "{surface.0}",
            shadow: "none"
          }
        }
      },
      outlined: {
        primary: {
          hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)",
          borderColor: "{primary.color}",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "rgba(255,255,255,0.04)",
          activeBackground: "rgba(255,255,255,0.16)",
          borderColor: "{surface.400}",
          color: "{surface.400}"
        },
        success: {
          hoverBackground: "{green.950}",
          activeBackground: "{green.900}",
          borderColor: "{green.500}",
          color: "{green.500}"
        },
        info: {
          hoverBackground: "{sky.950}",
          activeBackground: "{sky.900}",
          borderColor: "{sky.500}",
          color: "{sky.500}"
        },
        warn: {
          hoverBackground: "{orange.950}",
          activeBackground: "{orange.900}",
          borderColor: "{orange.500}",
          color: "{orange.500}"
        },
        help: {
          hoverBackground: "{purple.950}",
          activeBackground: "{purple.900}",
          borderColor: "{purple.500}",
          color: "{purple.500}"
        },
        danger: {
          hoverBackground: "{red.950}",
          activeBackground: "{red.900}",
          borderColor: "{red.500}",
          color: "{red.500}"
        },
        contrast: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          borderColor: "{surface.0}",
          color: "{surface.0}"
        },
        plain: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          borderColor: "{surface.0}",
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
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          color: "{surface.400}"
        },
        success: {
          hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)",
          color: "{green.500}"
        },
        info: {
          hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)",
          color: "{sky.500}"
        },
        warn: {
          hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)",
          color: "{orange.500}"
        },
        help: {
          hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)",
          color: "{purple.500}"
        },
        danger: {
          hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)",
          color: "{red.500}"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbm9yYS9idXR0b24vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBCdXR0b25EZXNpZ25Ub2tlbnMsIEJ1dHRvblRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL2J1dHRvbic7XG5cbmV4cG9ydCBjb25zdCByb290OiBCdXR0b25Ub2tlblNlY3Rpb25zLlJvb3QgPSB7XG4gICAgYm9yZGVyUmFkaXVzOiAne2Zvcm0uZmllbGQuYm9yZGVyLnJhZGl1c30nLFxuICAgIHJvdW5kZWRCb3JkZXJSYWRpdXM6ICcycmVtJyxcbiAgICBnYXA6ICcwLjVyZW0nLFxuICAgIHBhZGRpbmdYOiAne2Zvcm0uZmllbGQucGFkZGluZy54fScsXG4gICAgcGFkZGluZ1k6ICd7Zm9ybS5maWVsZC5wYWRkaW5nLnl9JyxcbiAgICBpY29uT25seVdpZHRoOiAnMi41cmVtJyxcbiAgICBzbToge1xuICAgICAgICBmb250U2l6ZTogJ3tmb3JtLmZpZWxkLnNtLmZvbnQuc2l6ZX0nLFxuICAgICAgICBwYWRkaW5nWDogJ3tmb3JtLmZpZWxkLnNtLnBhZGRpbmcueH0nLFxuICAgICAgICBwYWRkaW5nWTogJ3tmb3JtLmZpZWxkLnNtLnBhZGRpbmcueX0nLFxuICAgICAgICBpY29uT25seVdpZHRoOiAnMnJlbSdcbiAgICB9LFxuICAgIGxnOiB7XG4gICAgICAgIGZvbnRTaXplOiAne2Zvcm0uZmllbGQubGcuZm9udC5zaXplfScsXG4gICAgICAgIHBhZGRpbmdYOiAne2Zvcm0uZmllbGQubGcucGFkZGluZy54fScsXG4gICAgICAgIHBhZGRpbmdZOiAne2Zvcm0uZmllbGQubGcucGFkZGluZy55fScsXG4gICAgICAgIGljb25Pbmx5V2lkdGg6ICczcmVtJ1xuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgICAgZm9udFdlaWdodDogJzcwMCdcbiAgICB9LFxuICAgIHJhaXNlZFNoYWRvdzogJzAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gICAgZm9jdXNSaW5nOiB7XG4gICAgICAgIHdpZHRoOiAne2ZvY3VzLnJpbmcud2lkdGh9JyxcbiAgICAgICAgc3R5bGU6ICd7Zm9jdXMucmluZy5zdHlsZX0nLFxuICAgICAgICBvZmZzZXQ6ICd7Zm9jdXMucmluZy5vZmZzZXR9J1xuICAgIH0sXG4gICAgYmFkZ2VTaXplOiAnMXJlbScsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAne2Zvcm0uZmllbGQudHJhbnNpdGlvbi5kdXJhdGlvbn0nXG59O1xuXG5leHBvcnQgY29uc3QgY29sb3JTY2hlbWU6IEJ1dHRvblRva2VuU2VjdGlvbnMuQ29sb3JTY2hlbWUgPSB7XG4gICAgbGlnaHQ6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7cHJpbWFyeS5jb2xvcn0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3twcmltYXJ5LmhvdmVyLmNvbG9yfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3twcmltYXJ5LmFjdGl2ZS5jb2xvcn0nLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3ByaW1hcnkuY29sb3J9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJvcmRlckNvbG9yOiAne3ByaW1hcnkuaG92ZXIuY29sb3J9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCb3JkZXJDb2xvcjogJ3twcmltYXJ5LmFjdGl2ZS5jb2xvcn0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3ByaW1hcnkuY29udHJhc3QuY29sb3J9JyxcbiAgICAgICAgICAgICAgICBob3ZlckNvbG9yOiAne3ByaW1hcnkuY29udHJhc3QuY29sb3J9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVDb2xvcjogJ3twcmltYXJ5LmNvbnRyYXN0LmNvbG9yfScsXG4gICAgICAgICAgICAgICAgZm9jdXNSaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAne3ByaW1hcnkuY29sb3J9JyxcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93OiAnbm9uZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjIwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tzdXJmYWNlLjMwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c3VyZmFjZS40MDB9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tzdXJmYWNlLjIwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6ICd7c3VyZmFjZS4zMDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCb3JkZXJDb2xvcjogJ3tzdXJmYWNlLjQwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuNzAwfScsXG4gICAgICAgICAgICAgICAgaG92ZXJDb2xvcjogJ3tzdXJmYWNlLjgwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUNvbG9yOiAne3N1cmZhY2UuOTAwfScsXG4gICAgICAgICAgICAgICAgZm9jdXNSaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuNzAwfScsXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvdzogJ25vbmUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3NreS42MDB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c2t5LjcwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c2t5LjgwMH0nLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3NreS42MDB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJvcmRlckNvbG9yOiAne3NreS43MDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCb3JkZXJDb2xvcjogJ3tza3kuODAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICBob3ZlckNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgYWN0aXZlQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd7c2t5LjYwMH0nLFxuICAgICAgICAgICAgICAgICAgICBzaGFkb3c6ICdub25lJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tncmVlbi42MDB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7Z3JlZW4uNzAwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3tncmVlbi44MDB9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tncmVlbi42MDB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJvcmRlckNvbG9yOiAne2dyZWVuLjcwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJvcmRlckNvbG9yOiAne2dyZWVuLjgwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgaG92ZXJDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgZm9jdXNSaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAne2dyZWVuLjYwMH0nLFxuICAgICAgICAgICAgICAgICAgICBzaGFkb3c6ICdub25lJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3YXJuOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tvcmFuZ2UuNjAwfScsXG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne29yYW5nZS43MDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne29yYW5nZS44MDB9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tvcmFuZ2UuNjAwfScsXG4gICAgICAgICAgICAgICAgaG92ZXJCb3JkZXJDb2xvcjogJ3tvcmFuZ2UuNzAwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQm9yZGVyQ29sb3I6ICd7b3JhbmdlLjgwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgaG92ZXJDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgZm9jdXNSaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAne29yYW5nZS42MDB9JyxcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93OiAnbm9uZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVscDoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7cHVycGxlLjYwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3twdXJwbGUuNzAwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3twdXJwbGUuODAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7cHVycGxlLjYwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6ICd7cHVycGxlLjcwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJvcmRlckNvbG9yOiAne3B1cnBsZS44MDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgIGhvdmVyQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICBhY3RpdmVDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgIGZvY3VzUmluZzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3twdXJwbGUuNjAwfScsXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvdzogJ25vbmUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhbmdlcjoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7cmVkLjYwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tyZWQuNzAwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3tyZWQuODAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7cmVkLjYwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6ICd7cmVkLjcwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJvcmRlckNvbG9yOiAne3JlZC44MDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgIGhvdmVyQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICBhY3RpdmVDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgIGZvY3VzUmluZzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3tyZWQuNjAwfScsXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvdzogJ25vbmUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRyYXN0OiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tzdXJmYWNlLjk1MH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tzdXJmYWNlLjkwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c3VyZmFjZS44MDB9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tzdXJmYWNlLjk1MH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6ICd7c3VyZmFjZS45MDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCb3JkZXJDb2xvcjogJ3tzdXJmYWNlLjgwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQ29sb3I6ICd7c3VyZmFjZS4wfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQ29sb3I6ICd7c3VyZmFjZS4wfScsXG4gICAgICAgICAgICAgICAgZm9jdXNSaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuOTUwfScsXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvdzogJ25vbmUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvdXRsaW5lZDoge1xuICAgICAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3twcmltYXJ5LjUwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3twcmltYXJ5LjEwMH0nLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3ByaW1hcnkuY29sb3J9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3twcmltYXJ5LmNvbG9yfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS41MH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c3VyZmFjZS4xMDB9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tzdXJmYWNlLjYwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuNjAwfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne2dyZWVuLjUwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3tncmVlbi4xMDB9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tncmVlbi42MDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tncmVlbi42MDB9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c2t5LjUwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3tza3kuMTAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c2t5LjYwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3NreS42MDB9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdhcm46IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7b3JhbmdlLjUwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3tvcmFuZ2UuMTAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7b3JhbmdlLjYwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne29yYW5nZS42MDB9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlbHA6IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7cHVycGxlLjUwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3twdXJwbGUuMTAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7cHVycGxlLjYwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3B1cnBsZS42MDB9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhbmdlcjoge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tyZWQuNTB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3JlZC4xMDB9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tyZWQuNjAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7cmVkLjYwMH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udHJhc3Q6IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS41MH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c3VyZmFjZS4xMDB9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tzdXJmYWNlLjk1MH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuOTUwfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGFpbjoge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tzdXJmYWNlLjUwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3tzdXJmYWNlLjEwMH0nLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3N1cmZhY2UuOTAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS45MDB9J1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3ByaW1hcnkuNTB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3ByaW1hcnkuMTAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7cHJpbWFyeS5jb2xvcn0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3N1cmZhY2UuNTB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3N1cmZhY2UuMTAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS42MDB9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7Z3JlZW4uNTB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne2dyZWVuLjEwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne2dyZWVuLjYwMH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tza3kuNTB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3NreS4xMDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tza3kuNjAwfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3YXJuOiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne29yYW5nZS41MH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7b3JhbmdlLjEwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne29yYW5nZS42MDB9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlbHA6IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7cHVycGxlLjUwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3twdXJwbGUuMTAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7cHVycGxlLjYwMH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGFuZ2VyOiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3JlZC41MH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7cmVkLjEwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3JlZC42MDB9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRyYXN0OiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3N1cmZhY2UuNTB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3N1cmZhY2UuMTAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS45NTB9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYWluOiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3N1cmZhY2UuNTB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3N1cmZhY2UuMTAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS45MDB9J1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICBjb2xvcjogJ3twcmltYXJ5LmNvbG9yfScsXG4gICAgICAgICAgICBob3ZlckNvbG9yOiAne3ByaW1hcnkuY29sb3J9JyxcbiAgICAgICAgICAgIGFjdGl2ZUNvbG9yOiAne3ByaW1hcnkuY29sb3J9J1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXJrOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3ByaW1hcnkuY29sb3J9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7cHJpbWFyeS5ob3Zlci5jb2xvcn0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7cHJpbWFyeS5hY3RpdmUuY29sb3J9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3twcmltYXJ5LmNvbG9yfScsXG4gICAgICAgICAgICAgICAgaG92ZXJCb3JkZXJDb2xvcjogJ3twcmltYXJ5LmhvdmVyLmNvbG9yfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQm9yZGVyQ29sb3I6ICd7cHJpbWFyeS5hY3RpdmUuY29sb3J9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3twcmltYXJ5LmNvbnRyYXN0LmNvbG9yfScsXG4gICAgICAgICAgICAgICAgaG92ZXJDb2xvcjogJ3twcmltYXJ5LmNvbnRyYXN0LmNvbG9yfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQ29sb3I6ICd7cHJpbWFyeS5jb250cmFzdC5jb2xvcn0nLFxuICAgICAgICAgICAgICAgIGZvY3VzUmluZzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3twcmltYXJ5LmNvbG9yfScsXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvdzogJ25vbmUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7c3VyZmFjZS43MDB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS42MDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3N1cmZhY2UuNTAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c3VyZmFjZS43MDB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJvcmRlckNvbG9yOiAne3N1cmZhY2UuNjAwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQm9yZGVyQ29sb3I6ICd7c3VyZmFjZS41MDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjIwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQ29sb3I6ICd7c3VyZmFjZS4xMDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVDb2xvcjogJ3tzdXJmYWNlLjB9JyxcbiAgICAgICAgICAgICAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS4yMDB9JyxcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93OiAnbm9uZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7c2t5LjUwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tza3kuNDAwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3tza3kuMzAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c2t5LjUwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6ICd7c2t5LjQwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJvcmRlckNvbG9yOiAne3NreS4zMDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tza3kuOTUwfScsXG4gICAgICAgICAgICAgICAgaG92ZXJDb2xvcjogJ3tza3kuOTUwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQ29sb3I6ICd7c2t5Ljk1MH0nLFxuICAgICAgICAgICAgICAgIGZvY3VzUmluZzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3tza3kuNTAwfScsXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvdzogJ25vbmUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAne2dyZWVuLjUwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tncmVlbi40MDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne2dyZWVuLjMwMH0nLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne2dyZWVuLjUwMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6ICd7Z3JlZW4uNDAwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQm9yZGVyQ29sb3I6ICd7Z3JlZW4uMzAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7Z3JlZW4uOTUwfScsXG4gICAgICAgICAgICAgICAgaG92ZXJDb2xvcjogJ3tncmVlbi45NTB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVDb2xvcjogJ3tncmVlbi45NTB9JyxcbiAgICAgICAgICAgICAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd7Z3JlZW4uNTAwfScsXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvdzogJ25vbmUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdhcm46IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAne29yYW5nZS41MDB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7b3JhbmdlLjQwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7b3JhbmdlLjMwMH0nLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne29yYW5nZS41MDB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJvcmRlckNvbG9yOiAne29yYW5nZS40MDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCb3JkZXJDb2xvcjogJ3tvcmFuZ2UuMzAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7b3JhbmdlLjk1MH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQ29sb3I6ICd7b3JhbmdlLjk1MH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUNvbG9yOiAne29yYW5nZS45NTB9JyxcbiAgICAgICAgICAgICAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd7b3JhbmdlLjUwMH0nLFxuICAgICAgICAgICAgICAgICAgICBzaGFkb3c6ICdub25lJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWxwOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3twdXJwbGUuNTAwfScsXG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3B1cnBsZS40MDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3B1cnBsZS4zMDB9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3twdXJwbGUuNTAwfScsXG4gICAgICAgICAgICAgICAgaG92ZXJCb3JkZXJDb2xvcjogJ3twdXJwbGUuNDAwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQm9yZGVyQ29sb3I6ICd7cHVycGxlLjMwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3B1cnBsZS45NTB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckNvbG9yOiAne3B1cnBsZS45NTB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVDb2xvcjogJ3twdXJwbGUuOTUwfScsXG4gICAgICAgICAgICAgICAgZm9jdXNSaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAne3B1cnBsZS41MDB9JyxcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93OiAnbm9uZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGFuZ2VyOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tyZWQuNTAwfScsXG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3JlZC40MDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3JlZC4zMDB9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tyZWQuNTAwfScsXG4gICAgICAgICAgICAgICAgaG92ZXJCb3JkZXJDb2xvcjogJ3tyZWQuNDAwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQm9yZGVyQ29sb3I6ICd7cmVkLjMwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3JlZC45NTB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckNvbG9yOiAne3JlZC45NTB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVDb2xvcjogJ3tyZWQuOTUwfScsXG4gICAgICAgICAgICAgICAgZm9jdXNSaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAne3JlZC41MDB9JyxcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93OiAnbm9uZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udHJhc3Q6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuMH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tzdXJmYWNlLjEwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c3VyZmFjZS4yMDB9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tzdXJmYWNlLjB9JyxcbiAgICAgICAgICAgICAgICBob3ZlckJvcmRlckNvbG9yOiAne3N1cmZhY2UuMTAwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQm9yZGVyQ29sb3I6ICd7c3VyZmFjZS4yMDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjk1MH0nLFxuICAgICAgICAgICAgICAgIGhvdmVyQ29sb3I6ICd7c3VyZmFjZS45NTB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVDb2xvcjogJ3tzdXJmYWNlLjk1MH0nLFxuICAgICAgICAgICAgICAgIGZvY3VzUmluZzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjB9JyxcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93OiAnbm9uZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG91dGxpbmVkOiB7XG4gICAgICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAnY29sb3ItbWl4KGluIHNyZ2IsIHtwcmltYXJ5LmNvbG9yfSwgdHJhbnNwYXJlbnQgOTYlKScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ2NvbG9yLW1peChpbiBzcmdiLCB7cHJpbWFyeS5jb2xvcn0sIHRyYW5zcGFyZW50IDg0JSknLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3ByaW1hcnkuY29sb3J9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3twcmltYXJ5LmNvbG9yfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpJyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAncmdiYSgyNTUsMjU1LDI1NSwwLjE2KScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c3VyZmFjZS40MDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjQwMH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tncmVlbi45NTB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne2dyZWVuLjkwMH0nLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne2dyZWVuLjUwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne2dyZWVuLjUwMH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tza3kuOTUwfScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ3tza3kuOTAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c2t5LjUwMH0nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3NreS41MDB9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdhcm46IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7b3JhbmdlLjk1MH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7b3JhbmdlLjkwMH0nLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne29yYW5nZS41MDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tvcmFuZ2UuNTAwfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWxwOiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3B1cnBsZS45NTB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3B1cnBsZS45MDB9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3twdXJwbGUuNTAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7cHVycGxlLjUwMH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGFuZ2VyOiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3JlZC45NTB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3JlZC45MDB9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tyZWQuNTAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7cmVkLjUwMH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udHJhc3Q6IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS44MDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3N1cmZhY2UuNzAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c3VyZmFjZS4wfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS4wfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGFpbjoge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tzdXJmYWNlLjgwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c3VyZmFjZS43MDB9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tzdXJmYWNlLjB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjB9J1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAnY29sb3ItbWl4KGluIHNyZ2IsIHtwcmltYXJ5LmNvbG9yfSwgdHJhbnNwYXJlbnQgOTYlKScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ2NvbG9yLW1peChpbiBzcmdiLCB7cHJpbWFyeS5jb2xvcn0sIHRyYW5zcGFyZW50IDg0JSknLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3ByaW1hcnkuY29sb3J9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tzdXJmYWNlLjgwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c3VyZmFjZS43MDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjQwMH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ2NvbG9yLW1peChpbiBzcmdiLCB7Z3JlZW4uNDAwfSwgdHJhbnNwYXJlbnQgOTYlKScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ2NvbG9yLW1peChpbiBzcmdiLCB7Z3JlZW4uNDAwfSwgdHJhbnNwYXJlbnQgODQlKScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7Z3JlZW4uNTAwfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAnY29sb3ItbWl4KGluIHNyZ2IsIHtza3kuNDAwfSwgdHJhbnNwYXJlbnQgOTYlKScsXG4gICAgICAgICAgICAgICAgYWN0aXZlQmFja2dyb3VuZDogJ2NvbG9yLW1peChpbiBzcmdiLCB7c2t5LjQwMH0sIHRyYW5zcGFyZW50IDg0JSknLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAne3NreS41MDB9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdhcm46IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICdjb2xvci1taXgoaW4gc3JnYiwge29yYW5nZS40MDB9LCB0cmFuc3BhcmVudCA5NiUpJyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAnY29sb3ItbWl4KGluIHNyZ2IsIHtvcmFuZ2UuNDAwfSwgdHJhbnNwYXJlbnQgODQlKScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7b3JhbmdlLjUwMH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVscDoge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ2NvbG9yLW1peChpbiBzcmdiLCB7cHVycGxlLjQwMH0sIHRyYW5zcGFyZW50IDk2JSknLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICdjb2xvci1taXgoaW4gc3JnYiwge3B1cnBsZS40MDB9LCB0cmFuc3BhcmVudCA4NCUpJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3twdXJwbGUuNTAwfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYW5nZXI6IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICdjb2xvci1taXgoaW4gc3JnYiwge3JlZC40MDB9LCB0cmFuc3BhcmVudCA5NiUpJyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAnY29sb3ItbWl4KGluIHNyZ2IsIHtyZWQuNDAwfSwgdHJhbnNwYXJlbnQgODQlKScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7cmVkLjUwMH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udHJhc3Q6IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS44MDB9JyxcbiAgICAgICAgICAgICAgICBhY3RpdmVCYWNrZ3JvdW5kOiAne3N1cmZhY2UuNzAwfScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS4wfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGFpbjoge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tzdXJmYWNlLjgwMH0nLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJhY2tncm91bmQ6ICd7c3VyZmFjZS43MDB9JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjB9J1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICBjb2xvcjogJ3twcmltYXJ5LmNvbG9yfScsXG4gICAgICAgICAgICBob3ZlckNvbG9yOiAne3ByaW1hcnkuY29sb3J9JyxcbiAgICAgICAgICAgIGFjdGl2ZUNvbG9yOiAne3ByaW1hcnkuY29sb3J9J1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJvb3QsXG4gICAgY29sb3JTY2hlbWVcbn0gc2F0aXNmaWVzIEJ1dHRvbkRlc2lnblRva2VucztcbiJdLCJtYXBwaW5ncyI6IiIsImlnbm9yZUxpc3QiOltdfQ==