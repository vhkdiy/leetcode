let TwoSum = (array, sum) => {
    let hashMap = {}
    let results = []

    for (let i = 0; i < array.length; i++) {
        if (hashMap[array[i]]) {
            results.push([hashMap[array[i]], array[i]])
        } else {
            hashMap[sum - array[i]] = array[i]
        }
    }
    return results
}