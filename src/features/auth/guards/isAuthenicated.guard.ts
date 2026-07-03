import type {
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
} from 'vue-router'

const isAuthenticatedGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalizedLoaded,
  next: NavigationGuardNext,
) => {
  const username = localStorage.getItem('username')
  localStorage.setItem('lastPath', to.path)

  if (!username) {
    return next({
      name: 'login',
    })
  }
  return next()
}

export default isAuthenticatedGuard
