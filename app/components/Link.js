import React from 'react'
import invariant from 'invariant'
import { TouchableHighlight } from 'react-native-macos'

const { bool, object, string, func, oneOfType, shape } = React.PropTypes

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
}

// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
function isEmptyObject(object) {
  for (const p in object)
    if (Object.prototype.hasOwnProperty.call(object, p))
      return false

  return true
}

function createLocationDescriptor(to, { query, hash, state }) {
  if (query || hash || state) {
    return { pathname: to, query, hash, state }
  }

  return to
}

/**
 * A <Link> is used to create an <a> element that links to a route.
 * When that route is active, the link gets the value of its
 * activeClassName prop.
 *
 * For example, assuming you have the following route:
 *
 *   <Route path="/posts/:postID" component={Post} />
 *
 * You could use the following component to link to that route:
 *
 *   <Link to={`/posts/${post.id}`} />
 *
 * Links may pass along location state and/or query string parameters
 * in the state/query props, respectively.
 *
 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
 */
const Link = React.createClass({

  contextTypes: {
    router: shape({
      push: func.isRequired,
      replace: func.isRequired,
      go: func.isRequired,
      goBack: func.isRequired,
      goForward: func.isRequired,
      setRouteLeaveHook: func.isRequired,
      isActive: func.isRequired
    })
  },

  propTypes: {
    to: oneOfType([ string, object ]).isRequired,
    query: object,
    hash: string,
    state: object,
    activeStyle: object,
    activeClassName: string,
    onlyActiveOnIndex: bool.isRequired,
    onClick: func,
    target: string
  },

  getDefaultProps() {
    return {
      onlyActiveOnIndex: false,
      style: {}
    }
  },

  handleClick(event) {
    if (this.props.onClick)
      this.props.onClick(event)

    if (event.defaultPrevented)
      return

    invariant(
      this.context.router,
      '<Link>s rendered outside of a router context cannot navigate.'
    )

    if (isModifiedEvent(event))
      return

    // If target prop is set (e.g. to "_blank"), let browser handle link.
    /* istanbul ignore if: untestable with Karma */
    if (this.props.target)
      return

    event.preventDefault()

    const { to, query, hash, state } = this.props
    const location = createLocationDescriptor(to, { query, hash, state })

    this.context.router.push(location)
  },

  render() {
    const { to, query, hash, state, activeClassName, activeStyle, onlyActiveOnIndex, ...props } = this.props

    // Ignore if rendered outside the context of router, simplifies unit testing.
    const { router } = this.context

    if (router) {
      const location = createLocationDescriptor(to, { query, hash, state })
      props.href = router.createHref(location)

      if (activeClassName || (activeStyle != null && !isEmptyObject(activeStyle))) {
        if (router.isActive(location, onlyActiveOnIndex)) {
          if (activeClassName) {
            if (props.className) {
              props.className += ` ${activeClassName}`
            } else {
              props.className = activeClassName
            }
          }

          if (activeStyle)
            props.style = { ...props.style, ...activeStyle }
        }
      }
    }

    return <TouchableHighlight
             activeOpacity={1}
             underlayColor='transparent'
             {...props}
             onPress={this.handleClick}
           />
  }

})

export default Link