export interface IFeature {
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: {
    type: "FeatureCollection";
    Name: string;
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
