/* @flow */
// nodeOps 是一些真实的 dom 操作的封装，比如 insertBefore、removeChild、 appendChild 等等原生 dom api
import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
// baseModules 为 ref 和 一些 vue 自带指令的方法集合
import baseModules from 'core/vdom/modules/index'
// platformModules 用来处理 classname、attributes 等 type 的方法集合
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

export const patch: Function = createPatchFunction({ nodeOps, modules })
