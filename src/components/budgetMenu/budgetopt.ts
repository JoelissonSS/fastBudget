interface AccommodationTypes {
  [key: string]: string[];
}
export default function handleaccommodation(accommodation: string): string[] {
  const accommodationOpt: AccommodationTypes = {
    'Suíte Master': [
      'Frigo bar',
      'Ar condicionado',
      'Ventilador',
      'Banheiro privado',
      'Chuveiro quente',
      'Roupa de cama e banho',
      'Sacada/Varanda',
      'Piscina',
      'TV',
    ],
    'Suíte Inter': [
      'Ar condicionado',
      'Ventilador',
      'Banheiro privado',
      'Chuveiro quente',
      'Roupa de cama e banho',
      'Piscina',
      'TV',
    ],
    'Suíte Simples': [
      'Ventilador',
      'Banheiro privado',
      'Chuveiro quente',
      'Roupa de cama e banho',
      'Piscina',
      'TV',
    ],
    'Quarto Simples': [
      'Ventilador',
      'Banheiro Compartilhado',
      'Roupa de cama e banho',
      'Piscina',
    ],
  };

  return accommodationOpt[accommodation];
}