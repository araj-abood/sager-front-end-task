export interface IFeature {
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: {
    type: "FeatureCollection";
    name: string;
    altitude: number;
    organization: string;
    pilot: string;
    registration: string;
    serial: string;
    yaw: number;
  };
}
export interface IDroneDataFromWebsocket {
  type: string;
  features: IFeature[];
}
