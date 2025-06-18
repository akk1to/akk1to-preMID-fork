import { ActivityType, Assets, getTimestamps } from 'premid'

const presence = new Presence({
  clientId: '1384799830412628029',
})

const startTimestamp = Math.floor(Date.now() / 1000)

enum ActivityAssets { // Other default assets can be found at index.d.ts
  Logo = 'https://cdn.imgchest.com/files/739cxmrv3w7.png',
}

presence.on('UpdateData', async () => {
  const { pathname } = document.location

  const presenceData: PresenceData = {
    largeImageKey: ActivityAssets.Logo,
    startTimestamp,
  }

  switch (true) {
    case pathname.startsWith('/login'):
      presenceData.details = 'Đang đăng nhập vào hệ thống'
      presenceData.state = 'AsakaCloud - Một giải pháp của ZynData'
      presenceData.buttons = [{ label: 'AsakaCloud', url: 'https://id.asakacloud.vn' }, { label: 'Tham gia cộng đồng AsakaCloud', url: 'https://discord.gg/asakacloud'}]
      break
    case pathname.startsWith('/store/student'):
      presenceData.details = 'Đang mua thêm máy chủ - Free Minecraft Hosting'
      presenceData.state = ' 2x Intel Xeon E5 2690v2 / AMD EPYC 7313 & 4GB RAM miễn phí!'
      presenceData.buttons = [{ label: 'AsakaCloud', url: 'https://id.asakacloud.vn' }, { label: 'Mua máy chủ Free', url: 'https://id.asakacloud.vn/store/student' }]
      break
    case pathname.startsWith('/store/basic-minecraft-hosting'):
      presenceData.details = 'Đang mua thêm máy chủ - Basic Minecraft Hosting'
      presenceData.state = '2x Intel® Xeon® E5 2680v4/2686v4 & 3GB RAM chỉ với 25.000VND/tháng'
      presenceData.buttons = [{ label: 'AsakaCloud', url: 'https://id.asakacloud.vn' }, { label: 'Mua máy chủ Basic', url: 'https://id.asakacloud.vn/store/basic-minecraft-hosting' }]
      break
    case pathname.startsWith('/store/Performance-Minecraft-Hosting'):
      presenceData.details = 'Đang mua thêm máy chủ - Perfomance Minecraft Hosting'
      presenceData.state = '1x Intel® Xeon® Gold 6144/6148 & 4GB RAM chỉ với 75.000VND/tháng'
      presenceData.buttons = [{ label: 'AsakaCloud', url: 'https://id.asakacloud.vn' }, { label: 'Mua máy chủ Perfomance', url: 'https://id.asakacloud.vn/store/Performance-Minecraft-Hosting' }]
      break
    case pathname.startsWith('/store/balanced-minecraft-hosting'):
      presenceData.details = 'Đang mua thêm máy chủ - Balanced Minecraft Hosting'
      presenceData.state = '2x Intel® Xeon® Gold 6150 & 2GB RAM chỉ với 60.000VND/tháng'
      presenceData.buttons = [{ label: 'AsakaCloud', url: 'https://id.asakacloud.vn' }, { label: 'Mua máy chủ Balanced', url: 'https://id.asakacloud.vn/store/balanced-minecraft-hosting' }]
      break
    case pathname.startsWith('/store/ryzen-minecraft-hosting'):
      presenceData.details = 'Đang mua thêm máy chủ - Ryzen Minecraft Hosting'
      presenceData.state = '2x AMD Ryzen 9 9900x & 8GB RAM chỉ với 370.000VND/tháng'
      presenceData.buttons = [{ label: 'AsakaCloud', url: 'https://id.asakacloud.vn' }, { label: 'Mua máy chủ Ryzen', url: 'https://id.asakacloud.vn/store/ryzen-minecraft-hosting' }]
      break
    case pathname.startsWith('/store/gold-minecraft-hosting'):
      presenceData.details = 'Đang mua thêm máy chủ - Gold Minecraft Hosting'
      presenceData.state = '2x Intel® Xeon® Gold 6138 & 2GB RAM chỉ với 55.000VND/tháng'
      presenceData.buttons = [{ label: 'AsakaCloud', url: 'https://id.asakacloud.vn' }, { label: 'Mua máy chủ Gold', url: 'https://id.asakacloud.vn/store/gold-minecraft-hosting' }]
      break
    default:
      presenceData.details = 'Trang chủ AsakaCloud'
      presenceData.state = 'AsakaCloud - Một giải pháp của ZynData'
      presenceData.buttons = [{ label: 'AsakaCloud', url: 'https://id.asakacloud.vn' }, { label: 'Tham gia cộng đồng AsakaCloud', url: 'https://discord.gg/asakacloud'}]
      break
  }
  if (presenceData.details) {
    presence.setActivity(presenceData)  
  } else {
    presence.clearActivity()
  }
})
