// export const isFalsy = (value) => value === 0 ? true : !!value
export const isFalsy = (value) => value === 0 ? false : !value

export const cleanObject = (object) => {
  // 在函数里，改变传入的对象本身是不好的 object.name = 123
  const result = { ...object }
  Object.keys(result).forEach(key => {
    const value = result[key]
    if (isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}