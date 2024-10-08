/**
 * Content Selection Utility
 * 
 * @example
 * const cs = contentSelection({
 *   onSelect: (data) => {
 *     const { text, isSingleLine, isBackward, startRect, endRect } = data;
 *     // Handle selection data
 *   },
 *   onDeselect: (data) => {
 *     // Handle deselection
 *   }
 * });
 * 
 * // Activate in react component mount 
 * useEffect(() => {
 *   cs.on()
 *   return () => cs.off()
 * }, [])
 */

type StateSelection = {
  isSingleLine?: boolean
  isBackward?: boolean
  startRect: null | DOMRect
  endRect: null | DOMRect
  locateRect: null | DOMRect
  text?: string
}

type ConfigContentSelection = {
  scrollDetect?: boolean
  onSelect?: (data: StateSelection) => void
  onDeselect?: (data: StateSelection) => void
}

export const contentSelection = ({
  scrollDetect,
  onSelect,
  onDeselect
}: ConfigContentSelection = {}) => {
  const __cs__ = Object.create(null) as {
    on: Function
    off: Function
  }

  const state: StateSelection = {
    isSingleLine: undefined,
    isBackward: undefined,
    startRect: null,
    endRect: null,
    locateRect: null
  }

  let __selection__: null | Selection
  let __eleLocate__: null | HTMLElement

  const clearState = () => {
    document.getSelection()?.removeAllRanges()
    state.isBackward = true
    state.startRect = null
    state.endRect = null
    state.locateRect = null
    __selection__ = null
    __eleLocate__?.remove()
  }

  const deselect = () => {
    if (__selection__) {
      onDeselect?.(state)
    }
  }

  const onSelectStart = () => {
    deselect()
    clearState()
  }

  const onScroll = () => {
    deselect()
    clearState()
  }

  const onSelectEnd = () => {
    const selection = document.getSelection()
    
    /** No Selection */
    if (!selection || selection?.isCollapsed || selection.rangeCount <= 0 || selection.type !== 'Range') {
      return
    }

    __selection__ = selection
    const isBackward = __isBackwards__(selection)
    const range = selection.getRangeAt(0)
    const rangeRects = range.getClientRects()

    const isSingleLine = rangeRects.length === 1 || (
      rangeRects[0].top === rangeRects[rangeRects.length - 1].top
    )

    /**
     * Forward: get last
     * Backward: get first
     */
    if (isSingleLine) {
      const _rect = rangeRects[0]
      const _rectLast = rangeRects[rangeRects.length - 1]
      state.startRect = {
        ..._rect.toJSON(),
        width: Array.from(rangeRects).reduce((acc, rect) => acc + rect.width, 0),
        x: isBackward ? _rectLast.x + _rectLast.width : _rect.x,
        left: isBackward ? _rectLast.left + _rectLast.width : _rect.left
      }

      state.endRect = {
        ..._rect.toJSON(),
        width: Array.from(rangeRects).reduce((acc, rect) => acc + rect.width, 0),
        x: isBackward ? _rect.x : _rectLast.x + _rectLast.width,
        left: isBackward ? _rect.left : _rectLast.left + _rectLast.width
      }
    } else {
      state.startRect = isBackward
        ? {
          ...rangeRects[rangeRects.length - 1].toJSON(),
          x: rangeRects[rangeRects.length - 1].x + rangeRects[rangeRects.length - 1].width,
          left: rangeRects[rangeRects.length - 1].left + rangeRects[rangeRects.length - 1].width
        }
        : rangeRects[0]

      state.endRect = isBackward
        ? rangeRects[0]
        : {
          ...rangeRects[rangeRects.length - 1].toJSON(),
          x: rangeRects[rangeRects.length - 1].x + rangeRects[rangeRects.length - 1].width,
          left: rangeRects[rangeRects.length - 1].left + rangeRects[rangeRects.length - 1].width
        }
    }

    const rangeCloned = range.cloneRange()
    rangeCloned.collapse(!!isBackward)
    rangeCloned.insertNode(__eleLocate__!)

    state.locateRect = __eleLocate__?.getBoundingClientRect() ?? null
    state.text = selection.toString()
    state.isSingleLine = isSingleLine
    state.isBackward = isBackward

    onSelect?.(state)
  }

  __cs__.on = () => {
    if (!document) {
      throw new Error('Need Dom Mounted to use `.on`.')
    }

    __eleLocate__ = document.createElement('i')
    __eleLocate__.style.visibility = 'hidden'

    document.addEventListener('selectstart', onSelectStart)
    document.addEventListener('mouseup', onSelectEnd)
    
    if (scrollDetect) {
      document.addEventListener('scroll', onScroll)
    }
  }

  __cs__.off = () => {
    document.removeEventListener('selectstart', onSelectStart)
    document.removeEventListener('mouseup', onSelectEnd)
    document.addEventListener('scroll', onScroll)
  }

  return __cs__
}

function __isBackwards__ ({ anchorNode, anchorOffset, focusNode, focusOffset }: Selection) {
  let range = document.createRange()
  range.setStart(anchorNode!, anchorOffset)
  range.setEnd(focusNode!, focusOffset)

  let backwards = range.collapsed
  range.detach()
  return backwards
}
