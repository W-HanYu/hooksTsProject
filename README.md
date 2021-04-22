# React17 + React Hook + TS4
## 创建TS项目
npx create-react-app [name] --template typescript

## 运行项目
npm start

## 配置git commit提交规范

是否符合规范，如果不符合则不允许提交

1、[安装Prettier](https://prettier.io/docs/en/install.html)
-  `npm install --save-dev --save-exact prettier`
  
-  然后，创建一个空的配置文件，以使编辑器和其他工具知道您正在使用Prettier：`echo {}> .prettierrc.json`
  
-  接下来，创建一个.prettierignore文件，让Prettier CLI和编辑器知道哪些文件不格式化。这是一个例子：
  
   ```js
   # Ignore artifacts:
    build
    coverage
    ```
2、[Pre-commit Hook](https://prettier.io/docs/en/precommit.html)

当您想与Prettier一起使用其他代码质量工具（例如ESLint，Stylelint等）或需要支持部分暂存文件（git add --patch）时很有用。

devDependencies在继续操作之前，请确保已安装Prettier并在其中。
```js
npx mrm lint-staged
```
这将安装husky和lint-staged，然后在项目的配置中添加一个配置，该配置package.json将在预提交挂钩中自动格式化支持的文件。

pageage.json配置
```js
"lint-staged": {
    "*.{js,css,md,ts,tsx}": "prettier --write"
  }
```
3、[安装eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

- `npm install --save-dev eslint-config-prettier`

- pageage.json配置
  
  ```js
  "eslintConfig": {
      "extends": [
        "react-app",
        "react-app/jest",
        "prettier" // 增加prettier，覆盖之前一部分规则
      ]
    },
  ```

4、[安装commitlint](https://github.com/conventional-changelog/commitlint)

- `npm install --save-dev @commitlint/{cli,config-conventional}`

- 控制台运行 `echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js`

- 