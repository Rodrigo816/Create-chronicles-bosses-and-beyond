PlayerEvents.loggedIn((event) => {
  const { server } = event;
  server.schedule(40000, (c) => {
    server.tell('§cWarning: The Drawers mod and Iron Chest mod will be removed on July 23. Please transfer your items to the new Sophisticated Storage system. Items left in drawers or iron chests will be lost.');
  });
});