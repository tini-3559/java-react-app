
1. Counting frequency:
 for (const char of str) {
      freq[char] = (freq[char] || 0) + 1;
    }

2.Group Anagrams.

const map: Map<string, string[]> = new Map(); //important see map structure in typescript
    let arr:string[]=[];
    for (let str of strs)
    {
      let key=str.split("").sort().join("") 
        if (!map.has(key)) {
           map.set(key,[])
        }
        map.get(key).push(str)
        
    }
    return Array.from(map.values());

    //here we are not using new array
    