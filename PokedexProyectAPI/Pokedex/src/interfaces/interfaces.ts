export interface IPokemons {
    count: number;
    next: string;
    previous?: string | null;
    results: IResult[];
  }
  
  export interface IResult {
    name: string;
    url: string;
  }
  
  export interface IPokemon {
    abilities: Ability[];
    base_experience: number;
    forms: Form[];
    game_indices: GameIndice[];
    height: number;
    held_items: undefined[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_types: undefined[];
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
  }
  
  export interface Ability2 {
    name: string;
    url: string;
  }
  
  export interface Ability {
    ability: Ability2;
    is_hidden: boolean;
    slot: number;
  }
  
  export interface Form {
    name: string;
    url: string;
  }
  
  export interface Version {
    name: string;
    url: string;
  }
  
  export interface GameIndice {
    game_index: number;
    version: Version;
  }
  
  export interface Move2 {
    name: string;
    url: string;
  }
  
  export interface MoveLearnMethod {
    name: string;
    url: string;
  }
  
  export interface VersionGroup {
    name: string;
    url: string;
  }
  
  export interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: MoveLearnMethod;
    version_group: VersionGroup;
  }
  
  export interface Move {
    move: Move2;
    version_group_details: VersionGroupDetail[];
  }
  
  export interface Species {
    name: string;
    url: string;
  }
  
  export interface DreamWorld {
    front_default: string;
    front_female?: string | null;

  }
  
  export interface Home {
    front_default: string;
    front_female?: string | null;
    front_shiny: string;
    front_shiny_female?: string | null;
  }
  
  export interface OfficialArtwork {
    front_default: string;
  }
  
  export interface Other {
    dream_world: DreamWorld;
    home: Home;
    "official-artwork": OfficialArtwork;
  }
  
  export interface RedBlue {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
  }
  
  export interface Yellow {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
  }
  
  export interface GenerationI {
    "red-blue": RedBlue;
    yellow: Yellow;
  }
  
  export interface Crystal {
    back_default: string;
    back_shiny: string;
    back_shiny_transparent: string;
    back_transparent: string;
    front_default: string;
    front_shiny: string;
    front_shiny_transparent: string;
    front_transparent: string;
  }
  
  export interface Gold {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    front_transparent: string;
  }
  
  export interface Silver {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    front_transparent: string;
  }
  
  export interface GenerationIi {
    crystal: Crystal;
    gold: Gold;
    silver: Silver;
  }
  
  export interface Emerald {
    front_default: string;
    front_shiny: string;
  }
  
  export interface FireredLeafgreen {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  }
  
  export interface RubySapphire {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  }
  
  export interface GenerationIii {
    emerald: Emerald;
    "firered-leafgreen": FireredLeafgreen;
    "ruby-sapphire": RubySapphire;
  }
  
  export interface DiamondPearl {
    back_default: string;
    back_female?: undefined;
    back_shiny: string;
    back_shiny_female?: undefined;
    front_default: string;
    front_female?: undefined;
    front_shiny: string;
    front_shiny_female?: undefined;
  }
  
  export interface HeartgoldSoulsilver {
    back_default: string;
    back_female?: undefined;
    back_shiny: string;
    back_shiny_female?: undefined;
    front_default: string;
    front_female?: undefined;
    front_shiny: string;
    front_shiny_female?: undefined;
  }
  
  export interface Platinum {
    back_default: string;
    back_female?: undefined;
    back_shiny: string;
    back_shiny_female?: undefined;
    front_default: string;
    front_female?: undefined;
    front_shiny: string;
    front_shiny_female?: undefined;
  }
  
  export interface GenerationIv {
    "diamond-pearl": DiamondPearl;
    "heartgold-soulsilver": HeartgoldSoulsilver;
    platinum: Platinum;
  }
  
  export interface Animated {
    back_default: string;
    back_female?: undefined;
    back_shiny: string;
    back_shiny_female?: undefined;
    front_default: string;
    front_female?: undefined;
    front_shiny: string;
    front_shiny_female?: undefined;
  }
  
  export interface BlackWhite {
    animated: Animated;
    back_default: string;
    back_female?: undefined;
    back_shiny: string;
    back_shiny_female?: undefined;
    front_default: string;
    front_female?: undefined;
    front_shiny: string;
    front_shiny_female?:undefined;
  }
  
  export interface GenerationV {
    "black-white": BlackWhite;
  }
  
  export interface OmegarubyAlphasapphire {
    front_default: string;
    front_female?: undefined;
    front_shiny: string;
    front_shiny_female?:undefined;
  }
  
  export interface XY {
    front_default: string;
    front_female?: undefined;
    front_shiny: string;
    front_shiny_female?: undefined;
  }
  
  export interface GenerationVi {
    "omegaruby-alphasapphire": OmegarubyAlphasapphire;
    "x-y": XY;
  }
  
  export interface Icons {
    front_default: string;
    front_female?: undefined;
  }
  
  export interface UltraSunUltraMoon {
    front_default: string;
    front_female?: undefined;
    front_shiny: string;
    front_shiny_female?: undefined;
  }
  
  export interface GenerationVii {
    icons: Icons;
    "ultra-sun-ultra-moon": UltraSunUltraMoon;
  }
  
  export interface Icons2 {
    front_default: string;
    front_female?: undefined;
  }
  
  export interface GenerationViii {
    icons: Icons2;
  }
  
  export interface Versions {
    "generation-i": GenerationI;
    "generation-ii": GenerationIi;
    "generation-iii": GenerationIii;
    "generation-iv": GenerationIv;
    "generation-v": GenerationV;
    "generation-vi": GenerationVi;
    "generation-vii": GenerationVii;
    "generation-viii": GenerationViii;
  }
  
  export interface Sprites {
    back_default: string;
    back_female?: undefined;
    back_shiny: string;
    back_shiny_female?: undefined;
    front_default: string;
    front_female?: undefined;
    front_shiny: string;
    front_shiny_female?: undefined;
    other: Other;
    versions: Versions;
  }
  
  export interface Stat2 {
    name: string;
    url: string;
  }
  
  export interface Stat {
    base_stat: number;
    effort: number;
    stat: Stat2;
  }
  
  export interface Type2 {
    name: string;
    url: string;
  }
  
  export interface Type {
    slot: number;
    type: Type2;
  }