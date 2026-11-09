var o = {
    borderRadius: "{content.border.radius}",
    borderWidth: "1px",
    transitionDuration: "{transition.duration}"
  },
  r = {
    padding: "0.5rem 0.75rem",
    gap: "0.5rem",
    sm: {
      padding: "0.375rem 0.625rem"
    },
    lg: {
      padding: "0.625rem 0.875rem"
    }
  },
  e = {
    fontSize: "1rem",
    fontWeight: "700",
    sm: {
      fontSize: "0.875rem"
    },
    lg: {
      fontSize: "1.125rem"
    }
  },
  l = {
    size: "1.125rem",
    sm: {
      size: "1rem"
    },
    lg: {
      size: "1.25rem"
    }
  },
  n = {
    width: "1.75rem",
    height: "1.75rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      offset: "{focus.ring.offset}"
    }
  },
  c = {
    size: "1rem",
    sm: {
      size: "0.875rem"
    },
    lg: {
      size: "1.125rem"
    }
  },
  s = {
    root: {
      borderWidth: "1px"
    }
  },
  d = {
    content: {
      padding: "0"
    }
  },
  u = {
    light: {
      info: {
        background: "{blue.800}",
        borderColor: "{blue.800}",
        color: "{blue.50}",
        shadow: "none",
        closeButton: {
          hoverBackground: "{blue.600}",
          focusRing: {
            color: "{blue.50}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{blue.800}",
          borderColor: "{blue.800}"
        },
        simple: {
          color: "{blue.800}"
        }
      },
      success: {
        background: "{green.800}",
        borderColor: "{green.800}",
        color: "{green.50}",
        shadow: "none",
        closeButton: {
          hoverBackground: "{green.600}",
          focusRing: {
            color: "{green.50}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{green.800}",
          borderColor: "{green.800}"
        },
        simple: {
          color: "{green.800}"
        }
      },
      warn: {
        background: "{yellow.600}",
        borderColor: "{yellow.600}",
        color: "{yellow.50}",
        shadow: "none",
        closeButton: {
          hoverBackground: "{yellow.400}",
          focusRing: {
            color: "{yellow.50}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{yellow.600}",
          borderColor: "{yellow.600}"
        },
        simple: {
          color: "{yellow.600}"
        }
      },
      error: {
        background: "{red.800}",
        borderColor: "{red.800}",
        color: "{red.50}",
        shadow: "none",
        closeButton: {
          hoverBackground: "{red.600}",
          focusRing: {
            color: "{red.50}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{red.800}",
          borderColor: "{red.800}"
        },
        simple: {
          color: "{red.800}"
        }
      },
      secondary: {
        background: "{surface.200}",
        borderColor: "{surface.200}",
        color: "{surface.700}",
        shadow: "none",
        closeButton: {
          hoverBackground: "{surface.50}",
          focusRing: {
            color: "{surface.700}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{surface.600}",
          borderColor: "{surface.600}"
        },
        simple: {
          color: "{surface.600}"
        }
      },
      contrast: {
        background: "{surface.900}",
        borderColor: "{surface.900}",
        color: "{surface.50}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.700}",
          focusRing: {
            color: "{surface.50}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{surface.900}",
          borderColor: "{surface.900}"
        },
        simple: {
          color: "{surface.900}"
        }
      }
    },
    dark: {
      info: {
        background: "{blue.200}",
        borderColor: "{blue.200}",
        color: "{blue.950}",
        shadow: "none",
        closeButton: {
          hoverBackground: "{blue.50}",
          focusRing: {
            color: "{blue.950}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{blue.200}",
          borderColor: "{blue.200}"
        },
        simple: {
          color: "{blue.200}"
        }
      },
      success: {
        background: "{green.200}",
        borderColor: "{green.200}",
        color: "{green.950}",
        shadow: "none",
        closeButton: {
          hoverBackground: "{green.50}",
          focusRing: {
            color: "{green.950}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{green.200}",
          borderColor: "{green.200}"
        },
        simple: {
          color: "{green.200}"
        }
      },
      warn: {
        background: "{yellow.200}",
        borderColor: "{yellow.200}",
        color: "{yellow.950}",
        shadow: "none",
        closeButton: {
          hoverBackground: "{yellow.50}",
          focusRing: {
            color: "{yellow.950}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{yellow.200}",
          borderColor: "{yellow.200}"
        },
        simple: {
          color: "{yellow.200}"
        }
      },
      error: {
        background: "{red.200}",
        borderColor: "{red.200}",
        color: "{red.950}",
        shadow: "none",
        closeButton: {
          hoverBackground: "{red.50}",
          focusRing: {
            color: "{red.950}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{red.200}",
          borderColor: "{red.200}"
        },
        simple: {
          color: "{red.200}"
        }
      },
      secondary: {
        background: "{surface.700}",
        borderColor: "{surface.700}",
        color: "{surface.200}",
        shadow: "none",
        closeButton: {
          hoverBackground: "{surface.500}",
          focusRing: {
            color: "{surface.200}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{surface.400}",
          borderColor: "{surface.400}"
        },
        simple: {
          color: "{surface.400}"
        }
      },
      contrast: {
        background: "{surface.0}",
        borderColor: "{surface.0}",
        color: "{surface.950}",
        shadow: "none",
        closeButton: {
          hoverBackground: "{surface.200}",
          focusRing: {
            color: "{surface.950}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{surface.0}",
          borderColor: "{surface.0}"
        },
        simple: {
          color: "{surface.0}"
        }
      }
    }
  },
  a = {
    root: o,
    content: r,
    text: e,
    icon: l,
    closeButton: n,
    closeIcon: c,
    outlined: s,
    simple: d,
    colorScheme: u
  };
export { n as closeButton, c as closeIcon, u as colorScheme, r as content, a as default, l as icon, s as outlined, o as root, d as simple, e as text };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZXNldHMvbm9yYS9tZXNzYWdlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTWVzc2FnZURlc2lnblRva2VucywgTWVzc2FnZVRva2VuU2VjdGlvbnMgfSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL3R5cGVzL21lc3NhZ2UnO1xuXG5leHBvcnQgY29uc3Qgcm9vdDogTWVzc2FnZVRva2VuU2VjdGlvbnMuUm9vdCA9IHtcbiAgICBib3JkZXJSYWRpdXM6ICd7Y29udGVudC5ib3JkZXIucmFkaXVzfScsXG4gICAgYm9yZGVyV2lkdGg6ICcxcHgnLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJ3t0cmFuc2l0aW9uLmR1cmF0aW9ufSdcbn07XG5cbmV4cG9ydCBjb25zdCBjb250ZW50OiBNZXNzYWdlVG9rZW5TZWN0aW9ucy5Db250ZW50ID0ge1xuICAgIHBhZGRpbmc6ICcwLjVyZW0gMC43NXJlbScsXG4gICAgZ2FwOiAnMC41cmVtJyxcbiAgICBzbToge1xuICAgICAgICBwYWRkaW5nOiAnMC4zNzVyZW0gMC42MjVyZW0nXG4gICAgfSxcbiAgICBsZzoge1xuICAgICAgICBwYWRkaW5nOiAnMC42MjVyZW0gMC44NzVyZW0nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRleHQ6IE1lc3NhZ2VUb2tlblNlY3Rpb25zLlRleHQgPSB7XG4gICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICBmb250V2VpZ2h0OiAnNzAwJyxcbiAgICBzbToge1xuICAgICAgICBmb250U2l6ZTogJzAuODc1cmVtJ1xuICAgIH0sXG4gICAgbGc6IHtcbiAgICAgICAgZm9udFNpemU6ICcxLjEyNXJlbSdcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgaWNvbjogTWVzc2FnZVRva2VuU2VjdGlvbnMuSWNvbiA9IHtcbiAgICBzaXplOiAnMS4xMjVyZW0nLFxuICAgIHNtOiB7XG4gICAgICAgIHNpemU6ICcxcmVtJ1xuICAgIH0sXG4gICAgbGc6IHtcbiAgICAgICAgc2l6ZTogJzEuMjVyZW0nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNsb3NlQnV0dG9uOiBNZXNzYWdlVG9rZW5TZWN0aW9ucy5DbG9zZUJ1dHRvbiA9IHtcbiAgICB3aWR0aDogJzEuNzVyZW0nLFxuICAgIGhlaWdodDogJzEuNzVyZW0nLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgZm9jdXNSaW5nOiB7XG4gICAgICAgIHdpZHRoOiAne2ZvY3VzLnJpbmcud2lkdGh9JyxcbiAgICAgICAgc3R5bGU6ICd7Zm9jdXMucmluZy5zdHlsZX0nLFxuICAgICAgICBvZmZzZXQ6ICd7Zm9jdXMucmluZy5vZmZzZXR9J1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjbG9zZUljb246IE1lc3NhZ2VUb2tlblNlY3Rpb25zLkNsb3NlSWNvbiA9IHtcbiAgICBzaXplOiAnMXJlbScsXG4gICAgc206IHtcbiAgICAgICAgc2l6ZTogJzAuODc1cmVtJ1xuICAgIH0sXG4gICAgbGc6IHtcbiAgICAgICAgc2l6ZTogJzEuMTI1cmVtJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBvdXRsaW5lZDogTWVzc2FnZVRva2VuU2VjdGlvbnMuT3V0bGluZWQgPSB7XG4gICAgcm9vdDoge1xuICAgICAgICBib3JkZXJXaWR0aDogJzFweCdcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2ltcGxlOiBNZXNzYWdlVG9rZW5TZWN0aW9ucy5TaW1wbGUgPSB7XG4gICAgY29udGVudDoge1xuICAgICAgICBwYWRkaW5nOiAnMCdcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgY29sb3JTY2hlbWU6IE1lc3NhZ2VUb2tlblNlY3Rpb25zLkNvbG9yU2NoZW1lID0ge1xuICAgIGxpZ2h0OiB7XG4gICAgICAgIGluZm86IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7Ymx1ZS44MDB9JyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne2JsdWUuODAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tibHVlLjUwfScsXG4gICAgICAgICAgICBzaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne2JsdWUuNjAwfScsXG4gICAgICAgICAgICAgICAgZm9jdXNSaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAne2JsdWUuNTB9JyxcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93OiAnbm9uZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3V0bGluZWQ6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tibHVlLjgwMH0nLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne2JsdWUuODAwfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaW1wbGU6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tibHVlLjgwMH0nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7Z3JlZW4uODAwfScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tncmVlbi44MDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne2dyZWVuLjUwfScsXG4gICAgICAgICAgICBzaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne2dyZWVuLjYwMH0nLFxuICAgICAgICAgICAgICAgIGZvY3VzUmluZzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3tncmVlbi41MH0nLFxuICAgICAgICAgICAgICAgICAgICBzaGFkb3c6ICdub25lJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvdXRsaW5lZDoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAne2dyZWVuLjgwMH0nLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne2dyZWVuLjgwMH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2ltcGxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd7Z3JlZW4uODAwfSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2Fybjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3t5ZWxsb3cuNjAwfScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3t5ZWxsb3cuNjAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3t5ZWxsb3cuNTB9JyxcbiAgICAgICAgICAgIHNoYWRvdzogJ25vbmUnLFxuICAgICAgICAgICAgY2xvc2VCdXR0b246IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7eWVsbG93LjQwMH0nLFxuICAgICAgICAgICAgICAgIGZvY3VzUmluZzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3t5ZWxsb3cuNTB9JyxcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93OiAnbm9uZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3V0bGluZWQ6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3t5ZWxsb3cuNjAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7eWVsbG93LjYwMH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2ltcGxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd7eWVsbG93LjYwMH0nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3JlZC44MDB9JyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3JlZC44MDB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3JlZC41MH0nLFxuICAgICAgICAgICAgc2hhZG93OiAnbm9uZScsXG4gICAgICAgICAgICBjbG9zZUJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tyZWQuNjAwfScsXG4gICAgICAgICAgICAgICAgZm9jdXNSaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAne3JlZC41MH0nLFxuICAgICAgICAgICAgICAgICAgICBzaGFkb3c6ICdub25lJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvdXRsaW5lZDoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAne3JlZC44MDB9JyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tyZWQuODAwfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaW1wbGU6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tyZWQuODAwfSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne3N1cmZhY2UuMjAwfScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tzdXJmYWNlLjIwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS43MDB9JyxcbiAgICAgICAgICAgIHNoYWRvdzogJ25vbmUnLFxuICAgICAgICAgICAgY2xvc2VCdXR0b246IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS41MH0nLFxuICAgICAgICAgICAgICAgIGZvY3VzUmluZzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjcwMH0nLFxuICAgICAgICAgICAgICAgICAgICBzaGFkb3c6ICdub25lJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvdXRsaW5lZDoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuNjAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c3VyZmFjZS42MDB9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNpbXBsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuNjAwfSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29udHJhc3Q6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7c3VyZmFjZS45MDB9JyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3N1cmZhY2UuOTAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjUwfScsXG4gICAgICAgICAgICBzaGFkb3c6ICcwcHggNHB4IDhweCAwcHggY29sb3ItbWl4KGluIHNyZ2IsIHtzdXJmYWNlLjk1MH0sIHRyYW5zcGFyZW50IDk2JSknLFxuICAgICAgICAgICAgY2xvc2VCdXR0b246IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7c3VyZmFjZS43MDB9JyxcbiAgICAgICAgICAgICAgICBmb2N1c1Jpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS41MH0nLFxuICAgICAgICAgICAgICAgICAgICBzaGFkb3c6ICdub25lJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvdXRsaW5lZDoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuOTAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c3VyZmFjZS45MDB9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNpbXBsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuOTAwfSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGFyazoge1xuICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAne2JsdWUuMjAwfScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tibHVlLjIwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7Ymx1ZS45NTB9JyxcbiAgICAgICAgICAgIHNoYWRvdzogJ25vbmUnLFxuICAgICAgICAgICAgY2xvc2VCdXR0b246IHtcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmQ6ICd7Ymx1ZS41MH0nLFxuICAgICAgICAgICAgICAgIGZvY3VzUmluZzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3tibHVlLjk1MH0nLFxuICAgICAgICAgICAgICAgICAgICBzaGFkb3c6ICdub25lJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvdXRsaW5lZDoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAne2JsdWUuMjAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7Ymx1ZS4yMDB9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNpbXBsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAne2JsdWUuMjAwfSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tncmVlbi4yMDB9JyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne2dyZWVuLjIwMH0nLFxuICAgICAgICAgICAgY29sb3I6ICd7Z3JlZW4uOTUwfScsXG4gICAgICAgICAgICBzaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne2dyZWVuLjUwfScsXG4gICAgICAgICAgICAgICAgZm9jdXNSaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAne2dyZWVuLjk1MH0nLFxuICAgICAgICAgICAgICAgICAgICBzaGFkb3c6ICdub25lJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvdXRsaW5lZDoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAne2dyZWVuLjIwMH0nLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne2dyZWVuLjIwMH0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2ltcGxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd7Z3JlZW4uMjAwfSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2Fybjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3t5ZWxsb3cuMjAwfScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3t5ZWxsb3cuMjAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3t5ZWxsb3cuOTUwfScsXG4gICAgICAgICAgICBzaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3llbGxvdy41MH0nLFxuICAgICAgICAgICAgICAgIGZvY3VzUmluZzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3t5ZWxsb3cuOTUwfScsXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvdzogJ25vbmUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG91dGxpbmVkOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd7eWVsbG93LjIwMH0nLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3llbGxvdy4yMDB9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNpbXBsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAne3llbGxvdy4yMDB9J1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3tyZWQuMjAwfScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tyZWQuMjAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tyZWQuOTUwfScsXG4gICAgICAgICAgICBzaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3JlZC41MH0nLFxuICAgICAgICAgICAgICAgIGZvY3VzUmluZzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3tyZWQuOTUwfScsXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvdzogJ25vbmUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG91dGxpbmVkOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd7cmVkLjIwMH0nLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3JlZC4yMDB9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNpbXBsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAne3JlZC4yMDB9J1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7c3VyZmFjZS43MDB9JyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAne3N1cmZhY2UuNzAwfScsXG4gICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjIwMH0nLFxuICAgICAgICAgICAgc2hhZG93OiAnbm9uZScsXG4gICAgICAgICAgICBjbG9zZUJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZDogJ3tzdXJmYWNlLjUwMH0nLFxuICAgICAgICAgICAgICAgIGZvY3VzUmluZzoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjIwMH0nLFxuICAgICAgICAgICAgICAgICAgICBzaGFkb3c6ICdub25lJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvdXRsaW5lZDoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuNDAwfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c3VyZmFjZS40MDB9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNpbXBsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuNDAwfSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29udHJhc3Q6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd7c3VyZmFjZS4wfScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3tzdXJmYWNlLjB9JyxcbiAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuOTUwfScsXG4gICAgICAgICAgICBzaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kOiAne3N1cmZhY2UuMjAwfScsXG4gICAgICAgICAgICAgICAgZm9jdXNSaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAne3N1cmZhY2UuOTUwfScsXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvdzogJ25vbmUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG91dGxpbmVkOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd7c3VyZmFjZS4wfScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd7c3VyZmFjZS4wfSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaW1wbGU6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3tzdXJmYWNlLjB9J1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJvb3QsXG4gICAgY29udGVudCxcbiAgICB0ZXh0LFxuICAgIGljb24sXG4gICAgY2xvc2VCdXR0b24sXG4gICAgY2xvc2VJY29uLFxuICAgIG91dGxpbmVkLFxuICAgIHNpbXBsZSxcbiAgICBjb2xvclNjaGVtZVxufSBzYXRpc2ZpZXMgTWVzc2FnZURlc2lnblRva2VucztcbiJdLCJtYXBwaW5ncyI6IiIsImlnbm9yZUxpc3QiOltdfQ==