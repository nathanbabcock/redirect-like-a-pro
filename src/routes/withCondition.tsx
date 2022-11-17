import { FunctionComponent } from 'react'
import { Navigate } from 'react-router-dom'

/**
 * A higher-order wrapper for the conditional route component
 * Can be used directly, or used as a building block for more
 * specific components like `withLoggedIn` or `withAdmin`
 */
export function withCondition(
  Component: FunctionComponent,
  condition: boolean,
  redirectTo: string
) {
  return function InnerComponent(props?: any) {
    return condition ? <Component {...props} /> : <Navigate to={redirectTo} replace />
  }
}
