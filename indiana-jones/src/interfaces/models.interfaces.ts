export interface Character {
  id: number;
  name: string;
  role: string;
  description?: string;
  cost: number;
  sceneId: number;
  scene?: Scene;
}

export interface Scene {
  id: number;
  title: string;
  description: string;
  location:string;
  minutes: number;
  filmId: number;
  film?: Film;
}

export interface Film {
  id: number;
  title: string;
  director: string;
  date: string; 
  duration: number;
}
