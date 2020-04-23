import { useState, useEffect } from "react";
import httpClient from '../../http/httpClient';

function usePlayingArtistMenu({ saveMainPlayerMenu }) {
  const [menu, setMenu] = useState([]);

  async function getMenu() {
    const result = await httpClient.get("/artistMenu");
    saveMainPlayerMenu(result.data.find(m => m.name === 'overview'));
    setMenu(result.data);
  }

  useEffect(() => {
    getMenu();
    selectedItem('overview')
  }, []);

  function selectedItem(menuText) {
    const copyMenu = [...menu];
    for (const item of copyMenu) {
      item.isSelected = false;
      if (menuText === item.name) {
        item.isSelected = true;
      }
    }
    setMenu(copyMenu);
    saveMainPlayerMenu(copyMenu.find(m => m.isSelected));
  }

  return {
    menu,
    selectedItem,
  };
}

export { usePlayingArtistMenu };