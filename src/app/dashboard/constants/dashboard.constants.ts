export class APINAME {
  // user profile
  public static get GET_ALL_DEVICE_COUNT(): string { return '/sys/dashboard/deviceCount' }
  public static get GET_DEVICE(): string { return '/sys/device' }
  public static get PUMP_OPERATION(): string { return '/sys/manage/pump/operation' }
  public static get GET_TOTALIZER(): string { return '/sys/dashboard/stats' }
  public static get SEND_GRAPH_EMAIL(): string { return '/sys/dashboard/stats' }
}