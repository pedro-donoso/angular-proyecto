export interface Hero{
  id: number;
  name: string;
  image: string;
  soul: 'good' | 'bad';
  powerstats: PowerStats;
}

export interface PowerStats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

export type PowerStat = keyof PowerStats
