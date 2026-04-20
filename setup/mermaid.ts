import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      primaryColor: '#dbeafe',
      primaryBorderColor: '#2563eb',
      primaryTextColor: '#1e3a5f',
      lineColor: '#64748b',
      secondaryColor: '#f1f5f9',
      tertiaryColor: '#fef3c7',
      edgeLabelBackground: '#f8fafc',
      nodeTextColor: '#1e3a5f',
      fontSize: '14px',
    },
  }
})
