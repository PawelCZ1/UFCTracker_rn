export class Fighter {
  id: string;
  firstName: string;
  lastName: string;
  nickname: string;
  category: string;
  placeOfBirth?: string | null;
  age: number;
  height: number;
  weight: number;
  wins: number;
  losses: number;
  draws: number;
  imageUrl: string;
  trainsAt?: string | null;
  fightingStyle?: string | null;
  octagonDebut: string;
  status?: string | null;


  constructor(
    id: string,
    firstName: string,
    lastName: string,
    nickname: string,
    category: string,
    age: number,
    height: number,
    weight: number,
    wins: number,
    losses: number,
    draws: number,
    imageUrl: string,
    octagonDebut: string,
    placeOfBirth?: string | null,
    trainsAt?: string | null,
    fightingStyle?: string | null,
    status?: string | null,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickname = nickname;
    this.category = category;
    this.placeOfBirth = placeOfBirth || null;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.wins = wins;
    this.losses = losses;
    this.draws = draws;
    this.imageUrl = imageUrl;
    this.trainsAt = trainsAt || null;
    this.fightingStyle = fightingStyle || null;
    this.octagonDebut = octagonDebut;
    this.status = status || null;
  }
}


// data class Fighter(
//   val id: String,
//   val firstName: String,
//   val lastName: String,
//   val nickname: String,
//   val category: String,
//   val placeOfBirth: String? = null,
//   val age: Int,
//   val height: Double,
//   val weight: Double,
//   val wins: Int,
//   val losses: Int,
//   val draws: Int,
//   val imageUrl: String,
//   val trainsAt: String? = null,
//   val fightingStyle: String? = null,
//   val octagonDebut: String,
//   val status: String? = null
// )