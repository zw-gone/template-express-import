● 在 Node.js 中，为了兼容 CommonJS 规范，使用 require 时可以省略文件后缀，因为 Node.js 会自动添加 .js、.json 或 .node 后缀查找文件。
● 在 ES6 的 import 语法中，文件后缀是必须的，因为 ES6 模块不仅可以导入 JavaScript 模块，还可以导入 JSON、CSS、图片等非 JavaScript 模块，因此必须明确指定文件后缀，以避免不必要的错误。
● 在vue-ts项目中，后缀也是可以省略的。
vs code自动导入时是省略后缀的，所以epxress-js项目中继续使用require，express-ts项目中可以使用import（暂未测试是否可行）。
