declare module '*.mdx' {
  import * as React from 'react'
  const MDXComponent: (props: any) => React.ReactElement | null
  export default MDXComponent
  export const meta: Record<string, any>
}
