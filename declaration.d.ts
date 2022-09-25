// This file is to declare to Typescript that the scss files are modules and can be imported without a type error
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}