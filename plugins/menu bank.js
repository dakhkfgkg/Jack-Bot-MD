let handler = async (m, { conn, command, text }) => {
let love = `
*✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥*
【..≼قــســم الــبـنــك≽..】
*⋄━───═◞⬪⋇⬪◟═───━⋄*
❐..💎╎❯ .البنك⌉
❐..💎╎❯ .راتب⌉
❐..💎╎❯ .شراء⌉
❐..💎╎❯ .هجوم⌉
❐..💎╎❯ .تحويل⌉
❐..💎╎❯ .يومي⌉
❐..💎╎❯ .الماس⌉
❐..💎╎❯ .ترتيب⌉
❐..💎╎❯ .ايدي⌉
❐..💎╎❯ .لفل⌉
❐..💎╎❯ .تسجيل⌉
❐..💎╎❯ .الغاء_التسجيل⌉
*✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = [ 'love' ]
handler.tags = [ 'fun' ]
handler.command = /^(البنك)$/i
export default handler