let handler = async (m, { conn, command, text }) => {

let love = `

*✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥*

【..≼قــســم التحويلات≽..】
*⋄━───═◞⬪⋇⬪◟═───━⋄*
❏..♻️╎❯ .ملصق⌉
❏..♻️╎❯ .حقوق⌉
❏..♻️╎❯ .لصورة⌉
❏..♻️╎❯ .لفيديو⌉
❏..♻️╎❯ .دائري⌉
❏..♻️╎❯ .دمج⌉
❏..♻️╎❯ .لرابط⌉
❏..♻️╎❯ .لصوت⌉
❏..♻️╎❯ .لريك⌉
❏..♻️╎❯ .تيلجرام⌉
❏..♻️╎❯ .حيوان⌉
❏..♻️╎❯ .قط⌉
❏..♻️╎❯ .كلب⌉
❏..♻️╎❯ .ستك⌉
❏..♻️╎❯ .لملف⌉
❏..♻️╎❯ .نرد⌉
❏..♻️╎❯ .لانمي⌉
❏..♻️╎❯ .ارسم⌉
*✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥*

 `.trim()

m.reply(love, null, { mentions: conn.parseMention(love) })}

handler.help = [ 'love' ]

handler.tags = [ 'fun' ]

handler.command = /^(التحويلات)$/i

export default handler