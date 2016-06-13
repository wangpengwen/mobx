/**
 * (c) Michel Weststrate 2015 - 2016
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */

import {registerGlobals} from "./core/globalstate";
registerGlobals();

export { Lambda                                               } from "./utils/utils";
export { SimpleEventEmitter, ISimpleEventListener             } from "./utils/simpleeventemitter";
export { IObserverTree, IDependencyTree                       } from "./api/extras";
export { IObservable, IDepTreeNode                            } from "./core/observable";
export { IDerivation, untracked                               } from "./core/derivation";
export { action, useStrict, isAction                          } from "./core/action";
export { spy                                                  } from "./core/spy";

export { asReference, asFlat, asStructure, asMap              } from "./types/modifiers";
export { IInterceptable, IInterceptor                         } from "./types/intercept-utils";
export { IListenable                                          } from "./types/listen-utils";
export { IObjectWillChange, IObjectChange, isObservableObject } from "./types/observableobject";
export { /* 3.0: IValueDidChange, */ IValueWillChange         } from "./types/observablevalue";

export { IObservableArray, IArrayWillChange, IArrayWillSplice, IArrayChange, IArraySplice, isObservableArray, fastArray } from "./types/observablearray";
export { IKeyValueMap, ObservableMap, IMapEntries, IMapWillChange, IMapChange, isObservableMap, map } from "./types/observablemap"

export { IObservableValue, observable                         } from "./api/observable";
export { computed, IComputedValueOptions                      } from "./api/computeddecorator";
export { isObservable                                         } from "./api/isobservable";
export { extendObservable                                     } from "./api/extendobservable";
export { observe                                              } from "./api/observe";
export { intercept                                            } from "./api/intercept";
export { autorun, autorunAsync, autorunUntil, when, reaction  } from "./api/autorun";
export { expr                                                 } from "./api/expr";
export { toJSON, toJS                                         } from "./api/tojs";
export { ITransformer, createTransformer                      } from "./api/createtransformer";

export { transaction                                          } from "./core/transaction";
export { Reaction                                             } from "./core/reaction";
export { IAtom, Atom                                          } from "./core/atom";

import { resetGlobalState } from "./core/globalstate";
import { quickDiff } from "./utils/utils";

import { IDepTreeNode } from "./core/observable";
import { IObserverTree, IDependencyTree, getDependencyTree, getObserverTree } from "./api/extras";
import { getDebugName, getAtom, getAdministration } from "./types/type-utils";
import { allowStateChanges } from "./core/action";
import { trackTransitions, spyReport, spyReportEnd, spyReportStart, isSpyEnabled } from "./core/spy";
import { Lambda } from "./utils/utils";
import { isComputingDerivation } from "./core/derivation";

export const extras = {
	allowStateChanges,
	getAtom,
	getDebugName,
	getDependencyTree,
	getObserverTree,
	isComputingDerivation,
	isSpyEnabled,
	resetGlobalState,
	spyReport,
	spyReportEnd,
	spyReportStart,
	trackTransitions
};

// Experimental or internal api's (exposed for testing for example)
export const _ = {
	getAdministration,
	quickDiff,
	resetGlobalState
};
