// 1. 获取字符（超级高频）
// 方法                作用                                示例                            推荐度
// length              获取字符串长度（属性，不是方法）    'hello'.length → 5              ★★★★★ 必备
// charAt(index)       返回指定位置的字符                  'hello'.charAt(1) → 'e'         老方法，较少用
// at(index)           返回指定位置字符，支持负索引        'hello'.at(-1) → 'o'            ★★★★ 现代推荐
// [index]             方括号访问字符（最常用）            'hello'[1] → 'e'                ★★★★★ 最常用

// 2. 查找 & 判断位置（超级高频）
// 方法                作用                                示例                                                推荐度  
// indexOf(str, from)  查找子串第一次出现的位置            'hello world'.indexOf('o') → 4  索引或 - 1          ★★★★★
// lastIndexOf(str)    查找子串最后一次出现的位置          'hello hello'.lastIndexOf('hello') → 6索引或 - 1    ★★★★
// includes(str)       是否包含子串（ES6）                 'hello'.includes('ell') → trueboolean               ★★★★★
// startsWith(str)     是否以某字符串开头（ES6）           'https://'.startsWith('http') → trueboolean         ★★★★
// endsWith(str)       是否以某字符串结尾（ES6）           'image.png'.endsWith('.png') → trueboolean          ★★★★

// 3. 提取子串（超级高频）
// 方法                    作用                                示例                                                推荐度  
// slice(start, end)       提取子串，支持负索引                'hello world'.slice(0, 5) → 'hello'                 ★★★★★
// substring(start, end)   提取子串，不支持负索引              'hello world'.substring(0, 5) → 'hello'             ★★★★
// substr(start, length)   提取子串，已废弃（不推荐）         'hello world'.substr(0, 5) → 'hello'                 不推荐

// 4. 修改字符串（超级高频）
// 方法                    作用                                示例                                                推荐度  
// toUpperCase()           转为大写                            'hello'.toUpperCase() → 'HELLO'                     ★★★★★
// toLowerCase()           转为小写                            'WORLD'.toLowerCase() → 'world'                     ★★★★★
// trim()                  去除两端空白                        '  hello  '.trim() → 'hello'                       ★★★★★
// replace(search, replace) 替换子串，支持正则表达式            'hello world'.replace('world', 'JS') → 'hello JS'   ★★★★★ 
// replaceAll(search, replace) 替换所有匹配项（ES2021）         'hello world'.replaceAll('o', '0') → 'hell0 w0rld' ★★★★

// 5. 分割 & 连接（超级高频）
// 方法                    作用                                示例                                                推荐度  
// split(separator)         分割字符串为数组                    'a,b,c'.split(',') → ['a', 'b', 'c']              ★★★★★
// join(separator)          连接数组为字符串                    ['a', 'b', 'c'].join('-') → 'a-b-c'              ★★★★★

// 6. 模板字符串（超级高频）
// 语法                    作用                                示例                                                         推荐度  
// `...${expr}...`          内嵌表达式的字符串模板              const name = 'Alice'; `Hello, ${name}!` → 'Hello, Alice!' ★★★★★

// 7. 其他常用方法
// 方法                                作用                                示例                                     推荐度  
// repeat(count)                     重复字符串指定次数                   'ha'.repeat(3) → 'hahaha'                    ★★★★
// padStart(targetLength, padString) 在字符串前面填充字符直到达到指定长度 '5'.padStart(3, '0') → '005'                 ★★★★
// padEnd(targetLength, padString)   在字符串后面填充字符直到达到指定长度 '5'.padEnd(3, '0') → '500'                   ★★★★