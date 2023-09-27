export const HasProperty = (obj: NonNullable<Object>, property: NonNullable<any>) => {
    return Object.hasOwn(obj, property)
}