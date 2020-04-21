import { useState, useEffect } from "react";
import httpClient from '../../http/httpClient';

function usePlayingArtistMenu() {
  const [menu, setMenu] = useState([]);

  async function getMenu() {
    const result = await httpClient.get("/artistMenu");
    setMenu(result.data);
  }

  useEffect(() => {
    getMenu();
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
  }

  return {
    menu,
    selectedItem,
  };
}

export { usePlayingArtistMenu };