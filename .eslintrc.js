module.exports = {
 "parser": "@typescript-eslint/parser",
 "plugins": [
   "@typescript-eslint",
   "react",
   "react-hooks",
   "prettier"
 ],
 "env": {
   "browser": true
 },
 "extends": [
   "plugin:@typescript-eslint/recommended",
   "plugin:react/recommended",
   "plugin:prettier/recommended"
 ],
 "parserOptions": {
   "project": [
     "tsconfig.json"
   ],
   "ecmaVersion": 2020,
   "sourceType": "module",
   "ecmaFeatures": {
     "jsx": true
   }
 },
 "rules": {
   "@typescript-eslint/explicit-function-return-type": "off",
   "@typescript-eslint/no-unused-vars": "warn",
   "react/jsx-filename-extension": [
     "warn",
     {
       "extensions": [
         ".jsx",
         ".tsx"
       ]
     }
   ],
   "react/prop-types": "off",
   "react-hooks/rules-of-hooks": "error",
   "react-hooks/exhaustive-deps": "warn"
 },
 "settings": {
   "react": {
     "version": "detect"
   }
 }
}