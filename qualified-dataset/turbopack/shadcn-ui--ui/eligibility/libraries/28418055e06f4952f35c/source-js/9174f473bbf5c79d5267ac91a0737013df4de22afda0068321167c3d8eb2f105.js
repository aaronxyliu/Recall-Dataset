import * as v from "valibot";
import { useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef } from "react";
import { jsx } from "react/jsx-runtime";

//#region ../../packages/core/dist/index.react.js
/**
* The current framework being used.
*/
const framework = "react";
/**
* Creates a unique identifier string.
*
* @returns The unique identifier.
*/
/* @__NO_SIDE_EFFECTS__ */
function createId() {
	return Math.random().toString(36).slice(2);
}
/**
* The current listener being tracked.
*/
let listener;
/**
* Sets the current listener being tracked.
*
* @param newListener The new listener to set.
*/
function setListener(newListener) {
	listener = newListener;
}
/**
* Subscribers collected during a batch.
*/
let batchSubscribers;
/**
* Creates a reactive signal with an initial value.
*
* @param value The initial value.
*
* @returns The created signal.
*/
/* @__NO_SIDE_EFFECTS__ */
function createSignal(value) {
	const subscribers = /* @__PURE__ */ new Set();
	return {
		get value() {
			if (listener) {
				subscribers.add(listener);
				listener[1].add(subscribers);
			}
			return value;
		},
		set value(newValue) {
			if (newValue !== value) {
				value = newValue;
				const localSubscribers = [];
				for (const subscriber of subscribers) {
					if (batchSubscribers) batchSubscribers.add(subscriber);
					else localSubscribers.push(subscriber);
					subscriber[1].delete(subscribers);
				}
				subscribers.clear();
				for (const subscriber of localSubscribers) subscriber[0]();
			}
		}
	};
}
let batchDepth = 0;
/**
* Batches multiple signal updates into a single update cycle.
*
* @param fn The function to execute in batch.
*
* @returns The return value of the function.
*/
function batch(fn) {
	batchDepth++;
	if (!batchSubscribers) batchSubscribers = /* @__PURE__ */ new Set();
	try {
		return fn();
	} finally {
		batchDepth--;
		if (batchDepth === 0) {
			const subscribers = batchSubscribers;
			batchSubscribers = void 0;
			for (const subscriber of subscribers) subscriber[0]();
		}
	}
}
/**
* Executes a function without tracking reactive dependencies.
*
* @param fn The function to execute without tracking.
*
* @returns The return value of the function.
*/
function untrack(fn) {
	const prev = listener;
	listener = void 0;
	try {
		return fn();
	} finally {
		listener = prev;
	}
}
/**
* Initializes a field store recursively based on the schema structure. Handles
* array, object, and value schemas, setting up all necessary signals and
* children. Supports wrapped schemas and schema options.
*
* @param internalFieldStore The partial field store to initialize.
* @param schema The Valibot schema defining the field structure.
* @param initialInput The initial input value.
* @param path The path to the field in the form.
* @param nullish Whether the schema is wrapped in a nullish schema.
*/
function initializeFieldStore(internalFieldStore, schema, initialInput, path, nullish = false) {
	if (framework === "qwik" && schema.type === "lazy" || schema.type === "object_with_rest" || schema.type === "record" || schema.type === "tuple_with_rest" || schema.type === "promise") throw new Error(`"${schema.type}" schema is not supported`);
	else if (schema.type === "lazy") initializeFieldStore(internalFieldStore, schema.getter(void 0), initialInput, path, nullish);
	else if (schema.type === "exact_optional" || schema.type === "nullable" || schema.type === "nullish" || schema.type === "optional" || schema.type === "undefinedable") initializeFieldStore(internalFieldStore, schema.wrapped, initialInput === void 0 ? v.getDefault(schema) : initialInput, path, true);
	else if (schema.type === "non_nullable" || schema.type === "non_nullish" || schema.type === "non_optional") initializeFieldStore(internalFieldStore, schema.wrapped, initialInput, path);
	else if (schema.type === "intersect" || schema.type === "union" || schema.type === "variant") for (const schemaOption of schema.options) initializeFieldStore(internalFieldStore, schemaOption, initialInput, path, nullish);
	else {
		internalFieldStore.schema = schema;
		internalFieldStore.name = JSON.stringify(path);
		const initialElements = [];
		internalFieldStore.initialElements = initialElements;
		internalFieldStore.elements = initialElements;
		internalFieldStore.errors = /* @__PURE__ */ createSignal(null);
		internalFieldStore.isTouched = /* @__PURE__ */ createSignal(false);
		internalFieldStore.isDirty = /* @__PURE__ */ createSignal(false);
		if (schema.type === "array" || schema.type === "loose_tuple" || schema.type === "strict_tuple" || schema.type === "tuple") {
			if (internalFieldStore.kind && internalFieldStore.kind !== "array") throw new Error(`Store initialized as "${internalFieldStore.kind}" cannot be reinitialized as "array"`);
			internalFieldStore.kind = "array";
			if (internalFieldStore.kind === "array") {
				internalFieldStore.children ??= [];
				if (schema.type === "array") {
					if (initialInput) for (let index = 0; index < initialInput.length; index++) {
						internalFieldStore.children[index] = {};
						path.push(index);
						initializeFieldStore(internalFieldStore.children[index], schema.item, initialInput[index], path);
						path.pop();
					}
				} else for (let index = 0; index < schema.items.length; index++) {
					internalFieldStore.children[index] = {};
					path.push(index);
					initializeFieldStore(internalFieldStore.children[index], schema.items[index], initialInput?.[index], path);
					path.pop();
				}
				const arrayInput = nullish && initialInput == null ? initialInput : true;
				internalFieldStore.initialInput = /* @__PURE__ */ createSignal(arrayInput);
				internalFieldStore.startInput = /* @__PURE__ */ createSignal(arrayInput);
				internalFieldStore.input = /* @__PURE__ */ createSignal(arrayInput);
				const initialItems = internalFieldStore.children.map(createId);
				internalFieldStore.initialItems = /* @__PURE__ */ createSignal(initialItems);
				internalFieldStore.startItems = /* @__PURE__ */ createSignal(initialItems);
				internalFieldStore.items = /* @__PURE__ */ createSignal(initialItems);
			}
		} else if (schema.type === "loose_object" || schema.type === "object" || schema.type === "strict_object") {
			if (internalFieldStore.kind && internalFieldStore.kind !== "object") throw new Error(`Store initialized as "${internalFieldStore.kind}" cannot be reinitialized as "object"`);
			internalFieldStore.kind = "object";
			if (internalFieldStore.kind === "object") {
				internalFieldStore.children ??= {};
				for (const key in schema.entries) {
					internalFieldStore.children[key] = {};
					path.push(key);
					initializeFieldStore(internalFieldStore.children[key], schema.entries[key], initialInput?.[key], path);
					path.pop();
				}
				const objectInput = nullish && initialInput == null ? initialInput : true;
				internalFieldStore.initialInput = /* @__PURE__ */ createSignal(objectInput);
				internalFieldStore.startInput = /* @__PURE__ */ createSignal(objectInput);
				internalFieldStore.input = /* @__PURE__ */ createSignal(objectInput);
			}
		} else {
			internalFieldStore.kind = "value";
			if (internalFieldStore.kind === "value") {
				internalFieldStore.initialInput = /* @__PURE__ */ createSignal(initialInput);
				internalFieldStore.startInput = /* @__PURE__ */ createSignal(initialInput);
				internalFieldStore.input = /* @__PURE__ */ createSignal(initialInput);
			}
		}
	}
}
/**
* Copies the deeply nested state (signal values) from one field store to
* another. This includes the `elements`, `errors`, `startInput`, `input`,
* `isTouched`, `isDirty`, and for arrays `startItems` and `items` properties.
* Recursively walks through the field stores and copies all signal values.
*
* @param fromInternalFieldStore The source field store to copy from.
* @param toInternalFieldStore The destination field store to copy to.
*/
function copyItemState(fromInternalFieldStore, toInternalFieldStore) {
	batch(() => {
		untrack(() => {
			toInternalFieldStore.elements = fromInternalFieldStore.elements;
			toInternalFieldStore.errors.value = fromInternalFieldStore.errors.value;
			toInternalFieldStore.startInput.value = fromInternalFieldStore.startInput.value;
			toInternalFieldStore.input.value = fromInternalFieldStore.input.value;
			toInternalFieldStore.isTouched.value = fromInternalFieldStore.isTouched.value;
			toInternalFieldStore.isDirty.value = fromInternalFieldStore.isDirty.value;
			if (fromInternalFieldStore.kind === "array" && toInternalFieldStore.kind === "array") {
				const fromItems = fromInternalFieldStore.items.value;
				toInternalFieldStore.startItems.value = fromInternalFieldStore.startItems.value;
				toInternalFieldStore.items.value = fromItems;
				let path;
				for (let index = 0; index < fromItems.length; index++) {
					if (!toInternalFieldStore.children[index]) {
						path ??= JSON.parse(toInternalFieldStore.name);
						toInternalFieldStore.children[index] = {};
						path.push(index);
						initializeFieldStore(toInternalFieldStore.children[index], toInternalFieldStore.schema.item, void 0, path);
						path.pop();
					}
					copyItemState(fromInternalFieldStore.children[index], toInternalFieldStore.children[index]);
				}
			} else if (fromInternalFieldStore.kind === "object" && toInternalFieldStore.kind === "object") for (const key in fromInternalFieldStore.children) copyItemState(fromInternalFieldStore.children[key], toInternalFieldStore.children[key]);
		});
	});
}
/**
* Resets the state of a field store (signal values) deeply nested. Sets
* `elements` to empty array, `errors` to `null`, `isTouched` and `isDirty` to
* `false`, and `startInput`, `input`, `startItems`, and `items` to the new
* input value. Keeps the `initialInput` and `initialItems` state unchanged for
* form reset functionality.
*
* @param internalFieldStore The field store to reset.
* @param initialInput The new input value (can be any type including array or object).
*/
function resetItemState(internalFieldStore, initialInput) {
	batch(() => {
		internalFieldStore.elements = [];
		internalFieldStore.errors.value = null;
		internalFieldStore.isTouched.value = false;
		internalFieldStore.isDirty.value = false;
		if (internalFieldStore.kind === "array" || internalFieldStore.kind === "object") {
			const objectInput = initialInput == null ? initialInput : true;
			internalFieldStore.startInput.value = objectInput;
			internalFieldStore.input.value = objectInput;
			if (internalFieldStore.kind === "array") if (initialInput) {
				const newItems = initialInput.map(createId);
				internalFieldStore.startItems.value = newItems;
				internalFieldStore.items.value = newItems;
				for (let index = 0; index < initialInput.length; index++) if (internalFieldStore.children[index]) resetItemState(internalFieldStore.children[index], initialInput[index]);
			} else {
				internalFieldStore.startItems.value = [];
				internalFieldStore.items.value = [];
			}
			else for (const key in internalFieldStore.children) resetItemState(internalFieldStore.children[key], initialInput?.[key]);
		} else {
			internalFieldStore.startInput.value = initialInput;
			internalFieldStore.input.value = initialInput;
		}
	});
}
/**
* Swaps the deeply nested state (signal values) between two field stores. This
* includes the `elements`, `errors`, `startInput`, `input`, `isTouched`,
* `isDirty`, and for arrays `startItems` and `items` properties. Recursively
* walks through the field stores and swaps all signal values.
*
* @param firstInternalFieldStore The first field store to swap.
* @param secondInternalFieldStore The second field store to swap.
*/
function swapItemState(firstInternalFieldStore, secondInternalFieldStore) {
	batch(() => {
		untrack(() => {
			const tempElements = firstInternalFieldStore.elements;
			firstInternalFieldStore.elements = secondInternalFieldStore.elements;
			secondInternalFieldStore.elements = tempElements;
			const tempErrors = firstInternalFieldStore.errors.value;
			firstInternalFieldStore.errors.value = secondInternalFieldStore.errors.value;
			secondInternalFieldStore.errors.value = tempErrors;
			const tempStartInput = firstInternalFieldStore.startInput.value;
			firstInternalFieldStore.startInput.value = secondInternalFieldStore.startInput.value;
			secondInternalFieldStore.startInput.value = tempStartInput;
			const tempInput = firstInternalFieldStore.input.value;
			firstInternalFieldStore.input.value = secondInternalFieldStore.input.value;
			secondInternalFieldStore.input.value = tempInput;
			const tempIsTouched = firstInternalFieldStore.isTouched.value;
			firstInternalFieldStore.isTouched.value = secondInternalFieldStore.isTouched.value;
			secondInternalFieldStore.isTouched.value = tempIsTouched;
			const tempIsDirty = firstInternalFieldStore.isDirty.value;
			firstInternalFieldStore.isDirty.value = secondInternalFieldStore.isDirty.value;
			secondInternalFieldStore.isDirty.value = tempIsDirty;
			if (firstInternalFieldStore.kind === "array" && secondInternalFieldStore.kind === "array") {
				const firstItems = firstInternalFieldStore.items.value;
				const secondItems = secondInternalFieldStore.items.value;
				const tempStartItems = firstInternalFieldStore.startItems.value;
				firstInternalFieldStore.startItems.value = secondInternalFieldStore.startItems.value;
				secondInternalFieldStore.startItems.value = tempStartItems;
				firstInternalFieldStore.items.value = secondItems;
				secondInternalFieldStore.items.value = firstItems;
				const maxLength = Math.max(firstItems.length, secondItems.length);
				let firstPath;
				let secondPath;
				for (let index = 0; index < maxLength; index++) {
					if (!firstInternalFieldStore.children[index]) {
						firstPath ??= JSON.parse(firstInternalFieldStore.name);
						firstInternalFieldStore.children[index] = {};
						firstPath.push(index);
						initializeFieldStore(firstInternalFieldStore.children[index], firstInternalFieldStore.schema.item, void 0, firstPath);
						firstPath.pop();
					}
					if (!secondInternalFieldStore.children[index]) {
						secondPath ??= JSON.parse(secondInternalFieldStore.name);
						secondInternalFieldStore.children[index] = {};
						secondPath.push(index);
						initializeFieldStore(secondInternalFieldStore.children[index], secondInternalFieldStore.schema.item, void 0, secondPath);
						secondPath.pop();
					}
					swapItemState(firstInternalFieldStore.children[index], secondInternalFieldStore.children[index]);
				}
			} else if (firstInternalFieldStore.kind === "object" && secondInternalFieldStore.kind === "object") for (const key in firstInternalFieldStore.children) swapItemState(firstInternalFieldStore.children[key], secondInternalFieldStore.children[key]);
		});
	});
}
/**
* Returns the current input of the field store. For arrays and objects,
* recursively collects input from all children. Returns `null` or `undefined`
* for nullish array/object inputs, or the primitive value for value fields.
*
* @param internalFieldStore The field store to get input from.
*
* @returns The field input.
*/
/* @__NO_SIDE_EFFECTS__ */
function getFieldInput(internalFieldStore) {
	if (internalFieldStore.kind === "array") {
		if (internalFieldStore.input.value) {
			const value = [];
			for (let index = 0; index < internalFieldStore.items.value.length; index++) value[index] = /* @__PURE__ */ getFieldInput(internalFieldStore.children[index]);
			return value;
		}
		return internalFieldStore.input.value;
	}
	if (internalFieldStore.kind === "object") {
		if (internalFieldStore.input.value) {
			const value = {};
			for (const key in internalFieldStore.children) value[key] = /* @__PURE__ */ getFieldInput(internalFieldStore.children[key]);
			return value;
		}
		return internalFieldStore.input.value;
	}
	return internalFieldStore.input.value;
}
/**
* Returns the current input of the element. Handles special cases for select
* multiple, checkbox groups, radio groups, and file inputs.
*
* @param element The field element.
* @param internalFieldStore The internal field store.
*
* @returns The element input.
*/
/* @__NO_SIDE_EFFECTS__ */
function getElementInput(element, internalFieldStore) {
	if (element.options && element.multiple) return [...element.options].filter((option) => option.selected && !option.disabled).map((option) => option.value);
	if (element.type === "checkbox") {
		const options = document.getElementsByName(element.name);
		if (options.length > 1) return [...options].filter((option) => option.checked).map((option) => option.value);
		return element.checked;
	}
	if (element.type === "radio") {
		if (element.checked) return element.value;
		return untrack(() => /* @__PURE__ */ getFieldInput(internalFieldStore));
	}
	if (element.type === "file") {
		if (element.multiple) return [...element.files];
		return element.files[0];
	}
	return element.value;
}
/**
* Returns whether the specified boolean property is true for the field store
* or any of its nested children. Recursively checks arrays and objects.
*
* @param internalFieldStore The field store to check.
* @param type The boolean property type to check.
*
* @returns Whether the property is true.
*/
/* @__NO_SIDE_EFFECTS__ */
function getFieldBool(internalFieldStore, type) {
	if (internalFieldStore[type].value) return true;
	if (internalFieldStore.kind === "array") {
		for (let index = 0; index < internalFieldStore.items.value.length; index++) if (/* @__PURE__ */ getFieldBool(internalFieldStore.children[index], type)) return true;
		return false;
	}
	if (internalFieldStore.kind == "object") {
		for (const key in internalFieldStore.children) if (/* @__PURE__ */ getFieldBool(internalFieldStore.children[key], type)) return true;
		return false;
	}
	return false;
}
/**
* Returns the field store at the specified path by traversing the form store's
* children hierarchy.
*
* @param internalFormStore The form store to traverse.
* @param path The path to the field store.
*
* @returns The field store.
*/
/* @__NO_SIDE_EFFECTS__ */
function getFieldStore(internalFormStore, path) {
	let internalFieldStore = internalFormStore;
	for (const key of path) internalFieldStore = internalFieldStore.children[key];
	return internalFieldStore;
}
/**
* Sets the specified boolean property for the field store and all nested
* children. Recursively updates arrays and objects.
*
* @param internalFieldStore The field store to update.
* @param type The boolean property type to set.
* @param bool The boolean value to set.
*/
function setFieldBool(internalFieldStore, type, bool) {
	batch(() => {
		if (internalFieldStore.kind === "array") {
			internalFieldStore[type].value = bool;
			for (let index = 0; index < untrack(() => internalFieldStore.items.value).length; index++) setFieldBool(internalFieldStore.children[index], type, bool);
		} else if (internalFieldStore.kind == "object") for (const key in internalFieldStore.children) setFieldBool(internalFieldStore.children[key], type, bool);
		else internalFieldStore[type].value = bool;
	});
}
/**
* Sets the input for a nested field store and all its children, updating
* touched and dirty states accordingly. Handles dynamic array resizing.
*
* @param internalFieldStore The field store to update.
* @param input The new input value.
*/
function setNestedInput(internalFieldStore, input) {
	internalFieldStore.isTouched.value = true;
	if (internalFieldStore.kind === "array") {
		const arrayInput = input ?? [];
		const items = internalFieldStore.items.value;
		if (arrayInput.length < items.length) internalFieldStore.items.value = items.slice(0, arrayInput.length);
		else if (arrayInput.length > items.length) {
			if (arrayInput.length > internalFieldStore.children.length) {
				const path = JSON.parse(internalFieldStore.name);
				for (let index = internalFieldStore.children.length; index < arrayInput.length; index++) {
					internalFieldStore.children[index] = {};
					path.push(index);
					initializeFieldStore(internalFieldStore.children[index], internalFieldStore.schema.item, arrayInput[index], path);
					path.pop();
				}
			}
			internalFieldStore.items.value = [...items, ...arrayInput.slice(items.length).map(createId)];
		}
		for (let index = 0; index < arrayInput.length; index++) setNestedInput(internalFieldStore.children[index], arrayInput[index]);
		internalFieldStore.input.value = input == null ? input : true;
		internalFieldStore.isDirty.value = internalFieldStore.startInput.value !== internalFieldStore.input.value || internalFieldStore.startItems.value.length !== internalFieldStore.items.value.length;
	} else if (internalFieldStore.kind === "object") {
		for (const key in internalFieldStore.children) setNestedInput(internalFieldStore.children[key], input?.[key]);
		internalFieldStore.input.value = input == null ? input : true;
		internalFieldStore.isDirty.value = internalFieldStore.startInput.value !== internalFieldStore.input.value;
	} else {
		internalFieldStore.input.value = input;
		const startInput = internalFieldStore.startInput.value;
		internalFieldStore.isDirty.value = startInput !== input && (startInput != null || input !== "" && !Number.isNaN(input));
	}
}
/**
* Sets the input for a field at the specified path in the form store,
* traversing the path and updating all parent fields along the way.
*
* @param internalFormStore The form store containing the field.
* @param path The path to the field.
* @param input The new input value.
*/
function setFieldInput(internalFormStore, path, input) {
	batch(() => {
		untrack(() => {
			let internalFieldStore = internalFormStore;
			for (let index = 0; index < path.length; index++) {
				internalFieldStore = internalFieldStore.children[path[index]];
				if (index < path.length - 1) internalFieldStore.input.value = true;
			}
			setNestedInput(internalFieldStore, input);
		});
	});
}
/**
* Sets the initial input for a field store and all its children recursively.
* For arrays, initializes missing children if needed. Updates `initialInput`
* and `initialItems` properties.
*
* @param internalFieldStore The field store to update.
* @param initialInput The initial input value.
*/
function setInitialFieldInput(internalFieldStore, initialInput) {
	batch(() => {
		if (internalFieldStore.kind === "array") {
			internalFieldStore.input.value = initialInput == null ? initialInput : true;
			const initialArrayInput = initialInput ?? [];
			if (initialArrayInput.length > internalFieldStore.children.length) {
				const path = JSON.parse(internalFieldStore.name);
				for (let index = internalFieldStore.children.length; index < initialArrayInput.length; index++) {
					internalFieldStore.children[index] = {};
					path.push(index);
					initializeFieldStore(internalFieldStore.children[index], internalFieldStore.schema.item, initialArrayInput[index], path);
					path.pop();
				}
			}
			internalFieldStore.initialItems.value = initialArrayInput.map(createId);
			for (let index = 0; index < internalFieldStore.children.length; index++) setInitialFieldInput(internalFieldStore.children[index], initialArrayInput[index]);
		} else if (internalFieldStore.kind === "object") {
			internalFieldStore.input.value = initialInput == null ? initialInput : true;
			for (const key in internalFieldStore.children) setInitialFieldInput(internalFieldStore.children[key], initialInput?.[key]);
		} else internalFieldStore.initialInput.value = initialInput;
	});
}
/**
* Walks through the field store and all nested children, calling the callback
* for each field store in depth-first order.
*
* @param internalFieldStore The field store to walk.
* @param callback The callback to invoke for each field store.
*/
function walkFieldStore(internalFieldStore, callback) {
	callback(internalFieldStore);
	if (internalFieldStore.kind === "array") for (let index = 0; index < untrack(() => internalFieldStore.items.value).length; index++) walkFieldStore(internalFieldStore.children[index], callback);
	else if (internalFieldStore.kind === "object") for (const key in internalFieldStore.children) walkFieldStore(internalFieldStore.children[key], callback);
}
/**
* Creates a new internal form store from the provided configuration.
* Initializes the field store hierarchy, sets validation modes, and
* creates form state signals.
*
* @param config The form configuration.
* @param parse The schema parse function.
*
* @returns The internal form store.
*/
function createFormStore(config, parse) {
	const store = {};
	initializeFieldStore(store, config.schema, config.initialInput, []);
	store.validators = 0;
	store.validate = config.validate ?? "submit";
	store.revalidate = config.revalidate ?? "input";
	store.parse = parse;
	store.isSubmitting = /* @__PURE__ */ createSignal(false);
	store.isSubmitted = /* @__PURE__ */ createSignal(false);
	store.isValidating = /* @__PURE__ */ createSignal(false);
	return store;
}
/**
* Validates the form input using the configured Valibot schema. Parses the
* current form input, processes validation issues, assigns errors to fields,
* and optionally focuses the first field with an error.
*
* @param internalFormStore The form store to validate.
* @param config The validation configuration.
*
* @returns The Valibot validation result.
*/
async function validateFormInput(internalFormStore, config) {
	internalFormStore.validators++;
	internalFormStore.isValidating.value = true;
	const result = await internalFormStore.parse(untrack(() => /* @__PURE__ */ getFieldInput(internalFormStore)));
	let rootErrors;
	let nestedErrors;
	if (result.issues) {
		nestedErrors = {};
		for (const issue of result.issues) if (issue.path) {
			const path = [];
			for (const pathItem of issue.path) {
				const key = pathItem.key;
				const keyType = typeof key;
				const itemType = pathItem.type;
				if (keyType !== "string" && keyType !== "number" || itemType === "map" || itemType === "set") break;
				path.push(key);
			}
			const name = JSON.stringify(path);
			const fieldErrors = nestedErrors[name];
			if (fieldErrors) fieldErrors.push(issue.message);
			else nestedErrors[name] = [issue.message];
		} else if (rootErrors) rootErrors.push(issue.message);
		else rootErrors = [issue.message];
	}
	let shouldFocus = config?.shouldFocus ?? false;
	batch(() => {
		walkFieldStore(internalFormStore, (internalFieldStore) => {
			if (internalFieldStore.name === "[]") internalFieldStore.errors.value = rootErrors ?? null;
			else {
				const fieldErrors = nestedErrors?.[internalFieldStore.name] ?? null;
				internalFieldStore.errors.value = fieldErrors;
				if (shouldFocus && fieldErrors) {
					internalFieldStore.elements[0]?.focus();
					shouldFocus = false;
				}
			}
		});
		internalFormStore.validators--;
		internalFormStore.isValidating.value = internalFormStore.validators > 0;
	});
	return result;
}
/**
* Validates the form input if required based on the validation mode and form
* state. Determines whether to use initial validation mode, revalidation mode,
* or skip validation entirely.
*
* @param internalFormStore The form store to validate.
* @param internalFieldStore The field store that triggered validation.
* @param validationMode The validation mode that triggered this check.
*/
function validateIfRequired(internalFormStore, internalFieldStore, validationMode) {
	if (validationMode === (internalFormStore.validate === "initial" || (internalFormStore.validate === "submit" ? untrack(() => internalFormStore.isSubmitted.value) : untrack(() => /* @__PURE__ */ getFieldBool(internalFieldStore, "errors"))) ? internalFormStore.revalidate : internalFormStore.validate)) validateFormInput(internalFormStore);
}
/**
* Internal symbol constant.
*/
const INTERNAL = "~internal";

