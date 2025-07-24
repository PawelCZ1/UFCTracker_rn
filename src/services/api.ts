import { Fighter } from '~/models/Fighter';

const OCTAGON_API_BASE_URL = 'https://api.octagon-api.com';

export const fetchFighters = async (): Promise<Fighter[]> => {
  try {
    const response = await fetch(`${OCTAGON_API_BASE_URL}/fighters`);
    const data = await response.json();

    return Object.entries(data).map(([key, item]: [string, any]) => new Fighter(
      key,                         // key as an ID
      item.name?.split(' ')[0] || '',
      item.name?.split(' ').slice(1).join(' ') || '',
      item.nickname || '',
      item.category,
      parseInt(item.age),
      parseFloat(item.height),
      parseFloat(item.weight),
      parseInt(item.wins),
      parseInt(item.losses),
      parseInt(item.draws),
      item.imgUrl,
      item.octagonDebut,
      item.placeOfBirth,
      item.trainsAt,
      item.fightingStyle,
      item.status
    ));
  } catch (error) {
    console.error('Error fetching fighters:', error);
    throw error;
  }
};