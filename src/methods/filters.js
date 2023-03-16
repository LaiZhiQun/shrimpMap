export function currency (num) {
  const n = parseInt(num, 10) // 10進位
  // 四捨五入到小數點後 0 位；每3位數加一個逗號
  return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`
}

export function date (time) {
  const localDate = new Date(time * 1000) // 以毫秒為單位的時間戳
  return localDate.toLocaleDateString() // 將日期格式轉換為字串
}
