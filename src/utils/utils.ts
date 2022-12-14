import { useEffect, useState } from 'react'

// export const isFalsy = (value) => value === 0 ? true : !!value
// eslint-disable-next-line no-undef
export const isFalsy = (value: unknown) => value === 0 ? false : !value
// unknown 类似any， 但是比any更严格
// isFalsy(1)
// isFalsy({})
// isFalsy([])
export const cleanObject = (object: any) => {
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

export const useMount = (callBack: () => void) => {
  useEffect(() => {
    callBack()
  }, [])
}

export const useDebounce = <V> (value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 每次在value变化以后，设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay)
    // 每次在上一个useEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
}

export const useArray = <T> (initialArray: T[]) => {
  const [value, setValue] = useState(initialArray)
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value]
      copy.splice(index, 1)
      setValue(copy)
    }
  }
}

