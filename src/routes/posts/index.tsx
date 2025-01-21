import { MDXProvider } from '@mdx-js/react'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { MDXComponents } from 'mdx/types'

export const Route = createFileRoute('/posts/')({
  component: RouteComponent,
})

const components: MDXComponents = {
  h1(props) {
    return <h1 {...props} className="level-1" />
  },
  hr() {
    return <hr className="opacity-50" />
  },
}

function RouteComponent() {
  return (
    <MDXProvider components={components}>
      <Outlet />
    </MDXProvider>
  )
}
