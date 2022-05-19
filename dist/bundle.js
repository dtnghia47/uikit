(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('stream')) :
    typeof define === 'function' && define.amd ? define(['exports', 'stream'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.uikit = {}, global.require$$7));
}(this, (function (exports, require$$7) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var require$$7__default = /*#__PURE__*/_interopDefaultLegacy(require$$7);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    var __assign = function () {
      __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    function getAugmentedNamespace(n) {
    	if (n.__esModule) return n;
    	var a = Object.defineProperty({}, '__esModule', {value: true});
    	Object.keys(n).forEach(function (k) {
    		var d = Object.getOwnPropertyDescriptor(n, k);
    		Object.defineProperty(a, k, d.get ? d : {
    			enumerable: true,
    			get: function () {
    				return n[k];
    			}
    		});
    	});
    	return a;
    }

    var react = {exports: {}};

    var react_development = {};

    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    /* eslint-disable no-unused-vars */


    var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;

    function toObject(val) {
      if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
      }

      return Object(val);
    }

    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        } // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118


        var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

        test1[5] = 'de';

        if (Object.getOwnPropertyNames(test1)[0] === '5') {
          return false;
        } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


        var test2 = {};

        for (var i = 0; i < 10; i++) {
          test2['_' + String.fromCharCode(i)] = i;
        }

        var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
          return test2[n];
        });

        if (order2.join('') !== '0123456789') {
          return false;
        } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
          test3[letter] = letter;
        });

        if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
          return false;
        }

        return true;
      } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
      }
    }

    var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
      var from;
      var to = toObject(target);
      var symbols;

      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);

        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }

        if (getOwnPropertySymbols$1) {
          symbols = getOwnPropertySymbols$1(from);

          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }

      return to;
    };

    /** @license React v17.0.2
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    (function (exports) {

      {
        (function () {

          var _assign = objectAssign; // TODO: this is special because it gets imported during build.

          var ReactVersion = '17.0.2'; // ATTENTION
          // When adding new symbols to this file,
          // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
          // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
          // nor polyfill, then a plain number is used for performance.

          var REACT_ELEMENT_TYPE = 0xeac7;
          var REACT_PORTAL_TYPE = 0xeaca;
          exports.Fragment = 0xeacb;
          exports.StrictMode = 0xeacc;
          exports.Profiler = 0xead2;
          var REACT_PROVIDER_TYPE = 0xeacd;
          var REACT_CONTEXT_TYPE = 0xeace;
          var REACT_FORWARD_REF_TYPE = 0xead0;
          exports.Suspense = 0xead1;
          var REACT_SUSPENSE_LIST_TYPE = 0xead8;
          var REACT_MEMO_TYPE = 0xead3;
          var REACT_LAZY_TYPE = 0xead4;
          var REACT_BLOCK_TYPE = 0xead9;
          var REACT_SERVER_BLOCK_TYPE = 0xeada;
          var REACT_FUNDAMENTAL_TYPE = 0xead5;
          var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
          var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

          if (typeof Symbol === 'function' && Symbol.for) {
            var symbolFor = Symbol.for;
            REACT_ELEMENT_TYPE = symbolFor('react.element');
            REACT_PORTAL_TYPE = symbolFor('react.portal');
            exports.Fragment = symbolFor('react.fragment');
            exports.StrictMode = symbolFor('react.strict_mode');
            exports.Profiler = symbolFor('react.profiler');
            REACT_PROVIDER_TYPE = symbolFor('react.provider');
            REACT_CONTEXT_TYPE = symbolFor('react.context');
            REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
            exports.Suspense = symbolFor('react.suspense');
            REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
            REACT_MEMO_TYPE = symbolFor('react.memo');
            REACT_LAZY_TYPE = symbolFor('react.lazy');
            REACT_BLOCK_TYPE = symbolFor('react.block');
            REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
            REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
            symbolFor('react.scope');
            symbolFor('react.opaque.id');
            REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
            symbolFor('react.offscreen');
            REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
          }

          var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = '@@iterator';

          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== 'object') {
              return null;
            }

            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

            if (typeof maybeIterator === 'function') {
              return maybeIterator;
            }

            return null;
          }
          /**
           * Keeps track of the current dispatcher.
           */


          var ReactCurrentDispatcher = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          /**
           * Keeps track of the current batch's configuration such as how long an update
           * should suspend for if it needs to.
           */

          var ReactCurrentBatchConfig = {
            transition: 0
          };
          /**
           * Keeps track of the current owner.
           *
           * The current owner is the component who should own any components that are
           * currently being constructed.
           */

          var ReactCurrentOwner = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactDebugCurrentFrame = {};
          var currentExtraStackFrame = null;

          function setExtraStackFrame(stack) {
            {
              currentExtraStackFrame = stack;
            }
          }

          {
            ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
              {
                currentExtraStackFrame = stack;
              }
            }; // Stack implementation injected by the current renderer.


            ReactDebugCurrentFrame.getCurrentStack = null;

            ReactDebugCurrentFrame.getStackAddendum = function () {
              var stack = ''; // Add an extra top frame while an element is being validated

              if (currentExtraStackFrame) {
                stack += currentExtraStackFrame;
              } // Delegate to the injected renderer-specific implementation


              var impl = ReactDebugCurrentFrame.getCurrentStack;

              if (impl) {
                stack += impl() || '';
              }

              return stack;
            };
          }
          /**
           * Used by act() to track whether you're inside an act() scope.
           */

          var IsSomeRendererActing = {
            current: false
          };
          var ReactSharedInternals = {
            ReactCurrentDispatcher: ReactCurrentDispatcher,
            ReactCurrentBatchConfig: ReactCurrentBatchConfig,
            ReactCurrentOwner: ReactCurrentOwner,
            IsSomeRendererActing: IsSomeRendererActing,
            // Used by renderers to avoid bundling object-assign twice in UMD bundles:
            assign: _assign
          };
          {
            ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          } // by calls to these methods by a Babel plugin.
          //
          // In PROD (or in packages without access to React internals),
          // they are left as they are instead.

          function warn(format) {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }

              printWarning('warn', format, args);
            }
          }

          function error(format) {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }

              printWarning('error', format, args);
            }
          }

          function printWarning(level, format, args) {
            // When changing this logic, you might want to also
            // update consoleWithStackDev.www.js as well.
            {
              var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame.getStackAddendum();

              if (stack !== '') {
                format += '%s';
                args = args.concat([stack]);
              }

              var argsWithFormat = args.map(function (item) {
                return '' + item;
              }); // Careful: RN currently depends on this prefix

              argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
              // breaks IE9: https://github.com/facebook/react/issues/13610
              // eslint-disable-next-line react-internal/no-production-logging

              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }

          var didWarnStateUpdateForUnmountedComponent = {};

          function warnNoop(publicInstance, callerName) {
            {
              var _constructor = publicInstance.constructor;
              var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
              var warningKey = componentName + "." + callerName;

              if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                return;
              }

              error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
              didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
          }
          /**
           * This is the abstract API for an update queue.
           */


          var ReactNoopUpdateQueue = {
            /**
             * Checks whether or not this composite component is mounted.
             * @param {ReactClass} publicInstance The instance we want to test.
             * @return {boolean} True if mounted, false otherwise.
             * @protected
             * @final
             */
            isMounted: function (publicInstance) {
              return false;
            },

            /**
             * Forces an update. This should only be invoked when it is known with
             * certainty that we are **not** in a DOM transaction.
             *
             * You may want to call this when you know that some deeper aspect of the
             * component's state has changed but `setState` was not called.
             *
             * This will not invoke `shouldComponentUpdate`, but it will invoke
             * `componentWillUpdate` and `componentDidUpdate`.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueForceUpdate: function (publicInstance, callback, callerName) {
              warnNoop(publicInstance, 'forceUpdate');
            },

            /**
             * Replaces all of the state. Always use this or `setState` to mutate state.
             * You should treat `this.state` as immutable.
             *
             * There is no guarantee that `this.state` will be immediately updated, so
             * accessing `this.state` after calling this method may return the old value.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} completeState Next state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
              warnNoop(publicInstance, 'replaceState');
            },

            /**
             * Sets a subset of the state. This only exists because _pendingState is
             * internal. This provides a merging strategy that is not available to deep
             * properties which is confusing. TODO: Expose pendingState or don't use it
             * during the merge.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} partialState Next partial state to be merged with state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} Name of the calling function in the public API.
             * @internal
             */
            enqueueSetState: function (publicInstance, partialState, callback, callerName) {
              warnNoop(publicInstance, 'setState');
            }
          };
          var emptyObject = {};
          {
            Object.freeze(emptyObject);
          }
          /**
           * Base class helpers for the updating state of a component.
           */

          function Component(props, context, updater) {
            this.props = props;
            this.context = context; // If a component has string refs, we will assign a different object later.

            this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
            // renderer.

            this.updater = updater || ReactNoopUpdateQueue;
          }

          Component.prototype.isReactComponent = {};
          /**
           * Sets a subset of the state. Always use this to mutate
           * state. You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * There is no guarantee that calls to `setState` will run synchronously,
           * as they may eventually be batched together.  You can provide an optional
           * callback that will be executed when the call to setState is actually
           * completed.
           *
           * When a function is provided to setState, it will be called at some point in
           * the future (not synchronously). It will be called with the up to date
           * component arguments (state, props, context). These values can be different
           * from this.* because your function may be called after receiveProps but before
           * shouldComponentUpdate, and this new state, props, and context will not yet be
           * assigned to this.
           *
           * @param {object|function} partialState Next partial state or function to
           *        produce next partial state to be merged with current state.
           * @param {?function} callback Called after state is updated.
           * @final
           * @protected
           */

          Component.prototype.setState = function (partialState, callback) {
            if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
              {
                throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
              }
            }

            this.updater.enqueueSetState(this, partialState, callback, 'setState');
          };
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {?function} callback Called after update is complete.
           * @final
           * @protected
           */


          Component.prototype.forceUpdate = function (callback) {
            this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
          };
          /**
           * Deprecated APIs. These APIs used to exist on classic React classes but since
           * we would like to deprecate them, we're not going to move them over to this
           * modern base class. Instead, we define a getter that warns if it's accessed.
           */


          {
            var deprecatedAPIs = {
              isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
              replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
            };

            var defineDeprecationWarning = function (methodName, info) {
              Object.defineProperty(Component.prototype, methodName, {
                get: function () {
                  warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
                  return undefined;
                }
              });
            };

            for (var fnName in deprecatedAPIs) {
              if (deprecatedAPIs.hasOwnProperty(fnName)) {
                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
              }
            }
          }

          function ComponentDummy() {}

          ComponentDummy.prototype = Component.prototype;
          /**
           * Convenience component with default shallow equality check for sCU.
           */

          function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context; // If a component has string refs, we will assign a different object later.

            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }

          var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
          pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

          _assign(pureComponentPrototype, Component.prototype);

          pureComponentPrototype.isPureReactComponent = true; // an immutable object with a single mutable value

          function createRef() {
            var refObject = {
              current: null
            };
            {
              Object.seal(refObject);
            }
            return refObject;
          }

          function getWrappedName(outerType, innerType, wrapperName) {
            var functionName = innerType.displayName || innerType.name || '';
            return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
          }

          function getContextName(type) {
            return type.displayName || 'Context';
          }

          function getComponentName(type) {
            if (type == null) {
              // Host root, text node or just invalid type.
              return null;
            }

            {
              if (typeof type.tag === 'number') {
                error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
              }
            }

            if (typeof type === 'function') {
              return type.displayName || type.name || null;
            }

            if (typeof type === 'string') {
              return type;
            }

            switch (type) {
              case exports.Fragment:
                return 'Fragment';

              case REACT_PORTAL_TYPE:
                return 'Portal';

              case exports.Profiler:
                return 'Profiler';

              case exports.StrictMode:
                return 'StrictMode';

              case exports.Suspense:
                return 'Suspense';

              case REACT_SUSPENSE_LIST_TYPE:
                return 'SuspenseList';
            }

            if (typeof type === 'object') {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + '.Consumer';

                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + '.Provider';

                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, 'ForwardRef');

                case REACT_MEMO_TYPE:
                  return getComponentName(type.type);

                case REACT_BLOCK_TYPE:
                  return getComponentName(type._render);

                case REACT_LAZY_TYPE:
                  {
                    var lazyComponent = type;
                    var payload = lazyComponent._payload;
                    var init = lazyComponent._init;

                    try {
                      return getComponentName(init(payload));
                    } catch (x) {
                      return null;
                    }
                  }
              }
            }

            return null;
          }

          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }

          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, 'ref')) {
                var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== undefined;
          }

          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, 'key')) {
                var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== undefined;
          }

          function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function () {
              {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                }
              }
            };

            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, 'key', {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }

          function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function () {
              {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                }
              }
            };

            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, 'ref', {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }

          function warnIfStringRefCannotBeAutoConverted(config) {
            {
              if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                var componentName = getComponentName(ReactCurrentOwner.current.type);

                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          /**
           * Factory method to create a new React element. This no longer adheres to
           * the class pattern, so do not use new to call it. Also, instanceof check
           * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
           * if something is a React Element.
           *
           * @param {*} type
           * @param {*} props
           * @param {*} key
           * @param {string|object} ref
           * @param {*} owner
           * @param {*} self A *temporary* helper to detect places where `this` is
           * different from the `owner` when React.createElement is called, so that we
           * can warn. We want to get rid of owner and replace string `ref`s with arrow
           * functions, and as long as `this` and owner are the same, there will be no
           * change in behavior.
           * @param {*} source An annotation object (added by a transpiler or otherwise)
           * indicating filename, line number, and/or other information.
           * @internal
           */


          var ReactElement = function (type, key, ref, self, source, owner, props) {
            var element = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: REACT_ELEMENT_TYPE,
              // Built-in properties that belong on the element
              type: type,
              key: key,
              ref: ref,
              props: props,
              // Record the component responsible for creating this element.
              _owner: owner
            };
            {
              // The validation flag is currently mutative. We put it on
              // an external backing store so that we can freeze the whole object.
              // This can be replaced with a WeakMap once they are implemented in
              // commonly used development environments.
              element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
              // the validation flag non-enumerable (where possible, which should
              // include every environment we run tests in), so the test framework
              // ignores it.

              Object.defineProperty(element._store, 'validated', {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              }); // self and source are DEV only properties.

              Object.defineProperty(element, '_self', {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self
              }); // Two elements created in two different places should be considered
              // equal for testing purposes and therefore we hide it from enumeration.

              Object.defineProperty(element, '_source', {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });

              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          /**
           * Create and return a new ReactElement of the given type.
           * See https://reactjs.org/docs/react-api.html#createelement
           */


          function createElement(type, config, children) {
            var propName; // Reserved names are extracted

            var props = {};
            var key = null;
            var ref = null;
            var self = null;
            var source = null;

            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                {
                  warnIfStringRefCannotBeAutoConverted(config);
                }
              }

              if (hasValidKey(config)) {
                key = '' + config.key;
              }

              self = config.__self === undefined ? null : config.__self;
              source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
            } // Children can be more than one argument, and those are transferred onto
            // the newly allocated props object.


            var childrenLength = arguments.length - 2;

            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);

              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }

              {
                if (Object.freeze) {
                  Object.freeze(childArray);
                }
              }
              props.children = childArray;
            } // Resolve default props


            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;

              for (propName in defaultProps) {
                if (props[propName] === undefined) {
                  props[propName] = defaultProps[propName];
                }
              }
            }

            {
              if (key || ref) {
                var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }

                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }

          function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
          }
          /**
           * Clone and return a new ReactElement using element as the starting point.
           * See https://reactjs.org/docs/react-api.html#cloneelement
           */


          function cloneElement(element, config, children) {
            if (!!(element === null || element === undefined)) {
              {
                throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
              }
            }

            var propName; // Original props are copied

            var props = _assign({}, element.props); // Reserved names are extracted


            var key = element.key;
            var ref = element.ref; // Self is preserved since the owner is preserved.

            var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
            // transpiler, and the original source is probably a better indicator of the
            // true owner.

            var source = element._source; // Owner will be preserved, unless ref is overridden

            var owner = element._owner;

            if (config != null) {
              if (hasValidRef(config)) {
                // Silently steal the ref from the parent.
                ref = config.ref;
                owner = ReactCurrentOwner.current;
              }

              if (hasValidKey(config)) {
                key = '' + config.key;
              } // Remaining properties override existing props


              var defaultProps;

              if (element.type && element.type.defaultProps) {
                defaultProps = element.type.defaultProps;
              }

              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  if (config[propName] === undefined && defaultProps !== undefined) {
                    // Resolve default props
                    props[propName] = defaultProps[propName];
                  } else {
                    props[propName] = config[propName];
                  }
                }
              }
            } // Children can be more than one argument, and those are transferred onto
            // the newly allocated props object.


            var childrenLength = arguments.length - 2;

            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);

              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }

              props.children = childArray;
            }

            return ReactElement(element.type, key, ref, self, source, owner, props);
          }
          /**
           * Verifies the object is a ReactElement.
           * See https://reactjs.org/docs/react-api.html#isvalidelement
           * @param {?object} object
           * @return {boolean} True if `object` is a ReactElement.
           * @final
           */


          function isValidElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }

          var SEPARATOR = '.';
          var SUBSEPARATOR = ':';
          /**
           * Escape and wrap key so it is safe to use as a reactid
           *
           * @param {string} key to be escaped.
           * @return {string} the escaped key.
           */

          function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
              '=': '=0',
              ':': '=2'
            };
            var escapedString = key.replace(escapeRegex, function (match) {
              return escaperLookup[match];
            });
            return '$' + escapedString;
          }
          /**
           * TODO: Test that a single child and an array with one item have the same key
           * pattern.
           */


          var didWarnAboutMaps = false;
          var userProvidedKeyEscapeRegex = /\/+/g;

          function escapeUserProvidedKey(text) {
            return text.replace(userProvidedKeyEscapeRegex, '$&/');
          }
          /**
           * Generate a key string that identifies a element within a set.
           *
           * @param {*} element A element that could contain a manual key.
           * @param {number} index Index that is used if a manual key is not provided.
           * @return {string}
           */


          function getElementKey(element, index) {
            // Do some typechecking here since we call this blindly. We want to ensure
            // that we don't block potential future ES APIs.
            if (typeof element === 'object' && element !== null && element.key != null) {
              // Explicit key
              return escape('' + element.key);
            } // Implicit key determined by the index in the set


            return index.toString(36);
          }

          function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
            var type = typeof children;

            if (type === 'undefined' || type === 'boolean') {
              // All of the above are perceived as null.
              children = null;
            }

            var invokeCallback = false;

            if (children === null) {
              invokeCallback = true;
            } else {
              switch (type) {
                case 'string':
                case 'number':
                  invokeCallback = true;
                  break;

                case 'object':
                  switch (children.$$typeof) {
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                      invokeCallback = true;
                  }

              }
            }

            if (invokeCallback) {
              var _child = children;
              var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
              // so that it's consistent if the number of children grows:

              var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

              if (Array.isArray(mappedChild)) {
                var escapedChildKey = '';

                if (childKey != null) {
                  escapedChildKey = escapeUserProvidedKey(childKey) + '/';
                }

                mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
                  return c;
                });
              } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) {
                  mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                  escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
                }

                array.push(mappedChild);
              }

              return 1;
            }

            var child;
            var nextName;
            var subtreeCount = 0; // Count of children found in the current subtree.

            var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

            if (Array.isArray(children)) {
              for (var i = 0; i < children.length; i++) {
                child = children[i];
                nextName = nextNamePrefix + getElementKey(child, i);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else {
              var iteratorFn = getIteratorFn(children);

              if (typeof iteratorFn === 'function') {
                var iterableChildren = children;
                {
                  // Warn about using Maps as children
                  if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) {
                      warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
                    }

                    didWarnAboutMaps = true;
                  }
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;

                while (!(step = iterator.next()).done) {
                  child = step.value;
                  nextName = nextNamePrefix + getElementKey(child, ii++);
                  subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
              } else if (type === 'object') {
                var childrenString = '' + children;
                {
                  {
                    throw Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead.");
                  }
                }
              }
            }

            return subtreeCount;
          }
          /**
           * Maps children that are typically specified as `props.children`.
           *
           * See https://reactjs.org/docs/react-api.html#reactchildrenmap
           *
           * The provided mapFunction(child, index) will be called for each
           * leaf child.
           *
           * @param {?*} children Children tree container.
           * @param {function(*, int)} func The map function.
           * @param {*} context Context for mapFunction.
           * @return {object} Object containing the ordered map of results.
           */


          function mapChildren(children, func, context) {
            if (children == null) {
              return children;
            }

            var result = [];
            var count = 0;
            mapIntoArray(children, result, '', '', function (child) {
              return func.call(context, child, count++);
            });
            return result;
          }
          /**
           * Count the number of children that are typically specified as
           * `props.children`.
           *
           * See https://reactjs.org/docs/react-api.html#reactchildrencount
           *
           * @param {?*} children Children tree container.
           * @return {number} The number of children.
           */


          function countChildren(children) {
            var n = 0;
            mapChildren(children, function () {
              n++; // Don't return anything
            });
            return n;
          }
          /**
           * Iterates through children that are typically specified as `props.children`.
           *
           * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
           *
           * The provided forEachFunc(child, index) will be called for each
           * leaf child.
           *
           * @param {?*} children Children tree container.
           * @param {function(*, int)} forEachFunc
           * @param {*} forEachContext Context for forEachContext.
           */


          function forEachChildren(children, forEachFunc, forEachContext) {
            mapChildren(children, function () {
              forEachFunc.apply(this, arguments); // Don't return anything.
            }, forEachContext);
          }
          /**
           * Flatten a children object (typically specified as `props.children`) and
           * return an array with appropriately re-keyed children.
           *
           * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
           */


          function toArray(children) {
            return mapChildren(children, function (child) {
              return child;
            }) || [];
          }
          /**
           * Returns the first child in a collection of children and verifies that there
           * is only one child in the collection.
           *
           * See https://reactjs.org/docs/react-api.html#reactchildrenonly
           *
           * The current implementation of this function assumes that a single child gets
           * passed without a wrapper, but the purpose of this helper function is to
           * abstract away the particular structure of children.
           *
           * @param {?object} children Child collection structure.
           * @return {ReactElement} The first and only `ReactElement` contained in the
           * structure.
           */


          function onlyChild(children) {
            if (!isValidElement(children)) {
              {
                throw Error("React.Children.only expected to receive a single React element child.");
              }
            }

            return children;
          }

          function createContext(defaultValue, calculateChangedBits) {
            if (calculateChangedBits === undefined) {
              calculateChangedBits = null;
            } else {
              {
                if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
                  error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
                }
              }
            }

            var context = {
              $$typeof: REACT_CONTEXT_TYPE,
              _calculateChangedBits: calculateChangedBits,
              // As a workaround to support multiple concurrent renderers, we categorize
              // some renderers as primary and others as secondary. We only expect
              // there to be two concurrent renderers at most: React Native (primary) and
              // Fabric (secondary); React DOM (primary) and React ART (secondary).
              // Secondary renderers store their context values on separate fields.
              _currentValue: defaultValue,
              _currentValue2: defaultValue,
              // Used to track how many concurrent renderers this context currently
              // supports within in a single renderer. Such as parallel server rendering.
              _threadCount: 0,
              // These are circular
              Provider: null,
              Consumer: null
            };
            context.Provider = {
              $$typeof: REACT_PROVIDER_TYPE,
              _context: context
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            var hasWarnedAboutDisplayNameOnConsumer = false;
            {
              // A separate object, but proxies back to the original context object for
              // backwards compatibility. It has a different $$typeof, so we can properly
              // warn for the incorrect usage of Context as a Consumer.
              var Consumer = {
                $$typeof: REACT_CONTEXT_TYPE,
                _context: context,
                _calculateChangedBits: context._calculateChangedBits
              }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

              Object.defineProperties(Consumer, {
                Provider: {
                  get: function () {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                      hasWarnedAboutUsingConsumerProvider = true;
                      error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
                    }

                    return context.Provider;
                  },
                  set: function (_Provider) {
                    context.Provider = _Provider;
                  }
                },
                _currentValue: {
                  get: function () {
                    return context._currentValue;
                  },
                  set: function (_currentValue) {
                    context._currentValue = _currentValue;
                  }
                },
                _currentValue2: {
                  get: function () {
                    return context._currentValue2;
                  },
                  set: function (_currentValue2) {
                    context._currentValue2 = _currentValue2;
                  }
                },
                _threadCount: {
                  get: function () {
                    return context._threadCount;
                  },
                  set: function (_threadCount) {
                    context._threadCount = _threadCount;
                  }
                },
                Consumer: {
                  get: function () {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                      hasWarnedAboutUsingNestedContextConsumers = true;
                      error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                    }

                    return context.Consumer;
                  }
                },
                displayName: {
                  get: function () {
                    return context.displayName;
                  },
                  set: function (displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                      warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);
                      hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                  }
                }
              }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

              context.Consumer = Consumer;
            }
            {
              context._currentRenderer = null;
              context._currentRenderer2 = null;
            }
            return context;
          }

          var Uninitialized = -1;
          var Pending = 0;
          var Resolved = 1;
          var Rejected = 2;

          function lazyInitializer(payload) {
            if (payload._status === Uninitialized) {
              var ctor = payload._result;
              var thenable = ctor(); // Transition to the next state.

              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
              thenable.then(function (moduleObject) {
                if (payload._status === Pending) {
                  var defaultExport = moduleObject.default;
                  {
                    if (defaultExport === undefined) {
                      error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
                      'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
                    }
                  } // Transition to the next state.

                  var resolved = payload;
                  resolved._status = Resolved;
                  resolved._result = defaultExport;
                }
              }, function (error) {
                if (payload._status === Pending) {
                  // Transition to the next state.
                  var rejected = payload;
                  rejected._status = Rejected;
                  rejected._result = error;
                }
              });
            }

            if (payload._status === Resolved) {
              return payload._result;
            } else {
              throw payload._result;
            }
          }

          function lazy(ctor) {
            var payload = {
              // We use these fields to store the result.
              _status: -1,
              _result: ctor
            };
            var lazyType = {
              $$typeof: REACT_LAZY_TYPE,
              _payload: payload,
              _init: lazyInitializer
            };
            {
              // In production, this would just set it on the object.
              var defaultProps;
              var propTypes; // $FlowFixMe

              Object.defineProperties(lazyType, {
                defaultProps: {
                  configurable: true,
                  get: function () {
                    return defaultProps;
                  },
                  set: function (newDefaultProps) {
                    error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
                    defaultProps = newDefaultProps; // Match production behavior more closely:
                    // $FlowFixMe

                    Object.defineProperty(lazyType, 'defaultProps', {
                      enumerable: true
                    });
                  }
                },
                propTypes: {
                  configurable: true,
                  get: function () {
                    return propTypes;
                  },
                  set: function (newPropTypes) {
                    error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
                    propTypes = newPropTypes; // Match production behavior more closely:
                    // $FlowFixMe

                    Object.defineProperty(lazyType, 'propTypes', {
                      enumerable: true
                    });
                  }
                }
              });
            }
            return lazyType;
          }

          function forwardRef(render) {
            {
              if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
              } else if (typeof render !== 'function') {
                error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
              } else {
                if (render.length !== 0 && render.length !== 2) {
                  error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
                }
              }

              if (render != null) {
                if (render.defaultProps != null || render.propTypes != null) {
                  error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
                }
              }
            }
            var elementType = {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render: render
            };
            {
              var ownName;
              Object.defineProperty(elementType, 'displayName', {
                enumerable: false,
                configurable: true,
                get: function () {
                  return ownName;
                },
                set: function (name) {
                  ownName = name;

                  if (render.displayName == null) {
                    render.displayName = name;
                  }
                }
              });
            }
            return elementType;
          } // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.


          var enableScopeAPI = false; // Experimental Create Event Handle API.

          function isValidElementType(type) {
            if (typeof type === 'string' || typeof type === 'function') {
              return true;
            } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


            if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
              return true;
            }

            if (typeof type === 'object' && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
                return true;
              }
            }

            return false;
          }

          function memo(type, compare) {
            {
              if (!isValidElementType(type)) {
                error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
              }
            }
            var elementType = {
              $$typeof: REACT_MEMO_TYPE,
              type: type,
              compare: compare === undefined ? null : compare
            };
            {
              var ownName;
              Object.defineProperty(elementType, 'displayName', {
                enumerable: false,
                configurable: true,
                get: function () {
                  return ownName;
                },
                set: function (name) {
                  ownName = name;

                  if (type.displayName == null) {
                    type.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }

          function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher.current;

            if (!(dispatcher !== null)) {
              {
                throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
              }
            }

            return dispatcher;
          }

          function useContext(Context, unstable_observedBits) {
            var dispatcher = resolveDispatcher();
            {
              if (unstable_observedBits !== undefined) {
                error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
              } // TODO: add a more generic warning for invalid values.


              if (Context._context !== undefined) {
                var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
                // and nobody should be using this in existing code.

                if (realContext.Consumer === Context) {
                  error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
                } else if (realContext.Provider === Context) {
                  error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
                }
              }
            }
            return dispatcher.useContext(Context, unstable_observedBits);
          }

          function useState(initialState) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState);
          }

          function useReducer(reducer, initialArg, init) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init);
          }

          function useRef(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
          }

          function useEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create, deps);
          }

          function useLayoutEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create, deps);
          }

          function useCallback(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
          }

          function useMemo(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
          }

          function useImperativeHandle(ref, create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create, deps);
          }

          function useDebugValue(value, formatterFn) {
            {
              var dispatcher = resolveDispatcher();
              return dispatcher.useDebugValue(value, formatterFn);
            }
          } // Helpers to patch console.logs to avoid logging during side-effect free
          // replaying on render function. This currently only patches the object
          // lazily which won't cover if the log function was extracted eagerly.
          // We could also eagerly patch the method.


          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;

          function disabledLog() {}

          disabledLog.__reactDisabledLog = true;

          function disableLogs() {
            {
              if (disabledDepth === 0) {
                /* eslint-disable react-internal/no-production-logging */
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                }; // $FlowFixMe Flow thinks console is immutable.

                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
                /* eslint-enable react-internal/no-production-logging */
              }

              disabledDepth++;
            }
          }

          function reenableLogs() {
            {
              disabledDepth--;

              if (disabledDepth === 0) {
                /* eslint-disable react-internal/no-production-logging */
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                }; // $FlowFixMe Flow thinks console is immutable.

                Object.defineProperties(console, {
                  log: _assign({}, props, {
                    value: prevLog
                  }),
                  info: _assign({}, props, {
                    value: prevInfo
                  }),
                  warn: _assign({}, props, {
                    value: prevWarn
                  }),
                  error: _assign({}, props, {
                    value: prevError
                  }),
                  group: _assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: _assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: _assign({}, props, {
                    value: prevGroupEnd
                  })
                });
                /* eslint-enable react-internal/no-production-logging */
              }

              if (disabledDepth < 0) {
                error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
              }
            }
          }

          var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix;

          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix === undefined) {
                // Extract the VM specific prefix used by each line.
                try {
                  throw Error();
                } catch (x) {
                  var match = x.stack.trim().match(/\n( *(at )?)/);
                  prefix = match && match[1] || '';
                }
              } // We use the prefix to ensure our stacks line up with native stack frames.


              return '\n' + prefix + name;
            }
          }

          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }

          function describeNativeComponentFrame(fn, construct) {
            // If something asked for a stack inside a fake render, it should get ignored.
            if (!fn || reentry) {
              return '';
            }

            {
              var frame = componentFrameCache.get(fn);

              if (frame !== undefined) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

            Error.prepareStackTrace = undefined;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
              // for warnings.

              ReactCurrentDispatcher$1.current = null;
              disableLogs();
            }

            try {
              // This should throw.
              if (construct) {
                // Something should be setting the props in the constructor.
                var Fake = function () {
                  throw Error();
                }; // $FlowFixMe


                Object.defineProperty(Fake.prototype, 'props', {
                  set: function () {
                    // We use a throwing setter instead of frozen or non-writable props
                    // because that won't throw in a non-strict mode function.
                    throw Error();
                  }
                });

                if (typeof Reflect === 'object' && Reflect.construct) {
                  // We construct a different control for this case to include any extra
                  // frames added by the construct call.
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }

                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }

                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }

                fn();
              }
            } catch (sample) {
              // This is inlined manually because closure doesn't do it for us.
              if (sample && control && typeof sample.stack === 'string') {
                // This extracts the first frame from the sample that isn't also in the control.
                // Skipping one frame that we assume is the frame that calls the two.
                var sampleLines = sample.stack.split('\n');
                var controlLines = control.stack.split('\n');
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;

                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  // We expect at least one stack frame to be shared.
                  // Typically this will be the root most one. However, stack frames may be
                  // cut off due to maximum stack limits. In this case, one maybe cut off
                  // earlier than the other. We assume that the sample is longer or the same
                  // and there for cut off earlier. So we should find the root most frame in
                  // the sample somewhere in the control.
                  c--;
                }

                for (; s >= 1 && c >= 0; s--, c--) {
                  // Next we find the first one that isn't the same which should be the
                  // frame that called our sample function and the control.
                  if (sampleLines[s] !== controlLines[c]) {
                    // In V8, the first line is describing the message but other VMs don't.
                    // If we're about to return the first line, and the control is also on the same
                    // line, that's a pretty good indicator that our sample threw at same line as
                    // the control. I.e. before we entered the sample frame. So we ignore this result.
                    // This can happen if you passed a class to function component, or non-function.
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--; // We may still have similar intermediate frames from the construct call.
                        // The next one that isn't the same should be our match though.

                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                          var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                          {
                            if (typeof fn === 'function') {
                              componentFrameCache.set(fn, _frame);
                            }
                          } // Return the line we found.

                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }

                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher$1.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            } // Fallback to just using the name if we couldn't make it throw.


            var name = fn ? fn.displayName || fn.name : '';
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
            {
              if (typeof fn === 'function') {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }

          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }

          function shouldConstruct(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
          }

          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return '';
            }

            if (typeof type === 'function') {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }

            if (typeof type === 'string') {
              return describeBuiltInComponentFrame(type);
            }

            switch (type) {
              case exports.Suspense:
                return describeBuiltInComponentFrame('Suspense');

              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame('SuspenseList');
            }

            if (typeof type === 'object') {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);

                case REACT_MEMO_TYPE:
                  // Memo may contain any component type so we recursively resolve it.
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

                case REACT_BLOCK_TYPE:
                  return describeFunctionComponentFrame(type._render);

                case REACT_LAZY_TYPE:
                  {
                    var lazyComponent = type;
                    var payload = lazyComponent._payload;
                    var init = lazyComponent._init;

                    try {
                      // Lazy may contain any component type so we recursively resolve it.
                      return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                    } catch (x) {}
                  }
              }
            }

            return '';
          }

          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }

          function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
              // $FlowFixMe This is okay but Flow doesn't know it.
              var has = Function.call.bind(Object.prototype.hasOwnProperty);

              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
                  // fail the render phase where it didn't fail before. So we log it.
                  // After these have been cleaned up, we'll let them throw.

                  try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                      var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                      err.name = 'Invariant Violation';
                      throw err;
                    }

                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                  } catch (ex) {
                    error$1 = ex;
                  }

                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }

                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error('Failed %s type: %s', location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }

          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                setExtraStackFrame(stack);
              } else {
                setExtraStackFrame(null);
              }
            }
          }

          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }

          function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
              var name = getComponentName(ReactCurrentOwner.current.type);

              if (name) {
                return '\n\nCheck the render method of `' + name + '`.';
              }
            }

            return '';
          }

          function getSourceInfoErrorAddendum(source) {
            if (source !== undefined) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, '');
              var lineNumber = source.lineNumber;
              return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
            }

            return '';
          }

          function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== undefined) {
              return getSourceInfoErrorAddendum(elementProps.__source);
            }

            return '';
          }
          /**
           * Warn if there's no key explicitly set on dynamic arrays of children or
           * object keys are not valid. This allows us to keep track of children between
           * updates.
           */


          var ownerHasKeyUseWarning = {};

          function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();

            if (!info) {
              var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }

            return info;
          }
          /**
           * Warn if the element doesn't have an explicit key assigned to it.
           * This element is in an array. The array could grow and shrink or be
           * reordered. All children that haven't already been validated are required to
           * have a "key" property assigned to it. Error statuses are cached so a warning
           * will only be shown once.
           *
           * @internal
           * @param {ReactElement} element Element that requires a key.
           * @param {*} parentType element's parent's type.
           */


          function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }

            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }

            ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
            // property, it may be the creator of the child that's responsible for
            // assigning it a key.

            var childOwner = '';

            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
              // Give the component that originally created this child.
              childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
            }

            {
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          /**
           * Ensure that every element either is passed in a static location, in an
           * array with an explicit keys property defined, or in an object literal
           * with valid key property.
           *
           * @internal
           * @param {ReactNode} node Statically passed child of any type.
           * @param {*} parentType node's parent's type.
           */


          function validateChildKeys(node, parentType) {
            if (typeof node !== 'object') {
              return;
            }

            if (Array.isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];

                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              // This element was passed in a valid location.
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);

              if (typeof iteratorFn === 'function') {
                // Entry iterators used to provide implicit keys,
                // but now we print a separate warning for them later.
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;

                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
          /**
           * Given an element, validate that its props follow the propTypes definition,
           * provided by the type.
           *
           * @param {ReactElement} element
           */


          function validatePropTypes(element) {
            {
              var type = element.type;

              if (type === null || type === undefined || typeof type === 'string') {
                return;
              }

              var propTypes;

              if (typeof type === 'function') {
                propTypes = type.propTypes;
              } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }

              if (propTypes) {
                // Intentionally inside to avoid triggering lazy initializers:
                var name = getComponentName(type);
                checkPropTypes(propTypes, element.props, 'prop', name, element);
              } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

                var _name = getComponentName(type);

                error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
              }

              if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
                error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
              }
            }
          }
          /**
           * Given a fragment, validate that it can only be provided with fragment props
           * @param {ReactElement} fragment
           */


          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);

              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];

                if (key !== 'children' && key !== 'key') {
                  setCurrentlyValidatingElement$1(fragment);
                  error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }

              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error('Invalid attribute `ref` supplied to `React.Fragment`.');
                setCurrentlyValidatingElement$1(null);
              }
            }
          }

          function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
            // succeed and there will likely be errors in render.

            if (!validType) {
              var info = '';

              if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
                info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
              }

              var sourceInfo = getSourceInfoErrorAddendumForProps(props);

              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }

              var typeString;

              if (type === null) {
                typeString = 'null';
              } else if (Array.isArray(type)) {
                typeString = 'array';
              } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
                info = ' Did you accidentally export a JSX literal instead of a component?';
              } else {
                typeString = typeof type;
              }

              {
                error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
              }
            }

            var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
            // TODO: Drop this when these are no longer allowed as the type argument.

            if (element == null) {
              return element;
            } // Skip key warning if the type isn't valid since our key validation logic
            // doesn't expect a non-string/function type and can throw confusing errors.
            // We don't want exception behavior to differ between dev and prod.
            // (Rendering will throw with a helpful message and as soon as the type is
            // fixed, the key warnings will appear.)


            if (validType) {
              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], type);
              }
            }

            if (type === exports.Fragment) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }

            return element;
          }

          var didWarnAboutDeprecatedCreateFactory = false;

          function createFactoryWithValidation(type) {
            var validatedFactory = createElementWithValidation.bind(null, type);
            validatedFactory.type = type;
            {
              if (!didWarnAboutDeprecatedCreateFactory) {
                didWarnAboutDeprecatedCreateFactory = true;
                warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
              } // Legacy hook: remove it


              Object.defineProperty(validatedFactory, 'type', {
                enumerable: false,
                get: function () {
                  warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
                  Object.defineProperty(this, 'type', {
                    value: type
                  });
                  return type;
                }
              });
            }
            return validatedFactory;
          }

          function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement.apply(this, arguments);

            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], newElement.type);
            }

            validatePropTypes(newElement);
            return newElement;
          }

          {
            try {
              var frozenObject = Object.freeze({});
              /* eslint-disable no-new */

              new Map([[frozenObject, null]]);
              new Set([frozenObject]);
              /* eslint-enable no-new */
            } catch (e) {}
          }
          var createElement$1 = createElementWithValidation;
          var cloneElement$1 = cloneElementWithValidation;
          var createFactory = createFactoryWithValidation;
          var Children = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray: toArray,
            only: onlyChild
          };
          exports.Children = Children;
          exports.Component = Component;
          exports.PureComponent = PureComponent;
          exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
          exports.cloneElement = cloneElement$1;
          exports.createContext = createContext;
          exports.createElement = createElement$1;
          exports.createFactory = createFactory;
          exports.createRef = createRef;
          exports.forwardRef = forwardRef;
          exports.isValidElement = isValidElement;
          exports.lazy = lazy;
          exports.memo = memo;
          exports.useCallback = useCallback;
          exports.useContext = useContext;
          exports.useDebugValue = useDebugValue;
          exports.useEffect = useEffect;
          exports.useImperativeHandle = useImperativeHandle;
          exports.useLayoutEffect = useLayoutEffect;
          exports.useMemo = useMemo;
          exports.useReducer = useReducer;
          exports.useRef = useRef;
          exports.useState = useState;
          exports.version = ReactVersion;
        })();
      }
    })(react_development);

    {
      react.exports = react_development;
    }

    var React = react.exports;

    var styledComponents_cjs = {};

    var reactIs$1 = {exports: {}};

    var reactIs_development = {};

    /** @license React v16.13.1
     * react-is.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    {
      (function () {
        // nor polyfill, then a plain number is used for performance.

        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?

        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

        function isValidElementType(type) {
          return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }

        function typeOf(object) {
          if (typeof object === 'object' && object !== null) {
            var $$typeof = object.$$typeof;

            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;

                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;

                  default:
                    var $$typeofType = type && type.$$typeof;

                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;

                      default:
                        return $$typeof;
                    }

                }

              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }

          return undefined;
        } // AsyncMode is deprecated along with isAsyncMode


        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

              console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }

        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }

        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }

        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }

        function isElement(object) {
          return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }

        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }

        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }

        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }

        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }

        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }

        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }

        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }

        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }

        reactIs_development.AsyncMode = AsyncMode;
        reactIs_development.ConcurrentMode = ConcurrentMode;
        reactIs_development.ContextConsumer = ContextConsumer;
        reactIs_development.ContextProvider = ContextProvider;
        reactIs_development.Element = Element;
        reactIs_development.ForwardRef = ForwardRef;
        reactIs_development.Fragment = Fragment;
        reactIs_development.Lazy = Lazy;
        reactIs_development.Memo = Memo;
        reactIs_development.Portal = Portal;
        reactIs_development.Profiler = Profiler;
        reactIs_development.StrictMode = StrictMode;
        reactIs_development.Suspense = Suspense;
        reactIs_development.isAsyncMode = isAsyncMode;
        reactIs_development.isConcurrentMode = isConcurrentMode;
        reactIs_development.isContextConsumer = isContextConsumer;
        reactIs_development.isContextProvider = isContextProvider;
        reactIs_development.isElement = isElement;
        reactIs_development.isForwardRef = isForwardRef;
        reactIs_development.isFragment = isFragment;
        reactIs_development.isLazy = isLazy;
        reactIs_development.isMemo = isMemo;
        reactIs_development.isPortal = isPortal;
        reactIs_development.isProfiler = isProfiler;
        reactIs_development.isStrictMode = isStrictMode;
        reactIs_development.isSuspense = isSuspense;
        reactIs_development.isValidElementType = isValidElementType;
        reactIs_development.typeOf = typeOf;
      })();
    }

    {
      reactIs$1.exports = reactIs_development;
    }

    var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
      var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

      if (ret !== void 0) {
        return !!ret;
      }

      if (objA === objB) {
        return true;
      }

      if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
      }

      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);

      if (keysA.length !== keysB.length) {
        return false;
      }

      var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB); // Test for A's keys different from B.

      for (var idx = 0; idx < keysA.length; idx++) {
        var key = keysA[idx];

        if (!bHasOwnProperty(key)) {
          return false;
        }

        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

        if (ret === false || ret === void 0 && valueA !== valueB) {
          return false;
        }
      }

      return true;
    };

    function stylis_min(W) {
      function M(d, c, e, h, a) {
        for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
          g = e.charCodeAt(l);
          l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

          if (0 === b + n + v + m) {
            if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
              switch (g) {
                case 32:
                case 9:
                case 59:
                case 13:
                case 10:
                  break;

                default:
                  f += e.charAt(l);
              }

              g = 59;
            }

            switch (g) {
              case 123:
                f = f.trim();
                q = f.charCodeAt(0);
                k = 1;

                for (t = ++l; l < B;) {
                  switch (g = e.charCodeAt(l)) {
                    case 123:
                      k++;
                      break;

                    case 125:
                      k--;
                      break;

                    case 47:
                      switch (g = e.charCodeAt(l + 1)) {
                        case 42:
                        case 47:
                          a: {
                            for (u = l + 1; u < J; ++u) {
                              switch (e.charCodeAt(u)) {
                                case 47:
                                  if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                    l = u + 1;
                                    break a;
                                  }

                                  break;

                                case 10:
                                  if (47 === g) {
                                    l = u + 1;
                                    break a;
                                  }

                              }
                            }

                            l = u;
                          }

                      }

                      break;

                    case 91:
                      g++;

                    case 40:
                      g++;

                    case 34:
                    case 39:
                      for (; l++ < J && e.charCodeAt(l) !== g;) {}

                  }

                  if (0 === k) break;
                  l++;
                }

                k = e.substring(t, l);
                0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

                switch (q) {
                  case 64:
                    0 < r && (f = f.replace(N, ''));
                    g = f.charCodeAt(1);

                    switch (g) {
                      case 100:
                      case 109:
                      case 115:
                      case 45:
                        r = c;
                        break;

                      default:
                        r = O;
                    }

                    k = M(c, r, k, g, a + 1);
                    t = k.length;
                    0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                    if (0 < t) switch (g) {
                      case 115:
                        f = f.replace(da, ea);

                      case 100:
                      case 109:
                      case 45:
                        k = f + '{' + k + '}';
                        break;

                      case 107:
                        f = f.replace(fa, '$1 $2');
                        k = f + '{' + k + '}';
                        k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                        break;

                      default:
                        k = f + k, 112 === h && (k = (p += k, ''));
                    } else k = '';
                    break;

                  default:
                    k = M(c, X(c, f, I), k, h, a + 1);
                }

                F += k;
                k = I = r = u = q = 0;
                f = '';
                g = e.charCodeAt(++l);
                break;

              case 125:
              case 59:
                f = (0 < r ? f.replace(N, '') : f).trim();
                if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
                  case 0:
                    break;

                  case 64:
                    if (105 === g || 99 === g) {
                      G += f + e.charAt(l);
                      break;
                    }

                  default:
                    58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
                }
                I = r = u = q = 0;
                f = '';
                g = e.charCodeAt(++l);
            }
          }

          switch (g) {
            case 13:
            case 10:
              47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
              0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
              z = 1;
              D++;
              break;

            case 59:
            case 125:
              if (0 === b + n + v + m) {
                z++;
                break;
              }

            default:
              z++;
              y = e.charAt(l);

              switch (g) {
                case 9:
                case 32:
                  if (0 === n + m + b) switch (x) {
                    case 44:
                    case 58:
                    case 9:
                    case 32:
                      y = '';
                      break;

                    default:
                      32 !== g && (y = ' ');
                  }
                  break;

                case 0:
                  y = '\\0';
                  break;

                case 12:
                  y = '\\f';
                  break;

                case 11:
                  y = '\\v';
                  break;

                case 38:
                  0 === n + b + m && (r = I = 1, y = '\f' + y);
                  break;

                case 108:
                  if (0 === n + b + m + E && 0 < u) switch (l - u) {
                    case 2:
                      112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                    case 8:
                      111 === K && (E = K);
                  }
                  break;

                case 58:
                  0 === n + b + m && (u = l);
                  break;

                case 44:
                  0 === b + v + n + m && (r = 1, y += '\r');
                  break;

                case 34:
                case 39:
                  0 === b && (n = n === g ? 0 : 0 === n ? g : n);
                  break;

                case 91:
                  0 === n + b + v && m++;
                  break;

                case 93:
                  0 === n + b + v && m--;
                  break;

                case 41:
                  0 === n + b + m && v--;
                  break;

                case 40:
                  if (0 === n + b + m) {
                    if (0 === q) switch (2 * x + 3 * K) {
                      case 533:
                        break;

                      default:
                        q = 1;
                    }
                    v++;
                  }

                  break;

                case 64:
                  0 === b + v + n + m + u + k && (k = 1);
                  break;

                case 42:
                case 47:
                  if (!(0 < n + m + v)) switch (b) {
                    case 0:
                      switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                        case 235:
                          b = 47;
                          break;

                        case 220:
                          t = l, b = 42;
                      }

                      break;

                    case 42:
                      47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
                  }
              }

              0 === b && (f += y);
          }

          K = x;
          x = g;
          l++;
        }

        t = p.length;

        if (0 < t) {
          r = c;
          if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
          p = r.join(',') + '{' + p + '}';

          if (0 !== w * E) {
            2 !== w || L(p, 2) || (E = 0);

            switch (E) {
              case 111:
                p = p.replace(ha, ':-moz-$1') + p;
                break;

              case 112:
                p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
            }

            E = 0;
          }
        }

        return G + p + F;
      }

      function X(d, c, e) {
        var h = c.trim().split(ia);
        c = h;
        var a = h.length,
            m = d.length;

        switch (m) {
          case 0:
          case 1:
            var b = 0;

            for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
              c[b] = Z(d, c[b], e).trim();
            }

            break;

          default:
            var v = b = 0;

            for (c = []; b < a; ++b) {
              for (var n = 0; n < m; ++n) {
                c[v++] = Z(d[n] + ' ', h[b], e).trim();
              }
            }

        }

        return c;
      }

      function Z(d, c, e) {
        var h = c.charCodeAt(0);
        33 > h && (h = (c = c.trim()).charCodeAt(0));

        switch (h) {
          case 38:
            return c.replace(F, '$1' + d.trim());

          case 58:
            return d.trim() + c.replace(F, '$1' + d.trim());

          default:
            if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
        }

        return d + c;
      }

      function P(d, c, e, h) {
        var a = d + ';',
            m = 2 * c + 3 * e + 4 * h;

        if (944 === m) {
          d = a.indexOf(':', 9) + 1;
          var b = a.substring(d, a.length - 1).trim();
          b = a.substring(0, d).trim() + b + ';';
          return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
        }

        if (0 === w || 2 === w && !L(a, 1)) return a;

        switch (m) {
          case 1015:
            return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

          case 951:
            return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

          case 963:
            return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

          case 1009:
            if (100 !== a.charCodeAt(4)) break;

          case 969:
          case 942:
            return '-webkit-' + a + a;

          case 978:
            return '-webkit-' + a + '-moz-' + a + a;

          case 1019:
          case 983:
            return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

          case 883:
            if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
            if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
            break;

          case 932:
            if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
              case 103:
                return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

              case 115:
                return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

              case 98:
                return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
            }
            return '-webkit-' + a + '-ms-' + a + a;

          case 964:
            return '-webkit-' + a + '-ms-flex-' + a + a;

          case 1023:
            if (99 !== a.charCodeAt(8)) break;
            b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
            return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

          case 1005:
            return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

          case 1e3:
            b = a.substring(13).trim();
            c = b.indexOf('-') + 1;

            switch (b.charCodeAt(0) + b.charCodeAt(c)) {
              case 226:
                b = a.replace(G, 'tb');
                break;

              case 232:
                b = a.replace(G, 'tb-rl');
                break;

              case 220:
                b = a.replace(G, 'lr');
                break;

              default:
                return a;
            }

            return '-webkit-' + a + '-ms-' + b + a;

          case 1017:
            if (-1 === a.indexOf('sticky', 9)) break;

          case 975:
            c = (a = d).length - 10;
            b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

            switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
              case 203:
                if (111 > b.charCodeAt(8)) break;

              case 115:
                a = a.replace(b, '-webkit-' + b) + ';' + a;
                break;

              case 207:
              case 102:
                a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
            }

            return a + ';';

          case 938:
            if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
              case 105:
                return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

              case 115:
                return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

              default:
                return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
            }
            break;

          case 973:
          case 989:
            if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

          case 931:
          case 953:
            if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
            break;

          case 962:
            if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
        }

        return a;
      }

      function L(d, c) {
        var e = d.indexOf(1 === c ? ':' : '{'),
            h = d.substring(0, 3 !== c ? e : 10);
        e = d.substring(e + 1, d.length - 1);
        return R(2 !== c ? h : h.replace(na, '$1'), e, c);
      }

      function ea(d, c) {
        var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
        return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
      }

      function H(d, c, e, h, a, m, b, v, n, q) {
        for (var g = 0, x = c, w; g < A; ++g) {
          switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
            case void 0:
            case !1:
            case !0:
            case null:
              break;

            default:
              x = w;
          }
        }

        if (x !== c) return x;
      }

      function T(d) {
        switch (d) {
          case void 0:
          case null:
            A = S.length = 0;
            break;

          default:
            if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
              T(d[c]);
            } else Y = !!d | 0;
        }

        return T;
      }

      function U(d) {
        d = d.prefix;
        void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
        return U;
      }

      function B(d, c) {
        var e = d;
        33 > e.charCodeAt(0) && (e = e.trim());
        V = e;
        e = [V];

        if (0 < A) {
          var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
          void 0 !== h && 'string' === typeof h && (c = h);
        }

        var a = M(O, e, c, 0, 0);
        0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
        V = '';
        E = 0;
        z = D = 1;
        return a;
      }

      var ca = /^\0+/g,
          N = /[\0\r\f]/g,
          aa = /: */g,
          ka = /zoo|gra/,
          ma = /([,: ])(transform)/g,
          ia = /,\r+?/g,
          F = /([\t\r\n ])*\f?&/g,
          fa = /@(k\w+)\s*(\S*)\s*/,
          Q = /::(place)/g,
          ha = /:(read-only)/g,
          G = /[svh]\w+-[tblr]{2}/,
          da = /\(\s*(.*)\s*\)/g,
          oa = /([\s\S]*?);/g,
          ba = /-self|flex-/g,
          na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
          la = /stretch|:\s*\w+\-(?:conte|avail)/,
          ja = /([^-])(image-set\()/,
          z = 1,
          D = 1,
          E = 0,
          w = 1,
          O = [],
          S = [],
          A = 0,
          R = null,
          Y = 0,
          V = '';
      B.use = T;
      B.set = U;
      void 0 !== W && U(W);
      return B;
    }

    var stylis_browser_esm = /*#__PURE__*/Object.freeze({
        __proto__: null,
        'default': stylis_min
    });

    var require$$3 = /*@__PURE__*/getAugmentedNamespace(stylis_browser_esm);

    var unitless_cjs = {exports: {}};

    var unitless_cjs_dev = {};

    Object.defineProperty(unitless_cjs_dev, '__esModule', {
      value: true
    });
    var unitlessKeys = {
      animationIterationCount: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      // SVG-related properties
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1
    };

    unitless_cjs_dev.default = unitlessKeys;

    {
      unitless_cjs.exports = unitless_cjs_dev;
    }

    function memoize(fn) {
      var cache = {};
      return function (arg) {
        if (cache[arg] === undefined) cache[arg] = fn(arg);
        return cache[arg];
      };
    }

    var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

    var index = memoize(function (prop) {
      return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
      /* o */
      && prop.charCodeAt(1) === 110
      /* n */
      && prop.charCodeAt(2) < 91;
    }
    /* Z+1 */
    );

    var isPropValid_browser_esm = /*#__PURE__*/Object.freeze({
        __proto__: null,
        'default': index
    });

    var require$$5 = /*@__PURE__*/getAugmentedNamespace(isPropValid_browser_esm);

    var reactIs = reactIs$1.exports;
    /**
     * Copyright 2015, Yahoo! Inc.
     * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
     */

    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      '$$typeof': true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      '$$typeof': true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

    function getStatics(component) {
      // React v16.11 and below
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      } // React v16.12 and above


      return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
    }

    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;

    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);

          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);

        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];

          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

            try {
              // Avoid failures from read-only properties
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {}
          }
        }
      }

      return targetComponent;
    }

    var hoistNonReactStatics_cjs = hoistNonReactStatics;

    var _default;

    function e(e) {
      return e && "object" == typeof e && "default" in e ? e.default : e;
    }

    Object.defineProperty(styledComponents_cjs, "__esModule", {
      value: !0
    });
    var t = reactIs$1.exports,
        n = react.exports,
        r = e(n),
        o = e(shallowequal),
        s = e(require$$3),
        i = e(unitless_cjs.exports),
        a = e(require$$5),
        u = e(hoistNonReactStatics_cjs);

    function c() {
      return (c = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];

          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }

        return e;
      }).apply(this, arguments);
    }

    var l = function (e, t) {
      for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);

      return n;
    },
        d = function (e) {
      return null !== e && "object" == typeof e && "[object Object]" === (e.toString ? e.toString() : Object.prototype.toString.call(e)) && !t.typeOf(e);
    },
        h = Object.freeze([]),
        p = Object.freeze({});

    function f(e) {
      return "function" == typeof e;
    }

    function m(e) {
      return "string" == typeof e && e || e.displayName || e.name || "Component";
    }

    function y(e) {
      return e && "string" == typeof e.styledComponentId;
    }

    var v = "undefined" != typeof process && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled",
        g = "undefined" != typeof window && "HTMLElement" in window,
        S = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : "production" !== "development"),
        w = {},
        E = {
      1: "Cannot create styled-component for component: %s.\n\n",
      2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
      3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
      4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
      5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
      6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
      7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
      8: 'ThemeProvider: Please make your "theme" prop an object.\n\n',
      9: "Missing document `<head>`\n\n",
      10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
      11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
      12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
      13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
      14: 'ThemeProvider: "theme" prop is required.\n\n',
      15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
      16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
      17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
    } ;

    function b() {
      for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], n = 1, r = arguments.length; n < r; n += 1) t.push(n < 0 || arguments.length <= n ? void 0 : arguments[n]);

      return t.forEach(function (t) {
        e = e.replace(/%[a-z]/, t);
      }), e;
    }

    function N(e) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];

      throw new Error(b.apply(void 0, [E[e]].concat(n)).trim());
    }

    var _ = function () {
      function e(e) {
        this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
      }

      var t = e.prototype;
      return t.indexOfGroup = function (e) {
        for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];

        return t;
      }, t.insertRules = function (e, t) {
        if (e >= this.groupSizes.length) {
          for (var n = this.groupSizes, r = n.length, o = r; e >= o;) (o <<= 1) < 0 && N(16, "" + e);

          this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;

          for (var s = r; s < o; s++) this.groupSizes[s] = 0;
        }

        for (var i = this.indexOfGroup(e + 1), a = 0, u = t.length; a < u; a++) this.tag.insertRule(i, t[a]) && (this.groupSizes[e]++, i++);
      }, t.clearGroup = function (e) {
        if (e < this.length) {
          var t = this.groupSizes[e],
              n = this.indexOfGroup(e),
              r = n + t;
          this.groupSizes[e] = 0;

          for (var o = n; o < r; o++) this.tag.deleteRule(n);
        }
      }, t.getGroup = function (e) {
        var t = "";
        if (e >= this.length || 0 === this.groupSizes[e]) return t;

        for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, s = r; s < o; s++) t += this.tag.getRule(s) + "/*!sc*/\n";

        return t;
      }, e;
    }(),
        C = new Map(),
        A = new Map(),
        I = 1,
        P = function (e) {
      if (C.has(e)) return C.get(e);

      for (; A.has(I);) I++;

      var t = I++;
      return ((0 | t) < 0 || t > 1 << 30) && N(16, "" + t), C.set(e, t), A.set(t, e), t;
    },
        O = function (e) {
      return A.get(e);
    },
        x = function (e, t) {
      C.set(e, t), A.set(t, e);
    },
        R = "style[" + v + '][data-styled-version="5.3.0"]',
        D = new RegExp("^" + v + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
        T = function (e, t, n) {
      for (var r, o = n.split(","), s = 0, i = o.length; s < i; s++) (r = o[s]) && e.registerName(t, r);
    },
        j = function (e, t) {
      for (var n = t.innerHTML.split("/*!sc*/\n"), r = [], o = 0, s = n.length; o < s; o++) {
        var i = n[o].trim();

        if (i) {
          var a = i.match(D);

          if (a) {
            var u = 0 | parseInt(a[1], 10),
                c = a[2];
            0 !== u && (x(c, u), T(e, c, a[3]), e.getTag().insertRules(u, r)), r.length = 0;
          } else r.push(i);
        }
      }
    },
        k = function () {
      return "undefined" != typeof window && void 0 !== window.__webpack_nonce__ ? window.__webpack_nonce__ : null;
    },
        V = function (e) {
      var t = document.head,
          n = e || t,
          r = document.createElement("style"),
          o = function (e) {
        for (var t = e.childNodes, n = t.length; n >= 0; n--) {
          var r = t[n];
          if (r && 1 === r.nodeType && r.hasAttribute(v)) return r;
        }
      }(n),
          s = void 0 !== o ? o.nextSibling : null;

      r.setAttribute(v, "active"), r.setAttribute("data-styled-version", "5.3.0");
      var i = k();
      return i && r.setAttribute("nonce", i), n.insertBefore(r, s), r;
    },
        M = function () {
      function e(e) {
        var t = this.element = V(e);
        t.appendChild(document.createTextNode("")), this.sheet = function (e) {
          if (e.sheet) return e.sheet;

          for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
            var o = t[n];
            if (o.ownerNode === e) return o;
          }

          N(17);
        }(t), this.length = 0;
      }

      var t = e.prototype;
      return t.insertRule = function (e, t) {
        try {
          return this.sheet.insertRule(t, e), this.length++, !0;
        } catch (e) {
          return !1;
        }
      }, t.deleteRule = function (e) {
        this.sheet.deleteRule(e), this.length--;
      }, t.getRule = function (e) {
        var t = this.sheet.cssRules[e];
        return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
      }, e;
    }(),
        B = function () {
      function e(e) {
        var t = this.element = V(e);
        this.nodes = t.childNodes, this.length = 0;
      }

      var t = e.prototype;
      return t.insertRule = function (e, t) {
        if (e <= this.length && e >= 0) {
          var n = document.createTextNode(t),
              r = this.nodes[e];
          return this.element.insertBefore(n, r || null), this.length++, !0;
        }

        return !1;
      }, t.deleteRule = function (e) {
        this.element.removeChild(this.nodes[e]), this.length--;
      }, t.getRule = function (e) {
        return e < this.length ? this.nodes[e].textContent : "";
      }, e;
    }(),
        q = function () {
      function e(e) {
        this.rules = [], this.length = 0;
      }

      var t = e.prototype;
      return t.insertRule = function (e, t) {
        return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
      }, t.deleteRule = function (e) {
        this.rules.splice(e, 1), this.length--;
      }, t.getRule = function (e) {
        return e < this.length ? this.rules[e] : "";
      }, e;
    }(),
        z = g,
        G = {
      isServer: !g,
      useCSSOMInjection: !S
    },
        L = function () {
      function e(e, t, n) {
        void 0 === e && (e = p), void 0 === t && (t = {}), this.options = c({}, G, {}, e), this.gs = t, this.names = new Map(n), !this.options.isServer && g && z && (z = !1, function (e) {
          for (var t = document.querySelectorAll(R), n = 0, r = t.length; n < r; n++) {
            var o = t[n];
            o && "active" !== o.getAttribute(v) && (j(e, o), o.parentNode && o.parentNode.removeChild(o));
          }
        }(this));
      }

      e.registerId = function (e) {
        return P(e);
      };

      var t = e.prototype;
      return t.reconstructWithOptions = function (t, n) {
        return void 0 === n && (n = !0), new e(c({}, this.options, {}, t), this.gs, n && this.names || void 0);
      }, t.allocateGSInstance = function (e) {
        return this.gs[e] = (this.gs[e] || 0) + 1;
      }, t.getTag = function () {
        return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, o = t.target, e = n ? new q(o) : r ? new M(o) : new B(o), new _(e)));
        var e, t, n, r, o;
      }, t.hasNameForId = function (e, t) {
        return this.names.has(e) && this.names.get(e).has(t);
      }, t.registerName = function (e, t) {
        if (P(e), this.names.has(e)) this.names.get(e).add(t);else {
          var n = new Set();
          n.add(t), this.names.set(e, n);
        }
      }, t.insertRules = function (e, t, n) {
        this.registerName(e, t), this.getTag().insertRules(P(e), n);
      }, t.clearNames = function (e) {
        this.names.has(e) && this.names.get(e).clear();
      }, t.clearRules = function (e) {
        this.getTag().clearGroup(P(e)), this.clearNames(e);
      }, t.clearTag = function () {
        this.tag = void 0;
      }, t.toString = function () {
        return function (e) {
          for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
            var s = O(o);

            if (void 0 !== s) {
              var i = e.names.get(s),
                  a = t.getGroup(o);

              if (void 0 !== i && 0 !== a.length) {
                var u = v + ".g" + o + '[id="' + s + '"]',
                    c = "";
                void 0 !== i && i.forEach(function (e) {
                  e.length > 0 && (c += e + ",");
                }), r += "" + a + u + '{content:"' + c + '"}/*!sc*/\n';
              }
            }
          }

          return r;
        }(this);
      }, e;
    }(),
        F = /(a)(d)/gi,
        Y = function (e) {
      return String.fromCharCode(e + (e > 25 ? 39 : 97));
    };

    function H(e) {
      var t,
          n = "";

      for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = Y(t % 52) + n;

      return (Y(t % 52) + n).replace(F, "$1-$2");
    }

    var $ = function (e, t) {
      for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);

      return e;
    },
        W = function (e) {
      return $(5381, e);
    };

    function U(e) {
      for (var t = 0; t < e.length; t += 1) {
        var n = e[t];
        if (f(n) && !y(n)) return !1;
      }

      return !0;
    }

    var J = W("5.3.0"),
        Z = function () {
      function e(e, t, n) {
        this.rules = e, this.staticRulesId = "", this.isStatic = "production" === "development"  , this.componentId = t, this.baseHash = $(J, t), this.baseStyle = n, L.registerId(t);
      }

      return e.prototype.generateAndInjectStyles = function (e, t, n) {
        var r = this.componentId,
            o = [];
        if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash) {
          if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);else {
            var s = me(this.rules, e, t, n).join(""),
                i = H($(this.baseHash, s.length) >>> 0);

            if (!t.hasNameForId(r, i)) {
              var a = n(s, "." + i, void 0, r);
              t.insertRules(r, i, a);
            }

            o.push(i), this.staticRulesId = i;
          }
        } else {
          for (var u = this.rules.length, c = $(this.baseHash, n.hash), l = "", d = 0; d < u; d++) {
            var h = this.rules[d];
            if ("string" == typeof h) l += h, (c = $(c, h + d));else if (h) {
              var p = me(h, e, t, n),
                  f = Array.isArray(p) ? p.join("") : p;
              c = $(c, f + d), l += f;
            }
          }

          if (l) {
            var m = H(c >>> 0);

            if (!t.hasNameForId(r, m)) {
              var y = n(l, "." + m, void 0, r);
              t.insertRules(r, m, y);
            }

            o.push(m);
          }
        }
        return o.join(" ");
      }, e;
    }(),
        X = /^\s*\/\/.*$/gm,
        K = [":", "[", ".", "#"];

    function Q(e) {
      var t,
          n,
          r,
          o,
          i = void 0 === e ? p : e,
          a = i.options,
          u = void 0 === a ? p : a,
          c = i.plugins,
          l = void 0 === c ? h : c,
          d = new s(u),
          f = [],
          m = function (e) {
        function t(t) {
          if (t) try {
            e(t + "}");
          } catch (e) {}
        }

        return function (n, r, o, s, i, a, u, c, l, d) {
          switch (n) {
            case 1:
              if (0 === l && 64 === r.charCodeAt(0)) return e(r + ";"), "";
              break;

            case 2:
              if (0 === c) return r + "/*|*/";
              break;

            case 3:
              switch (c) {
                case 102:
                case 112:
                  return e(o[0] + r), "";

                default:
                  return r + (0 === d ? "/*|*/" : "");
              }

            case -2:
              r.split("/*|*/}").forEach(t);
          }
        };
      }(function (e) {
        f.push(e);
      }),
          y = function (e, r, s) {
        return 0 === r && -1 !== K.indexOf(s[n.length]) || s.match(o) ? e : "." + t;
      };

      function v(e, s, i, a) {
        void 0 === a && (a = "&");
        var u = e.replace(X, ""),
            c = s && i ? i + " " + s + " { " + u + " }" : u;
        return t = a, n = s, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), d(i || !s ? "" : s, c);
      }

      return d.use([].concat(l, [function (e, t, o) {
        2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, y));
      }, m, function (e) {
        if (-2 === e) {
          var t = f;
          return f = [], t;
        }
      }])), v.hash = l.length ? l.reduce(function (e, t) {
        return t.name || N(15), $(e, t.name);
      }, 5381).toString() : "", v;
    }

    var ee = r.createContext(),
        te = ee.Consumer,
        ne = r.createContext(),
        re = (ne.Consumer, new L()),
        oe = Q();

    function se() {
      return n.useContext(ee) || re;
    }

    function ie() {
      return n.useContext(ne) || oe;
    }

    function ae(e) {
      var t = n.useState(e.stylisPlugins),
          s = t[0],
          i = t[1],
          a = se(),
          u = n.useMemo(function () {
        var t = a;
        return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
          target: e.target
        }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({
          useCSSOMInjection: !1
        })), t;
      }, [e.disableCSSOMInjection, e.sheet, e.target]),
          c = n.useMemo(function () {
        return Q({
          options: {
            prefix: !e.disableVendorPrefixes
          },
          plugins: s
        });
      }, [e.disableVendorPrefixes, s]);
      return n.useEffect(function () {
        o(s, e.stylisPlugins) || i(e.stylisPlugins);
      }, [e.stylisPlugins]), r.createElement(ee.Provider, {
        value: u
      }, r.createElement(ne.Provider, {
        value: c
      }, r.Children.only(e.children) ));
    }

    var ue = function () {
      function e(e, t) {
        var n = this;
        this.inject = function (e, t) {
          void 0 === t && (t = oe);
          var r = n.name + t.hash;
          e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
        }, this.toString = function () {
          return N(12, String(n.name));
        }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t;
      }

      return e.prototype.getName = function (e) {
        return void 0 === e && (e = oe), this.name + e.hash;
      }, e;
    }(),
        ce = /([A-Z])/,
        le = /([A-Z])/g,
        de = /^ms-/,
        he = function (e) {
      return "-" + e.toLowerCase();
    };

    function pe(e) {
      return ce.test(e) ? e.replace(le, he).replace(de, "-ms-") : e;
    }

    var fe = function (e) {
      return null == e || !1 === e || "" === e;
    };

    function me(e, n, r, o) {
      if (Array.isArray(e)) {
        for (var s, a = [], u = 0, c = e.length; u < c; u += 1) "" !== (s = me(e[u], n, r, o)) && (Array.isArray(s) ? a.push.apply(a, s) : a.push(s));

        return a;
      }

      if (fe(e)) return "";
      if (y(e)) return "." + e.styledComponentId;

      if (f(e)) {
        if ("function" != typeof (h = e) || h.prototype && h.prototype.isReactComponent || !n) return e;
        var l = e(n);
        return t.isElement(l) && console.warn(m(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), me(l, n, r, o);
      }

      var h;
      return e instanceof ue ? r ? (e.inject(r, o), e.getName(o)) : e : d(e) ? function e(t, n) {
        var r,
            o,
            s = [];

        for (var a in t) t.hasOwnProperty(a) && !fe(t[a]) && (d(t[a]) ? s.push.apply(s, e(t[a], a)) : f(t[a]) ? s.push(pe(a) + ":", t[a], ";") : s.push(pe(a) + ": " + (r = a, null == (o = t[a]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in i ? String(o).trim() : o + "px") + ";"));

        return n ? [n + " {"].concat(s, ["}"]) : s;
      }(e) : e.toString();
    }

    function ye(e) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];

      return f(e) || d(e) ? me(l(h, [e].concat(n))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : me(l(e, n));
    }

    var ve = /invalid hook call/i,
        ge = new Set(),
        Se = function (e, t) {
      {
        var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";

        try {
          n.useRef(), ge.has(r) || (console.warn(r), ge.add(r));
        } catch (e) {
          ve.test(e.message) && ge.delete(r);
        }
      }
    },
        we = function (e, t, n) {
      return void 0 === n && (n = p), e.theme !== n.theme && e.theme || t || n.theme;
    },
        Ee = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        be = /(^-|-$)/g;

    function Ne(e) {
      return e.replace(Ee, "-").replace(be, "");
    }

    var _e = function (e) {
      return H(W(e) >>> 0);
    };

    function Ce(e) {
      return "string" == typeof e && (e.charAt(0) === e.charAt(0).toLowerCase());
    }

    var Ae = function (e) {
      return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e);
    },
        Ie = function (e) {
      return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
    };

    function Pe(e, t, n) {
      var r = e[n];
      Ae(t) && Ae(r) ? Oe(r, t) : e[n] = t;
    }

    function Oe(e) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];

      for (var o = 0, s = n; o < s.length; o++) {
        var i = s[o];
        if (Ae(i)) for (var a in i) Ie(a) && Pe(e, i[a], a);
      }

      return e;
    }

    var xe = r.createContext(),
        Re = xe.Consumer,
        De = {};

    function Te(e, t, o) {
      var s = y(e),
          i = !Ce(e),
          l = t.attrs,
          d = void 0 === l ? h : l,
          v = t.componentId,
          g = void 0 === v ? function (e, t) {
        var n = "string" != typeof e ? "sc" : Ne(e);
        De[n] = (De[n] || 0) + 1;

        var r = n + "-" + _e("5.3.0" + n + De[n]);

        return t ? t + "-" + r : r;
      }(t.displayName, t.parentComponentId) : v,
          S = t.displayName,
          w = void 0 === S ? function (e) {
        return Ce(e) ? "styled." + e : "Styled(" + m(e) + ")";
      }(e) : S,
          E = t.displayName && t.componentId ? Ne(t.displayName) + "-" + t.componentId : t.componentId || g,
          b = s && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d,
          N = t.shouldForwardProp;
      s && e.shouldForwardProp && (N = t.shouldForwardProp ? function (n, r, o) {
        return e.shouldForwardProp(n, r, o) && t.shouldForwardProp(n, r, o);
      } : e.shouldForwardProp);

      var _,
          C = new Z(o, E, s ? e.componentStyle : void 0),
          A = C.isStatic && 0 === d.length,
          I = function (e, t) {
        return function (e, t, r, o) {
          var s = e.attrs,
              i = e.componentStyle,
              u = e.defaultProps,
              l = e.foldedComponentIds,
              d = e.shouldForwardProp,
              h = e.styledComponentId,
              m = e.target;
          n.useDebugValue(h);

          var y = function (e, t, n) {
            void 0 === e && (e = p);
            var r = c({}, t, {
              theme: e
            }),
                o = {};
            return n.forEach(function (e) {
              var t,
                  n,
                  s,
                  i = e;

              for (t in f(i) && (i = i(r)), i) r[t] = o[t] = "className" === t ? (n = o[t], s = i[t], n && s ? n + " " + s : n || s) : i[t];
            }), [r, o];
          }(we(t, n.useContext(xe), u) || p, t, s),
              v = y[0],
              g = y[1],
              S = function (e, t, r, o) {
            var s = se(),
                i = ie(),
                a = t ? e.generateAndInjectStyles(p, s, i) : e.generateAndInjectStyles(r, s, i);
            return n.useDebugValue(a), !t && o && o(a), a;
          }(i, o, v, e.warnTooManyClasses ),
              w = r,
              E = g.$as || t.$as || g.as || t.as || m,
              b = Ce(E),
              N = g !== t ? c({}, t, {}, g) : t,
              _ = {};

          for (var C in N) "$" !== C[0] && "as" !== C && ("forwardedAs" === C ? _.as = N[C] : (d ? d(C, a, E) : !b || a(C)) && (_[C] = N[C]));

          return t.style && g.style !== t.style && (_.style = c({}, t.style, {}, g.style)), _.className = Array.prototype.concat(l, h, S !== h ? S : null, t.className, g.className).filter(Boolean).join(" "), _.ref = w, n.createElement(E, _);
        }(_, e, t, A);
      };

      return I.displayName = w, (_ = r.forwardRef(I)).attrs = b, _.componentStyle = C, _.displayName = w, _.shouldForwardProp = N, _.foldedComponentIds = s ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : h, _.styledComponentId = E, _.target = s ? e.target : e, _.withComponent = function (e) {
        var n = t.componentId,
            r = function (e, t) {
          if (null == e) return {};
          var n,
              r,
              o = {},
              s = Object.keys(e);

          for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (o[n] = e[n]);

          return o;
        }(t, ["componentId"]),
            s = n && n + "-" + (Ce(e) ? e : Ne(m(e)));

        return Te(e, c({}, r, {
          attrs: b,
          componentId: s
        }), o);
      }, Object.defineProperty(_, "defaultProps", {
        get: function () {
          return this._foldedDefaultProps;
        },
        set: function (t) {
          this._foldedDefaultProps = s ? Oe({}, e.defaultProps, t) : t;
        }
      }), (Se(w, E), _.warnTooManyClasses = function (e, t) {
        var n = {},
            r = !1;
        return function (o) {
          if (!r && (n[o] = !0, Object.keys(n).length >= 200)) {
            var s = t ? ' with the id of "' + t + '"' : "";
            console.warn("Over 200 classes were generated for component " + e + s + ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), r = !0, n = {};
          }
        };
      }(w, E)), _.toString = function () {
        return "." + _.styledComponentId;
      }, i && u(_, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0
      }), _;
    }

    var je = function (e) {
      return function e(n, r, o) {
        if (void 0 === o && (o = p), !t.isValidElementType(r)) return N(1, String(r));

        var s = function () {
          return n(r, o, ye.apply(void 0, arguments));
        };

        return s.withConfig = function (t) {
          return e(n, r, c({}, o, {}, t));
        }, s.attrs = function (t) {
          return e(n, r, c({}, o, {
            attrs: Array.prototype.concat(o.attrs, t).filter(Boolean)
          }));
        }, s;
      }(Te, e);
    };

    ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function (e) {
      je[e] = je(e);
    });

    var ke = function () {
      function e(e, t) {
        this.rules = e, this.componentId = t, this.isStatic = U(e), L.registerId(this.componentId + 1);
      }

      var t = e.prototype;
      return t.createStyles = function (e, t, n, r) {
        var o = r(me(this.rules, t, n, r).join(""), ""),
            s = this.componentId + e;
        n.insertRules(s, s, o);
      }, t.removeStyles = function (e, t) {
        t.clearRules(this.componentId + e);
      }, t.renderStyles = function (e, t, n, r) {
        e > 2 && L.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r);
      }, e;
    }(),
        Ve = /^\s*<\/[a-z]/i,
        Me = function () {
      function e() {
        var e = this;
        this._emitSheetCSS = function () {
          var t = e.instance.toString(),
              n = k();
          return "<style " + [n && 'nonce="' + n + '"', v + '="true"', 'data-styled-version="5.3.0"'].filter(Boolean).join(" ") + ">" + t + "</style>";
        }, this.getStyleTags = function () {
          return e.sealed ? N(2) : e._emitSheetCSS();
        }, this.getStyleElement = function () {
          var t;
          if (e.sealed) return N(2);
          var n = ((t = {})[v] = "", t["data-styled-version"] = "5.3.0", t.dangerouslySetInnerHTML = {
            __html: e.instance.toString()
          }, t),
              o = k();
          return o && (n.nonce = o), [r.createElement("style", c({}, n, {
            key: "sc-0-0"
          }))];
        }, this.seal = function () {
          e.sealed = !0;
        }, this.instance = new L({
          isServer: !0
        }), this.sealed = !1;
      }

      var t = e.prototype;
      return t.collectStyles = function (e) {
        return this.sealed ? N(2) : r.createElement(ae, {
          sheet: this.instance
        }, e);
      }, t.interleaveWithNodeStream = function (e) {
        if (g) return N(3);
        if (this.sealed) return N(2);
        this.seal();
        var t = require$$7__default['default'],
            n = (t.Readable, t.Transform),
            r = e,
            o = this.instance,
            s = this._emitSheetCSS,
            i = new n({
          transform: function (e, t, n) {
            var r = e.toString(),
                i = s();

            if (o.clearTag(), Ve.test(r)) {
              var a = r.indexOf(">") + 1,
                  u = r.slice(0, a),
                  c = r.slice(a);
              this.push(u + i + c);
            } else this.push(i + r);

            n();
          }
        });
        return r.on("error", function (e) {
          i.emit("error", e);
        }), r.pipe(i);
      }, e;
    }(),
        Be = {
      StyleSheet: L,
      masterSheet: re
    };

    "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), styledComponents_cjs.ServerStyleSheet = Me, styledComponents_cjs.StyleSheetConsumer = te, styledComponents_cjs.StyleSheetContext = ee, styledComponents_cjs.StyleSheetManager = ae, styledComponents_cjs.ThemeConsumer = Re, styledComponents_cjs.ThemeContext = xe, styledComponents_cjs.ThemeProvider = function (e) {
      var t = n.useContext(xe),
          o = n.useMemo(function () {
        return function (e, t) {
          if (!e) return N(14);

          if (f(e)) {
            var n = e(t);
            return null !== n && !Array.isArray(n) && "object" == typeof n ? n : N(7);
          }

          return Array.isArray(e) || "object" != typeof e ? N(8) : t ? c({}, t, {}, e) : e;
        }(e.theme, t);
      }, [e.theme, t]);
      return e.children ? r.createElement(xe.Provider, {
        value: o
      }, e.children) : null;
    }, styledComponents_cjs.__PRIVATE__ = Be, styledComponents_cjs.createGlobalStyle = function (e) {
      for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) o[s - 1] = arguments[s];

      var i = ye.apply(void 0, [e].concat(o)),
          a = "sc-global-" + _e(JSON.stringify(i)),
          u = new ke(i, a);

      function l(e) {
        var t = se(),
            o = ie(),
            s = n.useContext(xe),
            u = n.useRef(t.allocateGSInstance(a)).current;
        return r.Children.count(e.children) && console.warn("The global style component " + a + " was given child JSX. createGlobalStyle does not render children."), i.some(function (e) {
          return "string" == typeof e && -1 !== e.indexOf("@import");
        }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), d(u, e, t, s, o), null;
      }

      function d(e, t, n, r, o) {
        if (u.isStatic) u.renderStyles(e, w, n, o);else {
          var s = c({}, t, {
            theme: we(t, r, l.defaultProps)
          });
          u.renderStyles(e, s, n, o);
        }
      }

      return Se(a), r.memo(l);
    }, styledComponents_cjs.css = ye, _default = styledComponents_cjs.default = je, styledComponents_cjs.isStyledComponent = y, styledComponents_cjs.keyframes = function (e) {
      "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");

      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];

      var o = ye.apply(void 0, [e].concat(n)).join(""),
          s = _e(o);

      return new ue(s, o);
    }, styledComponents_cjs.useTheme = function () {
      return n.useContext(xe);
    }, styledComponents_cjs.version = "5.3.0", styledComponents_cjs.withTheme = function (e) {
      var t = r.forwardRef(function (t, o) {
        var s = n.useContext(xe),
            i = e.defaultProps,
            a = we(t, s, i);
        return void 0 === a && console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + m(e) + '"'), r.createElement(e, c({}, t, {
          theme: a,
          ref: o
        }));
      });
      return u(t, e), t.displayName = "WithTheme(" + m(e) + ")", t;
    };

    var ButtonStyled = _default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &.storybook-button {\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-weight: 700;\n    border: 0;\n    border-radius: 3em;\n    cursor: pointer;\n    display: inline-block;\n    line-height: 1;\n  }\n  &.storybook-button--primary {\n    color: white;\n    background-color: #1ea7fd;\n  }\n  &.storybook-button--secondary {\n    color: #333;\n    background-color: transparent;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n  }\n  &.storybook-button--small {\n    font-size: 12px;\n    padding: 10px 16px;\n  }\n  &.storybook-button--medium {\n    font-size: 14px;\n    padding: 11px 20px;\n  }\n  &.storybook-button--large {\n    font-size: 16px;\n    padding: 12px 24px;\n  }\n"], ["\n  &.storybook-button {\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-weight: 700;\n    border: 0;\n    border-radius: 3em;\n    cursor: pointer;\n    display: inline-block;\n    line-height: 1;\n  }\n  &.storybook-button--primary {\n    color: white;\n    background-color: #1ea7fd;\n  }\n  &.storybook-button--secondary {\n    color: #333;\n    background-color: transparent;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n  }\n  &.storybook-button--small {\n    font-size: 12px;\n    padding: 10px 16px;\n  }\n  &.storybook-button--medium {\n    font-size: 14px;\n    padding: 11px 20px;\n  }\n  &.storybook-button--large {\n    font-size: 16px;\n    padding: 12px 24px;\n  }\n"])));
    var templateObject_1;

    /**
     * Primary UI component for user interaction
     */
    var Button = function (_a) {
        var _b = _a.primary, primary = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, backgroundColor = _a.backgroundColor, label = _a.label, props = __rest(_a, ["primary", "size", "backgroundColor", "label"]);
        var mode = primary
            ? "storybook-button--primary"
            : "storybook-button--secondary";
        return (React.createElement(ButtonStyled, __assign({ type: "button", className: ["storybook-button", "storybook-button--" + size, mode].join(" "), style: { backgroundColor: backgroundColor } }, props), label));
    };

    var config = {
        primary: "#FAFAFA",
    };

    exports.Button = Button;
    exports.config = config;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
