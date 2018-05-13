export interface User {
  about: string;
  avatar: string;
  created_at: string;
  key: string;
  username: string;
}

export interface Geometry {
  type: string;
  coordinates: [number, number];
}

export interface Coordinate {
  cas: number[];
  image_keys: string[];
}

export interface Feature {
  type: string;
  geometry: Geometry;
  properties: {
    camera_make: string;
    captured_at: string;
    created_at: string;
    key: string;
    pano: boolean;
    user_key: string;
    username: string;
    camera_model?: string;
    starred?: boolean;
    coordinateProperties?: Coordinate;
  };
}

export interface ExtendedFeature extends Feature {
  imageKey?: string;
  src?: {
    thumb320?: string,
    thumb640?: string,
    thumb1024?: string,
    thumb2048?: string
  };
  user?: User;
  saved?: boolean;
}

export interface FeatureCollection {
  features: Feature[] | ExtendedFeature[];
}
