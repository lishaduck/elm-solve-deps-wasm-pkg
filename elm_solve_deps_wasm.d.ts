/* tslint:disable */
/* eslint-disable */
/**
* Initialize the panic hook for more meaningful errors in case of panics,
* and also initialize the logger for the wasm code.
*
* # Panics
*
* Will panic if the logger cannot be initialized.
*/
export function init(): void;
/**
* Solve dependencies for the provided `elm.json`.
*
* Include also test dependencies if `use_test` is `true`.
* It is possible to add additional constraints.
* The caller is responsible to provide implementations to be able to fetch the `elm.json` of
* dependencies, as well as to list existing versions (in preferred order) for a given package.
*
* # Errors
*
* If there is a PubGrub error, it will be reported.
*
* # Panics
*
* If the `elm.json` cannot be decoded, it will panic.
* @param {string} project_elm_json_str
* @param {boolean} use_test
* @param {any} additional_constraints_str
* @param {Function} js_fetch_elm_json
* @param {Function} js_list_available_versions
* @returns {any}
*/
export function solve_deps(project_elm_json_str: string, use_test: boolean, additional_constraints_str: any, js_fetch_elm_json: Function, js_list_available_versions: Function): any;
