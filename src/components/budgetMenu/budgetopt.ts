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
      'TV',
    ],
    'Suíte Inter': [
      'Ar condicionado',
      'Ventilador',
      'Banheiro privado',
      'Chuveiro quente',
      'Roupa de cama e banho',
      'TV',
    ],
    'Suíte Simples': [
      'Ventilador',
      'Banheiro privado',
      'Chuveiro quente',
      'Roupa de cama e banho',
      'TV',
    ],
    'Quarto Simples': [
      'Ventilador',
      'Banheiro Compartilhado',
      'Roupa de cama e banho',
    ],
  };

  return accommodationOpt[accommodation];
}