
## export 和 export default
### export可以有多个，export default只能有一个

```js
// model.js
export const a = 1
export const b = 2
export const c = 3
export default 'Hello World'

// index.js
import Model, { a, b, c as m_c } from './model.js' 
// Model为默认导出
console.log('Model', Model) 
// output: Hello World

console.log('a', a) // output: 1
console.log('b', b) // output: 2
console.log('m_c', m_c) // output: 3
```

### (了解)模块中通过export导出的(属性或者方法)可以修改，但是通过export default导出的不可以修改
```js
// model.js
let e1 = 'export 1'
let e2 = 'export 2'
export default e1
export { e2 }
e1 = 'export 1 modified'
e2 = 'export 2 modified'

// index.js
import e1, { e2 } from './model.js'
console.log('e1', e1)
// output: export 1
console.log('e2', e2)
// output: export 2 modified
```

## import 和 import()
import为静态声明，只能声明于模块顶部。通过静态分析，可以实现tree-shaking。

import()为动态导入。可以用于非主流程模块的懒加载，例如路由。