//#endregion
//#region ../../packages/methods/dist/index.react.js
/**
* Focuses the first input element of a field. This is useful for
* programmatically setting focus to a specific field, such as after
* validation errors or user interactions.
*
* @param form The form store containing the field.
* @param config The focus field configuration.
*/
function focus(form, config) {
	getFieldStore(form[INTERNAL], config.path).elements[0]?.focus();
}
/**
* Retrieves all error messages from all fields in the form by walking through
* the entire field store tree. This is useful for displaying a summary of all
* validation errors across the form.
*
* @param form The form store to retrieve errors from.
*
* @returns A non-empty array of error messages, or null if no errors exist.
*/
/* @__NO_SIDE_EFFECTS__ */
function getAllErrors(form) {
	let allErrors = null;
	walkFieldStore(form[INTERNAL], (internalFieldStore) => {
		const errors = internalFieldStore.errors.value;
		if (errors) if (allErrors) allErrors.push(...errors);
		else allErrors = [...errors];
	});
	return allErrors;
}
/* @__NO_SIDE_EFFECTS__ */
function getErrors(form, config) {
	return (config?.path ? getFieldStore(form[INTERNAL], config.path) : form[INTERNAL]).errors.value;
}
/* @__NO_SIDE_EFFECTS__ */
function getInput(form, config) {
	return getFieldInput(config?.path ? getFieldStore(form[INTERNAL], config.path) : form[INTERNAL]);
}
/* @__NO_SIDE_EFFECTS__ */
function handleSubmit$1(form, handler) {
	return async (event) => {
		event?.preventDefault();
		const internalFormStore = form[INTERNAL];
		internalFormStore.isSubmitted.value = true;
		internalFormStore.isSubmitting.value = true;
		try {
			const result = await validateFormInput(internalFormStore, { shouldFocus: true });
			if (result.success) await handler(result.output, event);
		} catch (error) {
			internalFormStore.errors.value = [error && typeof error === "object" && "message" in error && typeof error.message === "string" ? error.message : "An unknown error has occurred."];
		} finally {
			internalFormStore.isSubmitting.value = false;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function handleSubmit(form, handler) {
	return /* @__PURE__ */ handleSubmit$1(form, handler);
}
/**
* Inserts a new item into a field array at the specified index. All items at
* or after the insertion point are shifted up by one index.
*
* @param form The form store containing the field array.
* @param config The insert configuration specifying the path, index, and initial value.
*/
function insert(form, config) {
	const internalFormStore = form[INTERNAL];
	let internalFieldStore = internalFormStore;
	for (let index = 0; index < config.path.length; index++) {
		internalFieldStore = internalFieldStore.children[config.path[index]];
		if (index < config.path.length - 1) internalFieldStore.input.value = true;
	}
	const internalArrayStore = internalFieldStore;
	const items = untrack(() => internalArrayStore.items.value);
	const insertIndex = config.at === void 0 ? items.length : config.at;
	if (insertIndex >= 0 && insertIndex <= items.length) batch(() => {
		const newItems = [...items];
		newItems.splice(insertIndex, 0, createId());
		internalArrayStore.items.value = newItems;
		for (let index = items.length; index > insertIndex; index--) copyItemState(internalArrayStore.children[index - 1], internalArrayStore.children[index]);
		if (!internalArrayStore.children[insertIndex]) {
			const path = JSON.parse(internalArrayStore.name);
			internalArrayStore.children[insertIndex] = {};
			path.push(insertIndex);
			initializeFieldStore(internalArrayStore.children[insertIndex], internalArrayStore.schema.item, config.initialInput, path);
		} else resetItemState(internalArrayStore.children[insertIndex], config.initialInput);
		internalArrayStore.input.value = true;
		internalArrayStore.isTouched.value = true;
		internalArrayStore.isDirty.value = true;
		validateIfRequired(internalFormStore, internalArrayStore, "input");
	});
}
/**
* Moves an item from one index to another within a field array. All items
* between the source and destination indices are shifted accordingly.
*
* @param form The form store containing the field array.
* @param config The move configuration specifying the path and source/destination indices.
*/
function move(form, config) {
	const internalFormStore = form[INTERNAL];
	const internalArrayStore = getFieldStore(internalFormStore, config.path);
	const items = untrack(() => internalArrayStore.items.value);
	if (config.from >= 0 && config.from <= items.length - 1 && config.to >= 0 && config.to <= items.length - 1 && config.from !== config.to) batch(() => {
		const newItems = [...items];
		newItems.splice(config.to, 0, newItems.splice(config.from, 1)[0]);
		internalArrayStore.items.value = newItems;
		const tempInternalFieldStore = {};
		initializeFieldStore(tempInternalFieldStore, internalArrayStore.schema.item, void 0, []);
		copyItemState(internalArrayStore.children[config.from], tempInternalFieldStore);
		if (config.from < config.to) for (let index = config.from; index < config.to; index++) copyItemState(internalArrayStore.children[index + 1], internalArrayStore.children[index]);
		else for (let index = config.from; index > config.to; index--) copyItemState(internalArrayStore.children[index - 1], internalArrayStore.children[index]);
		copyItemState(tempInternalFieldStore, internalArrayStore.children[config.to]);
		internalArrayStore.isTouched.value = true;
		internalArrayStore.isDirty.value = internalArrayStore.startItems.value.join() !== newItems.join();
		validateIfRequired(internalFormStore, internalArrayStore, "input");
	});
}
/**
* Removes an item from a field array at the specified index. All items after
* the removed item are shifted down by one index.
*
* @param form The form store containing the field array.
* @param config The remove configuration specifying the path and index.
*/
function remove(form, config) {
	const internalFormStore = form[INTERNAL];
	const internalArrayStore = getFieldStore(internalFormStore, config.path);
	const items = untrack(() => internalArrayStore.items.value);
	if (config.at >= 0 && config.at <= items.length - 1) batch(() => {
		const newItems = [...items];
		newItems.splice(config.at, 1);
		internalArrayStore.items.value = newItems;
		for (let index = config.at; index < items.length - 1; index++) copyItemState(internalArrayStore.children[index + 1], internalArrayStore.children[index]);
		internalArrayStore.isTouched.value = true;
		internalArrayStore.isDirty.value = internalArrayStore.startItems.value.join() !== newItems.join();
		validateIfRequired(internalFormStore, internalArrayStore, "input");
	});
}
/**
* Replaces an item in a field array at the specified index with new initial input.
*
* @param form The form store containing the field array.
* @param config The replace configuration specifying the path, index, and initial input.
*/
function replace(form, config) {
	const internalFormStore = form[INTERNAL];
	const internalArrayStore = getFieldStore(internalFormStore, config.path);
	const items = untrack(() => internalArrayStore.items.value);
	if (config.at >= 0 && config.at <= items.length - 1) batch(() => {
		const newItems = [...items];
		newItems[config.at] = createId();
		internalArrayStore.items.value = newItems;
		resetItemState(internalArrayStore.children[config.at], config.initialInput);
		internalArrayStore.isTouched.value = true;
		internalArrayStore.isDirty.value = true;
		validateIfRequired(internalFormStore, internalArrayStore, "input");
	});
}
function reset(form, config) {
	batch(() => {
		untrack(() => {
			const internalFormStore = form[INTERNAL];
			const internalFieldStore = config?.path ? getFieldStore(internalFormStore, config.path) : internalFormStore;
			if (config?.initialInput) setInitialFieldInput(internalFieldStore, config.initialInput);
			walkFieldStore(internalFieldStore, (internalFieldStore$1) => {
				internalFieldStore$1.elements = internalFieldStore$1.initialElements;
				if (!config?.keepErrors) internalFieldStore$1.errors.value = null;
				if (!config?.keepTouched) internalFieldStore$1.isTouched.value = false;
				internalFieldStore$1.startInput.value = internalFieldStore$1.initialInput.value;
				if (!config?.keepInput) internalFieldStore$1.input.value = internalFieldStore$1.initialInput.value;
				if (internalFieldStore$1.kind === "array") {
					internalFieldStore$1.startItems.value = internalFieldStore$1.initialItems.value;
					if (!config?.keepInput || internalFieldStore$1.startItems.value.length === internalFieldStore$1.items.value.length) internalFieldStore$1.items.value = internalFieldStore$1.initialItems.value;
					internalFieldStore$1.isDirty.value = internalFieldStore$1.startInput.value !== internalFieldStore$1.input.value || internalFieldStore$1.startItems.value !== internalFieldStore$1.items.value;
				} else if (internalFieldStore$1.kind === "object") internalFieldStore$1.isDirty.value = internalFieldStore$1.startInput.value !== internalFieldStore$1.input.value;
				else {
					const startInput = internalFieldStore$1.startInput.value;
					const input = internalFieldStore$1.input.value;
					internalFieldStore$1.isDirty.value = startInput !== input && (startInput != null || input !== "" && !Number.isNaN(input));
					for (const element of internalFieldStore$1.elements) if (element.type === "file") element.value = "";
				}
			});
			if (!config?.path) {
				if (!config?.keepSubmitted) internalFormStore.isSubmitted.value = false;
				if (internalFormStore.validate === "initial") validateFormInput(internalFormStore);
			}
		});
	});
}
function setErrors(form, config) {
	(config.path ? getFieldStore(form[INTERNAL], config.path) : form[INTERNAL]).errors.value = config.errors;
}
function setInput(form, config) {
	batch(() => {
		const internalFormStore = form[INTERNAL];
		setFieldInput(internalFormStore, config.path ?? [], config.input);
		const fieldOrFormStore = config.path ? getFieldStore(internalFormStore, config.path) : internalFormStore;
		validateIfRequired(internalFormStore, fieldOrFormStore, "input");
		validateIfRequired(internalFormStore, fieldOrFormStore, "change");
	});
}
/**
* Programmatically requests form submission by calling the native
* `requestSubmit()` method on the underlying form element.
*
* @param form The form store to submit.
*/
function submit(form) {
	form[INTERNAL].element?.requestSubmit();
}
/**
* Swaps two items in a field array by exchanging their positions.
*
* @param form The form store containing the field array.
* @param config The swap configuration specifying the path and indices to swap.
*/
function swap(form, config) {
	const internalFormStore = form[INTERNAL];
	const internalArrayStore = getFieldStore(internalFormStore, config.path);
	const items = untrack(() => internalArrayStore.items.value);
	if (config.at >= 0 && config.at <= items.length - 1 && config.and >= 0 && config.and <= items.length - 1 && config.at !== config.and) batch(() => {
		const newItems = [...items];
		const tempItemId = newItems[config.at];
		newItems[config.at] = newItems[config.and];
		newItems[config.and] = tempItemId;
		internalArrayStore.items.value = newItems;
		swapItemState(internalArrayStore.children[config.at], internalArrayStore.children[config.and]);
		internalArrayStore.isTouched.value = true;
		internalArrayStore.isDirty.value = internalArrayStore.startItems.value.join() !== newItems.join();
		validateIfRequired(internalFormStore, internalArrayStore, "input");
	});
}
/**
* Validates the entire form input against its schema. Returns a safe parse result
* indicating success or failure with detailed issues. Optionally focuses the first
* field with validation errors.
*
* @param form The form store to validate.
* @param config The validate form configuration specifying focus behavior.
*
* @returns A promise resolving to the validation result.
*/
function validate(form, config) {
	return validateFormInput(form[INTERNAL], config);
}

//#endregion
//#region src/hooks/useSignals/useSignals.ts
/**
* Hook to enable reactive signals within a React component.
*/
function useSignals() {
	const [, forceUpdate] = useReducer((x) => x + 1, 0);
	const listener$1 = useMemo(() => [forceUpdate, /* @__PURE__ */ new Set()], []);
	const cleanSubscribers = useCallback(() => {
		for (const subscriber of listener$1[1]) subscriber.delete(listener$1);
	}, [listener$1]);
	cleanSubscribers();
	setListener(listener$1);
	useLayoutEffect(() => setListener(void 0));
	const timeout = useRef(null);
	useEffect(() => {
		if (timeout.current) {
			clearTimeout(timeout.current);
			timeout.current = null;
		}
		return () => {
			timeout.current = setTimeout(cleanSubscribers);
		};
	}, [cleanSubscribers]);
}

//#endregion
//#region src/hooks/useField/useField.ts
/* @__NO_SIDE_EFFECTS__ */
function useField(form, config) {
	useSignals();
	const internalFormStore = form[INTERNAL];
	const internalFieldStore = getFieldStore(internalFormStore, config.path);
	useEffect(() => {
		return () => {
			internalFieldStore.elements = internalFieldStore.elements.filter((element) => element.isConnected);
		};
	}, [internalFieldStore]);
	return useMemo(() => ({
		path: config.path,
		get input() {
			return getFieldInput(internalFieldStore);
		},
		get errors() {
			return internalFieldStore.errors.value;
		},
		get isTouched() {
			return getFieldBool(internalFieldStore, "isTouched");
		},
		get isDirty() {
			return getFieldBool(internalFieldStore, "isDirty");
		},
		get isValid() {
			return !getFieldBool(internalFieldStore, "errors");
		},
		onChange(value) {
			setFieldInput(internalFormStore, config.path, value);
			validateIfRequired(internalFormStore, internalFieldStore, "input");
			validateIfRequired(internalFormStore, internalFieldStore, "change");
		},
		props: {
			name: internalFieldStore.name,
			autoFocus: !!internalFieldStore.errors.value,
			ref(element) {
				if (element) internalFieldStore.elements.push(element);
			},
			onFocus() {
				setFieldBool(internalFieldStore, "isTouched", true);
				validateIfRequired(internalFormStore, internalFieldStore, "touch");
			},
			onChange(event) {
				setFieldInput(internalFormStore, config.path, getElementInput(event.currentTarget, internalFieldStore));
				validateIfRequired(internalFormStore, internalFieldStore, "input");
				validateIfRequired(internalFormStore, internalFieldStore, "change");
			},
			onBlur() {
				validateIfRequired(internalFormStore, internalFieldStore, "blur");
			}
		}
	}), [internalFormStore, internalFieldStore]);
}

//#endregion
//#region src/hooks/useFieldArray/useFieldArray.ts
/* @__NO_SIDE_EFFECTS__ */
function useFieldArray(form, config) {
	useSignals();
	const internalFormStore = form[INTERNAL];
	const internalFieldStore = getFieldStore(internalFormStore, config.path);
	return useMemo(() => ({
		path: config.path,
		get items() {
			return internalFieldStore.items.value;
		},
		get errors() {
			return internalFieldStore.errors.value;
		},
		get isTouched() {
			return getFieldBool(internalFieldStore, "isTouched");
		},
		get isDirty() {
			return getFieldBool(internalFieldStore, "isDirty");
		},
		get isValid() {
			return !getFieldBool(internalFieldStore, "errors");
		}
	}), [internalFormStore, internalFieldStore]);
}

//#endregion
//#region src/hooks/useForm/useForm.ts
/* @__NO_SIDE_EFFECTS__ */
function useForm(config) {
	useSignals();
	const internalFormStore = useMemo(() => createFormStore(config, (input) => v.safeParseAsync(config.schema, input)), []);
	useLayoutEffect(() => {
		if (config.validate === "initial") validateFormInput(internalFormStore);
	}, []);
	return useMemo(() => ({
		[INTERNAL]: internalFormStore,
		get isSubmitting() {
			return internalFormStore.isSubmitting.value;
		},
		get isSubmitted() {
			return internalFormStore.isSubmitted.value;
		},
		get isValidating() {
			return internalFormStore.isValidating.value;
		},
		get isTouched() {
			return getFieldBool(internalFormStore, "isTouched");
		},
		get isDirty() {
			return getFieldBool(internalFormStore, "isDirty");
		},
		get isValid() {
			return !getFieldBool(internalFormStore, "errors");
		},
		get errors() {
			return internalFormStore.errors.value;
		}
	}), [internalFormStore]);
}

//#endregion
//#region src/components/Field/Field.tsx
/**
* Headless form field component that provides reactive properties and state.
* The field component takes a form store, path to field, and a render function
* that receives a field store to display field state and handle user interactions.
*
* @param props The field component props.
*
* @returns The UI of the field to be rendered.
*/
/* @__NO_SIDE_EFFECTS__ */
function Field({ of, path, children }) {
	return children(/* @__PURE__ */ useField(of, { path }));
}

//#endregion
//#region src/components/FieldArray/FieldArray.tsx
/**
* Headless field array component that provides reactive properties and state.
* The field array component takes a form store, path to array field, and a render
* function that receives a field array store to manage array items and handle
* array operations.
*
* @param props The field array component props.
*
* @returns The UI of the field array to be rendered.
*/
/* @__NO_SIDE_EFFECTS__ */
function FieldArray({ of, path, children }) {
	return children(/* @__PURE__ */ useFieldArray(of, { path }));
}

//#endregion
//#region src/components/Form/Form.tsx
/* @__NO_SIDE_EFFECTS__ */
function Form({ of, onSubmit, ...other }) {
	return /* @__PURE__ */ jsx("form", {
		...other,
		noValidate: true,
		ref: (element) => {
			if (element) of[INTERNAL].element = element;
		},
		onSubmit: handleSubmit(of, onSubmit)
	});
}

//#endregion
export { Field, FieldArray, Form, focus, getAllErrors, getErrors, getInput, handleSubmit, insert, move, remove, replace, reset, setErrors, setInput, submit, swap, useField, useFieldArray, useForm, validate };