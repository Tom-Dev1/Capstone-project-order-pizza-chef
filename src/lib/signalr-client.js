import * as signalR from "@microsoft/signalr";

export const connection = new signalR.HubConnectionBuilder()
  .withUrl("https://vietsac.id.vn/notificationHub", {
    accessTokenFactory: () => sessionStorage.getItem("token") ?? "",
  })
  .withAutomaticReconnect()
  .build();
