import { executeJxa } from "./jxa"

export async function getCurrentSafariUrlAndTitle() {
  const currentTabInfo = await executeJxa(`
      const safari = Application("Safari");
      const currentTab = safari.windows[0].currentTab();
      return {
          title: currentTab.name(),
          url: currentTab.url()
      };
     `)
  return currentTabInfo
}

export async function getCurrentSafariTechPreviewUrlAndTitle() {
  const currentTabInfo = await executeJxa(`
      const safari = Application("Safari Technology Preview");
      const currentTab = safari.windows[0].currentTab();
      return {
          title: currentTab.name(),
          url: currentTab.url()
      };
     `)
  return currentTabInfo
}
